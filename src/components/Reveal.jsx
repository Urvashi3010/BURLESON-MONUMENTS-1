import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/** Entrance styles — each section can pick a different one. */
const variants = {
  fadeUp: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } },
  blur: { hidden: { opacity: 0, filter: 'blur(14px)', y: 14 }, show: { opacity: 1, filter: 'blur(0px)', y: 0 } },
  slideLeft: { hidden: { opacity: 0, x: -70 }, show: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: 70 }, show: { opacity: 1, x: 0 } },
  clipUp: { hidden: { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.08 }, show: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 } },
  clipLeft: { hidden: { clipPath: 'inset(0% 100% 0% 0%)', scale: 1.08 }, show: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 } },
  clipRight: { hidden: { clipPath: 'inset(0% 0% 0% 100%)', scale: 1.08 }, show: { clipPath: 'inset(0% 0% 0% 0%)', scale: 1 } },
  zoom: { hidden: { opacity: 0, scale: 0.88 }, show: { opacity: 1, scale: 1 } },
};

/**
 * Decides WHEN something should reveal. Deliberately NOT framer's whileInView:
 *
 *  - The observed element is always a plain wrapper that is never clipped, scaled
 *    or faded. (Browsers can treat a fully clip-path'd element as "not intersecting",
 *    which would leave it hidden forever.)
 *  - Two independent triggers: IntersectionObserver + a scroll/resize position check.
 *  - Fail-safes: anything already on screen after 1.5s / 4s is revealed regardless,
 *    and reduced-motion / missing IntersectionObserver reveals immediately.
 */
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      setShown(true);
      return undefined;
    }

    let done = false;
    let io;
    const timers = [];

    const cleanup = () => {
      io?.disconnect();
      timers.forEach(clearTimeout);
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    };
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
      cleanup();
    };
    const onScreen = (ratio) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight * ratio && r.bottom > 0;
    };
    function check() {
      if (onScreen(0.92)) show();
    }

    io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) show();
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);

    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
    timers.push(setTimeout(() => onScreen(1) && show(), 1500));
    timers.push(setTimeout(() => onScreen(1) && show(), 4000));

    return cleanup;
  }, []);

  return [ref, shown];
}

/**
 * <Reveal> = plain wrapper (observed, carries your layout className)
 *            + inner motion element (carries the animation).
 */
export function Reveal({ variant = 'fadeUp', delay = 0, duration = 0.9, as: Tag = 'div', className = '', style, children, ...rest }) {
  const [ref, shown] = useReveal();
  return (
    <Tag ref={ref} className={className} style={style}>
      <motion.div
        style={{ height: '100%' }}
        variants={variants[variant]}
        initial="hidden"
        animate={shown ? 'show' : 'hidden'}
        transition={{ duration, delay, ease: EASE }}
        {...rest}
      >
        {children}
      </motion.div>
    </Tag>
  );
}

/** Parent that staggers its <StaggerItem> children once it scrolls into view. */
export function Stagger({ children, className = '', gap = 0.12, delay = 0, as = 'div', ...rest }) {
  const [ref, shown] = useReveal();
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      ref={ref}
      className={className}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      initial="hidden"
      animate={shown ? 'show' : 'hidden'}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({ variant = 'fadeUp', as = 'div', children, className = '', style, duration = 0.8, ...rest }) {
  const Comp = motion[as] || motion.div;
  return (
    <Comp
      className={className}
      style={style}
      variants={{
        hidden: variants[variant].hidden,
        show: { ...variants[variant].show, transition: { duration, ease: EASE } },
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}

export default Reveal;
