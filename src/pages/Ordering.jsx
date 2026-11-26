import Reveal, { Stagger, StaggerItem } from '../components/Reveal.jsx';
import PageBanner, { Ornament } from '../components/PageBanner.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { business, orderingSteps, orderingGuarantees } from '../data/siteData';

export default function Ordering() {
  return (
    <>
      <PageBanner variant="ordering" eyebrow="Ordering / Prices" crumb="Ordering / Prices" title="How to order a headstone or monument">
        <p>
          Burleson Monument’s staff understands this is a difficult task. We guarantee NO High Pressure Sales and we
          will aid you in the selection and the ordering process.
        </p>
      </PageBanner>

      <section className="section">
        <div className="container order__grid">
          <div>
            <Reveal variant="slideRight">
              <p className="eyebrow">Ordering Process</p>
              <h2 className="h-lg h-ruled">Please provide the following with your order</h2>
            </Reveal>

            <Stagger className="order__steps" gap={0.14}>
              {orderingSteps.map((s) => (
                <StaggerItem key={s.n} variant="slideLeft" className="order__step">
                  <span>{s.n}</span>
                  <div>
                    <h3>{s.title}</h3>
                    {s.note && <small>({s.note})</small>}
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal variant="blur" delay={0.1} className="order__extras">
              <h4>Other available options with most memorials</h4>
              <ul>
                <li>Flower Vase</li>
                <li>Memorial Portrait</li>
              </ul>
            </Reveal>

            <Reveal variant="zoom" className="order__price">
              <p>Granite prices fluctuate annually, please contact our staff for a quote.</p>
              <p>
                For additional information or to place an order please call{' '}
                <a href={business.phones.tollFree.href}>{business.phones.tollFree.display}</a>
              </p>
            </Reveal>
          </div>

          <Reveal variant="clipRight" duration={1.3} className="order__img">
            <div className="frame frame--tall">
              <ImageSlot name="ordering-main" label="Ordering photo" alt="Burleson Monuments memorial consultation" />
            </div>
          </Reveal>
        </div>
      </section>

      <Ornament />

      <section className="section section--navy">
        <div className="container">
          <Reveal variant="blur">
            <p className="eyebrow">Get the Service You Deserve</p>
            <h2 className="h-lg h-ruled">With Burleson Monuments</h2>
          </Reveal>
          <Stagger className="order__guarantees" gap={0.1}>
            {orderingGuarantees.map((g) => (
              <StaggerItem key={g} variant="fadeUp" className="order__guar">
                <i />
                <p>{g}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
