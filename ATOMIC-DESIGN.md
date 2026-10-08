# Atomic component structure

Components, stories, and styles are colocated under `src/components/` with the original directory names.

```text
src/components/
  00-base/       colors, motion, framework
  01-atoms/      buttons, forms, images, typography, lists, tables
  02-molecules/  cards, menus, headers, interactive controls
  03-organisms/  groups, listings, site header/footer, book rivers
  04-templates/  default, sidebar, full-width layouts
  05-pages/      composed pages
```

Each public component has its own TSX implementation and colocated Storybook story. `src/index.ts` is the public export barrel. Twig blocks become React children or named slots, and Twig data variables become typed props. Form and menu partials are composed inside their owning components. `migration-map.json` maps every original Twig template to its owning React implementation. This map records structural coverage, not proof of pixel-level parity. The three source folders that only contained Sass (branch, resource, service) now have typed page compositions too.

Leaflet is loaded on the client for the location map; OpenStreetMap tiles require network access. Icons accept React nodes or SVG sprite references instead of depending on licensed Font Awesome Pro assets. Consumer code supplies branding and page content.
