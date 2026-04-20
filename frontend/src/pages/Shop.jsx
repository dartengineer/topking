import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useApi';
import './Shop.css';

const SIZES_MEN = [40, 41, 42, 43, 44, 45, 46];
const SIZES_WOMEN = [35, 36, 37, 38, 39, 40, 41];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || 'all',
    minPrice: '',
    maxPrice: '',
    size: '',
  });
  const [sortBy, setSortBy] = useState('default');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const { products, loading } = useProducts(filters);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setFilters(f => ({ ...f, category: cat }));
  }, [searchParams]);

  const sorted = [...products].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const updateFilter = (key, val) => {
    setFilters(f => ({ ...f, [key]: val }));
    if (key === 'category') setSearchParams(val !== 'all' ? { category: val } : {});
  };

  const clearFilters = () => {
    setFilters({ category: 'all', minPrice: '', maxPrice: '', size: '' });
    setSearchParams({});
  };

  const hasActiveFilters = filters.category !== 'all' || filters.minPrice || filters.maxPrice || filters.size;

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
            <button
              className={`shop-filter-toggle ${filtersOpen ? 'open' : ''}`}
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="16" y2="12"/>
                <line x1="11" y1="18" x2="13" y2="18"/>
              </svg>
              Filters {hasActiveFilters && <span className="filter-badge" />}
            </button>
            <span className="shop-count">{sorted.length} pieces</span>
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
          {/* Filters Sidebar */}
          <aside className={`shop-filters ${filtersOpen ? 'open' : ''}`}>
            <div className="shop-filters__header">
              <h3>Refine</h3>
              {hasActiveFilters && (
                <button className="shop-filters__clear" onClick={clearFilters}>Clear all</button>
              )}
            </div>

            {/* Category */}
            <div className="filter-group">
              <h4 className="filter-group__label">Category</h4>
              {['all', 'men', 'women', 'unisex'].map(cat => (
                <label key={cat} className="filter-radio">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={filters.category === cat}
                    onChange={() => updateFilter('category', cat)}
                  />
                  <span className="filter-radio__custom" />
                  <span className="filter-radio__label">
                    {cat === 'all' ? 'All Collections' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div className="filter-group">
              <h4 className="filter-group__label">Price Range</h4>
              <div className="price-presets">
                {[
                  { label: 'Under $400', min: '', max: '400' },
                  { label: '$400 – $500', min: '400', max: '500' },
                  { label: '$500+', min: '500', max: '' },
                ].map((p, i) => (
                  <button
                    key={i}
                    className={`price-preset ${filters.minPrice === p.min && filters.maxPrice === p.max ? 'active' : ''}`}
                    onClick={() => setFilters(f => ({ ...f, minPrice: p.min, maxPrice: p.max }))}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder="Min $"
                  value={filters.minPrice}
                  onChange={e => updateFilter('minPrice', e.target.value)}
                />
                <span>—</span>
                <input
                  type="number"
                  placeholder="Max $"
                  value={filters.maxPrice}
                  onChange={e => updateFilter('maxPrice', e.target.value)}
                />
              </div>
            </div>

            {/* Size */}
            <div className="filter-group">
              <h4 className="filter-group__label">EU Size</h4>
              <div className="size-grid">
                {[...new Set([...SIZES_WOMEN, ...SIZES_MEN])].sort((a,b)=>a-b).map(size => (
                  <button
                    key={size}
                    className={`size-btn ${filters.size === String(size) ? 'active' : ''}`}
                    onClick={() => updateFilter('size', filters.size === String(size) ? '' : String(size))}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Grid */}
          <main className="shop-grid-wrap">
            {/* Category Pills */}
            <div className="cat-pills">
              {['all', 'men', 'women', 'unisex'].map(cat => (
                <button
                  key={cat}
                  className={`cat-pill ${filters.category === cat ? 'active' : ''}`}
                  onClick={() => updateFilter('category', cat)}
                >
                  {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>

            {loading ? (
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
