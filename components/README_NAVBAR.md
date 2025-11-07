# Navbar Component

## Features

### ✅ Implemented
- **Responsive Design**: Desktop & mobile layouts
- **Smooth Animations**: Framer Motion powered
- **Language Switcher**: English/Hungarian with flags
- **Scroll Effect**: Background changes on scroll
- **Mobile Menu**: Hamburger menu with smooth transitions
- **Touch Friendly**: Optimized for mobile interactions
- **Smooth Scrolling**: Anchor links with smooth scroll behavior

### 🎨 Design Elements
- **Logo**: Gradient icon with LUNARA text
- **Navigation Items**: Home, Docs, Calculator
- **Language Dropdown**: Globe icon with flag selector
- **Mobile Menu**: Full-screen overlay with staggered animations

### 📱 Responsive Breakpoints
- **Mobile**: < 768px (Hamburger menu)
- **Desktop**: ≥ 768px (Full navigation)

## Navigation Structure

```
Home → #home (Hero Section)
Docs → #technical-architecture (Technical Architecture)
Calculator → #calculator (District Map & Calculator)
```

## Language Support

Currently supports:
- 🇬🇧 English (default)
- 🇭🇺 Hungarian

To add more languages, update the `languages` array in `Navbar.tsx`:

```typescript
const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "hu", label: "Hungarian", flag: "🇭🇺" },
  // Add more languages here
];
```

## Animations

### Desktop
- Logo hover: Scale 1.05
- Nav items: Slide up on hover with underline effect
- Language dropdown: Fade in/out with slide

### Mobile
- Menu: Height animation with opacity
- Nav items: Staggered fade-in from left
- Touch feedback: Scale on tap

## Customization

### Colors
- Primary: Green (#10b981)
- Background: White with backdrop blur
- Text: Gray-900 / Gray-700

### Scroll Behavior
- Transparent when at top
- White with shadow when scrolled
- Smooth transition between states

## Usage

```tsx
import Navbar from "@/components/Navbar";

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>{/* Your content */}</main>
    </>
  );
}
```

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels for buttons
- ✅ Keyboard navigation support
- ✅ Focus states
- ✅ Touch-friendly tap targets (min 44x44px)

## Future Enhancements

- [ ] Implement actual i18n translation system
- [ ] Add search functionality
- [ ] Add user authentication menu
- [ ] Add notification badge
- [ ] Persist language preference in localStorage
- [ ] Add more language options
