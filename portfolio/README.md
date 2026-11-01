# Muhammad Masood: Portfolio

Static site in HTML, CSS and vanilla JavaScript. No build step, no dependencies.

## Run locally
Open `index.html`, or serve the folder: `python -m http.server 8000` then visit http://localhost:8000

## Update your details
- **Contact info, links, availability, CV path:** `js/config.js` (one place). Add `linkedin` and `facebook` URLs there. WhatsApp uses international digits without `+`.
- **Projects, skills, AI lab, timeline:** top of `js/script.js`. Set each project's `s` status honestly and add `repo` / `demo` URLs.
- **Photo:** replace `assets/images/profile.jpg` (square).
- **CV:** add `assets/resume/Muhammad-Masood-CV.pdf`.
- **Project screenshots:** add to `assets/projects/` and use them in place of the layout previews in the Web and Mobile sections.

## Contact form
It validates, then opens the visitor's email app addressed to you. It does not send messages by itself. For direct delivery, create a free form at formspree.io and post the form data to it with `fetch`.

## Deploy free
**GitHub Pages:** push this folder's contents to a repo, then Settings > Pages > Deploy from branch `main`, root.
**Vercel:** import the repo, framework "Other", no build command, output directory `.`.
