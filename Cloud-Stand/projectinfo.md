# CloudStand Project Info

## Project Overview

- Project name: `cloud-stand`
- Stack: React 18, Vite, Tailwind CSS, Framer Motion, React Router
- Design direction: clean corporate SaaS / consulting website focused on Oracle Cloud services
- Overall theme: light theme with blue-led gradients, glassmorphism cards, soft borders, rounded shapes, and animated mesh backgrounds

## Branding

### Brand Name

- Primary brand text: `CloudStand`
- Extended brand text: `CloudStand Consulting`

### Logo Used

- The live site does not currently use a separate PNG/SVG logo asset for the navbar brand.
- The main logo treatment is a combination of:
  - `Cloud` icon from `lucide-react`
  - brand text `CloudStand`
  - supporting text `Consulting`
- Location: [src/components/layout/Navbar.jsx](D:/DW%20React/Cloud-Stand/src/components/layout/Navbar.jsx:55)

### Favicon Used

- Favicon file: [public/favicon.svg](D:/DW%20React/Cloud-Stand/public/favicon.svg:1)
- It is linked from: [index.html](D:/DW%20React/Cloud-Stand/index.html:5)
- Visual style of favicon:
  - purple/violet geometric mark
  - cyan highlight glow
  - looks different from the live navbar logo, so branding is currently not fully unified

## Fonts Used

### Imported Fonts

- `DM Sans`
- `Syne`
- Imported from Google Fonts in: [src/index.css](D:/DW%20React/Cloud-Stand/src/index.css:1)

### Font Usage

- Base/body font: `DM Sans`
- Heading font: `Syne`
- Tailwind font tokens defined in: [tailwind.config.js](D:/DW%20React/Cloud-Stand/tailwind.config.js:16)

### Typography Pattern

- Body text is modern, clean, and readable using `DM Sans`
- Headings use `Syne` for a more distinctive, bold, brand-forward look
- Hero headlines often force `DM Sans` with large scale, bold weight, and tight tracking for a sharp editorial feel

## Colors Used

### Core Theme Colors

Defined in: [src/index.css](D:/DW%20React/Cloud-Stand/src/index.css:6)

| Token | Hex | Purpose |
|---|---|---|
| `--color-primary` | `#f5f9ff` | main page background |
| `--color-accent` | `#0057ff` | primary CTA / key action color |
| `--color-accent-light` | `#3d8bff` | gradient highlight / hover accent |
| `--color-surface` | `#ffffff` | cards, panels, inputs |
| `--color-text` | `#0f172a` | main dark text |
| `--color-text-muted` | `#5f6f89` | supporting copy |
| `--color-border` | `#d7e5ff` | borders / dividers |
| `--color-gold` | `#f59e0b` | ratings / highlight stat accent |

### Extra Frequently Used Hardcoded Colors

- `#f7fbff` used in footer and CTA/light surface sections
- `#eef5ff` used for alternating section backgrounds
- `#f8fbff` used for cards and dropdown panels
- `#08111f` used for scrollbar track
- `#1b3f86` used in scrollbar gradient
- `blue-50` and `slate-900` Tailwind tones are used throughout for subtle contrast

### Tailwind Theme Mapping

Tailwind exposes custom semantic colors:

- `primary`
- `accent`
- `accent-light`
- `surface`
- `text`
- `text-muted`
- `border`
- `gold`

Defined in: [tailwind.config.js](D:/DW%20React/Cloud-Stand/tailwind.config.js:6)

## Service Accent Colors

Defined in: [src/data/services.js](D:/DW%20React/Cloud-Stand/src/data/services.js:1)

| Service | Color |
|---|---|
| Oracle HCM Cloud | `#0057FF` |
| Oracle ERP Cloud | `#3D8BFF` |
| Oracle Payroll | `#F59E0B` |
| Oracle Integration Cloud (OIC) | `#4F7CFF` |
| BI & Analytics | `#14B8A6` |
| AI Solutions | `#8B5CF6` |

These colors are used for service icon gradients and service hero backgrounds.

## Icons Used

### Icon Library

- Primary icon library: `lucide-react`
- Declared in: [package.json](D:/DW%20React/Cloud-Stand/package.json:14)

### Brand / Navigation Icons

- `Cloud`
- `ChevronDown`
- `Menu`
- `X`

### Core UI / Content Icons

- `ArrowDown`
- `ArrowRight`
- `Check`
- `Quote`
- `Star`
- `Bot`
- `MessageSquare`
- `Send`
- `Sparkles`

### Service Icons

- `Users`
- `BarChart3`
- `DollarSign`
- `GitBranch`
- `TrendingUp`
- `Cpu`

### Contact / Footer Icons

- `MapPin`
- `Phone`
- `Mail`
- `Clock3`
- `BriefcaseBusiness`
- `PlayCircle`
- `SendHorizontal`

## Custom SVG Assets

### Social / Utility Symbols

- File: [public/icons.svg](D:/DW%20React/Cloud-Stand/public/icons.svg:1)
- Symbols available:
  - `bluesky-icon`
  - `discord-icon`
  - `documentation-icon`
  - `github-icon`
  - `social-icon`
  - `x-icon`

Note: these symbols exist in the project, but they do not appear to be actively used by the current React pages.

### Other Assets Present

- [src/assets/hero.png](D:/DW%20React/Cloud-Stand/src/assets/hero.png)
- [src/assets/react.svg](D:/DW%20React/Cloud-Stand/src/assets/react.svg)
- [src/assets/vite.svg](D:/DW%20React/Cloud-Stand/src/assets/vite.svg)

Note: these assets also do not appear to be used in the current site flow.

## Theme Used

### Theme Style

- Theme type: `light`
- Visual mood: polished, professional, modern consulting website
- Industry positioning: Oracle Cloud consulting / enterprise transformation

### Theme Characteristics

- soft light backgrounds
- blue gradient accents
- large rounded corners
- blurred glass panels
- airy spacing
- animated mesh / particle hero backgrounds
- strong contrast between muted body copy and bold dark headlines

## Reusable Visual Patterns

Defined mainly in: [src/index.css](D:/DW%20React/Cloud-Stand/src/index.css:98)

### Shared Utility Classes

- `.glass-panel`
  - white translucent panel
  - blur effect
  - soft shadow
- `.section-shell`
  - centered max-width layout wrapper
- `.section-padding`
  - standard vertical section spacing
- `.text-gradient`
  - accent to accent-light gradient text
- `.diagonal-divider`
  - angled section edge treatment
- `.button-ring`
  - consistent focus ring treatment
- `.hero-mesh`
  - animated gradient mesh background
- `.hero-particles`
  - decorative animated overlay particles

## Shadows and Effects

Defined in: [tailwind.config.js](D:/DW%20React/Cloud-Stand/tailwind.config.js:20)

- `shadow-glow`
  - blue outline + soft blue glow
- `shadow-soft`
  - large soft dark shadow

Other recurring effects:

- backdrop blur on navbar, cards, and dropdowns
- gradient CTA backgrounds
- animated floating shapes in hero section
- animated route/page transitions via Framer Motion

## Animations Used

Defined in: [src/index.css](D:/DW%20React/Cloud-Stand/src/index.css:160) and [tailwind.config.js](D:/DW%20React/Cloud-Stand/tailwind.config.js:24)

- `fadeInUp`
- `gradientShift`
- `float`
- `pulseSlow`
- `marquee`
- `particlesMove`
- `particlesMoveReverse`

Framer Motion is also used for:

- page transitions
- mobile menu animation
- services dropdown animation

## Buttons and UI Style

Defined in: [src/components/ui/Button.jsx](D:/DW%20React/Cloud-Stand/src/components/ui/Button.jsx:1)

### Button Variants

- `solid`
  - accent blue background
  - white text
- `ghost`
  - white background
  - dark text
  - gray/blue border
- `white`
  - white background
  - accent text

### Button Shape

- rounded full-pill buttons are used as the standard CTA shape

## Layout and Navigation Style

- Navbar is fixed and semi-transparent with blur
- Desktop navigation includes a services mega-dropdown
- Mobile navigation uses a slide/fade animated menu
- Footer uses a 4-column structured layout

## Content Theme

- Main business focus: Oracle Cloud consulting
- Major service lines:
  - HCM
  - ERP
  - Payroll
  - OIC
  - BI & Analytics
  - AI Solutions

This makes the project theme strongly enterprise, cloud, digital transformation, and operations-focused.

## Branding Consistency Notes

- Navbar branding uses a `lucide-react` cloud icon plus text, not the favicon symbol.
- Favicon uses a purple/cyan abstract mark that does not match the primary blue site palette.
- `public/icons.svg` contains social/documentation symbols that feel leftover or template-like compared with the current CloudStand identity.
- Some assets in `src/assets` appear unused and may be template leftovers.

## Recommended Single-Line Summary

CloudStand is a light-themed Oracle Cloud consulting website that uses `DM Sans` and `Syne`, a blue-led palette, `lucide-react` icons, glassmorphism panels, rounded CTA buttons, and animated gradient/particle hero sections.
