# George Medairy Real Estate - Design System

## Project Overview

A modern, sophisticated real estate website for George Medairy, Delaware real estate agent specializing in residential properties and VA loans for veterans.

**Stack**: Astro, Tailwind CSS, DaisyUI, GSAP (animations)

---

## Design Philosophy

**Coastal Delaware Nature - Refined Organic Aesthetic**

The design prioritizes:

- **Trust & Professionalism**: Clean layouts, sophisticated earth-tone palette, professional imagery
- **Warmth & Approachability**: Earthy sage greens and terracotta tones that feel welcoming and grounded
- **Premium Feel**: Subtle animations, elegant typography, larger readable text, refined micro-interactions
- **Visual Rhythm**: Alternating section backgrounds (sage, ocean blue, cream, white) for depth and contrast
- **Consistency**: Hero sections across all pages use the same beautiful earth-tone gradient
- **Veteran-Friendly**: Dedicated veteran section with professional blue-gray gradient and glass-morphism

---

## Color Palette

Our sophisticated earth tone palette with subtle blue accents conveys stability, growth, and warmth:

### Primary Colors (Earth Tones - DOMINANT)

- **Deep Sage** `#2c4a3e` (Primary)
  - Represents: Growth, Stability, Trust, Nature
  - Use: Navigation, primary buttons, headings, hero gradients, CTA sections

- **Warm Terracotta** `#a85d44` (Secondary)
  - Represents: Welcoming, Grounded, Home, Warmth
  - Use: Hero gradient accents, secondary buttons, highlights, footer

- **Golden Amber** `#d9a05b` (Accent)
  - Represents: Premium, Success, Achievement, Sunshine
  - Use: CTAs, important highlights, veteran badges, icons, decorative elements

### Subtle Accent Colors

- **Ocean Blue** `#2c5f6f` - Used sparingly in section backgrounds for variety
- **Midnight Blue-Gray** `#2c3e50` - Reserved for Veteran section only
- **Wet Asphalt** `#34495e` - Veteran section gradient variations

### Neutral Colors

- **Rich Black** `#1a1a1a` (Base Content)
- **White** `#ffffff` (Base 100 / Section Light)
- **Soft Sage Mist** `#f5f7f5` (Base 200)
- **Light Seafoam** `#e8f0ef` (Base 250)
- **Pale Sage** `#dce8e3` (Base 300)

### Section Background Colors (For Alternation)

- **Light** `#ffffff` - Clean white sections
- **Sage** `#f0f4f1` - Light sage green
- **Ocean Mist** `#f0f5f7` - Light blue (subtle accent)
- **Cream** `#faf8f5` - Warm cream

### Functional Colors

- **Info**: `#2563eb` (Blue)
- **Success**: `#059669` (Green)
- **Warning**: `#d97706` (Orange)
- **Error**: `#dc2626` (Red)

---

## Typography System

### Font Families

```css
--font-serif: 'Playfair Display', Georgia, serif;
--font-sans: 'Inter', system-ui, sans-serif;
```

### Heading Scale (Playfair Display - Serif)

- **H1**: `clamp(3rem, 7vw, 5.5rem)` (48px - 88px) - Hero headlines
- **H2**: `clamp(2.25rem, 5vw, 3.75rem)` (36px - 60px) - Section titles
- **H3**: `clamp(1.75rem, 3.5vw, 2.5rem)` (28px - 40px) - Card titles, subsections
- **H4**: `clamp(1.375rem, 2.5vw, 1.875rem)` (22px - 30px) - Feature titles

### Body Text (Inter - Sans-serif)

- **Base**: `1.0625rem` (17px) - Comfortable reading size
- **Mobile**: `1rem` (16px)
- **Line Height**: `1.7` - Excellent readability
- **Large**: `1.25rem` (20px) - Emphasized paragraphs

### Font Weights

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extra Bold: 800

---

## Hero Section Design ⭐

**IMPORTANT**: We love the hero sections as they are. Keep this design consistent across all pages.

### Design Principles

- **Earth-tone gradient**: Deep Sage → Terracotta (warm, welcoming, professional)
- **Consistent across all pages**: Homepage, About, Contact all use the same hero structure
- **Background images**: Subtle background with hero-gradient overlay
- **Backdrop-blur navbar**: Semi-transparent with blur for modern feel

### Homepage Hero - Full Screen

```
┌─────────────────────────────────────────────────┐
│ Navbar (Backdrop blur, Primary/30)              │
├─────────────────────────────────────────────────┤
│  Background Image + Hero Gradient Overlay       │
│                                                  │
│  Text Content (Left 55%)  │  George Image (45%) │
│  ┌─────────────────────┐  │  ┌────────────────┐ │
│  │ Veteran Badge       │  │  │                │ │
│  │ H1 Headline         │  │  │  Full Height   │ │
│  │ Description         │  │  │  Portrait      │ │
│  │ CTA Buttons         │  │  │  Image         │ │
│  │ Trust Indicators    │  │  │                │ │
│  └─────────────────────┘  │  └────────────────┘ │
│                                                  │
└─────────────────────────────────────────────────┘
```

### About & Contact Heroes - 60vh Height

```
┌─────────────────────────────────────────────────┐
│ Navbar (Backdrop blur, Primary/30)              │
├─────────────────────────────────────────────────┤
│  Background Image + Hero Gradient Overlay       │
│                                                  │
│              ┌─────────────────┐                │
│              │  Badge          │                │
│              │  H1 Headline    │                │
│              │  Description    │                │
│              │  (Centered)     │                │
│              └─────────────────┘                │
│                                                  │
└─────────────────────────────────────────────────┘
```

### Hero Components

1. **Background Layer**: Background image (sold home, icon background, etc.)
2. **Gradient Overlay**: `hero-gradient` - Deep Sage `#2c4a3e` → Terracotta `#a85d44`
3. **Navbar**: `bg-primary/30 backdrop-blur-md` - Semi-transparent with modern blur
4. **Badge**: Veteran badge or page-specific badge (Shield icon, etc.)
5. **Text Content**:
   - Badge with icon
   - Large H1 headline with `text-shadow-lg`
   - Description paragraph (`text-xl text-white/90`)
   - White text with shadows for readability over gradient
6. **Spacing**: `space-y-6` or `space-y-8` for vertical rhythm

### Hero Sizing

- **Homepage**: `h-screen` - Full viewport height
- **About/Contact**: `h-[60vh] min-h-[500px]` - 60% viewport with minimum height
- **Content area**: `h-[calc(100vh-5rem)]` or `h-[calc(60vh-5rem)]` (accounts for navbar)

### Hero Animations (GSAP)

- `.animate-fade-in-up` on main content
- Fade-in-up effect with opacity transition
- Staggered animations on homepage trust indicators
- 0.3s delay before start
- Smooth ease-out transitions

---

## Design Guidelines

### Component Design Principles

#### Cards

**Standard Cards** (Light backgrounds):

- White background with subtle border
- Rounded corners (`rounded-2xl` or `rounded-xl`)
- Hover effects: lift up 8px, enhanced shadow
- Top accent bar on hover (gradient strip)
- Smooth transitions (0.4s cubic-bezier)

**Glass-Morphism Cards** (Dark backgrounds):

- Semi-transparent white background: `rgba(255, 255, 255, 0.05)`
- Backdrop blur effect: `backdrop-filter: blur(12px)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Hover state: increase opacity to `0.1`, border to accent color
- Decorative corner accents on hover (golden lines)
- Used on blue-gray gradient backgrounds

```css
/* Standard Card Hover States */
- Transform: translateY(-8px)
- Shadow: 0 20px 40px rgba(0,0,0,0.12)
- Border: Accent color at 30% opacity
- Top bar: Gradient scale from 0 to 1

/* Glass Card Styles */
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass-hover:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(217, 160, 91, 0.3);
}
```

#### Buttons

- Uppercase text, increased letter spacing
- Gradient backgrounds (not solid colors)
- Large sizes for primary CTAs
- Ripple effect on hover (expanding circle)
- Scale and lift on hover (1.02 scale, -3px lift)
- Icons paired with text
- Rounded (`rounded-xl`)

**Button Sizes**:

- Default: `0.875rem padding, 0.9375rem font`
- Large: `1.125rem × 2.25rem padding, 1.0625rem font`

#### Sections

- Generous padding: `py-20` (5rem vertical)
- Alternating backgrounds (Base 100 ↔ Base 200)
- Pattern overlays (dots, grid) for visual interest
- Max width container: `max-w-7xl`
- Consistent spacing: `mb-16` for section headers

#### Icons

- Lucide icons throughout
- Colored backgrounds at 10% opacity
- Rounded containers (`rounded-full` or `rounded-lg`)
- Consistent sizing (w-5 h-5 for inline, w-6 h-6 for features)

### Gradient Patterns ⭐

**IMPORTANT**: The hero-gradient (Sage → Terracotta) is perfect. Use consistently on all hero sections.

```css
/* Hero Gradient - Earth Tones (Sage → Terracotta) ⭐ KEEP THIS */
.hero-gradient {
  background: linear-gradient(
    135deg,
    rgba(44, 74, 62, 0.92) 0%,    /* Deep Sage */
    rgba(168, 93, 68, 0.88) 100%  /* Warm Terracotta */
  );
}

/* Patriot Gradient - For Nav/Footer (Sage → Terracotta → Sage) */
.patriot-gradient {
  background: linear-gradient(
    135deg,
    #2c4a3e 0%,      /* Deep Sage */
    #a85d44 50%,     /* Warm Terracotta */
    #2c4a3e 100%     /* Deep Sage */
  );
}

/* Veteran Gradient - Blue-Gray (Veteran section ONLY) */
.veteran-gradient {
  background: linear-gradient(
    135deg,
    #2c3e50 0%,      /* Midnight Blue-Gray */
    #34495e 50%,     /* Wet Asphalt */
    #2c3e50 100%     /* Midnight Blue-Gray */
  );
}

/* CTA Gradient - Deep Sage */
.cta-gradient {
  background: linear-gradient(
    135deg,
    #2c4a3e 0%,
    #3a6250 50%,
    #2c4a3e 100%
  );
}

/* Button Gradients */
Primary: linear-gradient(135deg, #2c4a3e 0%, #3a6250 100%)     /* Sage green */
Secondary: linear-gradient(135deg, #a85d44 0%, #c67659 100%)   /* Terracotta */
Accent: linear-gradient(135deg, #d9a05b 0%, #edb970 100%)      /* Golden amber */

/* Icon Container Gradients */
Icon gradient: linear-gradient(to bottom right, rgba(217,160,91,0.3), rgba(217,160,91,0.1))
Border: 1px solid rgba(217,160,91,0.2)
```

### Background Patterns

```css
/* Dot Pattern */
.pattern-dots {
  background-image: radial-gradient(
    circle,
    rgba(217, 160, 91, 0.12) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}

/* Grid Pattern */
.pattern-grid {
  background-image:
    linear-gradient(rgba(217, 160, 91, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(217, 160, 91, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

### Text Shadows (For Text Over Images)

```css
.text-shadow-sm {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
.text-shadow {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}
.text-shadow-lg {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}
```

### Animation Guidelines

**GSAP Scroll Animations**:

- Section headers: Fade in up, staggered children
- Service cards: Fade in up with 0.2s stagger
- Process steps: Scale + fade in with back easing
- Images: Fade in with slight scale (1.05 → 1)
- Trigger: `start: 'top 70-85%'`

**Hover Micro-interactions**:

- Buttons: Scale to 1.05, lift -3px
- Cards: Lift -8px, enhanced shadow
- Images: Slight scale on parent hover
- Duration: 0.3-0.4s
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)`

**Performance**:

- Use `transform` and `opacity` for animations (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly

### Spacing System

**Vertical Rhythm**:

- Section padding: `py-20` (5rem)
- Section headers margin: `mb-16` (4rem)
- Card spacing: `gap-8` (2rem)
- Content spacing: `space-y-6` (1.5rem)

**Container Widths**:

- Max width: `max-w-7xl` (1280px)
- Text content: `max-w-3xl` (768px)
- Centered with `mx-auto`

### Responsive Breakpoints

```css
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
Large Desktop: > 1280px
```

**Mobile Adjustments**:

- Hide George's image on mobile (< lg)
- Reduce heading sizes via clamp()
- Stack grid layouts to single column
- Smaller button padding
- Reduce vertical padding (py-12 instead of py-20)

---

## Image Guidelines

### Hero Images

- **Format**: WebP (optimized via Astro)
- **Quality**: High resolution, professionally shot
- **Aspect Ratio**: Maintain original for portrait images
- **Positioning**: `object-cover` with strategic focal point

### Card Images

- **Height**: Fixed at `h-56` (224px)
- **Overlay**: Dark gradient from bottom (60% opacity)
- **Text Overlay**: White text with shadow on bottom-left
- **Hover**: Slight scale effect on parent card

### Profile Images

- **Style**: Professional, approachable
- **Background**: Clean, uncluttered
- **Sizing**: `rounded-2xl` with `shadow-2xl`
- **Context**: Use in About, Why Choose Me sections

---

## Veteran/Military Design Elements

### Veteran Badge

```html
<span class="badge-veteran">
  <Shield class="w-4 h-4" />
  Veteran-Friendly Agent
</span>
```

- Gradient background (Secondary → Primary)
- Shield icon from Lucide
- Uppercase, tracked text
- Pill shape (fully rounded)

### Patriot Sections

- Use `patriot-gradient` background
- Pattern overlay at 20-30% opacity
- White text with text shadows
- Shield and military iconography
- Respectful, professional tone

---

## Content Strategy

### Voice & Tone

- **Professional yet warm**: Not overly corporate, approachable
- **Confident**: Expertise-driven language
- **Service-oriented**: Focus on client benefits
- **Respectful**: Especially for veteran content

### Key Messaging

1. Local Delaware expertise
2. Veteran advocacy and VA loan specialization
3. Personalized, client-first service
4. Availability and dedication (24/7)
5. Modern marketing and technology

### Call-to-Actions

- Primary: "Contact Me Today", "Get Started"
- Secondary: "Browse Properties", "Learn More"
- Veteran-specific: "Schedule Consultation"

---

## Known Issues / TODO

### Font Sizing

- [ ] Review and standardize heading sizes across all pages
- [ ] Ensure consistency between mobile and desktop scales
- [ ] Fine-tune paragraph sizing for optimal readability
- [ ] Audit button font sizes for hierarchy

### Gradients

- [ ] Standardize gradient angles (currently mix of 135deg)
- [ ] Review gradient opacity for readability
- [ ] Simplify gradient definitions (reduce complexity)
- [ ] Test gradients on various screen sizes
- [ ] Consider reducing number of unique gradients

### Other Refinements

- [ ] Optimize GSAP animation performance
- [ ] Add loading states for images
- [ ] Improve mobile navigation experience
- [ ] Add focus states for accessibility
- [ ] Test color contrast ratios (WCAG AA)

---

## File Structure

```
src/
├── assets/          # Images and icons
├── components/      # Reusable components
│   └── Navbar.astro
├── layouts/         # Page layouts
│   └── Layout.astro
├── pages/           # Route pages
│   ├── index.astro  # Home page (Hero design)
│   ├── about.astro
│   ├── contact.astro
│   └── explore.astro
└── styles/
    └── global.css   # Design system, theme, utilities
```

---

## Development Notes

### When Adding New Sections

1. Follow alternating background pattern (Base 100 ↔ Base 200)
2. Add pattern overlay if background is colored
3. Include section header with accent label
4. Use consistent padding (`py-20`)
5. Add GSAP scroll animation
6. Test on mobile breakpoints

### When Creating New Components

1. Use existing color variables (no hardcoded colors)
2. Include hover states and transitions
3. Use semantic HTML
4. Add appropriate ARIA labels
5. Test keyboard navigation
6. Follow established spacing system

### Performance Checklist

- [ ] Optimize images (WebP format, appropriate sizes)
- [ ] Lazy load below-fold images
- [ ] Minimize animation complexity
- [ ] Use CSS transforms for animations
- [ ] Defer non-critical JavaScript
- [ ] Test on mobile devices

---

## Brand Assets

### Logo

- RE/MAX logo used in footer
- Consistent sizing: `h-16`
- White background container with shadow

### Photography Style

- Professional real estate photography
- Delaware locations and landmarks
- Warm, natural lighting
- Lifestyle shots (George with clients)
- Properties in various states (homes, beaches, neighborhoods)

### Iconography

- **Library**: Lucide icons
- **Style**: Outline/stroke based
- **Colors**: Theme colors (primary, secondary, accent)
- **Sizing**: Consistent (w-5 h-5 standard, w-6 h-6 emphasized)

---

## Accessibility

### Current Implementation

- Semantic HTML structure
- Alt text on all images
- Color contrast (earth tones chosen for readability)
- Responsive text sizing (clamp for fluid typography)
- Keyboard-accessible navigation

### To Improve

- [ ] Add skip-to-content link
- [ ] Improve focus indicators
- [ ] Add ARIA labels to interactive elements
- [ ] Test with screen readers
- [ ] Verify color contrast ratios (WCAG AA minimum)
- [ ] Add reduced motion preferences

---

## Testing Checklist

### Browser Testing

- [ ] Chrome/Edge (Chromium)
- [ ] Firefox
- [ ] Safari (macOS and iOS)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Device Testing

- [ ] Desktop (1920x1080, 1440p)
- [ ] Laptop (1366x768, 1440x900)
- [ ] Tablet (iPad, Android tablets)
- [ ] Mobile (iPhone, Android phones)

### Performance Testing

- [ ] Lighthouse score > 90
- [ ] Page load < 3s
- [ ] First Contentful Paint < 1.5s
- [ ] Images optimized and lazy loaded
- [ ] No layout shift (CLS < 0.1)

---

## Version History

### Current Version (November 2025) ⭐

- **Earth Tone Color Palette**: Sage greens and terracotta with subtle blue accents
  - Primary: Deep Sage `#2c4a3e`
  - Secondary: Warm Terracotta `#a85d44`
  - Accent: Golden Amber `#d9a05b`
  - Ocean Blue `#2c5f6f` - subtle accent in section backgrounds
  - Blue-Gray (`#2c3e50`, `#34495e`) - Veteran section only

- **Hero Sections - CONSISTENT ACROSS ALL PAGES** ⭐
  - Beautiful earth-tone gradient: Deep Sage → Terracotta
  - Backdrop-blur navbar for modern feel
  - Homepage: Full-screen with George's portrait on right
  - About/Contact: 60vh height, centered content
  - Background images with gradient overlays
  - White text with shadows for readability

- **Typography - Larger, More Readable**
  - Base text: 1.125rem (18px) - 14pt+ equivalent
  - Emphasized text: 1.25rem (20px)
  - Large text: 1.5rem (24px)
  - Improved readability across all pages

- **Alternating Section Backgrounds** ⭐
  - White → Sage Green → Ocean Blue → Cream → repeat
  - Creates visual rhythm and depth
  - Applied consistently: Homepage, About, Contact

- **Section Design**:
  - Hero: Earth-tone gradient overlay (KEEP THIS)
  - Services: Sage green background
  - Veteran: Blue-gray gradient with glass-morphism
  - Process: Ocean blue background
  - "Why Choose Me": Cream background
  - CTA: Earth-tone gradient

- **Technical**:
  - GSAP scroll animations
  - Mobile-responsive design
  - Backdrop blur effects
  - Glass-morphism on veteran section

### Previous Versions

- **Initial**: Basic layout and structure

### In Progress

- Font sizing standardization
- Animation performance optimization
- Accessibility improvements

---

Last Updated: 2025-11-15
