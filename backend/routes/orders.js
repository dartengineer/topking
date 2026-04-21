const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const joi = require('joi');

let orders = [];

// Validation schemas
const customerSchema = joi.object({
  name: joi.string().min(2).max(100).required(),
  email: joi.string().email().required(),
  phone: joi.string().pattern(/^\+?[\d\s\-()]{10,15}$/).required(),
  address: joi.string().min(5).max(500).required(),
});

const itemSchema = joi.object({
  id: joi.string().required(),
  name: joi.string().required(),
  price: joi.number().positive().required(),
  quantity: joi.number().integer().min(1).max(100).required(),
  selectedSize: joi.string().optional(),
});

const orderSchema = joi.object({
  customer: customerSchema.required(),
  items: joi.array().items(itemSchema).min(1).required(),
  total: joi.number().positive().required(),
  paymentMethod: joi.string().valid('cod', 'bank', 'paystack').default('cod'),
});

// Validation middleware
const validateOrder = (req, res, next) => {
  const { error } = orderSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: 'Validation error',
      details: error.details.map(d => d.message)
    });
  }
  next();
};

// GET all orders (admin)
router.get('/', (req, res) => {
  res.json({ success: true, count: orders.length, data: orders });
});

// GET single order
router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
  res.json({ success: true, data: order });
});

// POST create order
router.post('/', validateOrder, (req, res, next) => {
  try {
    const { customer, items, total, paymentMethod } = req.body;

    const newOrder = {
      id: uuidv4().slice(0, 8).toUpperCase(),
      customer,
      items,
      total,
      paymentMethod,
      status: 'confirmed',
      createdAt: new Date().toISOString()
    };

    orders.push(newOrder);
    res.status(201).json({ success: true, data: newOrder });
  } catch (err) {
    next(err);
  }
});

// PUT update order status (admin)
router.put('/:id/status', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
  order.status = req.body.status;
  res.json({ success: true, data: order });
});

module.exports = router;
