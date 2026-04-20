import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const timeline = [
    { year: '2018', title: 'The Beginning', desc: 'Founded in Lagos by master cobbler Emeka Okonkwo, with one bench, one set of tools, and an unshakeable belief that Africa deserved world-class luxury footwear.' },
    { year: '2019', title: 'First Collection', desc: 'The inaugural 12-piece collection sold out within 48 hours. Word spread through Nigeria\'s style community like wildfire.' },
    { year: '2020', title: 'Artisan Academy', desc: 'We established our in-house training programme — now home to 18 certified artisans with a minimum of 3 years training before touching a client shoe.' },
    { year: '2022', title: 'Continental Recognition', desc: 'TopKing Luxury wins the Pan-African Design Excellence Award. Our shoes are worn at state ceremonies from Abuja to Accra to Nairobi.' },
    { year: '2024', title: 'Global Reach', desc: 'Shipping to 40+ countries. Our leather now travels the world — but every pair is still hand-made in Lagos.' },
  ];

  const values = [
    { icon: '🧵', title: 'Uncompromising Craft', desc: 'We reject shortcuts. Every technique we use has been refined over decades to produce the finest result possible.' },
    { icon: '🌍', title: 'African Excellence', desc: 'We prove that Africa produces world-class luxury — not as an imitation but as an original voice of global craft.' },
    { icon: '🐂', title: 'Material Integrity', desc: 'We use only the finest full-grain leathers, sourced from ethical tanneries, because quality begins at the source.' },
    { icon: '♾️', title: 'Built to Last', desc: 'Our goal is to make the last pair of shoes you\'ll ever need. We stand behind every pair with a lifetime service promise.' },
  ];

  return (
    <div className="about-page">
      {/* Header */}
      <div className="page-header about-header">
        <div className="gold-corner tl" /><div className="gold-corner tr" />
        <div className="gold-corner bl" /><div className="gold-corner br" />
        <div className="about-header__bg">
          <img src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=1400&q=80" alt="Craft" />
          <div className="about-header__overlay" />
        </div>
        <div className="container about-header__content">
          <p style={{fontFamily:'var(--font-display)',fontSize:'0.6rem',letterSpacing:'0.25em',color:'var(--gold)',marginBottom:16}}>
            Our Heritage
          </p>
          <h1>Born in Lagos.<br />Built for Eternity.</h1>
          <p>The story of a craft, a city, and a vision to dress the world in excellence.</p>
        </div>
      </div>

      {/* Mission */}
      <section className="section">
        <div className="container about-mission">
          <div className="about-mission__text">
            <p className="section-label">Our Mission</p>
            <h2 className="section-title">We don't make shoes.<br /><em>We make legacies.</em></h2>
            <p>TopKing Luxury was founded on a single belief: that the finest handmade shoes in the world could be, and should be, made in Africa. Not as replicas of European tradition — but as a bold, original statement of African excellence on the global stage.</p>
            <p>Every pair we create is a conversation between centuries of artisan knowledge and the distinct energy of modern Lagos. It is confident, refined, and made to outlast every trend.</p>
            <Link to="/shop" className="btn-primary" style={{marginTop:32, display:'inline-flex'}}>
              Shop the Collection
            </Link>
          </div>
          <div className="about-mission__image">
          <img src={'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=700&q=80'} alt="Craftsmanship" />
            <div className="about-mission__stat">
              <span>6+</span>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="about-process">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:56}}>
            <p className="section-label">The Making</p>
            <h2 className="section-title">40 Hours of <em>Pure Devotion</em></h2>
            <p className="section-subtitle" style={{margin:'0 auto', textAlign:'center'}}>
              Each pair of TopKing shoes passes through 12 distinct stages of hand craftsmanship before reaching you.
            </p>
          </div>
          <div className="process-steps">
            {[
              { num: '01', title: 'Leather Selection', desc: 'Only the top 5% of full-grain hides pass our quality inspection. We feel, smell, and examine every hide by hand.' },
              { num: '02', title: 'Pattern Cutting', desc: 'Using time-honoured paper patterns refined over 20+ years, our cutters shape each component with surgical precision.' },
              { num: '03', title: 'Lasting & Shaping', desc: 'The leather is stretched over a wooden last that mirrors the precise anatomy of the foot, then hand-nailed into form.' },
              { num: '04', title: 'Welt Stitching', desc: 'Our artisans hand-stitch the welt — a process that can take 3 hours alone — creating the structural backbone of the shoe.' },
              { num: '05', title: 'Sole Attachment', desc: 'Leather soles are hand-channelled and attached with both adhesive and stitching for a bond that lasts decades.' },
              { num: '06', title: 'Hand Finishing', desc: 'The shoe is burnished, polished, and hand-painted through a 6-step process that gives each pair its luminous final character.' },
            ].map((s, i) => (
              <div key={i} className="process-step">
                <div className="process-step__num">{s.num}</div>
                <div>
                  <h3 className="process-step__title">{s.title}</h3>
                  <p className="process-step__desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline-section">
        <div className="container">
          <div style={{textAlign:'center', marginBottom:56}}>
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">From Workshop to <em>World Stage</em></h2>
          </div>
          <div className="timeline">
            {timeline.map((t, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-item__content">
                  <span className="timeline-item__year">{t.year}</span>
                  <h3>{t.title}</h3>
                  <p>{t.desc}</p>
                </div>
                <div className="timeline-item__dot" />
              </div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values" style={{background:'var(--black)'}}>
        <div className="container">
          <div style={{textAlign:'center', marginBottom:56}}>
            <p className="section-label" style={{color:'var(--gold)'}}>What We Stand For</p>
            <h2 className="section-title" style={{color:'var(--white)'}}>Our <em>Core Values</em></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card">
                <div className="value-card__icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container" style={{textAlign:'center'}}>
          <p className="section-label">The Hands Behind the Work</p>
          <h2 className="section-title">Our <em>Master Artisans</em></h2>
          <p className="section-subtitle" style={{margin:'0 auto 48px', textAlign:'center'}}>
            Each artisan at TopKing has spent a minimum of 3 years in formal training. Many have 10–20 years of experience.
          </p>
          <div className="artisan-grid">
            {[
              { name: 'Ajiboye Abraham ', role: 'Founder & Head Cobbler', img: '' },
              { name: 'Artisan', role: 'Senior Pattern Cutter', img: '' },
              { name: 'Artisan II', role: 'Master Finisher', img: '' },
              { name: 'Atisan III', role: 'Head of Bespoke', img: '' },
            ].map((a, i) => (
              <div key={i} className="artisan-card">
                <div className="artisan-card__img">
                  <img src={a.img} alt={a.name} />
                </div>
                <h3>{a.name}</h3>
                <p>{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="about-cta">
        <div className="container">
          <h2>Ready to own a piece of this story?</h2>
          <div style={{display:'flex', gap:16, flexWrap:'wrap', justifyContent:'center', marginTop:28}}>
            <Link to="/shop" className="btn-primary">Shop the Collection</Link>
            <Link to="/contact" className="btn-outline-gold">Contact Our Team</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
