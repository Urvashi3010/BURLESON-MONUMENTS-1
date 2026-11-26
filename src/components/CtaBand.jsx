import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { business } from '../data/siteData';
import ImageSlot from './ImageSlot.jsx';

export default function CtaBand() {
  return (
    <section className="cta">
      <div className="cta__dove" aria-hidden="true">
        <ImageSlot name="dove" optional />
      </div>
      <div className="container cta__inner">
        <Reveal variant="zoom" duration={1}>
          <p className="eyebrow">Questions?</p>
          <h2>Contact Us for Answers Today!</h2>
          <div className="cta__phones">
            <a href={business.phones.tollFree.href}>{business.phones.tollFree.display}</a>
            <span>or</span>
            <a href={business.phones.office.href}>{business.phones.office.display}</a>
          </div>
          <p className="cta__note">
            For additional information or to place an order please call. Our memorial consultants are standing by
            to answer your questions and guide you through the design and ordering process.
          </p>
          <Link to="/contact" className="btn btn--gold">
            Contact Us <span className="arrow">→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
