import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) return (
    <div className="cart-empty-page">
      <div className="page-header">
        <div className="container"><h1>Your Cart</h1></div>
      </div>
      <div className="container cart-empty-content">
        <div className="cart-empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </div>
        <h2>Your cart awaits</h2>
        <p>You haven't selected any pieces yet. Explore our handcrafted collection.</p>
        <Link to="/shop" className="btn-primary">Explore Collection</Link>
      </div>
    </div>
  );

  const shipping = 0;
  const total = totalPrice + shipping;

  return (
    <div className="cart-page">
      <div className="page-header">
        <div className="gold-corner tl" /><div className="gold-corner tr" />
        <div className="container">
          <p className="breadcrumb" style={{fontFamily:'var(--font-display)',fontSize:'0.6rem',letterSpacing:'0.2em',color:'var(--gold)',marginBottom:16}}>
            Home <span style={{margin:'0 8px',color:'rgba(255,255,255,0.3)'}}>—</span> Cart
          </p>
          <h1>Your Selection</h1>
          <p>{items.length} piece{items.length !== 1 ? 's' : ''} in your cart</p>
        </div>
      </div>

      <div className="container">
        <div className="cart-layout">
          {/* Items */}
          <div className="cart-items">
            <div className="cart-items-header">
              <span>Product</span>
              <span>Size</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>

            {items.map((item, i) => (
              <div key={`${item.id}-${item.selectedSize}-${i}`} className="cart-row">
                <div className="cart-row__product">
                  <Link to={`/product/${item.id}`} className="cart-row__img">
                    <img src={item.images?.[0]} alt={item.name} />
                  </Link>
                  <div className="cart-row__details">
                    <Link to={`/product/${item.id}`} className="cart-row__name">{item.name}</Link>
                    <p className="cart-row__cat">{item.category}</p>
                    <p className="cart-row__unit-price">${item.price.toLocaleString()} / pair</p>
                  </div>
                </div>
                <div className="cart-row__size">EU {item.selectedSize}</div>
                <div className="cart-row__qty">
                  <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}>+</button>
                </div>
                <div className="cart-row__total">${(item.price * item.quantity).toLocaleString()}</div>
                <button
                  className="cart-row__remove"
                  onClick={() => removeItem(item.id, item.selectedSize)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                    <path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                  </svg>
                </button>
              </div>
            ))}

            <div className="cart-actions-row">
              <Link to="/shop" className="btn-outline" style={{fontSize:'0.65rem'}}>
                ← Continue Shopping
              </Link>
              <button className="cart-clear" onClick={clearCart}>Clear Cart</button>
            </div>
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h3 className="cart-summary__title">Order Summary</h3>
            <div className="cart-summary__lines">
              <div className="cart-summary__line">
                <span>Subtotal ({items.reduce((s,i) => s + i.quantity, 0)} items)</span>
                <span>${totalPrice.toLocaleString()}</span>
              </div>
              <div className="cart-summary__line">
                <span>Shipping</span>
                <span className="cart-summary__free">Complimentary</span>
              </div>
              <div className="cart-summary__line">
                <span>Duties & Taxes</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <div className="cart-summary__total">
              <span>Estimated Total</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <button className="btn-primary cart-summary__checkout" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <div className="cart-summary__trust">
              <div className="cart-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
                Secure SSL checkout
              </div>
              <div className="cart-trust-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                Buyer protection
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
