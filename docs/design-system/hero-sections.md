# Hero Sections ⭐

**PROTECTED**: Keep hero design consistent across all pages.

## Design Principles

- Earth-tone gradient: Deep Sage → Terracotta
- Background images with `hero-gradient` overlay
- Navbar: `bg-primary/30 backdrop-blur-md`
- White text with shadows for readability

---

## Homepage Hero (Full Screen)

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
└─────────────────────────────────────────────────┘
```

- Height: `h-screen`
- Content area: `h-[calc(100vh-5rem)]`
- Hide George's image on mobile (`< lg`)

---

## About & Contact Heroes (60vh)

```
┌─────────────────────────────────────────────────┐
│ Navbar (Backdrop blur, Primary/30)              │
├─────────────────────────────────────────────────┤
│  Background Image + Hero Gradient Overlay       │
│              ┌─────────────────┐                │
│              │  Badge          │                │
│              │  H1 Headline    │                │
│              │  Description    │                │
│              │  (Centered)     │                │
│              └─────────────────┘                │
└─────────────────────────────────────────────────┘
```

- Height: `h-[60vh] min-h-[500px]`
- Content area: `h-[calc(60vh-5rem)]`

---

## Hero Components

1. **Background Layer**: Background image
2. **Gradient Overlay**: `hero-gradient`
3. **Navbar**: `bg-primary/30 backdrop-blur-md`
4. **Badge**: Veteran or page-specific (Shield icon)
5. **Text**: H1 with `text-shadow-lg`, description `text-xl text-white/90`
6. **Spacing**: `space-y-6` or `space-y-8`

## Animations (GSAP)

- `.animate-fade-in-up` on main content
- Staggered animations on trust indicators
- 0.3s delay, ease-out transitions
