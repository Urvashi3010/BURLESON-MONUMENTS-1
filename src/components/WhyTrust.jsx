import { Stagger, StaggerItem } from './Reveal.jsx';
import Reveal from './Reveal.jsx';
import { promises } from '../data/siteData';

const icons = [
  // hand / no pressure
  <path key="0" d="M12 21c-4-3-8-6-8-10a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 11c0 4-4 7-8 10z" />,
  // drawing / document
  <g key="1"><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5M9 13h7M9 17h7" /></g>,
  // cemetery / cross
  <g key="2"><path d="M12 3v18M7 8h10" /><path d="M4 21h16" /></g>,
  // craftsman / chisel
  <g key="3"><path d="M4 20l9-9" /><path d="M13 5l6 6-3 3-6-6z" /></g>,
];

export default function WhyTrust() {
  return (
    <section className="section section--light trust">
      <div className="container">
        <Reveal variant="blur" className="trust__head">
          <p className="eyebrow">Why Families Trust Us</p>
          <h2 className="h-lg">Our commitment to every family</h2>
          <p className="lead">
            The memorial consultants at Burleson Monuments understand that ordering a memorial can be a stressful
            experience. We make every effort to provide information and design assistance without sales pressure.
          </p>
        </Reveal>

        <Stagger className="trust__grid" gap={0.15}>
          {promises.map((p, i) => (
            <StaggerItem key={p.title} variant={i % 2 ? 'slideRight' : 'slideLeft'} className="trust__card">
              <span className="trust__num">0{i + 1}</span>
              <svg viewBox="0 0 24 24" width="38" height="38" fill="none" stroke="currentColor" strokeWidth="1.3">
                {icons[i]}
              </svg>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
