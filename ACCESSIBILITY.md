# Accessibility

## Overview

Accessibility is treated as an ongoing part of development on this portfolio, not a one-time task. The goal is to follow the relevant practices in WCAG 2.2 Level AA, using a mix of automated checks (lint and axe) and manual testing (keyboard and screen readers).

This document describes what is implemented today, how it is tested, and what is known to fall short. It is not a claim of WCAG or ADA conformance. Automated tools find only part of the possible problems, and parts of this site (see [Known Limitations](#known-limitations)) have not been validated.

## Implemented Accessibility Features

### Structure

- `<html lang="en">`, and a "skip to main content" link as the first focusable element.
- Native landmarks on every route: `<header>` (containing the primary `<nav>`), `<main>` and `<footer>`. There is one `<nav>`, so it is not given a label.
- One `<h1>` per route, with `<h2>` (and `<h3>` where content nests, such as the course list on Study Abroad) below it. Heading levels follow content hierarchy, not visual size.
- Named regions only where they are meaningful: four sections on the home page, one `<article>` per project on Projects, and one per spotlight on Spotlights. Each takes its name from its visible heading with `aria-labelledby`. Layout-only wrappers are plain `<div>`s.
- The Projects accordion keeps each project's `<h2>` outside its toggle. The toggle is a `<button>` with `aria-expanded`, named by that heading.
- The embedded resume PDF has an iframe `title`.

### Keyboard

- Every interactive element is a native `<a>` or `<button>`. There are no clickable `<div>`s and no positive `tabindex` values. The only `tabindex="-1"` uses are script-only focus targets (`<main>`, and the page `<h1>` after navigation) and the image viewer's click-outside backdrop button, which is deliberately kept out of the Tab order (Esc and the close button cover keyboard users).
- Study Abroad gallery tiles are buttons. Their captions show on hover, keyboard focus, or click/tap, and Esc dismisses a caption while focus stays put.
- On viewports 1060px wide and narrower (including high zoom), the navbar links collapse behind a menu button. It is a real `<button>` named "Open navigation menu" or "Close navigation menu", with `aria-expanded` and `aria-controls`. The open menu is a group of ordinary links inside the `<nav>` (no `role="menu"`). Closed links are `display: none`, so they are not focusable. The menu closes when you follow a link (including the current page's link) and on Esc, and does not trap focus.
- The Medlens image viewer closes with Esc, steps with the arrow keys, moves focus to its close button on open and returns focus to the tile on close.

### Focus

- One global `:focus-visible` ring (`src/styles.css`) with two bands (a steel outline and a cream inner band) so it stays visible on the maroon, steel, rose, lavender, cream and orange backgrounds.
- On client-side route changes, `RouteAnnouncer` in `src/App.tsx` sets the document title and moves focus to the new page's `<h1>`. It does not move focus on the first page load or on hash-only navigation (in-page anchors).
- Every route has its own title, in the form `About | Ann Mathew` (the home page is `Ann Mathew | Portfolio`).

### Names, images and links

- Image-only links take their names from visible text where possible (the two Spotlight photo links use `aria-labelledby` pointing at the card heading). The home page portrait link has its own `aria-label`.
- Meaningful images have descriptive `alt` text. Images that only decorate a control that already has a name use `alt=""`.
- Repeated link text is disambiguated (for example "view on github - medlens").
- Decorative arrows in link text (`→`) are hidden from screen readers.
- Icon-style controls have labels (the image viewer's close, previous and next buttons).
- Links that open a new tab use the `ExternalLink` component (`src/ExternalLink.tsx`), which sets `rel="noopener noreferrer"` and adds visually hidden "(opens in a new tab)" text (or appends it to the link's `aria-label`). The announcement is not visible on screen.
- The email link is a valid `mailto:` and the phone link a valid `tel:` matching the displayed number.

### Color and motion

- Text and background pairs were checked with the WCAG contrast formula. Shared replacement text colors live in `src/colors.ts`. Muted text uses solid colors instead of low opacity.
- Cream text on the rose navbar, footer and home page buttons (`#b5656f`) is 3.06:1, which only qualifies as large text. That is why nav links are bold 19px, the logo and footer are bold 20px, and the buttons are 24px. Do not put smaller or lighter text on that rose.
- A few `opacity`-based text styles remain where the resulting contrast was verified to pass.
- Study Abroad caption fades honor `prefers-reduced-motion`. Other transitions do not (see limitations).

## Automated Testing

### Linting

`eslint-plugin-jsx-a11y` (recommended rules) runs through ESLint. React Router's `Link` and `NavLink`, and this project's `ExternalLink`, are linted as anchors (`eslint.config.js`). It catches static JSX problems such as missing `alt`, click handlers on non-interactive elements, and empty links.

```bash
npm run lint
```

### axe in a real browser

Playwright with `@axe-core/playwright` runs axe's default rules (nothing disabled or excluded) in Chromium against the production build. The axe tests use a 1440px viewport. Tests are in `e2e/`:

- `e2e/a11y.spec.ts`: axe on every route declared in `src/App.tsx` (currently `/`, `/resume`, `/projects`, `/spotlights`, `/study-abroad`, `/contact`, `/about`, `/medlens`, read from the source so new routes are picked up), plus `/projects` with a project expanded and `/medlens` with the image viewer open.
- `e2e/links.spec.ts`: every new-tab link has `noopener` and `noreferrer` and announces "(opens in a new tab)", and the email and phone links are well formed.
- `e2e/nav.spec.ts`: the full navbar shows at 1061px and wider; at 1060px and below the menu button is labelled and reports `aria-expanded`, hidden links are unreachable, open links are reachable in order and stay inside the viewport, Esc closes the menu and returns focus to the button, following a link closes it, and the open menu has no axe violations.
- `e2e/reflow.spec.ts`: every route at 320, 375, 768, 1024 and 1440px wide has no horizontal page scroll, and no element's content spills out of its own box (which would mean overlap or clipping). 320px is the effective viewport of 400% browser zoom on a 1280px window.

```bash
npx playwright install chromium   # once per machine
npm run test:a11y                 # axe tests only
npm test                          # all Playwright tests (axe, link and reflow checks)
npm run build                     # production build (also runs tsc)
```

A failing axe test prints each violation's rule, impact and element selector. Fix the markup instead of excluding the rule.

### CI

`.github/workflows/ci.yml` runs on pushes to `main` and on pull requests: `npm ci`, `npm run lint`, `npm run build`, then `npm test`, which runs the axe, link and reflow tests. A failure in any step fails the job (there is no `continue-on-error`).

### What automation cannot tell you

Lint and axe find many common problems, but passing them does not show that the site meets WCAG. They cannot judge reading order, whether focus order makes sense, how good the alt text is, whether link text makes sense out of context, how clear a focus indicator looks, how keyboard interaction feels, or whether the page works with a real screen reader.

## Manual Testing

Repeat these after any change to layout, navigation, interactive components or colors.

### Keyboard

1. Load a page, click the address bar, then press Tab. The first stop should be "skip to main content" (it appears at the top left).
2. Tab through the whole page. Every link and button should show the focus ring, and the order should match the visual layout. Shift+Tab should reverse it.
3. Activate links with Enter, and buttons with Enter and Space. Nothing should need a mouse.
4. Navigate to another route from the navbar by keyboard. Focus should land on the new page's heading, and the browser tab title should change. Press Tab once and confirm focus continues into the page, not back in the navbar.
5. Repeat steps 1 to 4 in a window 1000px wide or narrower (or at 200% and 400% zoom). Tab should reach the menu button, and Enter or Space should open it. Tab should then move through every link in order, Esc should close the menu and return focus to the button, and following a link should close it and land on the new page's heading. The button needs a visible focus ring.
6. On Study Abroad, Tab through the gallery: each caption should appear on focus and disappear when focus leaves, and Esc should hide it.
7. On Medlens, open a screenshot with Enter. Focus should move to the close button, arrow keys should step through images, and Esc should close it and return focus to the tile.
8. Look for keyboard traps: you should always be able to Tab out of every region.

### VoiceOver (macOS, Safari or Chrome)

Turn it on with Cmd+F5, open the rotor with Ctrl+Opt+U, and check:

- **Landmarks:** banner, main, footer on every page, plus the named regions on Home, Projects and Spotlights.
- **Headings:** one level 1, then a sensible nesting that matches the page.
- **Links:** names make sense out of context, and links that open a new tab say so.
- **Navigation menu (narrow window):** the button reads as "Open navigation menu, collapsed" (or "Close navigation menu, expanded") and the links are announced as ordinary links, not menu items.
- **Buttons:** the project toggles announce collapsed or expanded, and gallery and viewer controls have clear names.
- **Images:** meaningful images are described, and decorative ones are skipped.
- **Route changes:** after navigating, the new page's heading is announced.

### NVDA (Windows, Firefox or Chrome)

Repeat the same checks. Use H and 1 to 3 for headings, D for landmarks, K for links, B for buttons, G for graphics, and NVDA+F7 for the elements list.

### Browsers

Check Chrome, Firefox and Safari. The parts most likely to differ are the focus ring (`:focus-visible`), focus moving to the heading after a route change, and Safari's Tab behavior (Safari may need Option+Tab, or the "Press Tab to highlight each item" setting).

### Color contrast

Check text and background pairs with the [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) or Chrome DevTools (inspect an element, click its color swatch, and read the contrast row). Normal text needs 4.5:1, and large text (24px, or bold 18.66px and up) needs 3:1. Check hover and focus states too, and keep the rose bar rule above in mind.

### Zoom and responsive layout

The automated reflow test resizes the viewport, which is what zoom does to the CSS viewport, but it cannot judge how the result looks or whether text actually enlarges. By hand, zoom the browser to 200% and 400% (Cmd or Ctrl and plus) on a normal-width window, and also try a narrow window and your phone in portrait and landscape. Look for: horizontal scrolling on the page, overlapping or clipped text, controls that are cut off or unreachable, focus rings that are hidden, a navbar that is truncated, and fixed elements covering content. Also check that body text really does get larger at 200%.

## Development Workflow

When changing the UI:

1. Use semantic HTML first (`<button>` for actions, `<a>` or `<Link>` for navigation). Do not add ARIA where native HTML already gives the role.
2. Keep accessible names when moving or restyling controls, and use `ExternalLink` for any link that opens a new tab.
3. Choose colors from the checked palette (`src/colors.ts`) and verify contrast for any new pair.
4. Keep layouts fluid: use `var(--gutter)` for side padding, wrapping flex rows or `auto-fit` grids for columns, `fluid()` (`src/fluid.ts`) for headings of 40px and up, and no fixed widths or heights on text. Avoid absolute positioning for content.
5. Run `npm run lint`.
6. Run `npm test` (this includes the axe, link and reflow tests).
7. Run `npm run build`.
8. Check keyboard behavior by hand, and look at the page at a narrow width and at 200% and 400% zoom.
9. For any meaningful interaction change, test with a screen reader.

## Known Limitations

These come from reading the code and running the tests. The GitHub Issues tracker may list more, and may show some of these as already planned.

- **Reflow has only been checked by resizing.** The layout reflows down to a 320px wide viewport (the whole-page scaling was removed), and tests check that at several widths in Chromium. Real browser zoom at 200% and 400%, Firefox, Safari, and phones in portrait and landscape have not been verified.
- **Large headings do not scale one to one with browser zoom.** Headings of 40px and up use `clamp()` with a viewport-width term (`src/fluid.ts`) so they fit narrow screens. Zooming in narrows the viewport, so those headings grow less than body text does (about 1.4 times at 200% zoom in a calculation, not measured in a browser). Body text is fixed in pixels and scales normally.
- **The navbar menu is only tested in Chromium.** The 1060px breakpoint was chosen from where the links stop fitting on one row (about 1020px), so text set larger by the user's own browser or OS settings could still crowd the bar just above it.
- **Some content stays small on phones.** The Medlens charts are images that scale down with their column (their labels become hard to read at 320px), though they open full size in the image viewer. The embedded resume PDF shows a small page in its viewer, and the download link is the readable alternative.
- **Reduced motion is only partly supported.** Study Abroad caption fades respect `prefers-reduced-motion`. Other transitions do not: the skip link slide, the Medlens button and link fades, the image viewer's button fades, and the Medlens screenshot hover captions.
- **Medlens screenshot captions show on mouse hover only.** Keyboard and touch users can still get each caption from the tile's accessible name and from the image viewer, but the on-tile caption does not appear on focus the way the Study Abroad gallery's does.
- **The image viewer does not trap focus.** Focus moves in on open and returns on close, and Esc closes it, but Tab can still move to the page behind it even though it is marked `aria-modal`.
- **No recorded screen-reader results.** Nothing in this repository records VoiceOver or NVDA test results, so screen-reader behavior has not been confirmed.
- **Chromium only.** Automated tests run in Chromium. Firefox and Safari behavior is not covered.
- **Limited automated coverage.** axe runs on each route's initial state plus two interactive states. Other states (for example hovered or focused gallery captions, or other expanded Projects cards) are not scanned.
- **Unknown URLs.** There is no not-found route. A URL that matches no route shows the navbar and footer with no page content, and the home page's title.
- **PDFs and video are not assessed.** The resume, abstract and poster PDFs, and the YouTube demo videos, are not evaluated by this repository's tests, and the PDFs' own accessibility (tagging, reading order) is unknown.
- **Alt text quality is unreviewed.** Descriptions were written by the site author and have not been reviewed by people who use screen readers.

## Reporting Accessibility Issues

Open an issue in the [GitHub repository](https://github.com/built-by-ann/built-by-ann.github.io/issues), which is the project's feedback channel. Please include the page URL, what you were trying to do, what went wrong, and your browser, operating system and any assistive technology (for example "Safari with VoiceOver on macOS"). Screenshots or short recordings help.
