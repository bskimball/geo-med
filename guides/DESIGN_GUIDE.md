# Design Guide - George Medairy Real Estate

> Quick reference guide for designers and developers working on the George Medairy Real Estate website.

---

## Quick Color Reference

### Primary Palette

| Color Name | Hex Code | Usage | CSS Variable |
|------------|----------|-------|--------------|
| **Deep Sage** | `#2c4a3e` | Primary buttons, headers, navigation | `--color-primary` |
| **Warm Terracotta** | `#a85d44` | Secondary buttons, accents | `--color-secondary` |
| **Golden Amber** | `#d9a05b` | CTAs, highlights, veteran badges | `--color-accent` |
| **Rich Black** | `#1a1a1a` | Body text | `--color-base-content` |
| **White** | `#ffffff` | Backgrounds, light text | `--color-base-100` |
| **Soft Cream** | `#faf8f5` | Alternate backgrounds | `--color-base-200` |
| **Warm Sand** | `#f0ebe3` | Tertiary backgrounds | `--color-base-300` |

### Color Psychology
- **Deep Sage**: Trust, stability, growth, professional
- **Warm Terracotta**: Welcoming, home, grounded, comfortable
- **Golden Amber**: Premium, success, achievement, warmth

---

## Typography

### Font Pairings

**Headings**: Playfair Display (Serif)
**Body**: Inter (Sans-serif)

```css
font-family: 'Playfair Display', Georgia, serif;  /* Headings */
font-family: 'Inter', system-ui, sans-serif;      /* Body */
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Usage |
|---------|---------------|---------------|--------|-------|
| **H1** | 88px (5.5rem) | 48px (3rem) | 800 | Hero headlines only |
| **H2** | 60px (3.75rem) | 36px (2.25rem) | 700 | Section titles |
| **H3** | 40px (2.5rem) | 28px (1.75rem) | 600 | Card titles, subsections |
| **H4** | 30px (1.875rem) | 22px (1.375rem) | 600 | Feature titles |
| **Body** | 17px (1.0625rem) | 16px (1rem) | 400 | Paragraph text |
| **Body Large** | 20px (1.25rem) | 18px (1.125rem) | 400 | Emphasized paragraphs |
| **Small** | 15px (0.9375rem) | 14px (0.875rem) | 400 | Helper text, captions |

### Typography Rules

✅ **DO**
- Use Playfair Display for all headings (h1-h6)
- Use Inter for body text, buttons, and UI elements
- Maintain line-height of 1.7 for body text
- Use letter-spacing: -0.025em for headings
- Add text shadows when text overlays images

❌ **DON'T**
- Mix serif fonts in body text
- Use more than 3 font weights per font family
- Go below 16px for body text on mobile
- Use all caps for long paragraphs

---

## Component Library

### Buttons

#### Button Variants

```html
<!-- Primary -->
<a href="#" class="btn btn-primary">Primary Action</a>

<!-- Secondary -->
<a href="#" class="btn btn-secondary">Secondary Action</a>

<!-- Accent (Main CTA) -->
<a href="#" class="btn btn-accent">Contact Now</a>

<!-- Large Size -->
<a href="#" class="btn btn-accent btn-lg">Get Started</a>
```

#### Button Specifications

| Variant | Background | Text Color | Use Case |
|---------|-----------|------------|----------|
| Primary | Deep Sage gradient | White | Navigation, primary actions |
| Secondary | Terracotta gradient | White | Secondary CTAs |
| Accent | Golden Amber gradient | Rich Black | Hero CTAs, important actions |

**Spacing**:
- Default: `padding: 0.875rem 1.75rem`
- Large: `padding: 1.125rem 2.25rem`
- Border radius: `rounded-xl` (12px)

**Hover States**:
- Scale: `1.05`
- Transform: `translateY(-3px)`
- Shadow: Enhanced
- Ripple effect (expanding circle)

---

### Cards

#### Standard Card Structure

```html
<div class="card bg-base-100 shadow-xl rounded-2xl">
  <div class="card-body">
    <!-- Content here -->
  </div>
</div>
```

#### Card Specifications

- **Background**: White (`#ffffff`)
- **Border**: `1px solid rgba(0,0,0,0.08)`
- **Border Radius**: `rounded-2xl` (16px)
- **Shadow**: `shadow-xl`
- **Padding**: `p-8` (2rem)

**Hover Effect**:
- Lift: `translateY(-8px)`
- Shadow: `0 20px 40px rgba(0,0,0,0.12)`
- Top accent bar: Gradient scale from 0 to 1
- Border: Accent color at 30% opacity
- Transition: `0.4s cubic-bezier(0.4, 0, 0.2, 1)`

---

### Service Cards (Image + Content)

```html
<div class="card bg-base-100 shadow-xl service-card rounded-lg overflow-hidden border">
  <div class="relative h-56 overflow-hidden">
    <img src="..." class="card-image w-full h-full object-cover" />
    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
    <div class="absolute bottom-4 left-4 right-4">
      <h3 class="text-white font-bold text-2xl text-shadow">Title</h3>
    </div>
  </div>
  <div class="card-body">
    <!-- Content -->
  </div>
</div>
```

**Image Specifications**:
- Height: `h-56` (224px fixed)
- Overlay: Dark gradient from bottom (60% opacity)
- Text: White with shadow, bottom-left positioning

---

### Badges

#### Veteran Badge

```html
<span class="badge-veteran">
  <Shield class="w-4 h-4" />
  Veteran-Friendly Agent
</span>
```

**Styling**:
- Background: Gradient (Secondary → Primary)
- Text: White, uppercase, tracked
- Shape: Pill (`rounded-2rem`)
- Padding: `0.5rem 1rem`
- Icon: Shield (Lucide)

---

### Icons

**Library**: [Lucide Icons](https://lucide.dev/)

**Standard Sizes**:
- Inline with text: `w-5 h-5` (20px)
- Feature icons: `w-6 h-6` (24px)
- Large feature icons: `w-8 h-8` (32px)

**Icon Container Pattern**:

```html
<div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
  <Award class="w-6 h-6 text-accent" />
</div>
```

**Container Variants**:
- Circle: `rounded-full`
- Rounded square: `rounded-lg`
- Background: Color at 10-20% opacity
- Icon color: Full theme color

---

## Gradients

### Gradient Definitions

```css
/* Hero Gradient (Over images) */
background: linear-gradient(
  135deg,
  rgba(44, 74, 62, 0.92) 0%,
  rgba(168, 93, 68, 0.88) 100%
);

/* Patriot Gradient (Veteran sections) */
background: linear-gradient(
  135deg,
  #2c4a3e 0%,
  #a85d44 50%,
  #2c4a3e 100%
);

/* CTA Gradient */
background: linear-gradient(
  135deg,
  #2c4a3e 0%,
  #3a6250 50%,
  #2c4a3e 100%
);

/* Button Gradients */
/* Primary */
background: linear-gradient(135deg, #2c4a3e 0%, #3a6250 100%);

/* Secondary */
background: linear-gradient(135deg, #a85d44 0%, #c67659 100%);

/* Accent */
background: linear-gradient(135deg, #d9a05b 0%, #edb970 100%);
```

### Gradient Usage

| Gradient | Class | Usage |
|----------|-------|-------|
| Hero | `.hero-gradient` | Hero section overlays |
| Patriot | `.patriot-gradient` | Veteran/military sections |
| CTA | `.cta-gradient` | Call-to-action sections |

---

## Background Patterns

### Dot Pattern

```css
.pattern-dots {
  background-image: radial-gradient(
    circle,
    rgba(217, 160, 91, 0.12) 1px,
    transparent 1px
  );
  background-size: 24px 24px;
}
```

**Usage**: Overlay on colored backgrounds for subtle texture

### Grid Pattern

```css
.pattern-grid {
  background-image:
    linear-gradient(rgba(217, 160, 91, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(217, 160, 91, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

**Usage**: Section backgrounds, especially for process/steps sections

---

## Spacing System

### Tailwind Spacing Reference

| Class | Size | Pixels | Usage |
|-------|------|--------|-------|
| `gap-4` | 1rem | 16px | Small element spacing |
| `gap-8` | 2rem | 32px | Card grids, medium spacing |
| `gap-12` | 3rem | 48px | Large content blocks |
| `gap-16` | 4rem | 64px | Section spacing |
| `py-12` | 3rem | 48px | Mobile section padding |
| `py-20` | 5rem | 80px | Desktop section padding |
| `mb-6` | 1.5rem | 24px | Paragraph spacing |
| `mb-16` | 4rem | 64px | Section header spacing |

### Container Widths

```css
.container {
  max-width: 1280px;  /* 7xl */
  margin: 0 auto;
  padding: 0 1rem;
}

/* Content containers */
max-w-3xl  /* 768px - For text content */
max-w-4xl  /* 896px - For CTAs, centered content */
max-w-7xl  /* 1280px - For full sections */
```

---

## Layout Patterns

### Section Structure

```html
<section class="py-20 bg-base-100">
  <div class="container mx-auto max-w-7xl px-4">

    <!-- Section Header -->
    <div class="text-center mb-16 max-w-3xl mx-auto">
      <span class="text-accent font-semibold uppercase tracking-wider text-sm">
        Label
      </span>
      <h2 class="mt-4 mb-6">Section Title</h2>
      <p class="text-lg text-base-content/70">
        Description text
      </p>
    </div>

    <!-- Section Content -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Cards or content -->
    </div>

  </div>
</section>
```

### Grid Layouts

**Common Grid Patterns**:

```html
<!-- 3 Column (Desktop) -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<!-- 2 Column (Desktop) -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<!-- 4 Column Stats -->
<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
```

### Alternating Backgrounds

Follow this pattern for visual rhythm:

```
Section 1: bg-base-100 (white)
Section 2: bg-base-200 (soft cream)
Section 3: bg-base-100 (white)
Section 4: patriot-gradient (colored)
Section 5: bg-base-100 (white)
```

---

## Animation Guidelines

### GSAP Scroll Animations

#### Section Headers

```javascript
gsap.fromTo(
  element.children,
  { y: 30, opacity: 0 },
  {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      toggleActions: 'play none none none',
    },
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power2.out',
  }
);
```

#### Cards (Stagger Effect)

```javascript
gsap.fromTo(
  '.service-card',
  { y: 80, opacity: 0 },
  {
    scrollTrigger: {
      trigger: '.services-section',
      start: 'top 70%',
    },
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: 'power3.out',
  }
);
```

### Animation Timing

| Element | Duration | Delay | Stagger | Easing |
|---------|----------|-------|---------|--------|
| Section headers | 0.8s | - | 0.15s | power2.out |
| Cards | 1s | - | 0.2s | power3.out |
| Process steps | 0.9s | - | 0.25s | back.out(1.7) |
| Images | 1.2s | - | - | power2.out |
| Hero content | 1s | 0.3s | - | power3.out |

### Hover Animations

```css
/* Standard hover lift */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
transform: translateY(-4px);

/* Button hover */
transform: translateY(-3px) scale(1.05);
transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

/* Card hover */
transform: translateY(-8px);
transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

**Performance Note**: Always animate `transform` and `opacity` only (GPU accelerated).

---

## Text Overlays

### Text Shadow Utilities

Use these when placing text over images:

```css
.text-shadow-sm  /* 0 1px 2px rgba(0,0,0,0.3) */
.text-shadow     /* 0 2px 4px rgba(0,0,0,0.4) */
.text-shadow-lg  /* 0 4px 8px rgba(0,0,0,0.5) */
```

### Image Gradient Overlays

```html
<!-- Dark gradient from bottom -->
<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

<!-- Overall dark overlay -->
<div class="absolute inset-0 bg-black/40"></div>
```

**Best Practices**:
- Always add gradient or solid overlay when placing text on images
- Use appropriate text-shadow class for additional readability
- White text on dark overlays, dark text on light overlays
- Test contrast ratio (WCAG AA: 4.5:1 minimum)

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
sm:  640px   /* Small tablets */
md:  768px   /* Tablets */
lg:  1024px  /* Laptops */
xl:  1280px  /* Desktops */
2xl: 1536px  /* Large desktops */
```

### Mobile Adjustments

**Typography**:
- Base font: 16px (vs 17px desktop)
- Buttons: Smaller padding
- Headings: Reduce via clamp()

**Layout**:
- Hide decorative images < lg
- Stack grids to single column
- Reduce section padding (py-12 vs py-20)
- Full-width on mobile, add padding

**Navigation**:
- Hamburger menu < lg
- Full-screen mobile menu
- Larger touch targets (min 44x44px)

---

## Image Guidelines

### Format & Optimization

- **Format**: WebP (via Astro optimization)
- **Loading**: Lazy load below-fold images
- **Alt text**: Always required, descriptive
- **Aspect ratios**: Maintain original for portraits

### Image Sizes

| Usage | Dimensions | Class |
|-------|-----------|-------|
| Hero background | 1920x1080+ | Full screen |
| Hero portrait | 1000x1400+ | Full height |
| Card images | 800x600 | `h-56` fixed |
| Profile images | 800x800+ | Responsive |
| Thumbnails | 400x400 | Small icons |

### Image Effects

```html
<!-- Rounded corners with shadow -->
<img class="rounded-2xl shadow-2xl" />

<!-- Full cover with positioning -->
<img class="w-full h-full object-cover object-center" />

<!-- Portrait positioning -->
<img class="object-cover object-bottom" />
```

---

## Accessibility

### Color Contrast

All color combinations meet WCAG AA standards:

✅ **Passing Combinations**:
- White text on Deep Sage: **7.3:1**
- White text on Terracotta: **4.8:1**
- Rich Black text on Golden Amber: **8.1:1**
- Rich Black text on White: **16.7:1**

### Focus States

```css
/* Add visible focus states */
.btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Semantic HTML

✅ **DO**:
- Use `<nav>` for navigation
- Use `<header>`, `<main>`, `<footer>` landmarks
- Use `<section>` with headings
- Use `<button>` for actions, `<a>` for links
- Add `alt` text to all images

❌ **DON'T**:
- Use `<div>` for buttons
- Skip heading levels (h2 → h4)
- Use images without alt text
- Rely on color alone for information

---

## Brand Voice & Messaging

### Tone

- **Professional yet warm**: Approachable expertise
- **Confident**: Data and experience-driven
- **Service-oriented**: Client benefit focused
- **Respectful**: Especially for veteran content

### Key Messages

1. **Local Expertise**: "Delaware real estate specialist"
2. **Veteran Advocacy**: "Proudly serving those who served"
3. **Personal Service**: "24/7 availability, personalized approach"
4. **Results**: "Proven track record of success"

### Writing Style

✅ **DO**:
- Use active voice
- Keep paragraphs short (2-4 sentences)
- Include clear CTAs
- Focus on benefits, not just features
- Use "you" and "your" (client-focused)

❌ **DON'T**:
- Use jargon without explanation
- Write long paragraphs
- Be overly salesy or pushy
- Make unverifiable claims

---

## Common Patterns Quick Reference

### Trust Indicator

```html
<div class="flex items-center gap-3 text-white/90">
  <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
    <Award class="w-6 h-6 text-accent" />
  </div>
  <div>
    <div class="font-bold">Dedicated</div>
    <div class="text-sm text-white/70">Personal Service</div>
  </div>
</div>
```

### Feature List Item

```html
<li class="flex items-center gap-2">
  <CircleCheck class="w-4 h-4 text-accent flex-shrink-0" />
  <span>Feature description</span>
</li>
```

### Section Label

```html
<span class="text-accent font-semibold uppercase tracking-wider text-sm">
  Services
</span>
```

### Stats Display

```html
<div class="text-center space-y-2">
  <div class="text-4xl font-bold text-primary" style="font-family: var(--font-serif);">
    100+
  </div>
  <div class="text-sm uppercase tracking-wider text-base-content/70">
    Happy Clients
  </div>
</div>
```

---

## Design Checklist

### Before Launch

**Visual Design**:
- [ ] All colors from defined palette
- [ ] Typography hierarchy consistent
- [ ] Proper spacing throughout
- [ ] Images optimized (WebP)
- [ ] Animations smooth and performant

**Responsiveness**:
- [ ] Mobile layout tested (320px - 768px)
- [ ] Tablet layout tested (768px - 1024px)
- [ ] Desktop layout tested (1024px+)
- [ ] No horizontal scroll
- [ ] Touch targets min 44x44px

**Accessibility**:
- [ ] Color contrast passes WCAG AA
- [ ] All images have alt text
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Semantic HTML used

**Performance**:
- [ ] Images lazy loaded
- [ ] Lighthouse score > 90
- [ ] No layout shift
- [ ] Fast first paint

**Content**:
- [ ] No lorem ipsum
- [ ] All CTAs functional
- [ ] Contact info correct
- [ ] Links work
- [ ] Grammar/spelling checked

---

## Resources

### Design Tools
- **Figma**: Component library and mockups
- **Adobe XD**: Alternative design tool
- **Coolors**: Color palette generator
- **Google Fonts**: Playfair Display, Inter

### Development Tools
- **Astro**: Framework
- **Tailwind CSS**: Utility-first CSS
- **DaisyUI**: Component library
- **GSAP**: Animation library
- **Lucide Icons**: Icon library

### Testing Tools
- **Chrome DevTools**: Responsive testing
- **Lighthouse**: Performance audit
- **WebAIM**: Contrast checker
- **WAVE**: Accessibility checker

---

## Support & Questions

For design questions or clarifications:
1. Review this guide first
2. Check CLAUDE.md for comprehensive documentation
3. Review existing implementations on live pages
4. Maintain consistency with established patterns

---

**Last Updated**: 2025-11-15
**Version**: 1.0
**Design System**: Sophisticated Earth Tones
