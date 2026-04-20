const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

let orders = [];

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
router.post('/', (req, res) => {
  const { customer, items, total, paymentMethod } = req.body;

  if (!customer || !items || !total) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const newOrder = {
    id: uuidv4().slice(0, 8).toUpperCase(),
    customer,
    items,
    total,
    paymentMethod: paymentMethod || 'card',
    status: 'confirmed',
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);
  res.status(201).json({ success: true, data: newOrder });
});

// PUT update order status (admin)
router.put('/:id/status', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (!order) return res.status(404).json({ success: false, message: 'Order not found' });
  order.status = req.body.status;
  res.json({ success: true, data: order });
});

module.exports = router;
