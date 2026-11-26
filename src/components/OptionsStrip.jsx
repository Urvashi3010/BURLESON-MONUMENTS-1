import { Link } from 'react-router-dom';
import { Stagger, StaggerItem } from './Reveal.jsx';
import { getCategory } from '../data/siteData';
import ImageSlot from './ImageSlot.jsx';

/** Option / accessory categories shown as round chips (Inscriptions intentionally not shown here). */
const slugs = ['laser-etching', 'bronze-plaques', 'granite-colors', 'memorial-photos', 'flower-vases', 'pet-memorials'];

export default function OptionsStrip() {
  return (
    <div className="options">
      <div className="options__head">
        <h3>Options &amp; Accessories</h3>
      </div>
      <Stagger as="ul" className="options__row" gap={0.09}>
        {slugs.map((s) => {
          const c = getCategory(s);
          return (
            <StaggerItem as="li" key={s} variant="zoom" className="chip">
              <Link to={`/memorials/${c.slug}`}>
                <span className="chip__img">
                  <ImageSlot
                    name={c.slug}
                    alt={c.name}
                    label={c.name}
                    tone="dark"
                    compact
                    fallback={<span className="chip__num">{String(c.n).padStart(2, '0')}</span>}
                  />
                </span>
                <span className="chip__label">{c.name}</span>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </div>
  );
}
