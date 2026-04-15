# Millennial Gray – a "minimalistic" personal website template

A Jekyll-based personal website template with boring but elegant millennial gray aesthetics, deliberately made to not stand out.

Built with Claude Code.

## Layout

Two-column layout on desktop (fixed sidebar + content area), single-column on mobile with a hamburger menu.

## Quick Start

### 1. Install Ruby and Bundler

You need Ruby ≥ 3.0. Installing Ruby via a version manager is strongly recommended over system Ruby, which is often outdated and requires `sudo` for gems. The [Jekyll installation guide](https://jekyllrb.com/docs/installation/) has OS-specific instructions — it covers rbenv (Mac/Linux), RubyInstaller (Windows), and more.

Once Ruby is installed, Bundler should already be available (it ships as a default gem since Ruby 2.6). If not:

```bash
gem install bundler
```

### 2. Clone and install

```bash
git clone https://github.com/sibocw/millennial-gray.git
cd millennial-gray
bundle install
```

### 3. Run locally

```bash
bundle exec jekyll serve
```

Then open the link in the log messages (typically `http://localhost:4000`) in your browser.

---

## Customization

### Personal info (`_config.yml`)

Open `_config.yml` and fill in your details:

```yaml
title: Your Name
author: Your Name
affiliation: Title · Affiliation
description: "Brief description\nMultiple lines allowed"
```

### Social links (`_config.yml`)

Add, remove, or reorder entries under `social_links`. Each entry needs a `display_text`, a `fa_logo` ([Font Awesome 6](https://fontawesome.com/icons) class string), and a `link`. Use `mailto:` for email addresses.

```yaml
social_links:
  - display_text: Email
    fa_logo: fa-solid fa-envelope
    link: mailto:you@university.edu
  - display_text: GitHub
    fa_logo: fa-brands fa-github
    link: https://github.com/yourusername
  - display_text: LinkedIn
    fa_logo: fa-brands fa-linkedin
    link: https://linkedin.com/in/your-username
```

To hide a link, delete its entry. To add any other service, find its icon on [fontawesome.com/icons](https://fontawesome.com/icons) and add a new entry.

### Profile photo and favicon

Set the paths in `_config.yml`:

```yaml
profile_photo: /assets/img/profile.jpg   # recommended: square, ≥ 400×400 px
favicon:        /assets/img/favicon.png  # recommended: 32×32 or 64×64 px PNG
```

The default paths point to `assets/img/` — replace the files there, or point the config entries to different paths.

### Google Analytics

Uncomment and fill in your Measurement ID in `_config.yml`:
```yaml
google_analytics: G-XXXXXXXXXX
```

Analytics are only injected in the `production` build environment (i.e., the deployed site), not during local development.

---

## Pages

Each page is a Markdown file in the project root.

| File | URL | Purpose |
|------|-----|---------|
| `index.md` | `/` | About / bio |
| `cv.md` | `/cv/` | CV — education, experience, awards, etc. |
| `publications.md` | `/publications/` | Papers, preprints, patents |
| `news.md` | `/news/` | Short dated updates |
| `another-page.md` | `/another-page/` | Example of a custom page (rename or delete) |

### Editing content

All pages use standard Markdown. The `cv.md` and `publications.md` files contain inline comments showing how to structure sections, sub-headings, and lists — refer to them as a guide when filling in your own content.

### Adding a page

1. Create a new `.md` file with this front matter:
   ```yaml
   ---
   layout: default
   title: Page Title
   permalink: /page-slug/
   ---
   ```
2. Add it to the `nav` list in `_config.yml`:
   ```yaml
   nav:
     - title: Page Title
       url: /page-slug/
   ```

See `another-page.md` for a worked example.

### Removing a page

Delete the `.md` file and remove the corresponding entry from the `nav` list in `_config.yml`.

---

## Deployment (GitHub Pages)

The repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys the site automatically on every push to `main`.

**To enable:**

1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Under *Source*, select **GitHub Actions**.

The site will be available at `https://yourusername.github.io/millennial-gray/` (or a custom domain if configured).

---

## Project Structure

```
.
├── _config.yml            # Site configuration and personal info
├── _layouts/
│   └── default.html       # Main HTML layout (sidebar + content)
├── assets/
│   ├── css/style.css      # All styling
│   ├── js/main.js         # Mobile menu toggle
│   └── img/
│       ├── profile.jpg    # Your profile photo (add your own)
│       └── favicon.png    # Browser tab icon (replace with your own)
├── index.md               # About page
├── cv.md                  # CV page
├── publications.md        # Publications page
├── news.md                # News page
├── another-page.md        # Example custom page (rename or delete)
├── Gemfile                # Ruby dependencies
└── .github/workflows/
    └── deploy.yml         # GitHub Pages auto-deploy workflow
```

---

## License

This template is released under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and adapt it.
