import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useProduct, useProducts } from '../hooks/useApi';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { product, loading, error } = useProduct(id);
  const { products } = useProducts({});
  const { addItem, toggleCart } = useCart();

  const [activeImg, setActiveImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeError, setSizeError] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const related = products.filter(p => p.id !== id && p.category === product?.category).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) { setSizeError(true); return; }
    addItem(product, selectedSize);
    setAddedToCart(true);
    setTimeout(() => { setAddedToCart(false); toggleCart(); }, 800);
  };

  const handleBuyNow = () => {
    if (!selectedSize) { setSizeError(true); return; }
    addItem(product, selectedSize);
    navigate('/checkout');
  };

  if (error) return (
    <div style={{padding:'120px 0', textAlign:'center'}}>
      <p style={{fontFamily:'var(--font-serif)', fontSize:'1.5rem', color:'var(--gray-600)'}}>Error loading product: {error}</p>
      <Link to="/shop" className="btn-primary" style={{marginTop:24, display:'inline-flex'}}>Back to Shop</Link>
    </div>
  );

  if (loading) return (
    <div style={{padding:'160px 0', textAlign:'center'}}>
      <div className="pdp-loading">
        <div className="pdp-skeleton-img" />
        <div className="pdp-skeleton-info" />
      </div>
    </div>
  );

  if (!product) return (
    <div style={{padding:'120px 0', textAlign:'center'}}>
      <p style={{fontFamily:'var(--font-serif)', fontSize:'1.5rem', color:'var(--gray-600)'}}>Product not found.</p>
      <Link to="/shop" className="btn-primary" style={{marginTop:24, display:'inline-flex'}}>Back to Shop</Link>
    </div>
  );

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="pdp">
      {/* Breadcrumb */}
      <div className="pdp-breadcrumb">
        <div className="container">
          <Link to="/">Home</Link>
          <span>—</span>
          <Link to="/shop">Shop</Link>
          <span>—</span>
          <span className="active">{product.name}</span>
        </div>
      </div>

      <div className="container">
        <div className="pdp-grid">

          {/* Images */}
          <div className="pdp-images">
            <div className="pdp-thumbs">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`pdp-thumb ${i === activeImg ? 'active' : ''}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`${product.name} view ${i+1}`} />
                </button>
              ))}
            </div>
            <div className="pdp-main-image">
              {product.badge && <span className={`product-card__badge badge--${product.badge.toLowerCase().replace(' ','-')}`}>{product.badge}</span>}
              {discount && <span className="product-card__discount">−{discount}%</span>}
              <img src={product.images[activeImg]} alt={product.name} key={activeImg} className="pdp-img-animate" />
            </div>
          </div>

          {/* Info */}
          <div className="pdp-info">
            <p className="pdp-category">{product.category} Collection</p>
            <h1 className="pdp-name">{product.name}</h1>

            <div className="pdp-price-row">
              <span className="pdp-price">${product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="pdp-original">${product.originalPrice.toLocaleString()}</span>
              )}
              {discount && <span className="pdp-discount-tag">Save {discount}%</span>}
            </div>

            <div className="gold-divider" style={{margin:'20px 0'}}><span>✦</span></div>

            <p className="pdp-description">{product.description}</p>

            {/* Colors */}
            <div className="pdp-colors">
              <h3 className="pdp-option-label">Available Colors</h3>
              <div className="pdp-color-list">
                {product.colors.map((c, i) => (
                  <span key={i} className="pdp-color-tag">{c}</span>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="pdp-sizes">
              <div className="pdp-sizes-header">
                <h3 className="pdp-option-label">
                  Select Size (EU) {selectedSize && <span className="selected-size">— {selectedSize}</span>}
                </h3>
                <a href="#" className="size-guide-link">Size Guide</a>
              </div>
              <div className="pdp-size-grid">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`pdp-size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => { setSelectedSize(size); setSizeError(false); }}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {sizeError && <p className="pdp-size-error">Please select a size to continue</p>}
            </div>

            {/* Actions */}
            <div className="pdp-actions">
              <button
                className={`pdp-add-cart btn-dark ${addedToCart ? 'added' : ''}`}
                onClick={handleAddToCart}
              >
                {addedToCart ? (
                  <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg> Added to Cart</>
                ) : (
                  <><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg> Add to Cart</>
                )}
              </button>
              <button className="pdp-buy-now btn-primary" onClick={handleBuyNow}>
                Buy Now →
              </button>
            </div>

            {/* Stock */}
            {product.stock <= 5 && (
              <p className="pdp-stock-warning">
                ⚠ Only {product.stock} pairs left in this style
              </p>
            )}

            {/* Material */}
            <div className="pdp-material">
              <h3 className="pdp-option-label">Materials & Construction</h3>
              <p>{product.material}</p>
            </div>

            {/* Perks */}
            <div className="pdp-perks">
              {[
                { icon: '✈️', text: 'Complimentary worldwide shipping' },
                { icon: '↩️', text: '30-day hassle-free returns' },
                { icon: '🛡️', text: 'Lifetime resole guarantee' },
                { icon: '📦', text: 'Luxury gift packaging included' },
              ].map((p, i) => (
                <div key={i} className="pdp-perk">
                  <span>{p.icon}</span>
                  <span>{p.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="pdp-related">
            <div style={{textAlign:'center', marginBottom:40}}>
              <p className="section-label">You May Also Love</p>
              <h2 className="section-title">Complementary <em>Pieces</em></h2>
            </div>
            <div className="pdp-related-grid">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
