# Aurum Theatre — Home Theatre & Audio Installation Website

## Included pages
- `index.html` — Home 1 / classic landing page
- `home-2.html` — Home 2 / premium signature landing page with animated video background
- `about.html`
- `services.html`
- `gallery.html`
- `case-studies.html`
- `contact.html` — consultation booking form
- `404.html`
- `maintenance.html`
- `privacy-policy.html`

Each page has its own CSS file in `assets/`, plus shared `assets/global.css` and `assets/site.js`. The two uploaded logo images are included as `assets/theatre-logo-light.png` and `assets/theatre-logo-dark.png`.

## Run locally
Open `index.html` in a browser. For best results, run a local static server, e.g. `python -m http.server 8000`, then visit `http://localhost:8000`.

## Design system
- Primary: `#111318` (deep charcoal)
- Secondary: `#D4AF37` (luxury gold)
- Responsive breakpoints: 1024px, 768px, 360px
- Lucide icons throughout the UI; Font Awesome icons only for footer social icons.
- Dark mode and RTL controls are in the header. The settings persist in local storage.
- Header and footer brand lockup is consistent on all pages.
- Every main content page has seven or more content sections, excluding header/footer.

## Before publishing
1. Replace the sample phone number, email address and any placeholder business details.
2. Connect the consultation form to a real form backend or booking provider. The current form gives local demo feedback only.
3. Review the privacy policy with qualified counsel and tailor it to actual data practices.
4. Replace any stock imagery with licensed project photography where available.
5. Verify the remote video URL and imagery in your deployment environment. Home 2 includes a fallback poster if video playback is unavailable.
6. The Home 2 hero video is remotely hosted; ensure its use complies with your hosting and licensing needs.
