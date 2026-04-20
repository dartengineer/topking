import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const update = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1500);
  };

  return (
    <div className="contact-page">
      {/* Header */}
      <div className="page-header">
        <div className="gold-corner tl" /><div className="gold-corner tr" />
        <div className="gold-corner bl" /><div className="gold-corner br" />
        <div className="container">
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">

          {/* Info */}
          <div className="contact-info">
            <div className="contact-info__intro">
              <p className="section-label">Direct Contact</p>
              <h2 className="section-title">Let's <em>Talk</em></h2>
              <p>Whether you're enquiring about a pair, a custom order, a corporate gift, or simply want to know more about our craft — we respond to every message personally.</p>
            </div>

            <div className="contact-cards">
              <a href="tel:+2349033778156" className="contact-card">
                <div className="contact-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+234 903 377 8156</p>
                  <span>Mon – Sat, 9am – 7pm WAT</span>
                </div>
              </a>

              <a href="mailto:hello@topkingluxury.com" className="contact-card">
                <div className="contact-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>hello@topkingluxury.com</p>
                  <span>Response within 24 hours</span>
                </div>
              </a>

              <a href="https://wa.me/2349033778156" target="_blank" rel="noopener noreferrer" className="contact-card contact-card--whatsapp">
                <div className="contact-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>Chat with us instantly</p>
                  <span>Usually replies in minutes</span>
                </div>
              </a>

              <div className="contact-card">
                <div className="contact-card__icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h3>Visit Us</h3>
                  <p>12 Adeola Odeku Street</p>
                  <span>Victoria Island, Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="contact-social">
              <p className="section-label">Follow Our Craft</p>
              <div className="contact-social__links">
                <a href="https://instagram.com/topking_luxury" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5"/>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                  @topkingluxury
                </a>
                <a href="https://tiktok.com/topking.luxury" target="_blank" rel="noopener noreferrer">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 12a4 4 0 104 4V4a5 5 0 005 5"/>
                  </svg>
                  @topkingluxury
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {sent ? (
              <div className="contact-success">
                <div className="contact-success__icon">✓</div>
                <h3>Message Received</h3>
                <p>Thank you, {form.name}. Our team will respond to you personally within 24 hours.</p>
                <button className="btn-outline" onClick={() => setSent(false)}>Send Another Message</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 className="contact-form__title">Send a Message</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={update} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={update} placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input name="phone" value={form.phone} onChange={update} placeholder="+234 903 377 8156" />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <select name="subject" value={form.subject} onChange={update}>
                      <option value="">Select a topic</option>
                      <option>Product Enquiry</option>
                      <option>Custom Order</option>
                      <option>Order Status</option>
                      <option>Returns & Exchange</option>
                      <option>Wholesale / Corporate</option>
                      <option>Press / Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={update}
                    rows={6}
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact-submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Message'}
                  {!sending && (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map placeholder */}
      <div className="contact-map">
        <div className="contact-map__label">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
          </svg>
          Victoria Island, Lagos · Nigeria
        </div>
        <div className="contact-map__image">
          <img src="https://images.unsplash.com/photo-1504916374754-e97fc2e7c54b?w=1400&q=70" alt="Lagos" />
          <div className="contact-map__overlay" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
