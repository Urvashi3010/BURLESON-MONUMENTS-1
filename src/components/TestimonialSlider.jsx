import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/siteData';
import Reveal from './Reveal.jsx';

export default function TestimonialSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const N = testimonials.length;
  const t = testimonials[i];

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setI((v) => (v + 1) % N), 7000);
    return () => clearInterval(id);
  }, [paused, N]);

  return (
    <section className="section section--navy testi" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <span className="testi__mark" aria-hidden="true">“</span>
      <div className="container testi__inner">
        <Reveal variant="blur">
          <p className="eyebrow">Customer Testimonials</p>
          <h2 className="h-lg">In the words of our families</h2>
        </Reveal>

        <div className="testi__stage">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, filter: 'blur(14px)', y: 20 }}
              animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
              exit={{ opacity: 0, filter: 'blur(14px)', y: -20 }}
              transition={{ duration: 0.7 }}
            >
              <h3>{t.title}</h3>
              <p>“{t.quote}”</p>
              <footer>
                <b>{t.name}</b>
                <span>{t.place}</span>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div className="testi__controls">
          <button onClick={() => setI((i - 1 + N) % N)} aria-label="Previous testimonial">←</button>
          <div className="testi__dots">
            {testimonials.map((_, k) => (
              <button key={k} className={k === i ? 'is-active' : ''} onClick={() => setI(k)} aria-label={`Testimonial ${k + 1}`} />
            ))}
          </div>
          <button onClick={() => setI((i + 1) % N)} aria-label="Next testimonial">→</button>
        </div>

        <Link to="/testimonials" className="testi__all">Read all testimonials →</Link>
      </div>
    </section>
  );
}
