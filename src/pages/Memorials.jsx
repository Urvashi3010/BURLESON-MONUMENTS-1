import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import MemorialSidebar from '../components/MemorialSidebar.jsx';
import ProductMosaic from '../components/ProductMosaic.jsx';
import OptionsStrip from '../components/OptionsStrip.jsx';
import PageBanner from '../components/PageBanner.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { business, categories, getCategory } from '../data/siteData';

/** Compact photo viewer: one main photo + a thumbnail strip (5 photos per category). */
function CategoryGallery({ cat, title }) {
  const names = [cat.slug, ...[1, 2, 3, 4].map((n) => `gallery-${cat.slug}-${n}`)];
  const [i, setI] = useState(0);
  const go = (d) => setI((v) => (v + d + names.length) % names.length);

  return (
    <div
      className="cgal"
      tabIndex={0}
      aria-label={`${title} photos`}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1);
        if (e.key === 'ArrowLeft') go(-1);
      }}
    >
      <div className="cgal__main">
        <div className="frame frame--wide cgal__frame" key={i}>
          <ImageSlot name={names[i]} alt={`${title} photo ${i + 1}`} label={i === 0 ? title : `${title} — photo ${i + 1}`} />
        </div>
        {cat.code && i === 0 && <span className="catdetail__code">Design {cat.code}</span>}
        <button type="button" className="cgal__arrow cgal__arrow--prev" onClick={() => go(-1)} aria-label="Previous photo">‹</button>
        <button type="button" className="cgal__arrow cgal__arrow--next" onClick={() => go(1)} aria-label="Next photo">›</button>
        <span className="cgal__count">
          {i + 1} / {names.length}
        </span>
      </div>
      <div className="cgal__thumbs">
        {names.map((n, k) => (
          <button
            type="button"
            key={n}
            className={`cgal__thumb ${k === i ? 'is-active' : ''}`}
            onClick={() => setI(k)}
            aria-label={`Show photo ${k + 1}`}
            aria-current={k === i}
          >
            <ImageSlot name={n} alt="" tone="dark" compact fallback={<span className="cgal__num">{k + 1}</span>} />
          </button>
        ))}
      </div>
    </div>
  );
}

function CategoryDetail({ cat }) {
  const idx = categories.findIndex((c) => c.slug === cat.slug);
  const prev = categories[(idx - 1 + categories.length) % categories.length];
  const next = categories[(idx + 1) % categories.length];
  const title = cat.name.replace('- ', '— ');

  return (
    <motion.div
      className="catdetail"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="catdetail__top">
        <div className="catdetail__img">
          <CategoryGallery key={cat.slug} cat={cat} title={title} />
        </div>

        <div className="catdetail__copy">
          <p className="eyebrow">Category {String(cat.n).padStart(2, '0')}</p>
          <h2 className="h-lg h-ruled">{title}</h2>
          <p className="lead">
            Contact Burleson Monuments for designs, options and a quote on {title}. Granite prices fluctuate
            annually, so please contact our staff for a quote.
          </p>
          <div className="catdetail__actions">
            <a className="btn btn--navy" href={business.phones.tollFree.href}>
              Call {business.phones.tollFree.display}
            </a>
            <Link className="btn btn--ghost btn--ghost-dark" to="/ordering">
              How to Order
            </Link>
          </div>
        </div>
      </div>

      <div className="catdetail__nav">
        <Link to={`/memorials/${prev.slug}`}>← {prev.name}</Link>
        <Link to={`/memorials/${next.slug}`}>{next.name} →</Link>
      </div>
    </motion.div>
  );
}

export default function Memorials() {
  const { slug } = useParams();
  const cat = slug ? getCategory(slug) : null;

  return (
    <>
      <PageBanner
        variant="memorials"
        eyebrow="Memorial Products"
        crumb={cat ? 'Memorials' : 'Memorial Products'}
        title={cat ? cat.name.replace('- ', '— ') : 'Our Memorial Categories'}
      >
        <p>
          Headstones, monuments, grave markers and memorial benches in granite and bronze — single and companion.
        </p>
      </PageBanner>

      <section className="section memorials">
        <div className="container memorials__layout">
          <MemorialSidebar />
          <div className="memorials__main" key={slug || 'all'}>
            {slug && !cat ? (
              <div className="notfound">
                <h2 className="h-lg h-ruled">Category not found</h2>
                <p>
                  Please choose a category from the list, or <Link to="/memorials">view all memorials</Link>.
                </p>
              </div>
            ) : cat ? (
              <CategoryDetail cat={cat} />
            ) : (
              <>
                <ProductMosaic />
                <OptionsStrip />
              </>
            )}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
