# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static landing page for **KARIM** — a Peruvian artisanal soap brand. No build step, no package manager, no framework. Open `index.html` directly in a browser to develop.

## Stack

- `index.html` — single-page HTML structure (sections: header, hero, marquee, strip, products, promo, about, testimonials, FAQ, contact, newsletter, footer, modal)
- `style.css` — all styles; CSS custom properties defined in `:root`
- `main.js` — all JavaScript; data arrays + DOM rendering + event handlers
- `catalogo/` — product images (9 soaps)
- `imagenes/` — hero/about/WhatsApp photos

## Architecture

`main.js` is the sole JS file and does everything:

1. **Data arrays** (`PRODUCTS`, `TESTIMONIALS`, `FAQS`) — edit these to change content
2. **Render functions** (`renderProducts`, `renderTestimonials`, `renderFAQ`) — called on `DOMContentLoaded`, inject HTML into grid/container elements in `index.html`
3. **Cart** — `cart[]` array, managed by `addToCart`, `removeFromCart`, `updateCartUI`, `toggleCart`
4. **Modal** — `openModal(id)` looks up a product by id from `PRODUCTS` and renders its detail view
5. **Forms** — `handleContact(event)`, `handleNewsletter(event)`, `handleReclamaciones(event)` send email via EmailJS
6. **Misc** — `toggleFAQ(i)`, `openReclamaciones()`, `closeReclamaciones()`, scroll-triggered header class

## EmailJS Configuration

Credentials are hardcoded at the top of `main.js`:

```js
const EMAILJS_PUBLIC_KEY  = '...';
const EMAILJS_SERVICE_ID  = 'service_...';
const EMAILJS_TEMPLATE_ID = 'template_...';
```

Replace these when setting up a new EmailJS account. The SDK is loaded via CDN in `index.html`.

## CSS Design Tokens

All colors are CSS variables in `:root` (`:style.css:3`):

| Variable | Value | Role |
|----------|-------|------|
| `--dark` | `#1E2D1E` | Primary dark green |
| `--cream` | `#F5EDE0` | Background warm cream |
| `--brown` | `#4E3C31` | Text / headings |
| `--sand` | `#C9A882` | Accent / borders |
| `--green` | `#5B8A4A` | CTA accent |

Fonts loaded from Google Fonts: **Gilda Display** (logo), **Nunito Sans** (body), **Dancing Script** (accent).

## Key Customization Points

- **Add/remove products**: edit the `PRODUCTS` array in `main.js` and add the image to `catalogo/`
- **Change prices**: update `price` field in each product object (all currently S/ 25)
- **Testimonials / FAQ**: edit `TESTIMONIALS` and `FAQS` arrays in `main.js`
- **Contact info** (WhatsApp, email): appears in both `index.html` (contact section, footer) and `main.js` (WhatsApp redirect in cart checkout)
- **GTM**: tag `GTM-WKBCBN8Z` in `index.html` head

## Integrations (not yet connected)

- Payment gateway (MercadoPago/Stripe) — cart currently redirects to WhatsApp
- Email automation (Mailchimp/Brevo) — newsletter form sends via EmailJS only
