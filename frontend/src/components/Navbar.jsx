import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartDrawer from './CartDrawer';
import logoImg from '../public/tpkg.png';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'Our Craft' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled || !isHome ? 'navbar--solid' : 'navbar--transparent'} ${menuOpen ? 'navbar--open' : ''}`}>
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <img src={logoImg} alt="TopKing Luxury" className="navbar__logo-img" />
            <div className="navbar__logo-text">
              <span className="navbar__logo-brand">TopKing</span>
              <span className="navbar__logo-sub">Luxury</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {navLinks.map(link => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">
            <button className="navbar__cart-btn" onClick={toggleCart} aria-label="Cart">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 01-8 0"/>
              </svg>
              {totalItems > 0 && (
                <span className="navbar__cart-count">{totalItems}</span>
              )}
            </button>

            <button className="navbar__cta btn-primary" onClick={() => navigate('/shop')}>
              Shop Now
            </button>

            <button
              className={`navbar__burger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`navbar__mobile ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => {
            // Hide Home link when on home page
            if (link.path === '/' && isHome) return null;
            return (
              <Link key={link.path} to={link.path} className="navbar__mobile-link">
                {link.label}
              </Link>
            );
          })}
          <button className="btn-primary navbar__mobile-cta" onClick={() => { navigate('/shop'); setMenuOpen(false); }}>
            Shop Now
          </button>
        </div>
      </nav>

      <CartDrawer />
    </>
  );
};

export default Navbar;
