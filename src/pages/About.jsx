import { Link } from 'react-router-dom';
import Reveal, { Stagger, StaggerItem } from '../components/Reveal.jsx';
import PageBanner, { Ornament } from '../components/PageBanner.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { business, promises } from '../data/siteData';

/** Only facts stated on the original site — no invented dates. */
const timeline = [
  { tag: '1970', title: 'Founded in Burleson, Texas', text: 'We have designed and produced headstones and monuments for our Burleson, Texas customers since 1970.' },
  { tag: 'Family', title: 'Second & third generation', text: 'Burleson Monuments is owned and operated by second and third generation memorial designers and craftsmen.' },
  { tag: 'Region', title: 'Dallas-Fort Worth & North Texas', text: 'We serve the cemeteries of North Central Texas, from Burleson and Crowley to Dallas, Plano and Weatherford.' },
  { tag: 'Beyond', title: 'Shipped across the United States', text: 'We also ship memorials to any cemetery in the United States.' },
];

const craftDetails = [
  { n: '01', title: 'Granite, marble & bronze', text: 'Our memorials are created by skilled craftsmen with many years of experience in the monument industry.' },
  { n: '02', title: 'Custom design & engraving', text: 'Choose custom design and engraving, or select from our extensive selection of stock designs.' },
  { n: '03', title: 'Cemetery-ready', text: 'We design and produce memorials that comply with area cemetery regulations, and we prepare the cemetery documents for you.' },
];

export default function About() {
  return (
    <>
      <PageBanner variant="about" eyebrow="About Us" crumb="About Us" title="A Texas family business, since 1970.">
        <p>{business.tagline}</p>
      </PageBanner>

      <section className="section">
        <div className="container about__grid">
          <Reveal variant="clipLeft" duration={1.3} className="about__img">
            <div className="frame frame--tall">
              <ImageSlot name="about-main" label="About Us photo" alt="Burleson Monuments" />
            </div>
          </Reveal>
          <div>
            <Reveal variant="slideRight">
              <p className="eyebrow">Our Story</p>
              <h2 className="h-lg h-ruled">Guiding families through the entire memorial process</h2>
            </Reveal>
            <Reveal variant="blur" delay={0.1}>
              <p className="lead">
                At Burleson Monuments our family is prepared to guide you through the entire memorial process.
                Our memorial consultants are standing by to answer your questions and guide you through the design
                and ordering process.
              </p>
              <p>
                The memorial consultants at Burleson Monuments understand that ordering a memorial can be a
                stressful experience. We make every effort to provide information and design assistance without
                sales pressure. Most of our memorial consultants are second or third generation in the monument
                business. We are pleased to offer our experience to help you design a beautiful memorial for your
                loved one.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Ornament />

      <section className="section section--light">
        <div className="container">
          <Reveal variant="blur" className="center-head">
            <p className="eyebrow eyebrow--center">Our Journey</p>
            <h2 className="h-lg h-ruled h-ruled--center">Five decades of service</h2>
          </Reveal>
          <Stagger className="timeline" gap={0.18}>
            {timeline.map((t, i) => (
              <StaggerItem key={t.title} variant={i % 2 ? 'slideRight' : 'slideLeft'} className="timeline__item">
                <span className="timeline__tag">{t.tag}</span>
                <span className="timeline__dot" />
                <div className="timeline__card">
                  <h3>{t.title}</h3>
                  <p>{t.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal variant="blur" className="center-head">
            <p className="eyebrow eyebrow--center">Our Craftsmanship</p>
            <h2 className="h-lg h-ruled h-ruled--center">Beautiful and durable</h2>
          </Reveal>
          <Stagger className="craftcards" gap={0.14}>
            {craftDetails.map((c) => (
              <StaggerItem key={c.n} variant="fadeUp" className="craftcard">
                <span className="craftcard__n">{c.n}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container">
          <Reveal variant="blur" className="center-head">
            <p className="eyebrow eyebrow--center">Our Commitment</p>
            <h2 className="h-lg h-ruled h-ruled--center">What you can expect from us</h2>
          </Reveal>
          <Stagger className="trust__grid trust__grid--dark" gap={0.15}>
            {promises.map((p, i) => (
              <StaggerItem key={p.title} variant="fadeUp" className="trust__card">
                <span className="trust__num">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="section">
        <div className="container about__area">
          <Reveal variant="blur">
            <p className="eyebrow eyebrow--center">Where We Serve</p>
            <p className="lead">{business.serviceArea}</p>
            <Link to="/memorials" className="btn btn--navy">
              Explore Memorials <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
