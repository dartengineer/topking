import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../hooks/useApi';
import img1 from '../public/01-all.png';
import img2 from '../public/010-tan.png';
import img3 from '../public/010-black.jpeg';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  const { products, loading, error } = useProducts({});
  const featured = products.filter(p => p.featured).slice(0, 4);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    { name: 'Adewale O.', title: 'CEO, Pinnacle Group', text: 'I have owned shoes from Berluti and Church\'s. TopKing Luxury sits comfortably in that conversation — the craftsmanship is absolutely world-class.' },
    { name: 'Amara N.', title: 'Fashion Editor', text: 'The Duchess Heel is the single most stunning pair of shoes I own. Every artisan stitch tells a story. I get compliments without fail.' },
    { name: 'Emeka C.', title: 'Architect', text: 'The Imperial Oxford broke in within a week and now feels like it was made only for my foot. That is the mark of true quality leatherwork.' },
    { name: 'Ifeoma B.', title: 'Attorney', text: 'TopKing understands luxury. Not flashy — refined. The suede loafers are my most-reached-for pair on important days.' },
  ];

  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg">
          <img
            src="https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=801"
            alt="Luxury handcrafted shoes"
          />
          <div className="hero__overlay" />
        </div>
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__line" />
            <span>Est. 2018 · Lagos, Nigeria</span>
            <span className="hero__line" />
          </div>
          <h1 className="hero__title">
            <span className="hero__title-line">Handcrafted</span>
            <em className="hero__title-em">Excellence</em>
          </h1>
          <p className="hero__subtitle">
            Every pair a masterpiece. Every step a statement.
            <br />Shoes born from 40+ hours of artisan devotion.
          </p>
          <div className="hero__actions">
            <button className="btn-primary hero__cta" onClick={() => navigate('/shop')}>
              Explore Collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </button>
            <button className="btn-outline-gold hero__secondary" onClick={() => navigate('/about')}>
              Our Craft
            </button>
          </div>
          <div className="hero__stats">
            <div className="hero__stat"><span>40+</span><p>Artisan Hours Per Pair</p></div>
            <div className="hero__stat-divider" />
            <div className="hero__stat"><span>100%</span><p>Full-Grain Leather</p></div>
            <div className="hero__stat-divider" />
            <div className="hero__stat"><span>500+</span><p>Clients Worldwide</p></div>
          </div>
        </div>
        <div className="hero__scroll">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── Marquee ── */}
      <div className="marquee-band">
        <div className="marquee-track">
          {[...Array(3)].map((_, j) => (
            <React.Fragment key={j}>
              {['Handcrafted Excellence', '♔', 'Full-Grain Leather', '♔', 'Artisan Tradition', '♔', 'Lagos Luxury', '♔', 'Made to Last Generations', '♔'].map((t, i) => (
                <span key={i} className={t === '♔' ? 'marquee-crown' : ''}>{t}</span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Featured Products ── */}
      <section className="section featured-section">
        <div className="container">
          <div className="featured-header">
            <div>
              <p className="section-label">Curated Selection</p>
              <h2 className="section-title">The <em>Signature</em> Collection</h2>
              <p className="section-subtitle">
                Each piece selected for its exceptional character and artisanal merit.
              </p>
            </div>
            <Link to="/shop" className="btn-outline featured-view-all">View All Pieces</Link>
          </div>
          {error ? (
            <div style={{textAlign: 'center', padding: '40px'}}>
              <p>Error loading products: {error}</p>
            </div>
          ) : loading ? (
            <div className="featured-loading">
              {[1,2,3,4].map(i => <div key={i} className="skeleton-card" />)}
            </div>
          ) : (
            <div className="featured-grid">
              {featured.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Brand Story Strip ── */}
      <section className="story-strip">
        <div className="story-strip__image">
          <img src={'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=700&q=80'} alt="Craftsmanship" />
        </div>
        <div className="story-strip__content">
          <div className="gold-corner tl" /><div className="gold-corner br" />
          <p className="section-label">The TopKing Story</p>
          <h2 className="section-title" style={{color:'var(--white)'}}>
            Born from a <em>Passion</em> for Perfection
          </h2>
          <p style={{color:'rgba(255,255,255,0.65)', fontFamily:'var(--font-serif)', fontSize:'1.05rem', lineHeight:1.8, marginBottom:32}}>
            In the heart of Lagos, our master artisans have spent decades perfecting the ancient art of handmade shoes. Every pair begins with the finest hides and ends with a piece that transcends fashion — becoming a lifelong companion.
          </p>
          <Link to="/about" className="btn-outline-gold">Discover Our Heritage</Link>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section why-section">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:56}}>
            <p className="section-label">The TopKing Promise</p>
            <h2 className="section-title">Why <em>Discerning</em> Clients Choose Us</h2>
          </div>
          <div className="why-grid">
            {[
              {
                icon: '🧵',
                title: 'Master Craftsmanship',
                desc: 'Every stitch is placed by hand. Our artisans undergo 5+ years of training before touching a TopKing hide.'
              },
              {
                icon: '🐂',
                title: 'Finest Materials',
                desc: 'We source only full-grain Italian and Nigerian leather — the top 5% of hides available worldwide.'
              },
              {
                icon: '👑',
                title: 'Heirloom Quality',
                desc: 'Built to last decades, not seasons. Proper care means your shoes improve and deepen with every year.'
              },
              {
                icon: '📐',
                title: 'Bespoke Fit',
                desc: 'Each last is crafted to mirror the natural foot. The result is a fit that feels sculpted for you alone.'
              },
              {
                icon: '♻️',
                title: 'Resole Service',
                desc: 'We offer lifetime resole and restoration — because quality should never be disposable.'
              },
              {
                icon: '✈️',
                title: 'Worldwide Delivery',
                desc: 'Complimentary insured shipping in custom packaging that arrives as luxurious as the shoe inside.'
              },
            ].map((item, i) => (
              <div key={i} className="why-card" style={{animationDelay:`${i*0.1}s`}}>
                <div className="why-card__icon">{item.icon}</div>
                <h3 className="why-card__title">{item.title}</h3>
                <p className="why-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Banners ── */}
      <section className="section-sm cat-section">
        <div className="container">
          <div className="cat-grid">
            {[
              { label: "Luxury", img: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=700&q=80', cat: 'Luxury' },
              { label: "Fitted", img: img2, cat: 'Fitted' },
              { label: 'Unique', img: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=700&q=80', cat: 'Unique' },
            ].map((c, i) => (
              <Link key={i} to={`/shop?category=${c.cat}`} className="cat-banner">
                <img src={c.img} alt={c.label} />
                <div className="cat-banner__overlay" />
                <div className="cat-banner__content">
                  <p className="cat-banner__label">{c.label}</p>
                  <span>Shop →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:48}}>
            <p className="section-label">Client Voices</p>
            <h2 className="section-title">What Our <em>Patrons</em> Say</h2>
          </div>
          <div className="testimonials__track">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-card ${i === activeTestimonial ? 'active' : ''}`}>
                <div className="testimonial-card__quote">❝</div>
                <p className="testimonial-card__text">{t.text}</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="testimonial-card__name">{t.name}</p>
                    <p className="testimonial-card__title">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`t-dot ${i === activeTestimonial ? 'active' : ''}`} onClick={() => setActiveTestimonial(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner__bg">
          <img src={img3} alt="CTA" />
          <div className="cta-banner__overlay" />
        </div>
        <div className="container cta-banner__content">
          <p className="section-label" style={{color:'var(--gold)'}}>Limited Availability</p>
          <h2 style={{fontFamily:'var(--font-serif)', fontSize:'clamp(2rem,5vw,3.5rem)', fontWeight:300, color:'var(--white)', lineHeight:1.15, marginBottom:16}}>
            Your next pair is<br /><em style={{color:'var(--gold)'}}>waiting to be made.</em>
          </h2>
          <p style={{fontFamily:'var(--font-serif)', fontSize:'1.1rem', color:'rgba(255,255,255,0.7)', marginBottom:36, fontStyle:'italic'}}>
            Each collection is limited. Order now to secure your size.
          </p>
          <div style={{display:'flex', gap:16, flexWrap:'wrap'}}>
            <button className="btn-primary" onClick={() => navigate('/shop')}>
              Shop the Collection
            </button>
            <button className="btn-outline-gold" onClick={() => navigate('/contact')}>
              Request Custom Order
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
