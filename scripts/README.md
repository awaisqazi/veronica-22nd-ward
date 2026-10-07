# Copy workflow

English copy lives inline in the `.astro` files and is mirrored in `src/i18n/en.json`;
`src/i18n/es.json` is the Spanish version (written, not machine-translated). Every element
with `data-i18n="section.key"` gets its text swapped at load from those files. When you change
English copy inline, update the same key in both JSON files.
