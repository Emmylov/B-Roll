# B-Roll Flow — Landing & Auth

This commit adds a Vite + React + Tailwind implementation of the public landing page and a simple authentication modal for B-Roll Flow.

Features included:
- Theme toggle (Light: Alabaster Gallery, Dark: Obsidian Slate) with smooth transitions
- Header nav with CTAs
- Hero with serif headline and animated timeline mock
- ROI Calculator widget with dynamic sliders
- Pricing cards with glassmorphism
- Authentication modal with social buttons and email/password inputs which redirect to /onboarding on submit

To run locally:

1. npm install
2. npm run dev

Notes:
- Fonts: IBM Plex Mono and Cormorant Garamond are pulled from Google Fonts. "Geist" is referenced as the UI font-family but should be self-hosted or replaced if you have a licensed Geist webfont.
- Adjust colors and copy in `tailwind.config.cjs` and CSS variables in `src/styles/tailwind.css`.
