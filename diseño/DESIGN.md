# The Design System: Artisanal Elegance

## 1. Overview & Creative North Star
**Creative North Star: "The Tactile Editorial"**

This design system moves beyond the standard e-commerce grid to create a digital experience that feels as curated and sensory as a physical boutique. Our goal is to translate the "scent and touch" of artisanal soap into a visual language. We reject the rigid, boxy constraints of traditional web design in favor of **intentional asymmetry, expansive breathing room, and soft tonal layering.**

The interface is not a container; it is a canvas. By utilizing overlapping imagery, "ghost" elements, and high-contrast editorial typography, we create an experience that feels human-made, premium, and inherently organic.

---

## 2. Colors & Tonal Depth
Our palette is rooted in the earth, utilizing a sophisticated spectrum of creams, clays, and botanical greens. 

### The "No-Line" Rule
To maintain an organic and high-end feel, **the use of 1px solid borders for sectioning or containment is strictly prohibited.** 
- Boundaries must be defined through background color shifts.
- Use `surface-container-low` for large content blocks sitting on a `surface` background.
- Use `surface-container-highest` only for the most critical interactive components (like a cart drawer).

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper. 
- **Base Layer:** `surface` (#fff9ef)
- **Secondary Block:** `surface-container-low` (#f9f3ea)
- **Elevated Interactive Layer:** `surface-container-lowest` (#ffffff) for cards to create a soft "pop" against the cream backgrounds.

### Glassmorphism & Signature Textures
- **Floating Elements:** Navigation bars and sticky headers should utilize a `surface` color with 80% opacity and a `backdrop-filter: blur(12px)`.
- **The "Satin" CTA:** Primary buttons should use a subtle linear gradient from `primary` (#4d2d18) to `primary-container` (#67432c) at a 145-degree angle to provide a rich, tactile depth that flat colors lack.

---

## 3. Typography
We use a high-contrast pairing to balance heritage craft with modern usability.

*   **Headings (Gilda Display / Noto Serif):** Used for Display and Headline roles. The high-contrast serifs convey a sense of time-honored tradition and luxury.
*   **Body & Labels (Nunito Sans / Plus Jakarta Sans):** Used for Title, Body, and Label roles. These sans-serifs offer maximum legibility at small sizes while maintaining a friendly, approachable character.

**Editorial Scaling:**
- **Display-LG (3.5rem):** Reserved for hero titles. Use wide tracking (-0.02em) to command attention.
- **Label-SM (0.6875rem):** All-caps with generous letter-spacing (0.1em) for "Category" tags or "Step" indicators to add an editorial polish.

---

## 4. Elevation & Depth
In a nature-inspired system, depth should feel like natural light falling on a textured surface, not a digital drop shadow.

*   **Tonal Layering:** Avoid shadows for static cards. Instead, place a `surface-container-lowest` (pure white) card on a `surface-container-low` (creamy beige) section. This creates "Natural Lift."
*   **Ambient Shadows:** For floating elements (Modals, Dropdowns), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(77, 45, 24, 0.06);`. Note that the shadow is tinted with our `primary` brown, not grey.
*   **The "Ghost Border":** If a distinction is absolutely necessary, use the `outline-variant` (#d5c3ba) at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons
- **Primary:** High-contrast `primary` background with `on-primary` text. XL roundedness (1.5rem). 
- **Secondary:** `surface-container-high` background with `primary` text. No border.
- **Tertiary (Editorial):** Text-only with a 1px underline (using `primary` at 30% opacity).

### Cards & Product Grids
- **Style:** Forbid divider lines. Use `surface-container-low` backgrounds for product images to separate them from the main page `surface`.
- **Asymmetry:** In product galleries, vary the aspect ratios slightly (e.g., a 4:5 image next to a 1:1 image) to mimic a scrapbook or magazine layout.

### Input Fields
- **Style:** Softened `surface-container-high` backgrounds with no borders. On focus, transition to a `ghost border` (outline-variant at 40%).
- **Typography:** Labels should always use `label-md` in all-caps for an authoritative feel.

### Artisanal Add-ons
- **Ingredient Chips:** Small, `tertiary-container` (#40503a) pills with `on-tertiary-container` text to highlight natural ingredients (e.g., "Lavender", "Shea Butter").
- **Layered Image Clusters:** Components that allow a product shot to overlap a background lifestyle image, creating depth and a "crafted" feel.

---

## 6. Do's and Don'ts

### Do:
- **Do** use generous whitespace (minimum 120px between major sections).
- **Do** use high-quality, desaturated photography with warm highlights.
- **Do** lean into "Editorial" layouts—center-align typography for storytelling sections.
- **Do** use `tertiary` (muted green) sparingly as a "nature" accent for success states or organic certifications.

### Don't:
- **Don't** use 100% black (#000000). Use `primary` or `on-surface` for text.
- **Don't** use sharp 90-degree corners. Everything must feel tumbled and soft, like a worn bar of soap.
- **Don't** use "Standard" Material Design shadows. They are too aggressive for this aesthetic.
- **Don't** use horizontal rules (`<hr>`) to separate content. Use a change in background color or 80px of vertical space.