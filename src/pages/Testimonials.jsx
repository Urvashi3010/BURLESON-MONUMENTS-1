import Reveal, { Stagger, StaggerItem } from '../components/Reveal.jsx';
import PageBanner, { Ornament } from '../components/PageBanner.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { testimonials } from '../data/siteData';

export default function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <>
      <PageBanner variant="testimonials" eyebrow="Testimonials" crumb="Testimonials" title="In the words of our families">
        <p>Real words from families we have had the privilege to serve.</p>
      </PageBanner>

      <section className="section">
        <div className="container">
          <Reveal variant="blur" className="tfeature">
            <span className="tfeature__mark" aria-hidden="true">“</span>
            <h2>{featured.title}</h2>
            <p>{featured.quote}</p>
            <footer>
              <b>{featured.name}</b>
              <span>{featured.place}</span>
            </footer>
          </Reveal>

          <Ornament className="ornament--spaced" />

          <Stagger className="tcards" gap={0.14}>
            {rest.map((t, i) => (
              <StaggerItem key={t.name + i} variant={i % 2 ? 'blur' : 'fadeUp'} className="tcard">
                <span className="tcard__mark" aria-hidden="true">“</span>
                <h3>{t.title}</h3>
                <p>{t.quote}</p>
                <footer>
                  <b>{t.name}</b>
                  <span>{t.place}</span>
                </footer>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
