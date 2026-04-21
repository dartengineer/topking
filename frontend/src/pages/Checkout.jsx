import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { createOrder } from '../hooks/useApi';
import './Checkout.css';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: info, 2: payment, 3: confirm
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState(null);

  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', country: 'Nigeria', zip: '',
    paymentMethod: 'cod', // Changed to cash on delivery
    notes: '',
  });

  const update = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await createOrder({
        customer: {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
          address: `${form.address}, ${form.city}, ${form.state}, ${form.country}`,
        },
        items: items.map(i => ({ id: i.id, name: i.name, size: i.selectedSize, qty: i.quantity, price: i.price })),
        total: totalPrice,
        paymentMethod: form.paymentMethod,
        notes: form.notes,
      });
      setOrder(res.data);
      clearCart();
      setStep(3);
    } catch (err) {
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (step === 3 && order) return (
    <div className="checkout-confirm">
      <div className="checkout-confirm__card">
        <div className="checkout-confirm__icon">✓</div>
        <h2>Order Confirmed</h2>
        <p className="checkout-confirm__id">Order #{order.id}</p>
        <p>Thank you, {order.customer?.name}. Your handcrafted pieces are being prepared with care. You'll receive a confirmation at <strong>{order.customer?.email}</strong>.</p>
        <div className="checkout-confirm__items">
          {order.items?.map((item, i) => (
            <div key={i} className="checkout-confirm__item">
              <span>{item.name}</span>
              <span>EU {item.size} × {item.qty}</span>
              <span>${(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="checkout-confirm__total">
          Total Paid: <strong>${order.total?.toLocaleString()}</strong>
        </div>
        <button className="btn-primary" onClick={() => navigate('/')}>Return Home</button>
        <button className="btn-outline" onClick={() => navigate('/shop')} style={{marginTop:10}}>Continue Shopping</button>
      </div>
    </div>
  );

  return (
    <div className="checkout-page">
      <div className="page-header">
        <div className="gold-corner tl" /><div className="gold-corner tr" />
        <div className="container">
          <h1>Checkout</h1>
          <p>Secure & complimentary worldwide shipping</p>
        </div>
      </div>

      <div className="container">
        {/* Steps */}
        <div className="checkout-steps">
          {['Delivery', 'Payment', 'Review'].map((s, i) => (
            <div key={i} className={`checkout-step ${step > i+1 ? 'done' : step === i+1 ? 'active' : ''}`}>
              <span className="step-num">{step > i+1 ? '✓' : i+1}</span>
              <span className="step-label">{s}</span>
              {i < 2 && <div className="step-connector" />}
            </div>
          ))}
        </div>

        <div className="checkout-layout">
          <div className="checkout-form">

            {/* Step 1: Delivery */}
            {step === 1 && (
              <div className="checkout-section">
                <h3 className="checkout-section__title">Delivery Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input name="firstName" value={form.firstName} onChange={update} placeholder="Adewale" />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input name="lastName" value={form.lastName} onChange={update} placeholder="Johnson" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={update} placeholder="you@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={update} placeholder="+234 903 377 8156" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Street Address *</label>
                  <input name="address" value={form.address} onChange={update} placeholder="12 Victoria Island Road" />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>City *</label>
                    <input name="city" value={form.city} onChange={update} placeholder="Lagos" />
                  </div>
                  <div className="form-group">
                    <label>State / Province</label>
                    <input name="state" value={form.state} onChange={update} placeholder="Lagos State" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Country</label>
                    <select name="country" value={form.country} onChange={update}>
                      {['Nigeria','Ghana','South Africa','Kenya','UK','USA','Canada','UAE','Other'].map(c => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input name="zip" value={form.zip} onChange={update} placeholder="100001" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Order Notes (optional)</label>
                  <textarea name="notes" value={form.notes} onChange={update} rows={3} placeholder="Any special requests or fitting notes?" />
                </div>
                <button
                  className="btn-primary checkout-next"
                  onClick={() => setStep(2)}
                  disabled={!form.firstName || !form.lastName || !form.email || !form.phone || !form.address || !form.city}
                >
                  Continue to Payment →
                </button>
              </div>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="checkout-section">
                <h3 className="checkout-section__title">Payment Method</h3>
                <div className="payment-methods">
                  {[
                    { id: 'cod', label: 'Cash on Delivery', icon: '💵' },
                    { id: 'bank', label: 'Bank Transfer', icon: '🏦' },
                    { id: 'paystack', label: 'Paystack', icon: '🔐' },
                  ].map(m => (
                    <label key={m.id} className={`payment-method ${form.paymentMethod === m.id ? 'active' : ''}`}>
                      <input type="radio" name="paymentMethod" value={m.id} checked={form.paymentMethod === m.id} onChange={update} />
                      <span className="payment-method__icon">{m.icon}</span>
                      <span className="payment-method__label">{m.label}</span>
                    </label>
                  ))}
                </div>

                {form.paymentMethod === 'bank' && (
                  <div className="bank-details">
                    <p className="bank-details__note">Transfer the total amount to:</p>
                    <div className="bank-info">
                      <div><span>Bank</span><strong>First Bank Nigeria</strong></div>
                      <div><span>Account Name</span><strong>TopKing Luxury Ltd</strong></div>
                      <div><span>Account Number</span><strong>0123456789</strong></div>
                      <div><span>Reference</span><strong>Use your name + phone</strong></div>
                    </div>
                  </div>
                )}

                {form.paymentMethod === 'paystack' && (
                  <div className="paystack-note">
                    <p>You'll be redirected to Paystack's secure gateway to complete your payment.</p>
                  </div>
                )}

                {form.paymentMethod === 'cod' && (
                  <div className="cod-note">
                    <p>You'll pay in cash when your order is delivered to your doorstep.</p>
                  </div>
                )}

                <div className="checkout-nav">
                  <button className="btn-outline" onClick={() => setStep(1)}>← Back</button>
                  <button className="btn-primary checkout-next" onClick={() => setStep(3)}>
                    Review Order →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Review */}
            {step === 3 && (
              <div className="checkout-section">
                <h3 className="checkout-section__title">Review Your Order</h3>
                <div className="review-section">
                  <h4>Delivery To</h4>
                  <p>{form.firstName} {form.lastName}</p>
                  <p>{form.address}, {form.city}, {form.state}, {form.country}</p>
                  <p>{form.email} · {form.phone}</p>
                </div>
                <div className="review-section">
                  <h4>Payment</h4>
                  <p>{form.paymentMethod === 'card' ? `Card ending in ${form.cardNumber.slice(-4)}` : form.paymentMethod === 'bank' ? 'Bank Transfer' : 'Paystack'}</p>
                </div>
                <div className="checkout-nav">
                  <button className="btn-outline" onClick={() => setStep(2)}>← Back</button>
                  <button
                    className="btn-primary checkout-next"
                    onClick={handleSubmit}
                    disabled={loading}
                  >
                    {loading ? 'Processing...' : 'Place Order ♔'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="checkout-summary">
            <h3>Your Order</h3>
            <div className="checkout-summary__items">
              {items.map((item, i) => (
                <div key={i} className="checkout-summary__item">
                  <div className="checkout-summary__item-img">
                    <img src={item.images?.[0]} alt={item.name} />
                    <span className="checkout-summary__qty">{item.quantity}</span>
                  </div>
                  <div className="checkout-summary__item-info">
                    <p>{item.name}</p>
                    <span>EU {item.selectedSize}</span>
                  </div>
                  <span className="checkout-summary__item-price">${(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <div className="checkout-summary__totals">
              <div><span>Subtotal</span><span>${totalPrice.toLocaleString()}</span></div>
              <div><span>Shipping</span><span style={{color:'var(--gold)'}}>Free</span></div>
              <div className="checkout-summary__grand"><span>Total</span><span>${totalPrice.toLocaleString()}</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
