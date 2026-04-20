import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product, style }) => {
  const { addItem, toggleCart } = useCart();
  const [imgIndex, setImgIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = product.sizes[Math.floor(product.sizes.length / 2)];
    addItem(product, defaultSize);
    setAdded(true);
    setTimeout(() => { setAdded(false); toggleCart(); }, 800);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Link to={`/product/${product.id}`} className="product-card" style={style}>
      <div
        className="product-card__image-wrap"
        onMouseEnter={() => product.images[1] && setImgIndex(1)}
        onMouseLeave={() => setImgIndex(0)}
      >
        <img
          src={product.images[imgIndex] || product.images[0]}
          alt={product.name}
          className="product-card__image"
          loading="lazy"
        />
        {product.badge && (
          <span className={`product-card__badge badge--${product.badge.toLowerCase().replace(' ', '-')}`}>
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="product-card__discount">−{discount}%</span>
        )}
        <div className="product-card__overlay">
          <button
            className={`product-card__quick-add ${added ? 'added' : ''}`}
            onClick={handleQuickAdd}
          >
            {added ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Added
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Quick Add
              </>
            )}
          </button>
        </div>
        <div className="product-card__image-dots">
          {product.images.slice(0, 3).map((_, i) => (
            <span key={i} className={`dot ${i === imgIndex ? 'active' : ''}`} />
          ))}
        </div>
      </div>

      <div className="product-card__info">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <div className="product-card__price-row">
          <span className="product-card__price">${product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="product-card__original">${product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <div className="product-card__colors">
          {product.colors?.slice(0, 3).map((color, i) => (
            <span key={i} className="product-card__color-dot" title={color} />
          ))}
          {product.colors?.length > 3 && (
            <span className="product-card__color-more">+{product.colors.length - 3}</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
