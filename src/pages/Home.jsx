import Hero from '../components/Hero.jsx';
import MemorialSidebar from '../components/MemorialSidebar.jsx';
import ProductMosaic from '../components/ProductMosaic.jsx';
import OptionsStrip from '../components/OptionsStrip.jsx';
import InspirationCarousel from '../components/InspirationCarousel.jsx';
import Craftsmanship from '../components/Craftsmanship.jsx';
import WhyTrust from '../components/WhyTrust.jsx';
import TestimonialSlider from '../components/TestimonialSlider.jsx';
import CtaBand from '../components/CtaBand.jsx';
import Reveal from '../components/Reveal.jsx';
import { business } from '../data/siteData';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section memorials" id="memorials">
        <div className="container">
          <Reveal variant="blur" className="memorials__head">
            <p className="eyebrow">Memorials</p>
            <h2 className="h-lg">Granite &amp; bronze, single &amp; companion</h2>
            <p className="lead">
              {business.name} offers a large selection of cemetery headstones, monuments, bronze grave markers,
              memorial benches, and memorial accessories at reasonable prices.
            </p>
          </Reveal>

          <div className="memorials__layout">
            <MemorialSidebar />
            <div className="memorials__main">
              <ProductMosaic />
              <OptionsStrip />
            </div>
          </div>
        </div>
      </section>

      <InspirationCarousel />
      <Craftsmanship />
      <WhyTrust />
      <TestimonialSlider />
      <CtaBand />
    </>
  );
}
