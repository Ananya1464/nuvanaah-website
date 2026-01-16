# Mobile & Accessibility Testing Guide

Comprehensive testing guide for ensuring Nuvanaah platform is fully responsive and accessible across all devices and accessibility standards.

## 1. Mobile Responsiveness Testing

### Test Devices

**iOS**
- iPhone 14 Pro (390×844px) - Primary test device
- iPhone 12 (390×844px) - iOS 15 baseline
- iPhone SE (375×667px) - Smallest iPhone
- iPad Air (820×1180px) - Tablet baseline
- iPad Pro 12.9" (1024×1366px) - Large tablet

**Android**
- Samsung Galaxy S22 (360×800px) - Most common Android
- Google Pixel 6 (412×915px) - Android flagship
- Samsung Galaxy A12 (360×800px) - Budget device
- Samsung Galaxy Tab S7 (800×1280px) - Tablet

### Testing Checklist

#### Navigation & Header (All Devices)
- [ ] Header fits within viewport without horizontal scroll
- [ ] Logo/brand name clickable and responsive
- [ ] Navigation menu responsive (hamburger on mobile, inline on desktop)
- [ ] Menu toggle icon (hamburger) visible on sm: breakpoint
- [ ] Dropdown menus open/close correctly on touch
- [ ] No overlapping menu items
- [ ] Active nav items clearly highlighted with amber color
- [ ] Search icon/bar accessible on all sizes

**Expected:**
```
Mobile (sm: <640px):  Hamburger menu, logo visible
Tablet (md: 640px):   Navigation items start to show inline
Desktop (lg: 1024px): Full navigation bar visible
```

#### Product Grid (All Devices)
- [ ] Single column on mobile (sm:)
- [ ] 2 columns on tablet (md:)
- [ ] 3 columns on desktop (lg:)
- [ ] 4 columns on large desktop (xl:)
- [ ] Product images maintain aspect ratio (no stretching)
- [ ] Product cards full width of container
- [ ] Gap/spacing between cards consistent
- [ ] No horizontal scroll on any device
- [ ] Price and "Add to Cart" button visible

**Responsive Grid Code:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
```

#### Forms (All Devices)
- [ ] Input fields full width of container
- [ ] Label text readable (not cut off)
- [ ] Input height minimum 44px (touch-friendly)
- [ ] Focus outline visible (ring-2 ring-amber-400)
- [ ] Error messages clearly visible
- [ ] No horizontal scroll in form
- [ ] Button full width on mobile (sm:)
- [ ] Button fixed width on desktop (lg:)
- [ ] Form validation messages appear above button

**Touch-Friendly Sizing:**
```
Input min-height: 44px (py-2 minimum)
Button min-height: 44px (py-2)
Tap target size: 44×44px minimum
Spacing around inputs: 8px (gap-2)
```

#### Images & Media (All Devices)
- [ ] Images responsive with `<Image>` from Next.js
- [ ] Images have max-width: 100%
- [ ] Alt text provided for all images
- [ ] No image overflow (responsive)
- [ ] Aspect ratio maintained on all sizes
- [ ] Loading placeholder visible
- [ ] Video embeds responsive
- [ ] Image captions visible and readable

**Next.js Image Implementation:**
```tsx
<Image 
  src="/image.jpg" 
  alt="Description"
  width={1200}
  height={800}
  className="w-full h-auto object-cover"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

#### Typography & Text (All Devices)
- [ ] Heading sizes appropriate (not too large on mobile)
- [ ] Body text readable (16px minimum)
- [ ] Line length <= 50-75 characters (optimal reading)
- [ ] Line height appropriate (1.5 for body)
- [ ] Text doesn't overflow container
- [ ] Font sizes use clamp() for fluidity
- [ ] Mobile text larger than 12px minimum

**Responsive Typography:**
```css
h1 { font-size: clamp(2rem, 5vw, 3rem); }
body { font-size: clamp(0.875rem, 2vw, 1rem); }
```

#### Buttons & CTAs (All Devices)
- [ ] Button minimum 44×44px (touch target)
- [ ] Buttons full width on mobile (w-full sm:w-auto)
- [ ] Button text visible and centered
- [ ] Hover state visible on desktop
- [ ] Active/pressed state clear
- [ ] Disabled state clearly shown
- [ ] No button text wrapping (single line preferred)
- [ ] Multiple buttons stack vertically on mobile
- [ ] Gold color (amber-500) used for primary CTAs

**Mobile Button Pattern:**
```tsx
<button className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg">
  Call to Action
</button>
```

#### Modals & Popups (All Devices)
- [ ] Modal full height on mobile, max-width on desktop
- [ ] Close button accessible and visible
- [ ] Overlay properly darkens background
- [ ] Modal content scrollable if needed
- [ ] Focus trapped within modal
- [ ] No keyboard scroll with modal open
- [ ] Padding appropriate on all sizes

**Modal Implementation:**
```
Mobile: full screen (inset-0) minus top safe area
Tablet: 90vw width, centered
Desktop: max-w-md or max-w-lg, centered
```

#### Sidebar Layouts (All Devices)
- [ ] Sidebar hidden on mobile (sm:)
- [ ] Sidebar visible on tablet (md:)
- [ ] Content takes full width on mobile
- [ ] Sidebar width appropriate on desktop (25% or fixed)
- [ ] No horizontal scroll with sidebar
- [ ] Sidebar sticky/follows scroll

**Responsive Grid Layout:**
```tsx
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
  <main className="lg:col-span-3">{/* Main content */}</main>
  <aside className="lg:col-span-1">{/* Sidebar */}</aside>
</div>
```

#### Footer (All Devices)
- [ ] Links single column on mobile (sm:)
- [ ] Links multi-column on desktop (md:)
- [ ] Footer content readable on all sizes
- [ ] Copyright text visible
- [ ] Social icons visible and clickable
- [ ] Newsletter signup responsive
- [ ] No footer content overflow

#### Specific Page Tests

**Homepage**
- [ ] Hero section responsive (text sizing, image)
- [ ] Trust badges single column → 3-4 columns
- [ ] Categories grid responsive (1 → 2 → 4 columns)
- [ ] Product carousel works on mobile (swipe)
- [ ] Testimonials section responsive
- [ ] Partner logos visible on all sizes

**Product Detail Page**
- [ ] Image gallery responsive (full width on mobile)
- [ ] Thumbnail images visible and clickable
- [ ] Product info sidebar stacked on mobile
- [ ] Size selector readable and usable
- [ ] Quantity spinner touch-friendly
- [ ] Reviews section responsive

**Checkout**
- [ ] Form fields full width on mobile
- [ ] Multi-step form progress visible
- [ ] Payment methods displayed clearly
- [ ] Order summary sticky on desktop
- [ ] Order summary full width on mobile

**Shopping Cart**
- [ ] Cart items stacked vertically on mobile
- [ ] Quantity controls touch-friendly
- [ ] Remove buttons easily clickable
- [ ] Cart summary/total sticky on desktop
- [ ] Checkout button prominent and accessible

### Testing Tools

1. **Browser DevTools**
   - Chrome DevTools (F12 → Device Emulation)
   - Firefox DevTools (F12 → Responsive Design Mode)
   - Safari Web Inspector

2. **Real Device Testing**
   - Test on actual phones/tablets
   - Use BrowserStack for remote testing

3. **Lighthouse**
   - Chrome DevTools → Lighthouse
   - Check Mobile score: target 90+
   - Check Accessibility: target 90+

4. **Performance**
   - Largest Contentful Paint (LCP) < 2.5s
   - First Input Delay (FID) < 100ms
   - Cumulative Layout Shift (CLS) < 0.1

---

## 2. Accessibility Testing

### WCAG 2.1 Level AA Compliance Checklist

#### 1.1 Text Alternatives

**Images**
- [ ] All images have descriptive alt text
- [ ] Alt text <= 125 characters
- [ ] Decorative images have alt=""
- [ ] Complex images have linked long description
- [ ] SVG icons have <title> or aria-label

**Audio/Video**
- [ ] Video has captions or transcript
- [ ] Audio has transcript
- [ ] Media player keyboard accessible

#### 1.3 Adaptable Content

**Semantic HTML**
- [ ] Proper heading hierarchy (H1 → H2 → H3)
- [ ] One H1 per page
- [ ] Lists use <ul>, <ol>, <dl>
- [ ] Tables have <thead>, <tbody>, <tfoot>
- [ ] Form controls have <label>
- [ ] Navigation uses <nav>

**Structure & Content Order**
- [ ] Content readable without CSS
- [ ] Logical reading order (left-to-right, top-to-bottom)
- [ ] No content reordered with flexbox/grid breaking semantic order

#### 1.4 Distinguishable

**Color Contrast (Minimum 4.5:1 for body text)**
- [ ] Body text on background: 4.5:1
- [ ] Large text (18pt+): 3:1
- [ ] UI components (buttons, borders): 3:1
- [ ] Tested with [axe DevTools](https://www.deque.com/axe/devtools/)

**Suggested Color Pairs:**
- Body: text-gray-600 on bg-white ✓ (6.5:1)
- Heading: text-gray-900 on bg-white ✓ (17:1)
- Gold text: text-amber-600 on bg-white ✓ (5.1:1)

**Visual Distinctions**
- [ ] Don't rely only on color to convey information
- [ ] Use icons + color for status (✓ green, ✗ red)
- [ ] Use shape + color for charts
- [ ] Use text labels + color for badges

#### 2.1 Keyboard Accessible

**Keyboard Navigation**
- [ ] All interactive elements accessible via keyboard
- [ ] Tab through all buttons, links, form inputs
- [ ] Logical tab order (left-to-right, top-to-bottom)
- [ ] Tab order not reversed
- [ ] No keyboard traps (able to tab away from every element)

**Focus Indicators**
- [ ] Visible focus outline on all interactive elements
- [ ] Focus outline contrast minimum 3:1
- [ ] Focus outline not hidden with outline: none

**Implementation:**
```css
button:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}
/* Or use Tailwind: focus:ring-2 focus:ring-amber-400 */
```

**Keyboard Shortcuts**
- [ ] Standard keys (Tab, Enter, Space, Escape)
- [ ] No single-key shortcuts (conflicts with screen readers)
- [ ] Letter keys for navigation require Ctrl/Alt modifier

#### 2.4 Navigable

**Skip Links**
- [ ] "Skip to main content" link at top of page
- [ ] First focusable element on page
- [ ] Takes to <main> element

**Implementation:**
```tsx
<a href="#main" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
<main id="main">...</main>
```

**Breadcrumbs**
- [ ] Breadcrumbs properly marked with schema
- [ ] Current page not a link
- [ ] Breadcrumb structure clear

**Page Titles**
- [ ] Each page has unique, descriptive <title>
- [ ] Title identifies page content
- [ ] Title format: "Page Title | Site Name"

#### 3.1 Readable

**Language**
- [ ] Page language set in <html lang="en">
- [ ] Language changes marked with lang attribute
- [ ] Text has sufficient contrast

**Text Clarity**
- [ ] Abbreviations defined on first use: CD (Compact Disc)
- [ ] Multiple meanings clarified by context
- [ ] Links have descriptive text (not "click here")
- [ ] Instructions clear and concise

#### 3.2 Predictable

**Navigation Consistency**
- [ ] Navigation consistent across pages
- [ ] Header, footer, main nav in same location
- [ ] Search in same location

**Form Behavior**
- [ ] Forms don't submit on focus
- [ ] Forms don't submit on field change
- [ ] Required fields marked clearly (asterisk)
- [ ] Error messages clear and specific
- [ ] Error recovery possible
- [ ] Form submission returns to form (shows errors)

**Links & Buttons**
- [ ] Links open in same window (don't surprise users)
- [ ] Links have descriptive anchor text
- [ ] External links marked somehow (icon or text)
- [ ] Buttons look like buttons (styling)

#### 3.3 Input Assistance

**Error Identification**
- [ ] Errors clearly identified
- [ ] Error appears near field (not just summary)
- [ ] Error in color + text + icon
- [ ] Error linked to field with aria-describedby

**Implementation:**
```tsx
<div>
  <label htmlFor="email">Email</label>
  <input
    id="email"
    type="email"
    aria-describedby="email-error"
  />
  <p id="email-error" className="text-red-600">
    ✗ Invalid email format
  </p>
</div>
```

**Form Labels**
- [ ] All inputs have associated labels
- [ ] Labels properly associated with id
- [ ] Labels don't just use placeholder
- [ ] Required indicator clear

**Suggestions**
- [ ] Error corrections suggested
- [ ] Suggestions clear and obvious

#### 4.1 Compatible

**HTML Validity**
- [ ] No duplicate attributes
- [ ] No duplicate ids
- [ ] Proper nesting of elements
- [ ] All tags properly closed

**ARIA Usage**
- [ ] ARIA attributes used correctly
- [ ] No conflicting ARIA attributes
- [ ] Only ARIA where semantic HTML won't work

**Common ARIA Fixes:**
```tsx
/* Icon buttons need labels */
<button aria-label="Close menu">
  <X className="h-6 w-6" />
</button>

/* Modals need roles */
<div role="dialog" aria-labelledby="modal-title">
  <h2 id="modal-title">Dialog Title</h2>
</div>

/* Form groups need structure */
<fieldset>
  <legend>Choose option</legend>
  <input type="radio" name="option" />
</fieldset>
```

### Accessibility Testing Tools

1. **Automated Testing**
   - [axe DevTools](https://www.deque.com/axe/devtools/) - Browser extension
   - [WAVE](https://wave.webaim.org/) - Visual feedback
   - Lighthouse (Chrome DevTools)
   - WebAIM Contrast Checker

2. **Manual Testing**
   - Keyboard-only navigation (no mouse)
   - Screen reader testing:
     - **Windows:** NVDA (free), JAWS
     - **Mac:** VoiceOver (built-in)
     - **iOS:** VoiceOver (built-in)
     - **Android:** TalkBack (built-in)
   - Browser zoom to 200%
   - Disable CSS and check structure
   - Disable images and check alt text

3. **Screen Reader Quick Test**

**Windows (NVDA):**
1. Download [NVDA](https://www.nvaccess.org/)
2. Start NVDA (Insert+N or Ctrl+Alt+N)
3. Navigate page with arrow keys
4. Test form inputs (Tab, arrows in select)
5. Check heading structure (H key jumps headings)

**Mac (VoiceOver):**
1. Enable: System Preferences → Accessibility → VoiceOver
2. Toggle: Cmd+F5 or Ctrl+Option+F5
3. Navigation: Ctrl+Option+Arrow keys
4. Test forms and headings

### Test Plan - Complete Coverage

**Phase 1: Quick Accessibility Scan**
1. Run axe DevTools - note all errors
2. Run Lighthouse - note accessibility score
3. Manual tab through page
4. Check heading hierarchy (H key in NVDA)

**Phase 2: Color & Contrast**
1. Use WebAIM Contrast Checker
2. Check all text colors
3. Check button/link colors
4. Test with color blindness simulator

**Phase 3: Keyboard Navigation**
1. Unplug mouse/touchpad
2. Tab through entire page
3. Use arrow keys in components
4. Use Escape to close modals
5. Use Enter on buttons
6. Verify visible focus indicator

**Phase 4: Screen Reader Test**
1. Use NVDA or VoiceOver
2. Navigate to key elements (headings, form, buttons)
3. Check form labels announced correctly
4. Check alt text read
5. Check button purposes clear
6. Verify list structure (announcements for "list, N items")

**Phase 5: Form Testing**
1. Fill form with keyboard only
2. Error states announced
3. Required fields marked
4. Success confirmation clear
5. Error messages linked to fields

**Phase 6: Responsive Testing**
1. Zoom to 200% in browser
2. Check no horizontal scroll
3. Check all elements readable
4. Check buttons still clickable

---

## 3. Testing Results Template

```markdown
# Accessibility Audit Results - Nuvanaah Platform

**Date:** [Date]
**Auditor:** [Name]
**WCAG 2.1 Level:** AA

## Summary
- **Pass:** X items
- **Fail:** X items
- **Warnings:** X items
- **Status:** ✓ WCAG 2.1 Level AA Compliant

## Issues Found

### Critical (must fix)
1. [Issue description]
   - Location: [page/component]
   - Severity: Blocks access
   - Fix: [Solution]

### High (should fix)
1. [Issue description]
   - Fix: [Solution]

### Medium (nice to fix)
1. [Issue description]

## Test Results

### Automated Tools
- axe DevTools: [score/errors]
- Lighthouse Accessibility: [score]
- WAVE: [score]

### Manual Testing
- Keyboard Navigation: ✓ Pass
- Screen Reader (NVDA): ✓ Pass
- Color Contrast: ✓ Pass
- Color Blindness: ✓ Pass
- Zoom 200%: ✓ Pass

## Sign-off
- Mobile Testing: ✓ Complete
- Accessibility: ✓ WCAG 2.1 AA
- Performance: ✓ Lighthouse 90+
- Ready for Production: ✓ Yes
```

---

## 4. Continuous Accessibility

### Monthly Reviews
- [ ] Re-run axe DevTools
- [ ] Test with latest screen readers
- [ ] Manual keyboard navigation test
- [ ] Update based on new WCAG guidance

### Pre-Launch Checklist
- [ ] All automated tools pass
- [ ] Manual testing complete
- [ ] All pages tested
- [ ] All user journeys tested
- [ ] Stakeholder review complete
- [ ] Fix all critical/high issues
- [ ] Document remaining issues
- [ ] Team training on accessibility

### Long-term Maintenance
- Include accessibility in code review
- Test new components before merge
- Update alt text when images change
- Monitor error logs for accessibility issues
- Annual comprehensive audit
