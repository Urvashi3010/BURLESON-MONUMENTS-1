import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { business, navLinks } from '../data/siteData';
import ImageSlot from './ImageSlot.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => (document.body.style.overflow = '');
  }, [open]);

  return (
    <>
      <div className="topbar">
        <div className="container topbar__inner">
          <span className="topbar__hours">
            Tue – Fri 10–5 · Sat 10–3 · Closed Sun &amp; Mon
          </span>
          <span className="topbar__phones">
            <a href={business.phones.office.href}>Office: {business.phones.office.display}</a>
            <i />
            <a href={business.phones.tollFree.href}>Toll Free: {business.phones.tollFree.display}</a>
          </span>
        </div>
      </div>

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <nav className="nav container" aria-label="Main">
        <Link to="/" className="brand" aria-label="Burleson Monuments — Home">
          <span className="brand__logo">
            <ImageSlot name="logo" alt="" tone="light" compact fallback={<span className="monogram">B</span>} />
          </span>
          <span className="brand__text">
            <strong>Burleson Monuments</strong>
            <small>Design &amp; Mfg., Inc. · Since 1970</small>
          </span>
        </Link>

        <ul className="nav__links">
          {navLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a className="nav__call" href={business.phones.tollFree.href}>
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path
              fill="currentColor"
              d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z"
            />
          </svg>
          {business.phones.tollFree.display}
        </a>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.6 }}
                >
                  <NavLink to={l.to} end={l.to === '/'}>
                    <span>0{i + 1}</span>
                    {l.label}
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <div className="mobile-menu__foot">
              <a href={business.phones.tollFree.href}>{business.phones.tollFree.display}</a>
              <a href={business.phones.office.href}>{business.phones.office.display}</a>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
