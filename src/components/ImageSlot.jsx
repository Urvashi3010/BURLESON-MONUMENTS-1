import { getImage } from '../data/images';

/**
 * Renders src/assets/<name>.(jpg|png|webp…) when it exists,
 * otherwise a designed placeholder frame that fills its parent.
 *
 * Props
 *  name      slot name = file name without extension
 *  label     text shown on the placeholder (defaults to a prettified name)
 *  tone      'light' | 'dark'  — pick what suits the surrounding colours
 *  compact   hide icon/text (tiny slots such as the round logo)
 *  fallback  custom node shown inside the placeholder (e.g. a monogram)
 *  optional  render nothing when the file is missing (decorative images)
 */
export default function ImageSlot({
  name,
  alt = '',
  label,
  tone = 'light',
  compact = false,
  fallback = null,
  optional = false,
  className = '',
  imgProps = {},
}) {
  const src = getImage(name);

  if (src) {
    return <img className={`slot-img ${className}`} src={src} alt={alt} loading="lazy" draggable={false} {...imgProps} />;
  }
  if (optional) return null;

  const text = label || name.replace(/[-_]/g, ' ');

  return (
    <div
      className={`slot slot--${tone} ${compact ? 'slot--compact' : ''} ${className}`}
      role="img"
      aria-label={alt || text}
      data-slot={name}
    >
      <span className="slot__corner slot__corner--tl" />
      <span className="slot__corner slot__corner--tr" />
      <span className="slot__corner slot__corner--bl" />
      <span className="slot__corner slot__corner--br" />
      {fallback ? (
        fallback
      ) : (
        !compact && (
          <span className="slot__body">
            <svg className="slot__icon" viewBox="0 0 48 48" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
              <path d="M14 42V19a10 10 0 0 1 20 0v23z" />
              <path d="M8 42h32" />
              <path d="M24 16v10M19.5 21h9" />
            </svg>
            <span className="slot__label">{text}</span>
            <span className="slot__hint">src/assets/{name}.jpg</span>
          </span>
        )
      )}
    </div>
  );
}
