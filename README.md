# Jesse Adamu Portfolio

Personal portfolio of Jesse Adamu — graphic, product & web designer. Built with React, Vite, and GSAP. Features sport graphics, branding, and digital design work.

## Overview

The site is structured around four core sections:

- A visual hero with an animated image-grid (`GridMotion`) driven by GSAP
- A horizontally scrolling selected work section with scroll-triggered animations
- An about section introducing Jesse's design perspective and background
- A contact section with direct links for outreach and collaboration

Project pages are routed individually, starting with a filterable Sport Graphics gallery covering Player Features, Team Graphics, Gameday Designs, and Championship Art.

## Tech Stack

- React 19
- Vite 7
- React Router 7
- Motion (Framer Motion)
- GSAP
- Tailwind CSS 4
- ESLint

## Getting Started

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
src/
  Home/
    background/       # GridMotion GSAP component
    Header.jsx
    Home.jsx
    About.jsx
    work.jsx
    contact.jsx
  Projects/
    SportGraphics.jsx # Filterable sport graphics gallery
  data/
    sportGraphics.js  # Project data — no image imports needed
  css/
  assets/
public/
  images/
    sport-graphics/
      player-feature/
      team-graphic/
      gameday-design/
      championship-art/
```

## Design Direction

This portfolio leans into cinematic visuals, bold graphic presentation, and motion as part of the storytelling. The goal is to present creative work in a way that feels intentional, immersive, and modern — blending creativity with strategy across branding, sport graphics, and digital experiences.

## Status

Actively being built and refined before deployment.

## Upcoming

- Team Graphic, Gameday Design, and Championship Art galleries
- Personal Graphics, Brand Design, and Campaign project pages
- Contact form with live email integration
- Public deployment with custom domain
