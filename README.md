# Daniel Margol's Personal Website

See it live at [danielmargol.com](https://danielmargol.com)

## Built With Astro 🚀

This site is built with [Astro](https://astro.build), a modern static site generator that delivers lightning-fast performance with zero JavaScript by default.

### Tech Stack

- **Framework**: Astro with TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with MDX support
- **Deployment**: GitHub Pages via GitHub Actions

### Features

- 📝 Blog with pagination
- 🎯 Project showcase
- 🏷️ Tag-based filtering
- 📱 Fully responsive design
- ⚡ Lightning-fast performance
- 🔍 SEO optimized
- 📊 Google Analytics integration
- 💬 Disqus comments
- 📰 RSS feed
- 🌙 Dark mode support

## Development

### Prerequisites

- Node.js 24+
- npm

### Installation

```bash
npm install
```

### Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Blog posts and projects (Markdown)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page routes
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── public/              # Static assets
└── dist/                # Build output (generated)
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch via GitHub Actions.

### Manual Deployment

1. Build the site: `npm run build`
2. The built files will be in the `dist/` directory
3. GitHub Actions will automatically deploy to GitHub Pages

## Content Management

### Adding a New Blog Post

1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter:

```yaml
---
title: "Your Post Title"
date: 2024-01-01
description: "Brief description"
tags:
  - Tag1
  - Tag2
category: blog
author: danielmargol
---
```

3. Write your content in Markdown
4. Commit and push - it will automatically deploy!

### Adding a New Project

1. Create a new `.md` file in `src/content/projects/`
2. Add frontmatter with the same structure as blog posts
3. Set `category: project`
4. Optionally add `star: true` to highlight it
5. Add `externalLink` if linking to an external site

## License

Content © 2025 Daniel Margol. All rights reserved.
