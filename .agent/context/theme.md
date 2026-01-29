# Tin-Up Design System

## Source

Design extracted from: https://stitch.withgoogle.com/projects/6818248438982109184

**Last Updated**: 2026-01-29

---

## Stitch Design Theme Configuration

| Property    | Value                  |
| ----------- | ---------------------- |
| colorMode   | LIGHT                  |
| font        | INTER                  |
| roundness   | ROUND_TWELVE (12px)    |
| customColor | `#135bec`              |
| saturation  | 3 (High)               |

---

## Color Palette

### Primary Colors (Stitch Design: #135bec)

| Name              | Hex Code    | CSS Variable             | Tailwind              | Usage                       |
| ----------------- | ----------- | ------------------------ | --------------------- | --------------------------- |
| Primary 50        | `#eef4fd`   | `--color-primary-50`     | `bg-[#eef4fd]`        | Very light backgrounds      |
| Primary 100       | `#dce9fc`   | `--color-primary-100`    | `bg-[#dce9fc]`        | Light backgrounds           |
| Primary 200       | `#b9d3f9`   | `--color-primary-200`    | `bg-[#b9d3f9]`        | Lighter accent              |
| Primary 300       | `#86b4f4`   | `--color-primary-300`    | `bg-[#86b4f4]`        | Light accent                |
| Primary 400       | `#4d8def`   | `--color-primary-400`    | `bg-[#4d8def]`        | Medium accent               |
| **Primary 500**   | `#135bec`   | `--color-primary-500`    | `bg-[#135bec]`        | **Primary buttons, links**  |
| Primary 600       | `#0f4ac7`   | `--color-primary-600`    | `bg-[#0f4ac7]`        | Hover states                |
| Primary 700       | `#0b3a9e`   | `--color-primary-700`    | `bg-[#0b3a9e]`        | Active states               |
| Primary 800       | `#082b75`   | `--color-primary-800`    | `bg-[#082b75]`        | Dark accent                 |
| Primary 900       | `#051c4d`   | `--color-primary-900`    | `bg-[#051c4d]`        | Darkest accent              |

### Aurora Gradient Colors

| Name          | Hex Code  | CSS Variable          | Usage           |
| ------------- | --------- | --------------------- | --------------- |
| Aurora Blue   | `#135bec` | `--color-primary-500` | Gradient start  |
| Aurora Purple | `#a855f7` | `--color-purple-500`  | Gradient middle |
| Aurora Orange | `#fb923c` | `--color-orange-400`  | Gradient end    |

### Secondary Colors

#### Purple Scale

| Name       | Hex Code  | CSS Variable          |
| ---------- | --------- | --------------------- |
| Purple 50  | `#faf5ff` | `--color-purple-50`   |
| Purple 100 | `#f3e8ff` | `--color-purple-100`  |
| Purple 200 | `#e9d5ff` | `--color-purple-200`  |
| Purple 300 | `#d8b4fe` | `--color-purple-300`  |
| Purple 400 | `#c084fc` | `--color-purple-400`  |
| Purple 500 | `#a855f7` | `--color-purple-500`  |
| Purple 600 | `#9333ea` | `--color-purple-600`  |
| Purple 700 | `#7e22ce` | `--color-purple-700`  |

#### Orange Scale

| Name       | Hex Code  | CSS Variable          |
| ---------- | --------- | --------------------- |
| Orange 50  | `#fff7ed` | `--color-orange-50`   |
| Orange 100 | `#ffedd5` | `--color-orange-100`  |
| Orange 200 | `#fed7aa` | `--color-orange-200`  |
| Orange 300 | `#fdba74` | `--color-orange-300`  |
| Orange 400 | `#fb923c` | `--color-orange-400`  |
| Orange 500 | `#f97316` | `--color-orange-500`  |
| Orange 600 | `#ea580c` | `--color-orange-600`  |

### Gray Scale (Neutral Colors)

| Name     | Hex Code  | CSS Variable        | Usage                    |
| -------- | --------- | ------------------- | ------------------------ |
| Gray 50  | `#f9fafb` | `--color-gray-50`   | Light backgrounds        |
| Gray 100 | `#f3f4f6` | `--color-gray-100`  | Card backgrounds         |
| Gray 200 | `#e5e7eb` | `--color-gray-200`  | Borders, dividers        |
| Gray 300 | `#d1d5db` | `--color-gray-300`  | Input borders            |
| Gray 400 | `#9ca3af` | `--color-gray-400`  | Placeholder text         |
| Gray 500 | `#6b7280` | `--color-gray-500`  | Muted text               |
| Gray 600 | `#4b5563` | `--color-gray-600`  | Body text                |
| Gray 700 | `#374151` | `--color-gray-700`  | Secondary headings       |
| Gray 800 | `#1f2937` | `--color-gray-800`  | Dark backgrounds         |
| Gray 900 | `#111827` | `--color-gray-900`  | Headings, primary text   |

### Status Colors

| Status  | Hex Code  | CSS Variable          | Usage                    |
| ------- | --------- | --------------------- | ------------------------ |
| Success | `#10b981` | `--color-success-500` | Success states, verified |
| Warning | `#f59e0b` | `--color-warning-500` | Warning states           |
| Error   | `#ef4444` | `--color-error-500`   | Error states, rejection  |
| Info    | `#135bec` | `--color-info-500`    | Info states (= primary)  |

### Semantic Colors

| Name             | Value                         | CSS Variable        | Usage                  |
| ---------------- | ----------------------------- | ------------------- | ---------------------- |
| Background       | `#ffffff`                     | `--bg-primary`      | Main background        |
| Background 2     | `#f9fafb`                     | `--bg-secondary`    | Secondary background   |
| Background 3     | `#f3f4f6`                     | `--bg-tertiary`     | Tertiary background    |
| Text Primary     | `#111827`                     | `--text-primary`    | Headings, main text    |
| Text Secondary   | `#4b5563`                     | `--text-secondary`  | Body text              |
| Text Tertiary    | `#9ca3af`                     | `--text-tertiary`   | Placeholder, muted     |
| Border Light     | `#e5e7eb`                     | `--border-light`    | Card borders           |
| Border Medium    | `#d1d5db`                     | `--border-medium`   | Input borders          |
| Frosted Glass BG | `rgba(255,255,255,0.8)`       | `--glass-bg`        | Navbar background      |
| Overlay Dark     | `rgba(0,0,0,0.5)`             | `--overlay-dark`    | Modal overlays         |

---

## Typography

### Font Family

```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;
```

### Font Sizes

| Name       | Size | Line Height | CSS Variable   | Tailwind    | Usage             |
| ---------- | ---- | ----------- | -------------- | ----------- | ----------------- |
| XS         | 12px | 1.4         | `--text-xs`    | `text-xs`   | Labels, captions  |
| SM         | 14px | 1.5         | `--text-sm`    | `text-sm`   | Secondary text    |
| Base       | 16px | 1.5         | `--text-base`  | `text-base` | Body text         |
| LG         | 18px | 1.5         | `--text-lg`    | `text-lg`   | Lead paragraphs   |
| XL         | 20px | 1.4         | `--text-xl`    | `text-xl`   | Subsection titles |
| 2XL        | 24px | 1.3         | `--text-2xl`   | `text-2xl`  | Card titles       |
| 3XL        | 30px | 1.25        | `--text-3xl`   | `text-3xl`  | Section headings  |
| 4XL        | 36px | 1.2         | `--text-4xl`   | `text-4xl`  | Page titles       |
| 5XL        | 48px | 1.1         | `--text-5xl`   | `text-5xl`  | Hero headings     |
| 6XL        | 60px | 1.1         | `--text-6xl`   | `text-6xl`  | Display text      |

### Font Weights

| Weight    | Value | CSS Variable       | Tailwind         | Usage              |
| --------- | ----- | ------------------ | ---------------- | ------------------ |
| Light     | 300   | `--font-light`     | `font-light`     | Subtle text        |
| Regular   | 400   | `--font-normal`    | `font-normal`    | Body text          |
| Medium    | 500   | `--font-medium`    | `font-medium`    | Labels, buttons    |
| Semibold  | 600   | `--font-semibold`  | `font-semibold`  | Subheadings        |
| Bold      | 700   | `--font-bold`      | `font-bold`      | Headings, emphasis |
| Extrabold | 800   | `--font-extrabold` | `font-extrabold` | Hero text          |

---

## Spacing & Layout

### Border Radius (Stitch: ROUND_TWELVE)

| Name | Value  | CSS Variable    | Tailwind       | Usage                     |
| ---- | ------ | --------------- | -------------- | ------------------------- |
| SM   | 4px    | `--radius-sm`   | `rounded`      | Tags, badges              |
| MD   | 8px    | `--radius-md`   | `rounded-lg`   | Inputs, small cards       |
| LG   | 12px   | `--radius-lg`   | `rounded-xl`   | **Cards, modals (default)** |
| XL   | 16px   | `--radius-xl`   | `rounded-2xl`  | Large cards               |
| 2XL  | 24px   | `--radius-2xl`  | `rounded-3xl`  | Hero sections             |
| Full | 9999px | `--radius-full` | `rounded-full` | Avatars, pills            |

### Spacing Scale (4px grid)

| Token | Value | CSS Variable | Tailwind |
| ----- | ----- | ------------ | -------- |
| 1     | 4px   | `--space-1`  | `p-1`    |
| 2     | 8px   | `--space-2`  | `p-2`    |
| 3     | 12px  | `--space-3`  | `p-3`    |
| 4     | 16px  | `--space-4`  | `p-4`    |
| 5     | 20px  | `--space-5`  | `p-5`    |
| 6     | 24px  | `--space-6`  | `p-6`    |
| 8     | 32px  | `--space-8`  | `p-8`    |
| 10    | 40px  | `--space-10` | `p-10`   |
| 12    | 48px  | `--space-12` | `p-12`   |
| 16    | 64px  | `--space-16` | `p-16`   |
| 20    | 80px  | `--space-20` | `p-20`   |
| 24    | 96px  | `--space-24` | `p-24`   |

### Shadows

| Name       | CSS Variable          | Usage              |
| ---------- | --------------------- | ------------------ |
| XS         | `--shadow-xs`         | Subtle elevation   |
| SM         | `--shadow-sm`         | Light elevation    |
| MD         | `--shadow-md`         | Cards              |
| LG         | `--shadow-lg`         | Modals, dropdowns  |
| XL         | `--shadow-xl`         | Prominent elements |
| 2XL        | `--shadow-2xl`        | Hero sections      |
| Primary    | `--shadow-primary`    | CTA buttons        |
| Primary LG | `--shadow-primary-lg` | Primary hover      |

### Z-Index Scale

| Token | Value | CSS Variable | Usage                      |
| ----- | ----- | ------------ | -------------------------- |
| 10    | 10    | `--z-10`     | Floating elements          |
| 20    | 20    | `--z-20`     | Sticky elements            |
| 30    | 30    | `--z-30`     | Overlays                   |
| 40    | 40    | `--z-40`     | Popovers                   |
| 50    | 50    | `--z-50`     | **Navbar, fixed elements** |
| 100   | 100   | `--z-100`    | **Modals, dropdowns**      |
| Max   | 9999  | `--z-max`    | Tooltips, top layer        |

---

## Gradients

### Aurora Gradient (Brand)

```css
/* Standard Aurora */
--gradient-aurora: linear-gradient(135deg, #135bec 0%, #a855f7 50%, #fb923c 100%);

/* Soft Aurora (for backgrounds) */
--gradient-aurora-soft: linear-gradient(
  135deg,
  rgba(19, 91, 236, 0.1) 0%,
  rgba(168, 85, 247, 0.1) 50%,
  rgba(251, 146, 60, 0.1) 100%
);

/* Primary Button Gradient */
--gradient-primary: linear-gradient(135deg, #135bec 0%, #0f4ac7 100%);
--gradient-primary-hover: linear-gradient(135deg, #0f4ac7 0%, #0b3a9e 100%);
```

---

## Component Styles

### Buttons

```css
/* Primary Button - Stitch Style (#135bec) */
.btn-primary {
  @apply px-6 py-3 text-white font-medium rounded-xl transition-all duration-300;
  background: var(--gradient-primary);
  box-shadow: var(--shadow-primary);
}

.btn-primary:hover {
  background: var(--gradient-primary-hover);
  box-shadow: var(--shadow-primary-lg);
}

/* Secondary Button */
.btn-secondary {
  @apply px-6 py-3 bg-white border border-gray-200 
         text-gray-700 font-medium rounded-xl 
         hover:bg-gray-50 hover:border-gray-300 
         transition-all duration-300;
}

/* Ghost Button */
.btn-ghost {
  @apply px-6 py-3 bg-transparent text-gray-600
         font-medium rounded-xl hover:bg-gray-100
         hover:text-gray-900 transition-all duration-300;
}
```

### Cards

```css
/* Standard Card */
.card {
  @apply bg-white rounded-xl p-6 
         border border-gray-100 
         shadow-sm hover:shadow-md 
         transition-all duration-300;
}

/* Bento Card */
.bento-card {
  @apply bg-white rounded-xl p-6 
         border border-gray-100 
         shadow-sm hover:shadow-lg 
         transition-all duration-300;
}
```

### Inputs

```css
.input {
  @apply w-full px-4 py-3 bg-white 
         border border-gray-200 rounded-xl 
         text-gray-900 placeholder-gray-400 
         focus:outline-none focus:ring-2 
         focus:ring-[#135bec]/20 focus:border-[#135bec] 
         transition-all duration-200;
}
```

### Frosted Glass Navbar

```css
.navbar-glass {
  @apply fixed top-0 w-full z-50 
         bg-white/80 backdrop-blur-lg 
         border-b border-white/20;
}
```

---

## Navbar Configurations by Role

### PUBLIC Navbar

- Logo (left)
- Home | About | Success Stories (center)
- Log in | Join Alpha Button (right)

### FOUNDER Navbar

- Logo (left)
- Explore | My Projects | Network | Messages (center)
- Notifications | Avatar Dropdown (right)

### CO_FOUNDER Navbar

- Logo (left)
- Explore | My Profile | Network | Messages (center)
- Notifications | Avatar Dropdown (right)

### ADMIN Navbar

- Logo (left)
- Dashboard | Users | Content | Settings (center)
- Notifications | Admin Profile Dropdown (right)

---

## Transitions & Animations

### Transition Durations

| Name   | Duration | CSS Variable          | Usage           |
| ------ | -------- | --------------------- | --------------- |
| Fast   | 150ms    | `--transition-fast`   | Hover effects   |
| Normal | 300ms    | `--transition-normal` | State changes   |
| Slow   | 500ms    | `--transition-slow`   | Complex reveals |

### Animation Classes

| Class                | Animation          | Usage                  |
| -------------------- | ------------------ | ---------------------- |
| `.animate-fade-in`   | Fade in 0.3s       | Element appearance     |
| `.animate-slide-up`  | Slide up 0.4s      | Card entry             |
| `.animate-scale-in`  | Scale in 0.3s      | Modal entry            |
| `.animate-pulse-glow`| Glow pulse 2s loop | Active states          |
| `.animate-shimmer`   | Shimmer loading    | Skeleton loading       |

---

## Screen Dimensions

| Screen  | Width  | Breakpoint Variable |
| ------- | ------ | ------------------- |
| Mobile  | 375px  | < `--breakpoint-sm` |
| Tablet  | 768px  | `--breakpoint-md`   |
| Desktop | 1280px | `--breakpoint-xl`   |
| Wide    | 1536px | `--breakpoint-2xl`  |

---

## Important Usage Notes

1. **Always use `#135bec` for primary blue** - Never use Tailwind's default `blue-500` (#3b82f6)
2. **Default border radius is `rounded-xl` (12px)** - This is the Stitch ROUND_TWELVE setting
3. **Use CSS variables when possible** - For easier theming and maintenance
4. **Aurora gradient order**: Primary Blue → Purple → Orange (at 135deg angle)
