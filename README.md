# Design System for React

A self-contained TypeScript React package. The build compiles the local `styles/` Sass sources into `dist/styles.css`, preserving the original colors, type, spacing, breakpoints, and BEM classes. React and React DOM are peer dependencies and are not bundled. This project can be built without the original Drupal repository.

## Development

Run these commands inside `design-system-react`:

```sh
npm install
npm run build
npm test
npm run storybook
```

Storybook runs at `http://localhost:6006` and includes stories for all 21 components, variants, controls, generated documentation, and the accessibility panel. Storybook uses the React/Vite framework. Run `npm run storybook:build` to export a static catalog to `storybook-static`, and `npm run typecheck:storybook` to check the story and configuration types. Storybook scripts build the local styles automatically. After Sass changes, rebuild styles to update the preview.

The optional Vite demo is available through `npm run dev`; `npm run demo:build` creates its static build. Use `npm pack` to create an installable package; publishing is a separate step. Node.js 22 is recommended; the configured Storybook 9 version works with the Node 22.11 runtime used to develop this library.

## Usage

```tsx
import { Button, Card, Accordion } from '@design-system/react';
import '@design-system/react/styles.css';

export function Services() {
  return <>
    <Card title="Community services" href="/services">
      <p>Explore services in your area.</p>
      <Button href="/services" cta>Learn more</Button>
    </Card>
    <Accordion items={[
      { id: 'hours', title: 'Opening hours', content: <p>Monday to Friday.</p> }
    ]} />
  </>;
}
```

Available exports: `Button`, `Heading`, `Badge`, `Card`, `IconCard`, `StatCard`, `Alert`, `Status`, `Accordion`, `Tabs`, `Breadcrumbs`, `Pagination`, `TextField`, `Textarea`, `Select`, `Checkbox`, `Radio`, `PageHeader`, `Section`, `CardGroup`, `CallOutBox`, and `bem`. Type declarations include the public props. Native attributes and event handlers are supported on buttons and form fields; `Button` renders a link when given `href`. Use `modifiers` for existing BEM variants, such as `['secondary']`.

Accordion item IDs must be unique within an instance. Tabs use the same `{ id, title, content }` item shape, with arrow, Home, and End keyboard navigation. Pagination is controlled through `page`, `pageCount`, and `onPageChange`; pages are one-based. Form fields associate labels, descriptions, and errors with unique IDs. Children and icon slots accept React nodes instead of raw HTML strings.

## Migration status

This is the initial library foundation, not a complete conversion of every Twig template. Specialized event, resource, horizontal, and author cards; site headers and footers; nested menus; hero headers; galleries; Leaflet maps; book rivers; search filters; and composed page templates still need individual ports and visual comparisons. The original catalog remains the reference for these migrations.

Font Awesome Pro is not required by this package. Supply icons through React slots; consumers that need the original Pro glyphs can load their licensed icon assets. The shared stylesheet includes global resets and base styles, so import it once at the application entry point. It loads Inter from Google Fonts, matching the original project. Local Sass sources were copied from the original design system; future styling changes should be maintained here. The packed package includes compiled CSS.
