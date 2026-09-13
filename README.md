# 🧀 Pão de Queijo Mineiro — Artisan Cheese Bread Store

> An e-commerce landing page for a homemade Minas Gerais cheese bread brand, built with React + Vite + TypeScript + Firebase.

![Deploy](https://img.shields.io/badge/deploy-Vercel-black?logo=vercel)
![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase)

---

## ✨ About the Project

**Pão de Queijo Mineiro** is an artisan food brand born in Iguatama, Minas Gerais. This website serves as a digital storefront and brand presentation, combining a warm visual identity with functional e-commerce features.

The site tells the story behind the brand — a family recipe passed down through generations — while allowing customers to browse products, manage a cart, and place orders directly via WhatsApp. Stock levels are synced in real time across every device through Firebase Firestore, so the store owner can update availability from her phone and customers always see accurate numbers.

Live: **[paodequeijomineiro.vercel.app](https://paodequeijomineiro.vercel.app)**

---

## 🗂️ Project Structure

```
cheese-bread-store-website/
├── public/
└── src/
    ├── app/
    │   └── App.tsx                  # Root component & routing
    ├── assets/                      # Images (hero, product photos, cheese photos)
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx           # Includes hidden admin-mode trigger (5 clicks + password)
    │   │   └── Footer.tsx
    │   └── ui/                      # Shared UI components (shadcn/ui)
    ├── features/
    │   ├── carts/
    │   │   ├── context/
    │   │   │   └── CartContext.tsx  # Global cart + admin mode + live Firestore stock sync
    │   │   └── components/
    │   │       └── CartDrawer.tsx   # Cart UI + WhatsApp checkout (decrements stock)
    │   ├── products/
    │   │   ├── components/
    │   │   │   └── ProductCard.tsx  # Product card with stock management + loading state
    │   │   ├── data/
    │   │   │   └── products.ts      # Static product data (name, price, image, description)
    │   │   └── types.ts
    │   └── whatsapp/                 # WhatsApp order integration
    ├── lib/
    │   └── firebase.ts               # Firebase app initialization + Firestore instance
    ├── layouts/
    │   ├── App.css
    │   └── index.css                 # Global styles + Tailwind directives
    ├── pages/
    │   ├── About/
    │   │   ├── components/           # About page sections
    │   │   └── index.tsx
    │   ├── Contact/
    │   │   ├── components/
    │   │   │   └── HeroSection.tsx
    │   │   └── index.tsx
    │   ├── Home/
    │   │   ├── components/
    │   │   │   ├── CheeseSection.tsx # Queijo Canastra highlight
    │   │   │   └── ProductList.tsx   # Product grid + banner
    │   │   └── index.tsx
    │   └── NotFound/
    ├── shared/
    │   ├── hooks/                    # Custom React hooks
    │   └── utils/                    # Utility functions
    └── main.tsx
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | Component-based UI |
| **TypeScript** | Type safety throughout |
| **Vite** | Fast dev server & build tool |
| **Tailwind CSS** | Utility-first styling |
| **shadcn/ui** | Accessible UI primitives |
| **Lucide React** | Icon library |
| **React Router** | Client-side routing |
| **Firebase Firestore** | Real-time, cross-device stock persistence |

---

## 📄 Pages

### 🏠 Home (`/`)
The main landing page. Contains:
- **Hero section** — full-bleed image with brand headline
- **CheeseSection** — Queijo Canastra DOP feature with photo grid and stats (400+ years of tradition, DOP certification, 100% raw milk)
- **ProductList** — 2-column (mobile) / 3-column (desktop) product grid
- **Banner** — "Manhãs mais felizes" call-to-action

### 📖 About (`/sobre`)
Brand story and heritage page. Contains:
- **Hero** — Serra da Canastra landscape with brand origin tagline
- **Founder story** — Personal narrative about growing up in Iguatama, MG
- **Vó Geni tribute** — Emotional section honoring the grandmother whose recipe inspired the brand
- **Differentials** — 6-card grid highlighting what makes the product unique (Canastra DOP, handmade recipe, family tradition, etc.)
- **Final CTA** — Link to products

### 📞 Contact (`/contato`)
- **Hero** — Contact page header
- WhatsApp-first contact approach

---

## 🛒 Features

### Product Catalog
- Dynamic product grid loaded from context, with core data (name, price, description, image) defined locally and stock synced live from Firestore
- Each card displays: name, description, price, stock availability
- "Recheado" (stuffed) badge for special variants
- Sold-out state with grayscale treatment and disabled button
- Loading skeleton for stock numbers and admin controls while the initial Firestore snapshot is still arriving, so no stale/incorrect quantity is ever shown

### Shopping Cart
- Global cart state managed via React Context (`CartContext`)
- Add/remove items, quantity capped to available stock
- Order sent directly via WhatsApp with full product summary and total
- On checkout, stock is atomically decremented in Firestore using a batched `increment()` write — safe even if multiple customers check out at the same time

### Admin Mode
- Hidden admin mode toggled via a secret interaction (5 clicks on the logo + password)
- Allows stock editing directly on each product card (increment/decrement/input)
- Stock edits are written to Firestore and propagate in real time to every open tab/device (owner's phone, customer browsers) via `onSnapshot`
- Visual indicator badge when admin mode is active

---

## 🎨 Design System

The visual identity is built around a warm, artisan aesthetic inspired by the Minas Gerais region.

**Color Palette:**

| Token | Hex | Usage |
|---|---|---|
| Dark Brown (primary bg) | `#2a1200` | Section backgrounds, card backgrounds |
| Deep Background | `#1a0f05` | Page base background |
| Amber (accent) | `#c47820` | Labels, badges, highlights, CTAs |
| Cream (text) | `#f5e8d0` | Headings on dark backgrounds |
| Muted Cream | `rgba(245,232,208,0.65)` | Body text on dark backgrounds |
| Warm Tan | `#a37c53` | Secondary section backgrounds |

**Typography:**
- **Playfair Display** — headings, prices, display text (editorial, serif)
- **Inter** — body text, labels, UI elements (clean, sans-serif)

**Design Principles:**
- Mobile-first, fully responsive with `clamp()` fluid sizing
- Consistent `letterSpacing: "0.22em"` uppercase labels across sections
- Image overlays use directional gradients for seamless text legibility
- Hover states: card lift (`hover:-translate-y-1`), image zoom (`group-hover:scale-105`)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- A Firebase project with Firestore enabled (see [Firebase Setup](#-firebase-setup) below)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/cheese-bread-store-website.git
cd cheese-bread-store-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 🔥 Firebase Setup

Stock levels are stored in a Firestore collection named `products`, with one document per product (document ID matching the product's `id` in `src/features/products/data/products.ts`), each holding a single `stock` (number) field.

1. Create a Firebase project and enable **Firestore Database**.
2. Create the `products` collection with one document per product, e.g. `tradicional`, `linguica`, `goiabada`, each with a `stock` field.
3. Set Firestore security rules to allow public read and write on the `products` collection (no Firebase Auth is used — access to stock editing is gated client-side by the admin password instead):

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{productId} {
      allow read: if true;
      allow write: if true;
    }
  }
}
```

4. Register a Web App in the Firebase console and drop the config into `src/lib/firebase.ts`.

---

## 📦 Environment Variables

Create a `.env` file in the root:

```env
VITE_ADMIN_PASSWORD=your-admin-password
```

This password gates the hidden admin mode (5 clicks on the logo). The Firebase web config in `src/lib/firebase.ts` is not sensitive (it only identifies the project; actual access control is handled by Firestore rules) so it's committed directly rather than kept in `.env`.

WhatsApp number is configured directly in the `whatsapp` feature and `CartDrawer.tsx`.

---

## 🙏 Acknowledgements

This project was built with love to honor a family tradition. Special thanks to **vó Geni** and **Marília**, whose handmade recipes are the soul of every batch.

> *"Ao escaldar o polvilho, uma oração é sempre feita pela alma da vó Geni."*

---

## 📝 License

This project is private and proprietary. All rights reserved.