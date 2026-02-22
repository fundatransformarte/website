---
applyTo: "**/*.md"
---

# Markdown Guidelines

## Formatting

- Use ATX-style headers: `#`, `##`, `###`, etc. (not underlines).
- Use proper Markdown syntax for lists, links, emphasis, and code.
- Use fenced code blocks with language specifiers: ` ```language ... ``` `.
- Keep line length reasonable (80-120 characters) for readability.

## Front Matter

- All blog posts and pages must include YAML front matter:
  ```yaml
  ---
  layout: page
  title: Page Title
  description: Brief description for SEO
  ---
  ```

## Content Guidelines

- Start with a clear heading matching the page title.
- Use descriptive link text (avoid "click here"; be specific).
- Break content into logical sections with headers.
- Include meta descriptions for SEO purposes.

## GitHub-Flavored Markdown (GFM)

- The site uses `kramdown-parser-gfm`, so GFM syntax is fully supported.
- Use tables, strikethrough, autolinks, and task lists as needed.
- Example:
  ```markdown
  | Column 1 | Column 2 |
  |----------|----------|
  | Data     | Data     |
  ```

## Integration with Jekyll

- Markdown files should have YAML front matter to be processed by Jekyll.
- Use Liquid tags within Markdown (e.g., `{{ site.title }}`).
- Link to other pages using relative paths: `[Link](../path/to/page.md)` or with `.html` extension for output.

## SEO Best Practices

- Use H1 (`#`) for the main page title only.
- Organize content with H2 and H3 headers for structure and readability.
- Include descriptive alt text in images.
- Use descriptive, keyword-rich titles and descriptions.
