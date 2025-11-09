# Quick Start Guide - Not Only Tea Website

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Spline viewer components
- TypeScript support

### 2. Run Development Server

```bash
npm run dev
```

The website will be available at [http://localhost:3000](http://localhost:3000)

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Features

### ✅ Completed Features

1. **Modern Next.js 14 Setup**
   - App Router architecture
   - TypeScript support
   - Server-side rendering ready

2. **Custom Hydrella Font Integration**
   - Light weight (300)
   - Elegant typography throughout
   - Proper font loading optimization

3. **Interactive 3D Model**
   - Spline viewer integration
   - Tea box 3D model
   - Smooth loading animations

4. **Responsive Design**
   - Desktop (1920px+)
   - Tablet (768px - 1200px)
   - Mobile (320px - 768px)

5. **Professional UI Components**
   - Glassmorphism navigation
   - Gradient text effects
   - Smooth transitions
   - Loading states

6. **SEO Optimization**
   - Meta tags
   - Open Graph tags
   - Twitter cards
   - robots.txt
   - PWA manifest

## File Structure

```
NotOnlyTea/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx          # Top navigation bar
│   │   ├── Navigation.module.css
│   │   ├── HeroSection.tsx         # Main hero section
│   │   ├── HeroSection.module.css
│   │   ├── SplineViewer.tsx        # 3D model viewer
│   │   ├── LoadingSpinner.tsx      # Loading component
│   │   └── LoadingSpinner.module.css
│   ├── types/
│   │   └── spline.d.ts            # TypeScript definitions
│   ├── globals.css                # Global styles
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── loading.tsx                # Loading state
│   └── not-found.tsx              # 404 page
├── public/
│   ├── fonts/
│   │   └── Hydrella-Light.ttf     # Custom font
│   ├── images/
│   │   ├── logo.png               # Site logo
│   │   └── background.jpg         # Hero background
│   ├── spline/
│   │   └── tea_box.spline         # 3D model
│   ├── manifest.json              # PWA manifest
│   └── robots.txt                 # SEO robots file
├── package.json
├── next.config.js
├── tsconfig.json
└── README.md
```

## Customization Guide

### Change 3D Model

Replace the Spline file at `public/spline/tea_box.spline` or update the URL in `HeroSection.tsx`:

```tsx
<SplineViewer url="/spline/your_model.spline" />
```

### Update Colors

Edit the color scheme in `app/globals.css` and component CSS modules:

```css
/* Primary accent color */
background: #414607;

/* Gold gradient */
background: linear-gradient(91.77deg, #FFE1C0 0.41%, #FFF7F2 50.43%, #FFCB8E 99.49%);
```

### Modify Navigation Links

Edit `app/components/Navigation.tsx`:

```tsx
<ul className={styles.navLinks}>
  <li><a href="#your-section">Your Link</a></li>
</ul>
```

## Development Tips

### Hot Reload
The dev server supports hot module replacement - changes appear instantly without page refresh.

### Image Optimization
Next.js automatically optimizes images. Use the `<Image>` component for best performance.

### CSS Modules
Component styles are scoped using CSS Modules - no style conflicts between components.

### TypeScript
Full TypeScript support with proper type checking. Run `npm run build` to check for type errors.

## Browser Support

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Automatic code splitting
- Image optimization
- Font loading optimization
- CSS extraction and minification
- Tree shaking
- Lazy loading for 3D models

## Troubleshooting

### Spline Model Not Loading

1. Check if the `.spline` file exists in `public/spline/`
2. Verify the URL path is correct
3. Check browser console for errors
4. Ensure Spline viewer script is loaded

### Font Not Displaying

1. Verify font file exists at `public/fonts/Hydrella-Light.ttf`
2. Check font-face declaration in `globals.css`
3. Clear browser cache

### Build Errors

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the static export:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## Support

For issues or questions:
1. Check the Next.js documentation: https://nextjs.org/docs
2. Spline documentation: https://spline.design/docs
3. Review component comments in source code

---

**Created with ❤️ for Not Only Tea - Hong Kong**

