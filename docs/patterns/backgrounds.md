# Backgrounds & Patterns

## Section Alternation

Alternate backgrounds for visual rhythm:

1. White (`#ffffff`)
2. Sage Green (`#f0f4f1`)
3. Ocean Blue (`#f0f5f7`)
4. Cream (`#faf8f5`)

---

## Pattern Overlays

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

### Grid Pattern

```css
.pattern-grid {
  background-image:
    linear-gradient(rgba(217, 160, 91, 0.06) 1px, transparent 1px),
    linear-gradient(90deg, rgba(217, 160, 91, 0.06) 1px, transparent 1px);
  background-size: 32px 32px;
}
```

---

## Text Shadows (Over Images)

```css
.text-shadow-sm { text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3); }
.text-shadow    { text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4); }
.text-shadow-lg { text-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); }
```
