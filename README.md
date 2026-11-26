# Burleson Monuments — Website Redesign (React + Vite)

## Run it
```bash
npm install
npm run dev
```

## Adding your own images (no code changes)
Every picture is an image slot. A slot shows a navy/gold placeholder frame until a file with the
**same name** exists in `src/assets/`. Drop the file in and Vite reloads automatically.
Accepted: jpg, jpeg, png, webp, avif, svg (names are not case-sensitive).

| File name | Where it appears |
|---|---|
| `hero` | Homepage hero background (wide) |
| `hero-card-a`, `hero-card-b` | Two floating hero cards (about 4:5) |
| `logo` | Round logo in navbar (square) |
| `dove` | Optional faint watermark in the call-to-action band |
| `craft-1`, `craft-2`, `craft-3` | Homepage craftsmanship collage |
| `about-main` | About page photo (4:5) |
| `ordering-main` | Ordering page photo (4:5) |
| `inspiration-1` … `inspiration-8` | Headstone Design Inspiration carousel (4:5) |
| `badge-bbb`, `badge-burleson-chamber`, `badge-nfib`, `badge-us-chamber` | Footer affiliation badges |
| `<category-slug>` | Category card, round option chip and category page (list below) |
| `gallery-<category-slug>-1` … `-4` | Four extra photos on each category page (viewer shows 5 with the main `<category-slug>` image) |

Category slugs:
- `single-markers-granite.jpg`
- `companion-markers-granite.jpg`
- `single-markers-bronze.jpg`
- `companion-markers-bronze.jpg`
- `double-interment-markers.jpg`
- `single-monuments.jpg`
- `companion-monuments.jpg`
- `premium-monuments.jpg`
- `child-memorials.jpg`
- `single-slant-memorials.jpg`
- `companion-slant-memorials.jpg`
- `cremation-memorials.jpg`
- `memorial-benches.jpg`
- `laser-etching.jpg`
- `bronze-plaques.jpg`
- `granite-colors.jpg`
- `memorial-photos.jpg`
- `flower-vases.jpg`
- `inscriptions.jpg`
- `pet-memorials.jpg`

## Where to change things
| What | File |
|---|---|
| Navy / gold / greys | `src/styles/variables.css` |
| Phone, email, address, hours, categories, testimonials | `src/data/siteData.js` |
| Placeholder look | `src/styles/slots.css` |
| Reveal / scroll animation logic and fail-safes | `src/components/Reveal.jsx` |

## Colours
All colours live in `src/styles/variables.css` (hex values plus matching RGB triplets used for
soft shadows and glows). Nothing else in the project hard-codes a colour.

## Refresh / direct URLs
The app uses BrowserRouter, so the server must answer every path with `index.html`.
- `npm run dev` and `npm run preview` do this automatically (`appType: 'spa'` in `vite.config.js`).
- For a built site (`npm run build` -> `dist/`), the fallback files are included:
  `public/_redirects` (Netlify / Cloudflare Pages), `vercel.json` (Vercel),
  `public/.htaccess` (Apache), `public/web.config` (IIS).
- Do NOT open `dist/index.html` by double-clicking, and do not use a plain static server
  (VS Code Live Server, `python -m http.server`) for `dist/` — they have no fallback. Use
  `npm run preview` instead.

## Notes on this revision
- Page transitions are a pure CSS fade (no overlay/curtain, no AnimatePresence around routes), so every route renders immediately on nav click, direct URL and refresh. SPA fallbacks for hosts: `public/_redirects`, `vercel.json`, `public/.htaccess`, `public/web.config`.
- Home "Design Categories" shows 13 aligned tiles; option categories appear as round chips (Inscriptions is reachable via the sidebar only).
