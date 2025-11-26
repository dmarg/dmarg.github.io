# Jekyll to Astro Migration Plan

## Project Overview
Converting danielmargol.com from Jekyll (Indigo theme) to Astro with modern design and features.

## User Preferences
- ✅ TypeScript
- ✅ Tailwind CSS (remove SASS)
- ✅ Modernize design with energetic/fun components
- ✅ Keep Disqus comments and Google Analytics
- ✅ Migrate all existing blog posts and projects
- ✅ Maintain blog/project categories
- ✅ Deploy via GitHub Actions to GitHub Pages
- ✅ **Remove ALL Ruby and Jekyll files**
- ✅ Create `/resume` redirect to Google Drive link
- ✅ **No frontend framework needed** - Pure Astro components only

## Phase 1: Project Setup & Structure

### 1.0 Remove Jekyll and Ruby Files
**IMPORTANT: Do this FIRST to avoid conflicts**
- Remove all Jekyll files: `_config.yml`, `_config-dev.yml`, `_layouts/`, `_includes/`, `_sass/`, `_posts/`, `_drafts/`
- Remove all Ruby files: `Gemfile`, `Gemfile.lock`, `.ruby-version`, `Rakefile`
- Remove Jekyll-specific files: `.travis.yml`, `travis.sh`
- Remove old blog/projects HTML files: `blog/index.html`, `projects.html`, `tags.html`, `index.html`
- Keep: `CNAME`, `robots.txt`, `README.md`, `about.md` (will convert), `assets/` folder

### 1.1 Initialize Astro Project
- Create new Astro project with TypeScript in current directory
- Install required integrations:
  - `@astrojs/tailwind` - Tailwind CSS support
  - `@astrojs/mdx` - Enhanced markdown support
  - `@astrojs/sitemap` - SEO sitemap generation
  - `@astrojs/rss` - RSS feed generation
- Configure for static site generation (SSG)
- Set up for GitHub Pages deployment (site mode with proper base path)
- **NO frontend framework needed** (React/Solid/Vue) - Astro components are sufficient for this site

### 1.2 Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Header.astro
│   ├── Navigation.astro
│   ├── Footer.astro
│   ├── SocialLinks.astro
│   ├── BlogCard.astro
│   ├── ProjectCard.astro
│   ├── AuthorBio.astro
│   ├── TagList.astro
│   ├── Pagination.astro
│   └── RelatedPosts.astro
├── layouts/            # Page layouts
│   ├── BaseLayout.astro
│   ├── BlogPost.astro
│   └── ProjectPost.astro
├── pages/              # Routes
│   ├── index.astro           # Home page
│   ├── about.astro           # About page
│   ├── resume.astro          # Redirect to Google Drive link
│   ├── blog/
│   │   ├── index.astro       # Blog listing with pagination
│   │   ├── [page].astro      # Pagination pages
│   │   └── [slug].astro      # Individual blog posts
│   ├── projects/
│   │   ├── index.astro       # Projects listing
│   │   └── [slug].astro      # Individual projects
│   ├── tags/
│   │   ├── index.astro       # All tags
│   │   └── [tag].astro       # Posts by tag
│   └── rss.xml.ts            # RSS feed
├── content/            # Content Collections
│   ├── blog/           # Blog posts (markdown)
│   ├── projects/       # Project posts (markdown)
│   └── config.ts       # Content collection schemas
├── styles/
│   └── global.css      # Global styles + Tailwind directives
└── utils/
    ├── readingTime.ts  # Calculate reading time
    ├── formatDate.ts   # Date formatting utilities
    └── sortPosts.ts    # Post sorting utilities
```

## Phase 2: Content Migration

### 2.1 Set Up Content Collections
Define schemas in `src/content/config.ts`:
- Blog collection with fields: title, date, description, tags, image, author
- Projects collection with fields: title, date, description, tags, image, externalLink, star

### 2.2 Migrate Posts
- Copy all 4 blog posts from `_posts/` to `src/content/blog/`
- Copy 2 project posts from `_posts/` to `src/content/projects/`
- Update frontmatter to match new schema (minimal changes needed)
- Preserve all markdown content as-is
- Update image paths if necessary

## Phase 3: Layout & Component Development

### 3.1 Base Layout
Create `BaseLayout.astro` with:
- HTML structure
- Meta tags (SEO)
- Google Analytics integration
- Tailwind CSS
- Responsive viewport settings
- Dynamic page titles and descriptions

### 3.2 Header Component
Modern, animated header with:
- Profile image (with hover effects)
- Name and bio
- Social links (GitHub, LinkedIn, StackOverflow)
- Smooth animations using Tailwind
- Mobile-responsive design

### 3.3 Navigation Component
Clean, modern navigation:
- Home, Blog, Projects, About, Resume links
- Active page indicator
- Mobile hamburger menu (if needed)
- Smooth transitions

### 3.4 Blog Components
- **BlogCard**: Card design for blog listing with date, title, excerpt, tags
- **BlogPost Layout**: Full post layout with:
  - Title and header image
  - Date and reading time
  - Tag links
  - Post content with proper typography
  - Author bio section
  - Related posts (based on shared tags)
  - Previous/Next navigation
  - Disqus comments integration
  - Social sharing buttons (Twitter, Facebook)

### 3.5 Project Components
- **ProjectCard**: Card for project listing with star indicator
- **ProjectPost Layout**: Similar to blog layout with project-specific features

### 3.6 Additional Components
- **TagList**: Display and filter by tags
- **Pagination**: Navigate between pages (5 posts per page)
- **RelatedPosts**: Show related posts by tags
- **Footer**: Copyright, RSS link, credits
- **SocialLinks**: Reusable social media icons

### 3.7 Resume Redirect Page
Create `src/pages/resume.astro`:
- Meta refresh redirect to Google Drive link
- Also use JavaScript redirect as fallback
- Show "Redirecting..." message
- Provide manual link if redirect fails
- **Resume URL**: `https://drive.google.com/file/d/0B0tH261ryHpYdnZGNUo2WndDMTQ/view?resourcekey=0-l_ikNobClygfjFVJAQh0-A`

## Phase 4: Styling with Tailwind CSS

### 4.1 Tailwind Configuration
Configure `tailwind.config.mjs`:
- Custom color palette (inspired by Indigo theme but modernized)
- Typography plugin for markdown content
- Custom animations (fade-in, slide-up, etc.)
- Responsive breakpoints

### 4.2 Design System
Create modern, energetic design:
- **Colors**:
  - Primary: Modern purple/indigo (#6366f1)
  - Accent: Vibrant green or blue for energy
  - Text: High contrast for readability
- **Typography**:
  - Inter or similar modern sans-serif
  - Clear hierarchy
- **Components**:
  - Subtle shadows and borders
  - Rounded corners
  - Hover effects with smooth transitions
  - Glass-morphism or gradient accents
- **Animations**:
  - Fade-in on scroll
  - Hover scale effects
  - Page transition animations
  - Smooth color transitions

### 4.3 Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Ensure all components work on mobile

## Phase 5: Feature Implementation

### 5.1 Pagination
- Implement pagination for blog listing (5 posts per page)
- Create pagination component with page numbers
- Use Astro's `paginate()` function

### 5.2 Tags System
- Generate tag pages dynamically
- Create tag index page showing all tags
- Show posts grouped by tag
- Tag filtering and navigation

### 5.3 Related Posts
- Algorithm to find related posts by shared tags
- Display up to 5 related posts
- Utility function for tag matching

### 5.4 Reading Time
- Calculate reading time based on word count
- Display alongside date on blog posts

### 5.5 RSS Feed
- Generate RSS feed at `/rss.xml`
- Include all blog posts
- Proper metadata

### 5.6 SEO & Meta Tags
- Dynamic meta tags for each page
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap generation

### 5.7 Analytics & Comments
- Google Analytics integration (UA-59539046-1)
- Disqus comments integration (danielmargol)
- Only show comments on blog/project posts

## Phase 6: GitHub Pages Deployment

### 6.1 Astro Configuration
Update `astro.config.mjs`:
```typescript
export default defineConfig({
  site: 'https://danielmargol.com',
  output: 'static',
  integrations: [tailwind(), mdx(), sitemap()],
});
```

### 6.2 GitHub Actions Workflow
Create `.github/workflows/deploy.yml`:
- Trigger on push to master
- Node.js setup (v18 or v20)
- Install dependencies
- Build Astro site (`npm run build`)
- Deploy to GitHub Pages using official action
- Set proper permissions for GITHUB_TOKEN

### 6.3 CNAME File
- Preserve existing CNAME file with `danielmargol.com`
- Ensure it's copied to build output

### 6.4 Repository Settings
- Enable GitHub Pages
- Set source to GitHub Actions (not branch)
- Verify custom domain configuration

## Phase 7: Testing & Verification

### 7.1 Local Testing
- Test all pages locally
- Verify responsive design on different screen sizes
- Check all links work
- Verify images load correctly
- Test pagination
- Test tag filtering
- Check reading time calculations

### 7.2 Build Testing
- Run production build
- Check build output size
- Verify no build errors
- Test built site locally

### 7.3 Deployment Testing
- Deploy to GitHub Pages
- Verify custom domain works
- Test all routes on production
- Verify Analytics tracking
- Test Disqus comments
- Check RSS feed
- Verify sitemap generation

### 7.4 SEO Verification
- Check meta tags on all pages
- Verify Open Graph previews
- Test with search console
- Check mobile-friendliness

## Phase 8: Final Cleanup & Documentation

### 8.1 Verify All Jekyll/Ruby Files Removed
Double-check that all Jekyll/Ruby files were removed in Phase 1:
- No `_config.yml`, `_layouts/`, `_includes/`, `_sass/`, `_posts/`, `_drafts/`
- No `Gemfile`, `Gemfile.lock`, `.ruby-version`, `Rakefile`
- No `.travis.yml`, `travis.sh`
- No old HTML files: `blog/index.html`, `projects.html`, `tags.html`, `index.html` (except in dist/)

### 8.2 Update Documentation
- Update README.md with Astro instructions
- Document build and deployment process
- Add development instructions (npm run dev, npm run build)
- Document resume redirect configuration

## Key Migration Considerations

### Why Astro Alone is Sufficient (No React/Solid/Vue Needed)
- ✅ Astro components can handle all the interactivity we need
- ✅ Simple sites don't need heavy frameworks
- ✅ Better performance with zero JS by default
- ✅ Can still add framework components later if needed
- **This site needs**:
  - Navigation (pure HTML/CSS)
  - Blog listing (static)
  - Pagination (static links)
  - Tags (static links)
  - Resume redirect (meta refresh + simple JS)
  - Disqus comments (embedded script)
  - Analytics (embedded script)
- **None of these require React/Solid/Vue!**

### GitHub Actions with TypeScript
- ✅ Astro + TypeScript works perfectly with GitHub Actions
- Uses standard Node.js build process
- No special configuration needed

### Performance Benefits
- Astro ships zero JavaScript by default (better than Jekyll)
- Only load JavaScript for interactive components (if any)
- Faster page loads
- Better Core Web Vitals
- Simpler build process without framework overhead

### Developer Experience
- Hot module replacement (HMR) in dev mode
- TypeScript type safety
- Modern tooling (Vite)
- Better error messages
- Simpler mental model (no framework complexity)

### Potential Challenges
1. **Disqus Comments**: May need client-side script tag (easy to add)
2. **Image Optimization**: Consider using `@astrojs/image` for better performance
3. **Social Sharing**: Twitter API changes may affect sharing (use Web Share API as fallback)

## Timeline Estimate
- Phase 1-2: Project setup & content migration
- Phase 3-4: Layout & styling development
- Phase 5: Feature implementation
- Phase 6: Deployment setup
- Phase 7: Testing
- Phase 8: Cleanup

## Success Criteria
- ✅ All pages render correctly
- ✅ All blog posts and projects migrated
- ✅ Pagination works (5 posts per page)
- ✅ Tags system functional
- ✅ SEO meta tags present
- ✅ Analytics tracking active
- ✅ Disqus comments working
- ✅ RSS feed generated
- ✅ Mobile responsive
- ✅ Fast page loads
- ✅ GitHub Actions deployment working
- ✅ Custom domain (danielmargol.com) functional

## Additional Modernizations to Consider
1. **View Transitions**: Use Astro's View Transitions API for smooth page navigation
2. **Dark Mode**: Add dark/light theme toggle (was in Jekyll config)
3. **Search**: Add client-side search functionality
4. **Performance**: Image optimization with sharp
5. **Accessibility**: Ensure WCAG 2.1 AA compliance
6. **Newsletter**: Add newsletter signup (optional)
7. **Table of Contents**: Auto-generate for long posts
