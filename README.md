# STUDIO®  Digital Flagship Experience

An award-winning, world-class creative branding agency website built with **React 19**, **React Router v7**, **Framer Motion**, and **Tailwind CSS v4**. This project delivers a sophisticated, editorial, and luxurious digital experience that communicates authority, creativity, and world-class execution.


## ✨ Features

### 🎬 Cinematic Motion System
Powered by **Framer Motion** — staggered text reveals, parallax image transformations, scroll-driven animations, and smooth page transitions all tightly integrated with React's rendering lifecycle.

### 🖱️ Custom Adaptive Cursor
A spring-based custom cursor that fluidly tracks mouse movement and **intelligently morphs** based on hover context — expanding into a **"VIEW CASE"** badge on projects, a **"PLAY"** indicator on videos, or hiding entirely over navigation elements.

### 🧲 Magnetic Interaction Engine
Custom `<MagneticElement>` wrappers that pull navigation links and CTAs toward the user's cursor with physics-based spring animations, simulating premium high-end interaction design.

### 📖 Editorial Typography & Grid
Pairs **Playfair Display** (editorial serif) with **Inter** (functional sans-serif) across a rigorous grid system with massive negative space, creating a layout language that feels like a luxury print publication.

### 🧭 SPA Router with Animated Transitions
A lightweight client-side routing system (`RouterProvider`) handles seamless page navigation between all six views (Home, Work, Agency, Services, Pricing, Contact) with `AnimatePresence`-powered exit/enter transitions.

### 🖼️ Fullscreen Immersive Menu
A full-viewport overlay navigation menu featuring animated link reveals, dynamic background imagery that responds to hover, and smooth slide transitions.

### 🎯 Cursor-Aware Project Gallery
Project cards that respond to the custom cursor with contextual labels, parallax depth via scroll-driven `useTransform`, and hover-to-desaturate image reveals.

---

## 🛠 Technology Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript |
| **Routing** | React Router v7 (file-convention based) |
| **Styling** | Tailwind CSS v4 (utility-first, zero-config) |
| **Animation** | Framer Motion (spring physics, layout animations, scroll transforms) |
| **Icons** | Lucide React (consistent stroke-based iconography) |
| **Build** | Vite 8 (HMR, code splitting, SSR) |
| **Fonts** | Playfair Display (Google Fonts), Inter (Google Fonts) |

---

## 📁 Project Architecture

```
app/
├── contexts/
│   ├── CursorContext.tsx        # Global cursor state (variant + text)
│   └── RouterContext.tsx        # SPA page routing with scroll reset
│
├── components/
│   ├── AnimatedText.tsx         # Staggered word-by-word reveal animation
│   ├── MagneticElement.tsx      # Physics-based magnetic hover wrapper
│   ├── CustomCursor.tsx         # Spring-animated custom cursor renderer
│   ├── Navbar.tsx               # Top navigation + fullscreen overlay menu
│   ├── Footer.tsx               # Typographic CTA + contact/social grid
│   └── ProjectCard.tsx          # Parallax project preview card
│
├── pages/
│   ├── home/
│   │   ├── HomeHero.tsx         # Full-screen hero with animated headline
│   │   ├── PhilosophySnippet.tsx# Agency philosophy with CTA
│   │   ├── ServicesSnippet.tsx  # Interactive service list
│   │   ├── VideoFeature.tsx     # Video placeholder with cursor integration
│   │   └── PortfolioSnippet.tsx # Parallax project grid
│   │
│   ├── HomePage.tsx             # Composes all home sections
│   ├── WorkPage.tsx             # Project index with staggered masonry
│   ├── AgencyPage.tsx           # Agency manifesto + hero imagery
│   ├── ServicesPage.tsx         # Full service list with hover descriptions
│   ├── PricingPage.tsx          # Three-tier partnership pricing cards
│   └── ContactPage.tsx          # Inquiry form + contact details
│
├── app.css                      # Tailwind import + custom theme tokens
├── root.tsx                     # HTML shell, font preloads, error boundary
├── routes.ts                    # Route configuration
├── routes/
│   └── home.tsx                 # Single entry route (Welcome wrapper)
└── welcome/
    └── welcome.tsx              # App entry — providers + page routing
```

### Architecture Principles

- **Single-responsibility components** — each file owns one concern
- **Context-driven state** — cursor and router state live at the top level, consumed anywhere via typed hooks
- **Composable pages** — `HomePage` is a composition of independent section components
- **No prop drilling** — cursor and navigation are injected through context, never passed manually through intermediate layers

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| **Black** | `#000000` | Backgrounds, dark sections |
| **Off-White** | `#F8F8F6` | Content backgrounds, light sections |
| **Burgundy** | `#5B1D1D` | Accent, hover states, active page |
| **Soft Gray** | `#6D6D6D` | Secondary text |
| **Border Light** | `rgba(255,255,255,0.2)` | Dividers on dark |
| **Border Dark** | `rgba(0,0,0,0.2)` | Dividers on light |
| **Display** | Playfair Display | Editorial headings (14vw–10vw scale) |
| **Body** | Inter | UI text, captions, navigation |
| **Max Width** | 1600px | Content container constraint |
| **Cursor Easing** | `cubic-bezier(0.76, 0, 0.24, 1)` | All cinematic transitions |

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server (HMR at localhost:5173)
npm run dev

# Production build
npm run build

# Type-check the codebase
npm run typecheck

# Preview production build
npm start
```

**Prerequisites:** Node.js 18+ and npm.

---

## 🏗 Project Configuration

- **`react-router.config.ts`** — React Router v7 config
- **`vite.config.ts`** — Vite bundler config with Tailwind plugin
- **`tsconfig.json`** — TypeScript strict mode with path alias `~/*` → `app/*`

---

## 📄 License

© STUDIO Agency. All Rights Reserved.
