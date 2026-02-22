---
applyTo: "**/*.css"
---

# CSS Guidelines

## CSS Best Practices

- Use plain CSS only; never add Tailwind, Bootstrap, or utility frameworks.
- Keep stylesheets modular and readable with clear comments for major sections.
- Use CSS custom properties (`:root` variables) for colors, spacing, and other reusable values.
- Organize CSS by sections: reset/base, layout, components, utilities.
- Implement mobile-first responsive design with media queries starting small and scaling up.

## Naming Conventions

- Use lowercase with hyphens for class names (e.g., `.header-top-bar`, `.spotlight-section`).
- Avoid overly generic names; be descriptive about the element's purpose.

## Performance

- Minimize file size; remove unused selectors and consolidate rules.
- Prefer CSS Grid and Flexbox over floats for layout.
- Use `:is()` and `:where()` for cleaner selector grouping when targeting multiple elements.
- Avoid deep nesting; keep specificity low (no `!important` unless absolutely necessary).

## Accessibility

- Ensure sufficient color contrast (WCAG AA minimum).
- Use relative units (rem, em) instead of pixels for better scalability.
- Include focus states for keyboard navigation on interactive elements.
- Use `outline: 0` only if providing alternative focus styling.

## Jekyll Integration

- Link stylesheets in the `_includes/head.html` using `{{ '/assets/css/styles.css' | relative_url }}`.
- Keep all custom CSS in `assets/css/` directory.
- Use front matter in layouts to conditionally load additional stylesheets via `page.custom_css`.
