# Jiahe Xi GitHub Pages Site

Static academic homepage for Jiahe Xi, focused on human mobility, activity chains, GeoAI and commercial site selection. Content follows the October 2026 SUAD CV and the supplied general PhD CV.

## Deploy on GitHub Pages

1. Use the GitHub repository `Dachshundog/dachshundog.github.io`.
2. Commit the website files listed below. The root `.gitignore` allows only these website files; local proposals, older CVs, caches and previews are excluded.
3. In GitHub, open `Settings -> Pages`.
4. Set the source to `Deploy from a branch`, select `main`, and choose `/root`.
5. Visit `https://dachshundog.github.io/` after GitHub finishes deployment.

## Files

- `index.html`: homepage content.
- `assets/styles.css`: responsive styling.
- `assets/script.js`: mobile navigation and header behaviour.
- `assets/JiaheXi_CV.pdf`: downloadable copy of the supplied SUAD CV.
- `assets/mobility-network.svg`: abstract decorative activity network, not an empirical map.
- `assets/favicon.svg`: site icon.
- `.nojekyll`: serves the static files directly on GitHub Pages.

For a local preview, serve the website files with a static HTTP server. No build step or external dependencies are required.
