# Kexu Liu (Caspian) — Personal Research Archive

A compact personal research site built with Quarto. Research, analysis, and blog posts have separate public sections while sharing one publishing model.

See [`_CONTENT_GUIDE.md`](_CONTENT_GUIDE.md) for the day-to-day editing workflow and a map of which file controls each part of the site.

## Local preview

Install Quarto, then run:

```bash
quarto preview
```

Render the production site with:

```bash
quarto render
```

The generated site is written to `_site/`.

## Add content

Create a folder with an `index.qmd` file under one of:

```text
research/
analysis/
blog/
```

Use the existing seed articles as templates. The directory-level `_metadata.yml` files apply the shared article layout automatically.

## Publish later

The included GitHub Action is prepared for GitHub Pages. After the repository is connected to GitHub, run `quarto publish gh-pages` once, set Pages to publish from the `gh-pages` branch, and allow GitHub Actions read/write workflow permissions.
