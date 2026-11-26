import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import PageBanner from '../components/PageBanner.jsx';
import { business } from '../data/siteData';

const initial = { name: '', subject: '', email: '', phone: '', source: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // No backend: opens the visitor's email app addressed to the real business email.
  const submit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `E-mail: ${form.email}`,
      `Phone: ${form.phone}`,
      `How did you find us?: ${form.source}`,
      '',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
      form.subject || 'Website inquiry'
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageBanner variant="contact" eyebrow="Contact Us" crumb="Contact Us" title="Contact us for answers today">
        <p>
          {business.phones.tollFree.display} · {business.phones.office.display}
        </p>
      </PageBanner>

      <section className="section">
        <div className="container contact__grid">
          <Reveal variant="slideRight" className="contact__info">
            <h2 className="h-lg">{business.name}</h2>
            <p className="contact__legal">{business.legalName}</p>
            <hr className="gold-rule" />

            <dl>
              <dt><svg className="contact__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>Address</dt>
              <dd>
                {business.address.line1}
                <br />
                {business.address.line2}
              </dd>
              <dt><svg className="contact__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z"/></svg>Office</dt>
              <dd>
                <a href={business.phones.office.href}>{business.phones.office.display}</a>
              </dd>
              <dt><svg className="contact__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1z"/></svg>Toll Free</dt>
              <dd>
                <a href={business.phones.tollFree.href}>{business.phones.tollFree.display}</a>
              </dd>
              <dt><svg className="contact__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M7 8V3h10v5M7 17H4V8h16v9h-3"/><path d="M7 14h10v7H7z"/></svg>Fax</dt>
              <dd>{business.phones.fax}</dd>
              <dt><svg className="contact__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M3 6h18v12H3z"/><path d="M3 7l9 6 9-6"/></svg>Email</dt>
              <dd>
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </dd>
              <dt><svg className="contact__icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Office Hours</dt>
              <dd>
                {business.hours.map((h) => (
                  <span key={h.days} className="contact__hour">
                    {h.days}: <b>{h.time}</b>
                  </span>
                ))}
              </dd>
            </dl>
          </Reveal>

          <Reveal variant="slideLeft" className="contact__form">
            <form onSubmit={submit}>
              <label>
                Name
                <input required value={form.name} onChange={set('name')} />
              </label>
              <label>
                Subject
                <input value={form.subject} onChange={set('subject')} />
              </label>
              <div className="contact__row">
                <label>
                  E-mail
                  <input type="email" required value={form.email} onChange={set('email')} />
                </label>
                <label>
                  Phone
                  <input type="tel" value={form.phone} onChange={set('phone')} />
                </label>
              </div>
              <label>
                How did you find us?
                <input value={form.source} onChange={set('source')} />
              </label>
              <label>
                Message
                <textarea rows="5" required value={form.message} onChange={set('message')} />
              </label>
              <button className="btn btn--navy" type="submit">
                Send Message <span className="arrow">→</span>
              </button>
              {sent && (
                <p className="contact__sent">
                  Your email app should have opened with your message. If it didn’t, please email{' '}
                  <a href={`mailto:${business.email}`}>{business.email}</a> or call {business.phones.tollFree.display}.
                </p>
              )}
            </form>
          </Reveal>
        </div>

        <Reveal variant="clipUp" duration={1.2} className="container contact__map">
          <iframe
            title="Burleson Monuments location map"
            src={business.address.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </section>
    </>
  );
}
