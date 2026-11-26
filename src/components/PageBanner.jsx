import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { business } from '../data/siteData';

/** Gold line–diamond–line divider used between sections on inner pages. */
export function Ornament({ className = '' }) {
  return (
    <div className={`ornament ${className}`} aria-hidden="true">
      <i />
      <b />
      <i />
    </div>
  );
}

/* ---------- Decorative elements, one treatment per page ---------- */
function Decor({ variant }) {
  if (variant === 'about') {
    return (
      <span className="hero-decor hero-decor--year" aria-hidden="true">
        1970
      </span>
    );
  }
  if (variant === 'memorials') {
    return (
      <svg className="hero-decor hero-decor--stones" viewBox="0 0 420 220" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 210V92a42 42 0 0 1 84 0v118z" />
        <path d="M62 78v34M45 94h34" />
        <path d="M130 210V60a56 56 0 0 1 112 0v150z" />
        <path d="M186 40v44M164 62h44" />
        <path d="M268 210V110a36 36 0 0 1 72 0v100z" />
        <path d="M352 210v-70h58v70z" />
        <path d="M4 210h416" />
      </svg>
    );
  }
  if (variant === 'testimonials') {
    return (
      <span className="hero-decor hero-decor--quote" aria-hidden="true">
        “
      </span>
    );
  }
  return null;
}

/* ---------- Right-hand content for the pages that have it ---------- */
function Aside({ variant }) {
  if (variant === 'contact') {
    return (
      <motion.div
        className="hero-contact"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a href={business.phones.tollFree.href}>
          <small>Toll Free</small>
          <b>{business.phones.tollFree.display}</b>
        </a>
        <a href={business.phones.office.href}>
          <small>Office</small>
          <b>{business.phones.office.display}</b>
        </a>
        <a href={`mailto:${business.email}`}>
          <small>Email</small>
          <b>{business.email}</b>
        </a>
      </motion.div>
    );
  }
  return null;
}

const HAS_ASIDE = ['contact'];

/**
 * Banner for inner pages. `variant` gives each page its own look:
 * about | ordering | memorials | testimonials | contact
 */
export default function PageBanner({ variant = 'about', crumb, eyebrow, title, children }) {
  const centered = variant === 'testimonials';
  const aside = HAS_ASIDE.includes(variant);

  return (
    <section className={`page-hero page-hero--${variant}`}>
      <span className="page-hero__lattice" aria-hidden="true" />
      <span className="page-hero__frame" aria-hidden="true" />
      <Decor variant={variant} />

      <div className={`container page-hero__inner ${aside ? 'has-aside' : ''}`}>
        <div className="page-hero__main">
          <motion.nav
            className="crumbs"
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/">Home</Link>
            <span>/</span>
            <b>{crumb || eyebrow}</b>
          </motion.nav>
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, filter: 'blur(12px)', y: 16 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {title}
          </motion.h1>
          {children && (
            <motion.div
              className="page-hero__text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.7 }}
            >
              {children}
            </motion.div>
          )}
          <Ornament className={centered ? 'ornament--center' : 'ornament--left'} />
        </div>
        <Aside variant={variant} />
      </div>
    </section>
  );
}
