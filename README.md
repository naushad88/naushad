# Naushad Ahamad - Portfolio Website

A modern, professional single-page portfolio website for a senior Engineering Manager and Platform Delivery Leader.

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React** - UI library

## Features

- Fully responsive design
- Smooth scroll navigation
- Sticky header
- Contact form with success messaging
- SEO optimized
- Accessible layout
- Fast loading
- Clean, executive design style

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles and Tailwind
├── components/
│   ├── Header.tsx       # Sticky navigation header
│   ├── Hero.tsx         # Hero section
│   ├── ProfessionalSummary.tsx
│   ├── KeyMetrics.tsx
│   ├── WhatIDo.tsx
│   ├── SelectedProjects.tsx
│   ├── AIEnabledDelivery.tsx
│   ├── Certifications.tsx
│   ├── HireSection.tsx
│   ├── AboutRobustSoftech.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── package.json
```

## Customization

- Update contact email and LinkedIn links in `components/Contact.tsx` and `components/Footer.tsx`
- Add resume file and update download functionality in `components/Hero.tsx` and `components/Contact.tsx`
- Modify content in respective component files
- Adjust colors in `tailwind.config.ts` if needed

## License

Private - All rights reserved
