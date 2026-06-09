STUDIO® — Digital Flagship Experience

An award-winning, world-class creative branding agency website built with React. This project delivers a sophisticated, editorial, and luxurious digital experience, competing directly with industry leaders. It serves as a digital flagship that communicates authority, creativity, and world-class execution.

🌟 Vision & Philosophy

"We don't make designs. We build iconic brands."

This application is designed as a hybrid between a premium design publication, an art gallery, and a luxury brand identity showcase. Every pixel is curated, every interaction is intentional, and every transition feels cinematic.

✨ Key Features

Cinematic Motion System: Powered by Framer Motion, replacing GSAP to provide buttery-smooth scrolling, staggered text reveals, and parallax image transformations perfectly integrated into React's virtual DOM.

Custom Magnetic Cursor: A flawless tracking cursor that intelligently morphs based on hover states (e.g., expanding into a "VIEW CASE" badge or a "PLAY" video button).

Magnetic Interactions: Custom <MagneticElement> wrappers that pull navigation and CTA elements toward the user's cursor, simulating high-end Shery.js/Awwwards physics.

Interactive Project Modal: A cinematic, full-screen detail overlay showcasing high-quality project imagery, titles, and descriptive typography.

Custom Routing System: A bespoke lightweight router (RouterProvider) handling smooth page transitions between Home, Work, Agency, Services, Pricing, and Contact views within a single-page application architecture.

Editorial Typography & Grid: Pairs a beautiful Display Serif (Playfair Display) with a highly structured sans-serif (Inter), enforcing rigorous grid structures and massive negative space.

🛠 Technology Stack

Core: React 18+

Styling: Tailwind CSS

Animation: Framer Motion (handling GSAP-level cinematic motion, split-text animations, and page transitions)

Icons: Lucide React

Architecture: Single-file application structure utilizing deep React Contexts (CursorContext, RouterContext, ModalContext).

📂 Architecture Overview

The entire application logic is modularized yet contained within a cohesive structure for seamless compilation:

Global Contexts:

CursorProvider: Manages the state and text of the custom cursor.

RouterProvider: Manages the virtual multi-page navigation.

ModalProvider: Handles the state for the global project detail modal.

Core Wrappers & Utils:

CustomCursor: The visual representation of the framer-motion spring cursor.

MagneticElement: Physics-based hover wrappers for links and buttons.

AnimatedText: Scroll-triggered staggered text reveals.

Layout Components:

Navbar / Sidebar: Responsive navigation system with dynamic image reveals on hover.

Footer: Massive typographic CTA and agency contact info.

Pages:

HomePage, WorkPage, AgencyPage, ServicesPage, PricingPage, ContactPage.

🚀 Getting Started

To run this project locally, ensure you have Node.js installed, then set up a modern React environment (like Vite or Next.js) with Tailwind CSS configured.

Initialize a new React project:

npm create vite@latest studio-agency -- --template react
cd studio-agency


Install dependencies:

npm install framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


Configure Tailwind:
Ensure your tailwind.config.js is set up to scan your components.

Add the Code:
Replace the contents of your main App.jsx or App.tsx with the provided Agency.jsx code.

Run the development server:

npm run dev


🎨 Design System Quick Reference

Primary Colors: Deep Black (#000000), Off-White (#F8F8F6), Soft Gray (#D8D8D8)

Accent Color: Deep Burgundy (#5B1D1D)

Typography: Playfair Display (Display/Editorial), Inter (UI/Body)

Global Layout: 1600px Max Container Width with ample whitespace.

© STUDIO Agency. All Rights Reserved.