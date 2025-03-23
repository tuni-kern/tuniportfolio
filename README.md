# Tuni Kern Portfolio

A sleek, minimalist portfolio website showcasing Tuni Kern's software engineering projects. Features a light blue and white theme with an option to switch to dark mode.

## Features

- Responsive design for all device sizes
- Light/dark theme toggle
- Project showcase with filterable categories
- Contact form
- About page with professional experience
- Built with modern technologies

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui components
- next-themes for theme switching

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/*` - Next.js App Router pages
- `src/components/*` - Reusable UI components
- `src/lib/*` - Utility functions
- `public/*` - Static assets

## Customization

- Edit `src/app/globals.css` to customize the theme colors
- Update project data in the `projects` array in `src/app/projects/page.tsx`
- Modify personal information in the about page at `src/app/about/page.tsx`

## Deployment

Deploy the application using Vercel:

```bash
npm run build
npm run start
```

Or deploy directly to Vercel with the Vercel CLI.

## License

MIT