---
applyTo: "**/*.html,**/*.md,_layouts/**,_includes/**"
---

# Jekyll Development Guidelines

## Project Structure

- **Layouts** (`_layouts/`): Base templates (default.html, page.html).
- **Includes** (`_includes/`): Reusable partials (header, footer, top-bar, head).
- **Assets** (`assets/`): CSS and images organized by type.
- **Pages**: HTML and Markdown files at root or in subdirectories.
- **Config**: `_config.yml` for site metadata.

## Front Matter

- Always include `layout`, `title`, and `description` in front matter.
- Use `page.custom_css` if a page needs its own stylesheet.
- Keep front matter concise and meaningful.

## Includes & Partials

- Create reusable partials in `_includes/` for header, footer, navigation, etc.
- Use Liquid tags: `{% include file.html %}` or `{% include file.html param="value" %}`.
- Keep partials focused on a single component.

## Liquid Templates

- Use `{{ site.title }}`, `{{ site.description }}` for global variables defined in `_config.yml`.
- Use `{{ page.title }}` for page-specific variables.
- Use `{{ variable | filter }}` for Liquid filters (e.g., `relative_url`).
- Use conditional logic sparingly: `{% if condition %}...{% endif %}`.

## SEO

- Every page must have a descriptive `title` and `meta description` in front matter.
- Use `relative_url` filter for all asset and link paths: `{{ 'path' | relative_url }}`.
- Ensure semantic HTML5 structure: proper heading hierarchy, meaningful link text.
- Include `jekyll-seo-tag` in `_includes/head.html` for automatic SEO metadata.

## Building & Testing

- Build locally: `bundle exec jekyll serve`.
- Output is in `_site/` directory (do not commit).
- Check `_site/` contains files in expected structure before deployment.
- Always test locally before pushing to ensure Jekyll builds successfully.

## Best Practices

- Use descriptive file and folder names in lowercase with hyphens.
- Keep templates DRY by extracting common patterns into includes.
- Validate HTML output is semantic and accessible.
- Avoid hardcoding URLs; use Liquid filters and site configuration.
