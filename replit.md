# Portfolio Website - Gunjan Arora

## Overview
A modern, professional portfolio website for Gunjan Arora showcasing skills, projects, and experience as a Full Stack Developer. Features a sleek dark bluish theme with modern animations and responsive design.

## Tech Stack
- **Framework**: React.js 18.3.1 with Create React App
- **Styling**: Tailwind CSS with custom dark bluish color palette
- **Routing**: React Router DOM v6 (HashRouter)
- **Icons**: Material UI Icons (@mui/icons-material)
- **Animations**: 
  - AOS (Animate On Scroll)
  - CSS Keyframe animations
  - Typewriter Effect
- **Contact**: EmailJS for contact form
- **Other**: Vercel Analytics, React Parallax Tilt

## Design Features
- Dark bluish gradient background with subtle grid pattern
- Glassmorphism cards with backdrop blur effects
- Gradient text and borders
- Custom cursor with glow effect (desktop)
- Smooth scroll navigation
- Floating background shapes with blur
- Modern horizontal navigation header
- Responsive mobile menu

## Project Structure
```
src/
├── components/
│   ├── About/          # About section with services cards
│   ├── Contact/        # Contact form with EmailJS
│   ├── Home/           # Hero section with typewriter
│   ├── Projects/       # Project cards grid
│   ├── Resume/         # Skills & certifications
│   ├── Display.js      # Main content wrapper
│   ├── Navigation.js   # Horizontal navigation header
│   └── ...
├── pages/
│   └── HomePage.js     # Main page component
├── Layout/
│   └── Layout.js       # Layout with cursor & animations
├── assets/             # Images, audio, resume PDF
├── constants/          # Project data
└── styles
    ├── App.css         # Custom styles & cursor
    └── index.css       # Tailwind config & utilities
```

## Color Palette
- **Primary**: Blue shades (#3b82f6, #2563eb, #1d4ed8)
- **Background**: Dark slate (#0f172a, #1e293b, #020617)
- **Accent**: Cyan (#06b6d4), Purple (#8b5cf6), Emerald (#10b981)
- **Text**: White & slate gray variations

## Development Setup

### Environment Variables
- `PORT=5000` - Dev server port
- `HOST=0.0.0.0` - Allow all hosts for Replit proxy
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Disable host check

### Running Locally
```bash
npm install --legacy-peer-deps
npm start
```

## Key Sections
1. **Hero**: Introduction with typewriter, stats, and profile photo
2. **About**: Overview, technologies, and service cards with hover animations
3. **Resume**: Work experience timeline, education, certifications, and skill bars
4. **Projects**: Grid of project cards with hover effects
5. **Contact**: Contact form and social links

## Work Experience (from Resume)
- Web Developer at SPIE - The International Society (Jan 2024 – Present)
- AI Intern at Codec Technologies (Jan 2025 – Feb 2025)
- Tech Lead at Book with UVA (Aug 2024 – Feb 2025)
- Web Developer at CodSoft (May 2024 – Jun 2024)

## Deployment
Configured for Replit static deployment:
- Build: `npm run build`
- Public directory: `build`

## Responsive Design Features
- **Breakpoints**: Custom breakpoints for all device sizes (xxs: 320px, xs: 375px, sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Mobile-first approach**: All components scale up from smallest screens
- **iOS safe-area support**: Proper handling for notch devices and home indicator
- **Touch-friendly**: All interactive elements have proper touch targets (44px minimum)
- **Adaptive typography**: Font sizes scale appropriately across all breakpoints
- **Responsive grids**: Layout adjusts from single column on mobile to multi-column on desktop
- **Touch interactions**: Disabled hover effects on touch devices, added active states
- **ScrollToTop button**: Fixed button for easy navigation back to top on all devices

## Animation Features
- **Floating elements**: Subtle floating animations on background shapes
- **Shimmer effects**: Gradient shimmer on skill bars and text
- **Glow pulse**: Animated glow on icons and cards
- **Hover animations**: Card lift, tilt, and scale effects
- **Timeline dots**: Animated ripple effect on work experience timeline
- **Button ripple**: Click ripple effect on action buttons
- **Reduced motion support**: Respects prefers-reduced-motion for accessibility

## Recent Changes
- November 28, 2025: Enhanced animations and work experience
  - Added comprehensive CSS animation library (float, shimmer, glow, ripple)
  - Added Work Experience timeline with 4 professional roles
  - Enhanced About section with floating backgrounds and hover effects
  - Added card tilt and lift animations on hover
  - Button ripple effects across the site
  - Accessibility support for reduced motion preferences
- November 28, 2025: Major responsive design improvements
  - Enhanced all sections for mobile, tablet, and desktop
  - Added custom breakpoints for extra-small devices (320-375px)
  - Improved touch targets and interactions
  - Added ScrollToTop component for mobile convenience
  - iOS safe-area support for notch devices
  - Better typography scaling across all screen sizes
- November 28, 2025: Complete redesign with modern dark bluish theme
  - New horizontal navigation replacing sidebar
  - Glassmorphism card design
  - Enhanced animations and hover effects
  - Professional senior developer presentation
  - Mobile-responsive layout
