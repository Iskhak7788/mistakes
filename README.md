# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React, TailwindCSS, and Framer Motion. Features dark mode support, smooth animations, and a markdown-based content management system.

## Features

- 📱 Fully responsive design
- 🌓 Dark mode support with system preference detection
- ⚡ Fast page transitions with Framer Motion animations
- 📝 Markdown-based content management
- 🎨 Clean and minimal design
- 🔍 SEO friendly
- 📬 Contact form with email integration (dummy logic)

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework with App Router
- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS](https://tailwindcss.com/) - Styling

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   │   ├── layout/      # Layout components
│   │   └── ui/          # UI components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript types
├── content/             # Markdown content
│   └── projects/        # Project markdown files
└── public/             # Static assets
    └── images/         # Image assets
```

## Customization

### Content

- Edit markdown files in the `content/` directory to update your content
- Add your projects in `content/projects/` as markdown files
- Update social links and metadata in `src/config/site.ts`

### Styling

- Customize colors in `tailwind.config.ts`
- Modify global styles in `src/app/globals.css`
- Edit component styles directly in their respective files

### Components

- All components are modular and can be easily customized
- Add new components in `src/components/`
- Page layouts are in `src/app/` following Next.js 14 conventions

## License

MIT License - feel free to use this for your own portfolio!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
