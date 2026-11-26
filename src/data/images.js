/**
 * IMAGE LOOKUP — drop-in replacement for placeholders.
 *
 * Every picture on the site is an <ImageSlot name="..."/>. A slot shows a styled
 * placeholder frame until a file with the SAME NAME exists in src/assets/.
 *
 *   src/assets/hero.jpg                      -> fills the hero
 *   src/assets/single-markers-granite.jpg    -> fills that category
 *   src/assets/inspiration-3.webp            -> 3rd carousel slide
 *
 * Supported: jpg, jpeg, png, webp, avif, svg. Names are not case-sensitive.
 * No code changes needed — just add the file (Vite reloads automatically).
 */
const files = import.meta.glob('../assets/*.{jpg,jpeg,png,webp,avif,svg,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const byName = {};
for (const [path, url] of Object.entries(files)) {
  const stem = path
    .split('/')
    .pop()
    .replace(/\.[^.]+$/, '')
    .toLowerCase();
  byName[stem] = url;
}

export const getImage = (name) => (name ? byName[String(name).toLowerCase()] || null : null);

/** Every slot name used on the site, with a human description (also listed in README). */
export const SLOT_NOTES = {
  hero: 'Homepage hero background (wide, landscape)',
  'hero-card-a': 'Hero floating card, tall (about 4:5)',
  'hero-card-b': 'Hero floating card, tall (about 4:5)',
  logo: 'Round logo in the navbar (square, transparent PNG is best)',
  dove: 'Optional faint watermark in the call-to-action band',
  'craft-1': 'Craftsmanship collage — large',
  'craft-2': 'Craftsmanship collage — medium',
  'craft-3': 'Craftsmanship collage — small',
  'about-main': 'About page main photo (4:5)',
  'ordering-main': 'Ordering page main photo (4:5)',
  'badge-bbb': 'Footer affiliation badge: BBB',
  'badge-burleson-chamber': 'Footer affiliation badge: Burleson Chamber',
  'badge-nfib': 'Footer affiliation badge: NFIB',
  'badge-us-chamber': 'Footer affiliation badge: U.S. Chamber',
  'inspiration-1…8': 'Headstone Design Inspiration carousel slides (4:5)',
  '<category-slug>': 'One image per memorial category, e.g. single-markers-granite, memorial-benches',
  'gallery-<category-slug>-1…3': 'Optional extra photos on each category page',
};

/**
 * Trusted Affiliations logos — the ORIGINAL hosted images (kept as they were).
 * A local file in src/assets named badge-bbb / badge-burleson-chamber / badge-nfib /
 * badge-us-chamber takes priority if you add one.
 */
const ORIGINAL = 'https://burlesonmonuments.com';
export const AFFILIATION_LOGOS = {
  'badge-bbb': `${ORIGINAL}/titlefreeBBBlogoiconintledotcome.jpg`,
  'badge-burleson-chamber': `${ORIGINAL}/cemetery/WEBSITE-Burleson%20Chamber.jpg`,
  'badge-nfib': `${ORIGINAL}/cemetery/WEBSITE-NFIB.jpg`,
  'badge-us-chamber': `${ORIGINAL}/cemetery/WEBSITE-US%20Chamber.jpg`,
};
