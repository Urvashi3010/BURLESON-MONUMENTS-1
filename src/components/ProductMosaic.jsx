import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Stagger, StaggerItem } from './Reveal.jsx';
import { getCategory } from '../data/siteData';
import ImageSlot from './ImageSlot.jsx';

/** 13 monument / marker categories (1-13 of the sidebar). The first is the large feature tile. */
const layout = [
  { slug: 'premium-monuments', cls: 'tile--hero', reveal: 'clipUp' },
  { slug: 'single-markers-granite', reveal: 'clipLeft' },
  { slug: 'companion-markers-granite', reveal: 'clipRight' },
  { slug: 'single-markers-bronze', reveal: 'clipLeft' },
  { slug: 'companion-markers-bronze', reveal: 'clipRight' },
  { slug: 'single-monuments', reveal: 'clipUp' },
  { slug: 'companion-monuments', reveal: 'clipUp' },
  { slug: 'double-interment-markers', reveal: 'clipUp' },
  { slug: 'child-memorials', reveal: 'clipUp' },
  { slug: 'single-slant-memorials', reveal: 'clipUp' },
  { slug: 'companion-slant-memorials', reveal: 'clipUp' },
  { slug: 'cremation-memorials', reveal: 'clipUp' },
  { slug: 'memorial-benches', reveal: 'clipUp' },
];

function Tile({ cat, cls, reveal }) {
  const ref = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 150, damping: 18 });
  const imgX = useSpring(useTransform(mx, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 20 });
  const imgY = useSpring(useTransform(my, [-0.5, 0.5], [12, -12]), { stiffness: 120, damping: 20 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <StaggerItem variant={reveal} className={`tile ${cls || ''}`} duration={1.1}>
      <motion.div
        ref={ref}
        className="tile__tilt"
        style={{ rotateX: rx, rotateY: ry }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <Link to={`/memorials/${cat.slug}`} className="tile__link">
          <motion.div className="tile__media" style={{ x: imgX, y: imgY }}>
            <ImageSlot name={cat.slug} alt={cat.name} label={cat.name} tone="dark" />
          </motion.div>
          <span className="tile__veil" />
          <span className="tile__caption">
            <small>
              {String(cat.n).padStart(2, '0')}
              {cat.code ? ` · ${cat.code}` : ''}
            </small>
            <strong>{cat.name.replace('- ', '— ')}</strong>
            <em>View designs →</em>
          </span>
        </Link>
      </motion.div>
    </StaggerItem>
  );
}

export default function ProductMosaic() {
  return (
    <Stagger className="mosaic" gap={0.14} amount={0.08}>
      {layout.map((l) => (
        <Tile key={l.slug} cat={getCategory(l.slug)} cls={l.cls} reveal={l.reveal} />
      ))}
    </Stagger>
  );
}
