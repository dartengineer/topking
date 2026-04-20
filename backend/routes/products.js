const express = require('express');
const router = express.Router();
let products = require('../data/products');

// GET all products (with optional filters)
router.get('/', (req, res) => {
  let filtered = [...products];
  const { category, minPrice, maxPrice, size } = req.query;

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }
  if (minPrice) {
    filtered = filtered.filter(p => p.price >= parseFloat(minPrice));
  }
  if (maxPrice) {
    filtered = filtered.filter(p => p.price <= parseFloat(maxPrice));
  }
  if (size) {
    filtered = filtered.filter(p => p.sizes.includes(parseInt(size)));
  }

  res.json({ success: true, count: filtered.length, data: filtered });
});

// GET featured products
router.get('/featured', (req, res) => {
  const featured = products.filter(p => p.featured);
  res.json({ success: true, data: featured });
});

// GET single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, data: product });
});

// POST create product (admin)
router.post('/', (req, res) => {
  const newProduct = {
    id: String(products.length + 1),
    ...req.body,
    stock: req.body.stock || 10,
    featured: req.body.featured || false
  };
  products.push(newProduct);
  res.status(201).json({ success: true, data: newProduct });
});

// PUT update product (admin)
router.put('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ success: false, message: 'Product not found' });
  products[index] = { ...products[index], ...req.body };
  res.json({ success: true, data: products[index] });
});

// DELETE product (admin)
router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ success: false, message: 'Product not found' });
  products.splice(index, 1);
  res.json({ success: true, message: 'Product deleted' });
});

module.exports = router;
