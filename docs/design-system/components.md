# Components

## Cards

### Standard Cards (Light backgrounds)

- White background with subtle border
- Rounded corners: `rounded-2xl` or `rounded-xl`
- Hover: lift 8px, enhanced shadow, top accent bar appears

```css
/* Hover State */
transform: translateY(-8px);
box-shadow: 0 20px 40px rgba(0,0,0,0.12);
border-color: rgba(217, 160, 91, 0.3);
transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

### Glass-Morphism Cards (Dark backgrounds)

```css
.glass {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.glass:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(217, 160, 91, 0.3);
}
```

Used on blue-gray gradient backgrounds. Add decorative corner accents on hover.

---

## Buttons

- Uppercase text, increased letter spacing
- Gradient backgrounds (not solid)
- Rounded: `rounded-xl`
- Icons paired with text

### Sizes

| Size | Padding | Font |
|------|---------|------|
| Default | `0.875rem` | `0.9375rem` |
| Large | `1.125rem × 2.25rem` | `1.0625rem` |

### Hover

```css
transform: scale(1.05) translateY(-3px);
transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

---

## Icons (Lucide)

- Colored backgrounds at 10% opacity
- Containers: `rounded-full` or `rounded-lg`
- Inline: `w-5 h-5` | Features: `w-6 h-6`
