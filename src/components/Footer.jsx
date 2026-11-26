import { Link } from 'react-router-dom';
import { business, navLinks, affiliations, categories } from '../data/siteData';
import { Reveal } from './Reveal.jsx';
import { useState } from 'react';

function AffiliationLogo({ a }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className="footer__affil-text">{a.name}</span>;
  return <img src={a.img} alt={a.name} loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} />;
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__affil">
        <div className="container">
          <p className="footer__affil-title">Trusted Affiliations</p>
          <ul>
            {affiliations.map((a) => (
              <li key={a.name}>
                <a href={a.href} target="_blank" rel="noreferrer" title={`Burleson Monuments is a member of the ${a.name}`}>
                  <AffiliationLogo a={a} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__grid">
        <Reveal variant="blur" className="footer__col footer__col--brand">
          <h3>{business.name}</h3>
          <p className="footer__legal">{business.legalName}</p>
          <p>{business.tagline}</p>
          <p className="footer__cards">We accept credit cards.</p>
        </Reveal>

        <Reveal variant="blur" delay={0.1} className="footer__col">
          <h4>Visit &amp; Contact</h4>
          <address>
            {business.address.line1}
            <br />
            {business.address.line2}
          </address>
          <ul className="footer__list">
            <li>
              Office: <a href={business.phones.office.href}>{business.phones.office.display}</a>
            </li>
            <li>
              Toll Free: <a href={business.phones.tollFree.href}>{business.phones.tollFree.display}</a>
            </li>
            <li>Fax: {business.phones.fax}</li>
            <li>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          </ul>
        </Reveal>

        <Reveal variant="blur" delay={0.2} className="footer__col">
          <h4>Office Hours</h4>
          <ul className="footer__list footer__hours">
            {business.hours.map((h) => (
              <li key={h.days}>
                <span>{h.days}</span>
                <b>{h.time}</b>
              </li>
            ))}
          </ul>
          <h4 style={{ marginTop: 28 }}>Explore</h4>
          <ul className="footer__list">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal variant="blur" delay={0.3} className="footer__col">
          <h4>Memorials</h4>
          <ul className="footer__list footer__list--two">
            {categories.slice(0, 13).map((c) => (
              <li key={c.slug}>
                <Link to={`/memorials/${c.slug}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="container footer__area">
        <p>{business.serviceArea}</p>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <span>
            © {new Date().getFullYear()} {business.legalName}
          </span>
          <span>Headstones · Monuments · Grave Markers · Cemetery Benches · Since 1970</span>
        </div>
      </div>
    </footer>
  );
}
