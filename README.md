# ww382.github.io

Wensi Wu's personal/academic website, hosted on GitHub Pages at
[ww382.github.io](https://ww382.github.io).

## Structure

Plain static HTML/CSS/JS (Bootstrap/MDB) — no build step or templating
engine. A `.nojekyll` file at the repo root tells GitHub Pages to serve the
files as-is.

- `index.html` — home page
- `about_me/`, `cv/`, `publications/` — site sections
- `assets/` — CSS, JS, images, fonts, PDFs

## Local preview

Since there's no build step, any static file server works, e.g.:

```bash
python3 -m http.server
```

Then open `http://localhost:8000`.

## Deploying

Push to `master` — GitHub Pages serves directly from it.
