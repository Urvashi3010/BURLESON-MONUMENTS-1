import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Typewriter from './Typewriter.jsx';
import { business } from '../data/siteData';
import ImageSlot from './ImageSlot.jsx';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Different speeds = parallax depth
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '28%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);
  const cardAY = useTransform(scrollYProgress, [0, 1], ['0%', '-45%']);
  const cardBY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToMemorials = () => {
    document.getElementById('memorials')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" ref={ref}>
      <motion.div className="hero__bg" style={{ y: bgY, scale: bgScale }}>
        <ImageSlot name="hero" label="Hero image" tone="dark" alt="" />
      </motion.div>
      <div className="hero__shade" />

      <motion.div className="container hero__inner" style={{ y: textY, opacity: fade }}>
        <div className="hero__copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
          >
            Burleson, Texas · Since {business.founded}
          </motion.p>

          <h1 className="hero__title">
            <Typewriter text="An everlasting expression of devotion and love." speed={52} startDelay={1300} />
          </h1>

          <motion.p
            className="hero__desc"
            initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ delay: 4.2, duration: 1.1 }}
          >
            Beautiful headstones, monuments and grave markers in granite and bronze, serving Dallas-Fort
            Worth and North Texas. Owned and operated by second and third generation memorial designers and
            craftsmen.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.8, duration: 0.9 }}
          >
            <button className="btn btn--gold" onClick={scrollToMemorials}>
              Explore Memorials <span className="arrow">→</span>
            </button>
            <a className="btn btn--ghost" href={business.phones.tollFree.href}>
              Call {business.phones.tollFree.display}
            </a>
          </motion.div>
        </div>

        {/* Floating overlapping product cards — real photos from the original site */}
        <div className="hero__float" aria-hidden="true">
          <motion.figure
            className="hero__card hero__card--a"
            style={{ y: cardAY }}
            initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
            transition={{ delay: 2.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImageSlot name="hero-card-a" label="Featured memorial" />
            <figcaption>Companion Monuments</figcaption>
          </motion.figure>
          <motion.figure
            className="hero__card hero__card--b"
            style={{ y: cardBY }}
            initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0 0%)' }}
            transition={{ delay: 3, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ImageSlot name="hero-card-b" label="Featured memorial" />
            <figcaption>Bronze Markers</figcaption>
          </motion.figure>
        </div>
      </motion.div>

      <motion.div className="hero__scroll" style={{ opacity: fade }}>
        <span>Scroll</span>
        <i />
      </motion.div>
    </section>
  );
}
