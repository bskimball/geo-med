# Animations

## GSAP Scroll Animations

| Element | Animation | Trigger |
|---------|-----------|---------|
| Section headers | Fade in up, staggered children | `top 70-85%` |
| Service cards | Fade in up, 0.2s stagger | `top 80%` |
| Process steps | Scale + fade in, back easing | `top 75%` |
| Images | Fade in, scale 1.05 → 1 | `top 80%` |

---

## Hover Micro-interactions

| Element | Effect | Duration |
|---------|--------|----------|
| Buttons | Scale 1.05, lift -3px | 0.3s |
| Cards | Lift -8px, enhanced shadow | 0.4s |
| Images | Slight scale on parent hover | 0.3s |

**Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`

---

## Performance

- Use `transform` and `opacity` only (GPU accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
