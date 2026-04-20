import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../public/tpkg.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__brand">
              <Link to="/" className="footer__logo">
                <img src={logoImg} alt="TopKing Luxury" className="footer__logo-img" />
                <div>
                  <div className="footer__logo-brand">TopKing</div>
                  <div className="footer__logo-sub">Luxury</div>
                </div>
              </Link>
              <p className="footer__tagline">
                Every pair is a work of art — handcrafted by master artisans who have devoted their lives to the pursuit of perfection in leather.
              </p>
              <div className="footer__socials">
                <a href="https://instagram.com/topking_luxury" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="https://wa.me/2349033778156" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="WhatsApp">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/topkingluxury" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com/topking.luxury" target="_blank" rel="noopener noreferrer" className="footer__social" aria-label="TikTok">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="footer__col">
              <h3 className="footer__col-title">Navigate</h3>
              <ul className="footer__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop All</Link></li>
                <li><Link to="/shop?category=men">Men's Collection</Link></li>
                <li><Link to="/shop?category=women">Women's Collection</Link></li>
                <li><Link to="/shop?category=unisex">Unisex</Link></li>
              </ul>
            </div>

            {/* Info */}
            <div className="footer__col">
              <h3 className="footer__col-title">Information</h3>
              <ul className="footer__links">
                <li><Link to="/about">Our Craft</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">Care Instructions</a></li>
                <li><a href="#">Shipping & Returns</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__col-title">Get in Touch</h3>
              <div className="footer__contact">
                <a href="mailto:hello@topkingluxury.com" className="footer__contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  hello@topkingluxury.com
                </a>
                <a href="tel:+2349033778156" className="footer__contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +234 903 377 8156
                </a>
                <div className="footer__contact-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Lagos, Nigeria
                </div>
              </div>
              <div className="footer__newsletter">
                <p>Join the inner circle</p>
                <div className="footer__newsletter-form">
                  <input type="email" placeholder="Your email" />
                  <button>→</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <div className="footer__bottom-inner">
            <p>© {new Date().getFullYear()} TopKing Luxury. All rights reserved.</p>
            <div className="footer__bottom-links">
              <a href="#">Privacy Policy</a>
              <span>·</span>
              <a href="#">Terms of Service</a>
            </div>
            <p className="footer__craft">Handcrafted with ♔ in Lagos</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
