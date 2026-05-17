# Stratavera Partners — Website

A static, multi-page website for Stratavera Partners Private Limited. Pure HTML, CSS and a tiny bit of JavaScript — no build step, no framework, no server-side dependencies. Drops onto any web host.

---

## File structure

```
Website - Stratavera/
├── index.html                    Home
├── about.html                    About
├── services.html                 Services (5 service lines)
├── sectors.html                  Sectors landing
├── projects.html                 Marquee projects archive
├── team.html                     Founding partners + specialists
├── careers.html                  Open enquiries page
├── contact.html                  Contact form + details
│
├── sectors/
│   ├── transport.html            Transport sector deep-dive
│   ├── urban-infrastructure.html Urban sector deep-dive
│   ├── logistics.html            Logistics sector deep-dive
│   └── real-estate.html          Real estate sector deep-dive
│
└── assets/
    ├── css/main.css              All styling (no preprocessing)
    ├── js/main.js                Mobile nav + form enhancement
    └── img/
        ├── logo.png              Stratavera brand mark
        └── hero-infra.svg        Hero background graphic
```

12 HTML pages in total, all self-contained.

---

## Deploying to your host

The site is **plain static files**. Whatever host you have, the recipe is the same:

1. Upload the **entire contents** of this folder to your host's web root (often called `public_html`, `www`, `htdocs`, or `/`).
2. Make sure `index.html` sits at the top level — that becomes the home page.
3. Keep the folder structure intact — `assets/` and `sectors/` must stay where they are, otherwise links and images will break.

Specific host instructions follow.

### Hostinger / cPanel hosts (common in India)

1. Log in to your hosting control panel.
2. Open **File Manager** and navigate to `public_html`.
3. Delete any default `index.html` that's already there.
4. Upload all files and folders from this directory (including `assets/` and `sectors/`).
5. Visit your domain — the site is live.

### GoDaddy

Same as Hostinger — use cPanel → File Manager → `public_html`.

### AWS S3 + CloudFront

1. Create an S3 bucket, enable **Static website hosting**.
2. Set index document to `index.html`.
3. Upload the entire folder, preserving subdirectories.
4. (Optional) Front it with CloudFront for HTTPS + CDN.

### Netlify (free, easiest)

1. Sign in at [netlify.com](https://www.netlify.com/).
2. Drag and drop this folder onto the dashboard.
3. Done — you'll get a `*.netlify.app` URL instantly. Add a custom domain in settings.

### Vercel / GitHub Pages

Both work the same way. Push the folder to a Git repo, point the host at it, you're done. No build command, no output directory — it's pure static.

---

## Wiring up the contact form

The form on `contact.html` is built but **not wired to a backend yet**. Pick one of the options below.

### Option A — Formspree (recommended, no infra)

1. Sign up at [formspree.io](https://formspree.io) (free tier handles 50 submissions/month).
2. Create a new form. Copy the form endpoint URL (looks like `https://formspree.io/f/abcd1234`).
3. Open `contact.html` and find this line:
   ```html
   <form id="contact-form" class="form" action="#" method="POST">
   ```
4. Replace `action="#"` with your Formspree URL:
   ```html
   <form id="contact-form" class="form" action="https://formspree.io/f/abcd1234" method="POST">
   ```
5. Set the destination email to `mohit.sinha@stratavera.in` in your Formspree dashboard.

That's it. Submissions will land in the inbox.

### Option B — Netlify Forms (only if you host on Netlify)

Add `data-netlify="true" name="contact"` to the form tag:

```html
<form id="contact-form" class="form" action="/thanks.html" method="POST" data-netlify="true" name="contact">
```

Netlify auto-handles the rest. Configure email notifications in the Netlify dashboard.

### Option C — Your own backend

Point `action` to whatever endpoint you have. The form posts standard fields: `name`, `email`, `organisation`, `topic`, `message`, plus `_subject`.

Until you wire one of these up, the form will show a placeholder confirmation message — submissions won't go anywhere.

---

## Pointing your domain

If you've registered `stratavera.in` or any other domain:

1. Log in to your domain registrar (GoDaddy, BigRock, Namecheap, etc.).
2. Go to **DNS settings** for the domain.
3. Add records that point to your hosting:
   - **For Hostinger/GoDaddy hosting** — they'll usually give you nameservers to set; replace the existing ones.
   - **For Netlify/Vercel** — they'll give you an A record IP or a CNAME target.
4. Wait for DNS to propagate (typically 30 min – 24 hours).

---

## Editing content

All copy lives directly inside the HTML files. To edit:

- Open the relevant `.html` in any text editor (Notepad++, Sublime, VS Code, even Notepad).
- Find the section you want to change, edit the text, save.
- Re-upload the changed file to your host.

To change colors or typography globally, edit `assets/css/main.css` — all colors are CSS variables defined at the top under `:root { ... }`.

---

## What's been built

- Brand-faithful design using the existing Stratavera logo, with a deep-navy palette and the rainbow gradient as a restrained accent (rules, hover states, hero rule).
- Fully responsive — tested layouts for desktop, tablet and mobile breakpoints.
- Accessible — semantic HTML, keyboard navigation, ARIA on the mobile menu, skip-to-content link, sufficient colour contrast.
- SEO basics — meta titles, descriptions, semantic structure on every page.
- Zero external runtime dependencies except Google Fonts (Inter, Source Serif 4).
- All copy is **original** — paraphrased from the brochure, not copied. No risk of plagiarism flags.

---

## What you might want to add later

- **Real photography** — replace the abstract SVG hero with project or office photography when available.
- **Insights / blog** — a thought-leadership stream once you start publishing. The footer / nav can be extended trivially.
- **Case studies** — individual deep-dive pages for marquee projects (one HTML file per project, linked from `projects.html`).
- **Testimonials** — quotes from clients, once collected.
- **Headshots** — replace initials avatars on the team page with actual photos.
- **Analytics** — drop in Google Analytics / Plausible by adding a `<script>` to each page or to the `<head>` of a shared template.

---

## Questions?

If anything breaks during deployment or you want to change the design direction, the easiest route is to share a screenshot of the issue or describe the change and I can patch it.
