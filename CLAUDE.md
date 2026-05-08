# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fengcheng Yu's personal academic homepage, deployed via GitHub Pages at https://ffengc.github.io/. **Plain static HTML, no build system.** GitHub Pages serves the repo root directly.

The previous Jekyll/AcadHomepage version of this site is preserved on the `legacy-acadhomepage` branch.

## Local preview

```bash
python3 -m http.server 8000
# Then open http://localhost:8000 in a browser.
```

There is no compile step. Just edit `index.html` (or the publications data, see below) and refresh the page.

## Architecture

**Single-page site.** All content lives in `index.html` as hand-written HTML. Section order: Biography → Education → Publications → Selected Projects → Awards → Experience → Open Source & Community.

**Header / sidebar** is a 2-column `<table>` at the top: left column has name, role, email, and Font Awesome social icons (GitHub, LinkedIn, Google Scholar, ORCID, Instagram, Email); right column has the avatar (`images/profile.png`).

**Styles** come from `javascripts/jemdoc.css` (the only stylesheet linked from `index.html`). The other files under `stylesheets/` are unused but kept for reference. Font Awesome 5.15.3 is loaded from a CDN.

## Publications: YAML → Jinja2 → HTML

Publications are the only data-driven part of the site:

- **Data:** `scripts/publications.yaml` — one entry per paper.
- **Template:** `scripts/publications_template.html` — Jinja2.
- **Renderer:** `scripts/render_template.py` (needs `pyyaml` and `jinja2`: `pip install pyyaml jinja2`).
- **Output:** `scripts/publications.html`.

To update Publications:

```bash
cd scripts
python render_template.py
```

Then **manually copy the contents of `scripts/publications.html` into the Publications section of `index.html`** (replacing the existing publications `<table>`). The site loads `index.html` directly; `publications.html` itself is not served.

Supported YAML fields: `title`, `author` (comma-separated), `conference`, `conference_abbr` (use this for venue badges and "Under Review" markers, e.g. `MobiCom'26 (Under Review)`), `year`, `oral`, `teaser_url`, `paper_url`, `arxiv_url`, `project_url`, `description` (one-line summary shown under authors).

The template auto-bolds `Fengcheng Yu` in the author list.

## Project / Paper images

Images live in `images/` (papers, project teasers) and `images/projects/` (project teasers). Avatar is `images/profile.png`. Decorative images under `images/` (`bullet.png`, `hr.gif`, etc.) back the unused `stylesheets/`; safe to leave alone.

## Layout includes / sections

- Header table — name + bio block + social icons + avatar
- `<h2>Biography</h2>` + `<p>` paragraphs
- `<h2>Education</h2>` + `tbEducation` table
- `<h2>Publications [...]</h2>` + `tbPublications` table (rendered from YAML)
- `<h2>Selected Projects</h2>` + `tbProjects` table + trailing `<ul>` for list-only items
- `<h2>Awards</h2>` + 2-column table (description / year)
- `<h2>Experience</h2>` + `tbExperience` table
- `<h2>Open Source &amp; Community</h2>` + `<ul>` of GitHub repos

## Branches

- `main` — production, auto-deployed by GitHub Pages.
- `dev` — development branch.
- `legacy-acadhomepage` — full snapshot of the old Jekyll/AcadHomepage site (do not delete; useful for reference and rollback).
