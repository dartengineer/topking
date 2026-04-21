import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useApi';
import './Shop.css';

const SIZES_MEN = [40, 41, 42, 43, 44, 45, 46];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: 'men',
    minPrice: '',
    maxPrice: '',
    size: '',
  });
  const [sortBy, setSortBy] = useState('default');
  const { products, loading, error } = useProducts(filters);

  const sorted = [...products].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const updateFilter = (key, val) => {
    setFilters(f => ({ ...f, [key]: val }));
  };

  const clearFilters = () => {
    setFilters({ category: 'men', minPrice: '', maxPrice: '', size: '' });
  };

  const hasActiveFilters = filters.minPrice || filters.maxPrice || filters.size;

  return (
    <div className="shop-page">
      {/* Header */}
      <div className="page-header">
        <div className="gold-corner tl" /><div className="gold-corner tr" />
        <div className="gold-corner bl" /><div className="gold-corner br" />
        <div className="container">
          <p className="page-header .breadcrumb" style={{fontFamily:'var(--font-display)',fontSize:'0.6rem',letterSpacing:'0.2em',color:'var(--gold)',marginBottom:16}}>
            Home <span style={{margin:'0 8px',color:'rgba(255,255,255,0.3)'}}>—</span> Shop
          </p>
          <h1>The Collection</h1>
          <p>Every pair, a labour of devotion</p>
        </div>
      </div>

      <div className="container">
        {/* Toolbar */}
        <div className="shop-toolbar">
          <div className="shop-toolbar__left">
            <span className="shop-count">{sorted.length} pieces</span>
          </div>
          
          {/* Filters Inline */}
          <div className="shop-toolbar__filters">
            {/* Price Range */}
            <div className="filter-inline">
              <label>Price</label>
              <div className="price-inputs-inline">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.minPrice}
                  onChange={e => updateFilter('minPrice', e.target.value)}
                />
                <span>—</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.maxPrice}
                  onChange={e => updateFilter('maxPrice', e.target.value)}
                />
              </div>
            </div>

            {/* Size */}
            <div className="filter-inline">
              <label>Size</label>
              <select
                className="size-select"
                value={filters.size}
                onChange={e => updateFilter('size', e.target.value)}
              >
                <option value="">All Sizes</option>
                {SIZES_MEN.map(size => (
                  <option key={size} value={String(size)}>{size}</option>
                ))}
              </select>
            </div>

            {hasActiveFilters && (
              <button className="filter-clear-btn" onClick={clearFilters}>Clear</button>
            )}
          </div>

          <div className="shop-toolbar__right">
            <select
              className="shop-sort"
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
            >
              <option value="default">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        <div className="shop-layout">
          {/* Grid */}
          <main className="shop-grid-wrap">

            {error ? (
              <div style={{textAlign: 'center', padding: '40px'}}>
                <p>Error loading products: {error}</p>
              </div>
            ) : loading ? (
              <div className="shop-grid">
                {[...Array(6)].map((_, i) => <div key={i} className="skeleton-card" />)}
              </div>
            ) : sorted.length === 0 ? (
              <div className="shop-empty">
                <p>No pieces match your selection.</p>
                <button className="btn-outline" onClick={clearFilters}>Clear Filters</button>
              </div>
            ) : (
              <div className="shop-grid">
                {sorted.map((p, i) => (
                  <ProductCard key={p.id} product={p} style={{ animationDelay: `${(i % 6) * 0.08}s` }} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Shop;
