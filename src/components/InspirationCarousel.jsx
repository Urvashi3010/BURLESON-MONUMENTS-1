import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { inspiration } from '../data/siteData';
import { Reveal } from './Reveal.jsx';
import ImageSlot from './ImageSlot.jsx';

const N = inspiration.length;

/** Shortest signed circular distance from `active` to `i`. */
const offsetOf = (i, active) => {
  let d = i - active;
  if (d > N / 2) d -= N;
  if (d < -N / 2) d += N;
  return d;
};

export default function InspirationCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef(null);

  const go = useCallback((dir) => setActive((a) => (a + dir + N) % N), []);

  // Gentle autoplay (pauses on hover / focus)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 5200);
    return () => clearInterval(t);
  }, [paused, go]);

  const onKey = (e) => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
  };

  const current = inspiration[active];

  return (
    <section className="section section--navy inspo" id="inspiration">
      <div className="inspo__glow" />
      <div className="container">
        <Reveal variant="blur" className="inspo__head">
          <p className="eyebrow">Design Gallery</p>
          <h2 className="h-lg">Headstone Design Inspiration</h2>
          <p className="lead inspo__lead">
            Browse a selection of granite and bronze designs from our catalog, then call us to make one your own.
          </p>
        </Reveal>
      </div>

      <div
        className="inspo__stage"
        ref={wrapRef}
        tabIndex={0}
        onKeyDown={onKey}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-roledescription="carousel"
        aria-label="Headstone design inspiration"
      >
        {inspiration.map((s, i) => {
          const o = offsetOf(i, active);
          const abs = Math.abs(o);
          const visible = abs <= 2;
          return (
            <motion.button
              key={s.code}
              type="button"
              className={`inspo__slide ${o === 0 ? 'is-center' : ''}`}
              onClick={() => o !== 0 && setActive(i)}
              aria-label={o === 0 ? s.title : `Show ${s.title}`}
              tabIndex={visible ? 0 : -1}
              animate={{
                x: `${o * 74}%`,
                scale: o === 0 ? 1 : abs === 1 ? 0.8 : 0.62,
                rotateY: o === 0 ? 0 : o > 0 ? -14 : 14,
                opacity: abs === 0 ? 1 : abs === 1 ? 0.72 : abs === 2 ? 0.28 : 0,
                filter: o === 0 ? 'blur(0px)' : `blur(${abs * 1.8}px)`,
                zIndex: 10 - abs,
              }}
              transition={{ type: 'spring', stiffness: 130, damping: 22, mass: 0.9 }}
              style={{ pointerEvents: visible ? 'auto' : 'none' }}
              drag={o === 0 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.25}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) go(1);
                else if (info.offset.x > 70) go(-1);
              }}
            >
              <span className="inspo__frame">
                <ImageSlot name={s.image} alt={s.title} label={s.title} />
                <span className="inspo__corner inspo__corner--tl" />
                <span className="inspo__corner inspo__corner--br" />
              </span>
            </motion.button>
          );
        })}

        <button className="inspo__arrow inspo__arrow--prev" onClick={() => go(-1)} aria-label="Previous design">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
        <button className="inspo__arrow inspo__arrow--next" onClick={() => go(1)} aria-label="Next design">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>
      </div>

      <div className="container inspo__meta">
        <motion.div
          key={current.code}
          initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
          className="inspo__caption"
        >
          <small>
            {String(active + 1).padStart(2, '0')} / {String(N).padStart(2, '0')} · Design {current.code}
          </small>
          <h3>{current.title}</h3>
          <Link to={`/memorials/${current.slug}`} className="inspo__more">
            View this category →
          </Link>
        </motion.div>

        <div className="inspo__dots" role="tablist" aria-label="Choose design">
          {inspiration.map((s, i) => (
            <button
              key={s.code}
              role="tab"
              aria-selected={i === active}
              aria-label={s.title}
              className={i === active ? 'is-active' : ''}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
