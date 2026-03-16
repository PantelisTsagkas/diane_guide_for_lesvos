# Diane's Guide to Lesvos

A mobile-first travel companion built with Next.js for a holiday on the Greek island of Lesvos. Learn essential Greek phrases with audio pronunciation, get practical communication tips, and discover the best of the island — all in one friendly, easy-to-use guide.

## Features

- **Greek Phrases** — 50 curated phrases across 5 categories (Greetings, Dining, Shopping, Directions, Emergency) with interactive flashcards, audio pronunciation via the Web Speech API, and a practice quiz mode.
- **Travel Tips** — 10 accordion-style tips covering greeting customs, tipping etiquette, taverna ordering, gestures, coffee culture, and more. Includes a quick-reference emergency numbers panel.
- **Lesvos Guide** — Tabbed sections for Attractions, Dining, Culture, and Getting Around with 25 detailed entries covering everything from Molyvos Castle to local bus routes.
- **Mobile-first design** — Bottom tab navigation, safe-area padding for notched phones, touch-friendly targets, and responsive layout.
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation, `prefers-reduced-motion` support, and WCAG AA colour contrast.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (icons)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) (Greek audio pronunciation — no API keys needed)
- TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

This project is ready for one-click deployment on Vercel:

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Next.js framework — no additional configuration is needed.
4. Click **Deploy**.

No environment variables are required. All pages are statically generated at build time for fast global delivery via Vercel's Edge Network.

## Project Structure

```
app/
  layout.tsx              Root layout with bottom navigation
  page.tsx                Welcome / home page
  globals.css             Mediterranean colour theme
  components/
    BottomNav.tsx          Sticky bottom tab bar
    Header.tsx             Page header component
    AudioButton.tsx        Greek pronunciation (Web Speech API)
    FlashCard.tsx          Interactive flip card
    CategoryTabs.tsx       Horizontal scrollable tabs
    GuideCard.tsx          Guide entry card
    TipCard.tsx            Accordion tip card
  phrases/
    page.tsx               Greek phrases learning page
  tips/
    page.tsx               Communication tips page
  guide/
    page.tsx               Lesvos island guide page
  data/
    phrases.ts             50 phrases in 5 categories
    tips.ts                10 traveller tips
    guide.ts               25 guide entries across 4 sections
```

## Licence

Private project.
