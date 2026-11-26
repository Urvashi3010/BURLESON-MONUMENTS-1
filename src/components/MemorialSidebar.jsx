import { NavLink } from 'react-router-dom';
import { Stagger, StaggerItem } from './Reveal.jsx';
import { categories } from '../data/siteData';

/**
 * The original site's numbered "Burleson Monuments Design Categories" list.
 * Sticky on desktop, horizontal chips on mobile.
 */
export default function MemorialSidebar({ title = 'Design Categories' }) {
  return (
    <aside className="sidebar" aria-label="Memorial categories">
      <p className="sidebar__title">
        <span>Burleson Monuments</span>
        {title}
      </p>
      <Stagger as="ul" gap={0.035}>
        {categories.map((c) => (
          <StaggerItem as="li" key={c.slug} variant="slideLeft" duration={0.5}>
            <NavLink to={`/memorials/${c.slug}`} className={({ isActive }) => (isActive ? 'active' : '')}>
              <b>{String(c.n).padStart(2, '0')}</b>
              <span>{c.name}</span>
            </NavLink>
          </StaggerItem>
        ))}
      </Stagger>
    </aside>
  );
}
