# Content guide

This project keeps editable source files separate from the generated website. Edit `.qmd`, `.yml`, and `styles.css` files in the project root. Do not edit anything inside `_site/`; Quarto rebuilds that directory.

## Where to edit

| Content | File |
|---|---|
| Homepage bio, portrait, and public links | `index.qmd` |
| Navigation, site title, search, and footer | `_quarto.yml` |
| Research introduction | `research/index.qmd` |
| Analysis introduction | `analysis/index.qmd` |
| Blog introduction | `blog/index.qmd` |
| Visual styling | `styles.css` |

## Add an article

1. Choose `research`, `analysis`, or `blog`.
2. Create a short, stable folder name, for example `research/agent-infrastructure/`.
3. Copy `_templates/article.qmd` into the new folder as `index.qmd`.
4. Fill in the title, description, dates, and categories.
5. Write the article in Markdown. Keep article-specific images in the same folder.
6. Leave `draft: true` while writing. Set it to `false` when the article is ready to publish.

The folder name becomes the clean public URL. For example:

```text
research/agent-infrastructure/index.qmd
→ /research/agent-infrastructure/
```

## Preview and publish

Use `quarto preview` while editing so source changes rebuild automatically. Use `quarto render` to create the production files in `_site/`.

The GitHub workflow in `.github/workflows/publish.yml` is already prepared for GitHub Pages deployment from the `main` branch.
