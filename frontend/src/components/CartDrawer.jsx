import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={closeCart} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer__header">
          <div>
            <h2 className="cart-drawer__title">Your Selection</h2>
            <p className="cart-drawer__count">{totalItems} {totalItems === 1 ? 'piece' : 'pieces'}</p>
          </div>
          <button className="cart-drawer__close" onClick={closeCart}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="cart-drawer__items">
          {items.length === 0 ? (
            <div className="cart-drawer__empty">
              <div className="cart-drawer__empty-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 01-8 0"/>
                </svg>
              </div>
              <p>Your cart is empty</p>
              <span>Explore our handcrafted collection</span>
              <Link to="/shop" className="btn-primary" style={{marginTop:'20px', fontSize:'0.65rem'}} onClick={closeCart}>
                Explore Collection
              </Link>
            </div>
          ) : (
            items.map((item, i) => (
              <div key={`${item.id}-${item.selectedSize}-${i}`} className="cart-item">
                <div className="cart-item__image">
                  <img src={item.images?.[0]} alt={item.name} />
                </div>
                <div className="cart-item__info">
                  <h3>{item.name}</h3>
                  <p className="cart-item__size">Size: EU {item.selectedSize}</p>
                  <p className="cart-item__price">${(item.price * item.quantity).toLocaleString()}</p>
                  <div className="cart-item__qty">
                    <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}>+</button>
                  </div>
                </div>
                <button
                  className="cart-item__remove"
                  onClick={() => removeItem(item.id, item.selectedSize)}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__subtotal">
              <span>Subtotal</span>
              <span className="cart-drawer__total">${totalPrice.toLocaleString()}</span>
            </div>
            <p className="cart-drawer__shipping">Complimentary worldwide shipping</p>
            <Link to="/checkout" className="btn-primary cart-drawer__checkout" onClick={closeCart}>
              Proceed to Checkout
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
            <Link to="/cart" className="btn-outline cart-drawer__view-cart" onClick={closeCart}>
              View Full Cart
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
