# Color Palette

Earth tone palette with subtle blue accents—conveys stability, growth, and warmth.

## Primary Colors (Dominant)

| Name | Hex | Use |
|------|-----|-----|
| **Deep Sage** | `#2c4a3e` | Navigation, primary buttons, headings, hero gradients, CTA sections |
| **Warm Terracotta** | `#a85d44` | Hero gradient accents, secondary buttons, highlights, footer |
| **Golden Amber** | `#d9a05b` | CTAs, important highlights, veteran badges, icons, decorative elements |

## Accent Colors

| Name | Hex | Use |
|------|-----|-----|
| Ocean Blue | `#2c5f6f` | Sparingly in section backgrounds |
| Midnight Blue-Gray | `#2c3e50` | Veteran section only |
| Wet Asphalt | `#34495e` | Veteran section gradient |

## Neutrals

- **Rich Black** `#1a1a1a` - Base content
- **White** `#ffffff` - Base 100
- **Soft Sage Mist** `#f5f7f5` - Base 200
- **Light Seafoam** `#e8f0ef` - Base 250
- **Pale Sage** `#dce8e3` - Base 300

## Section Backgrounds (Alternating)

- **Light** `#ffffff`
- **Sage** `#f0f4f1`
- **Ocean Mist** `#f0f5f7`
- **Cream** `#faf8f5`

## Functional

- Info: `#2563eb` | Success: `#059669` | Warning: `#d97706` | Error: `#dc2626`

---

## Gradients

### Hero Gradient ⭐ (Protected)

```css
.hero-gradient {
  background: linear-gradient(
    135deg,
    rgba(44, 74, 62, 0.92) 0%,
    rgba(168, 93, 68, 0.88) 100%
  );
}
```

### Other Gradients

```css
/* Patriot - Nav/Footer */
.patriot-gradient {
  background: linear-gradient(135deg, #2c4a3e 0%, #a85d44 50%, #2c4a3e 100%);
}

/* Veteran - Blue-Gray (veteran section only) */
.veteran-gradient {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%);
}

/* CTA */
.cta-gradient {
  background: linear-gradient(135deg, #2c4a3e 0%, #3a6250 50%, #2c4a3e 100%);
}
```

### Button Gradients

```css
Primary:   linear-gradient(135deg, #2c4a3e 0%, #3a6250 100%)
Secondary: linear-gradient(135deg, #a85d44 0%, #c67659 100%)
Accent:    linear-gradient(135deg, #d9a05b 0%, #edb970 100%)
```

### Icon Container

```css
background: linear-gradient(to bottom right, rgba(217,160,91,0.3), rgba(217,160,91,0.1));
border: 1px solid rgba(217,160,91,0.2);
```
