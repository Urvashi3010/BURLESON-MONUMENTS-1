import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import ImageSlot from './ImageSlot.jsx';

export default function Craftsmanship() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const yBig = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [140, -140]);
  const yTiny = useTransform(scrollYProgress, [0, 1], [30, -110]);

  return (
    <section className="section craft" ref={ref}>
      <div className="container craft__grid">
        <div className="craft__images">
          <motion.div className="craft__img craft__img--big" style={{ y: yBig }}>
            <Reveal variant="clipLeft" duration={1.3}>
              <ImageSlot name="craft-1" label="Craftsmanship photo" alt="Memorial craftsmanship" />
            </Reveal>
          </motion.div>
          <motion.div className="craft__img craft__img--small" style={{ y: ySmall }}>
            <Reveal variant="clipUp" duration={1.3} delay={0.2}>
              <ImageSlot name="craft-2" label="Craftsmanship photo" alt="Memorial detail" />
            </Reveal>
          </motion.div>
          <motion.div className="craft__img craft__img--tiny" style={{ y: yTiny }}>
            <Reveal variant="zoom" duration={1.1} delay={0.4}>
              <ImageSlot name="craft-3" label="Detail photo" alt="Memorial detail" />
            </Reveal>
          </motion.div>
          <span className="craft__badge">
            <b>1970</b>
            <small>Serving Texas families</small>
          </span>
        </div>

        <div className="craft__copy">
          <Reveal variant="slideRight">
            <p className="eyebrow">Our Craftsmanship</p>
            <h2 className="h-lg">Designed and made by second &amp; third generation craftsmen.</h2>
            <hr className="gold-rule" />
          </Reveal>
          <Reveal variant="blur" delay={0.15}>
            <p className="lead">
              Our granite, marble and bronze memorials are created by skilled craftsmen with many years of experience
              in the monument industry. We design and produce headstones, monuments, and grave markers in granite and
              bronze that comply with area cemetery regulations — and we prepare the cemetery documents for you.
            </p>
          </Reveal>
          <Reveal variant="blur" delay={0.3}>
            <p className="craft__sub">Personalized Memorials</p>
            <p>
              We offer custom design and engraving for cemetery memorials, or you can choose from our extensive
              selection of stock designs. Browse the numerous designs on our website, then contact our memorial
              design team to begin designing a memorial customized to your specifications.
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.45}>
            <Link to="/ordering" className="btn btn--navy">
              How to Order <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
