# 👑 TopKing Luxury — eCommerce Platform

A full-stack luxury eCommerce website for a handmade shoe brand, built with React + Node.js.

---

## 🚀 Quick Start

### 1. Clone or unzip the project

### 2. Start the Backend API
```bash
cd backend
npm install
npm start
# API runs on http://localhost:5000
```

### 3. Start the Frontend
```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:3000
```

> **Note:** The frontend works without the backend — it falls back to local data automatically.

---

## 📁 Project Structure

```
topking-luxury/
├── backend/
│   ├── server.js              # Express server entry point
│   ├── package.json
│   ├── data/
│   │   └── products.js        # In-memory product store
│   └── routes/
│       ├── products.js        # Product CRUD API
│       └── orders.js          # Order management API
│
└── frontend/
    ├── index.html
    ├── vite.config.js         # Vite with API proxy to backend
    ├── package.json
    └── src/
        ├── App.jsx             # Router + Layout
        ├── main.jsx
        ├── styles/
        │   └── global.css     # Design system (colors, typography, etc.)
        ├── context/
        │   └── CartContext.jsx # Global cart state
        ├── hooks/
        │   └── useApi.js       # API calls with local data fallback
        ├── data/
        │   └── localProducts.js # Offline product data
        ├── components/
        │   ├── Navbar.jsx / .css
        │   ├── Footer.jsx / .css
        │   ├── CartDrawer.jsx / .css
        │   └── ProductCard.jsx / .css
        └── pages/
            ├── Home.jsx / .css
            ├── Shop.jsx / .css
            ├── ProductDetail.jsx / .css
            ├── CartPage.jsx / .css
            ├── Checkout.jsx / .css
            ├── About.jsx / .css
            └── Contact.jsx / .css
```

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Gold | `#C9A030` |
| Background | `#FFFFFF` |
| Dark | `#0A0A0A` |
| Cream | `#F8F4EE` |
| Display Font | Cinzel |
| Serif Font | Cormorant Garamond |
| Body Font | Jost |

---

## 🌐 Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Shop | `/shop` |
| Product Detail | `/product/:id` |
| Cart | `/cart` |
| Checkout | `/checkout` |
| About | `/about` |
| Contact | `/contact` |

---

## 🔌 API Endpoints

### Products
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/products` | Get all products (supports `?category=`, `?minPrice=`, `?maxPrice=`, `?size=`) |
| GET | `/api/products/featured` | Get featured products |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |

### Orders
| Method | URL | Description |
|--------|-----|-------------|
| GET | `/api/orders` | Get all orders |
| GET | `/api/orders/:id` | Get single order |
| POST | `/api/orders` | Create order |
| PUT | `/api/orders/:id/status` | Update order status |

---

## ✨ Features

- ✅ Luxury black & gold design inspired by TopKing logo
- ✅ Responsive mobile-first layout
- ✅ Product browsing with filters (category, price, size)
- ✅ Product detail with image gallery and size selection
- ✅ Shopping cart with persistent localStorage
- ✅ Animated cart drawer
- ✅ Multi-step checkout with mock payment
- ✅ Order confirmation flow
- ✅ About page with brand story & timeline
- ✅ Contact page with WhatsApp integration
- ✅ Floating WhatsApp chat button
- ✅ Smooth animations & hover effects
- ✅ SEO-friendly page structure
- ✅ Backend REST API with Express.js
- ✅ Offline fallback (works without backend)

---

## 🛒 Customisation Guide

### Add Real Products
Edit `backend/data/products.js` or use the `POST /api/products` endpoint.

### Change Brand Info
- Update contact details in `Contact.jsx` and `Footer.jsx`
- Update WhatsApp number in `App.jsx` (`wa.me/YOUR_NUMBER`)
- Update social media links in `Footer.jsx`

### Add Real Payments
- **Paystack:** Install `@paystack/paystack-js` and replace mock in `Checkout.jsx`
- **Flutterwave:** Install `flutterwave-react-v3` and integrate in checkout flow

### Add a Database
Replace in-memory arrays in `backend/data/products.js` with MongoDB/PostgreSQL calls using `mongoose` or `prisma`.

---

## 📞 Contact / Brand Info (update before launch)

- **Email:** hello@topkingluxury.com
- **Phone:** +234 903 377 8156
- **WhatsApp:** wa.me/2349033778156
- **Instagram:** @topkingluxury
- **Address:** Victoria Island, Lagos, Nigeria

---

*Built with ♔ for TopKing Luxury*
