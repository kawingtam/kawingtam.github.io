# Kawing Tam — personal website

A static portfolio for GitHub Pages. Plain HTML, CSS, and JavaScript; no build step or package installation.

## Local preview

From this folder, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Then open http://127.0.0.1:4173. Stop the server with Ctrl+C. Nothing is deployed by starting this preview.

## Theme

The palette uses `#baccea` and `#5c81a7`, with darker blue text and controls for readable contrast.

## Editing

- `index.html`: content, links, inline icons, and the data illustration.
- `styles.css`: typography, color palette, layouts, and responsive styles.
- `script.js`: the data illustration toggle, flashcard flip, and current-section navigation cue.
- `fonts/`: locally hosted DM Sans and DM Serif Display, with their SIL Open Font License files.

There are no external scripts, analytics, or runtime dependencies. Navigation, project details, and contact links work without JavaScript. The two interactive illustrations progressively enhance the page when JavaScript is available. Reduced-motion preferences disable animated transitions and smooth scrolling.

## Content notes

The portfolio focuses on financial analysis, reporting, and process improvement. StudioDiffusion and the bilingual flashcard app showcase additional technical work.

The automation workflow and StudioDiffusion visuals are conceptual illustrations, not application screenshots or measured results. The flashcard is a small portfolio demonstration; the live-app link opens the actual application.

StudioDiffusion contribution notes are included. Add a repository link when a public source is available.

Useful future additions: verified before/after workflow measurements, a short automation case study, and actual StudioDiffusion outputs cleared for public use. Do not add estimated impact numbers as facts.

## Quick review before publishing

```sh
node --check script.js
```

Preview at desktop and phone widths. Check the data toggle, flashcard with Enter and Space, expandable project notes, navigation, and contact links. Check the network console for missing assets. Keep `fonts/` and `favicon.svg` with the three page files when publishing.

The live site is https://kawingtam.github.io/. GitHub Pages publishes the `main` branch.
