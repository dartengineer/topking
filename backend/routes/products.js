const express = require('express');
const router = express.Router();
let products = require('../data/products');

// Helper function to convert relative image URLs to absolute URLs
const resolveImageUrls = (product, req) => {
  let baseUrl = process.env.PUBLIC_URL;
  
  if (!baseUrl) {
    // Construct from request if PUBLIC_URL not set
    // With trust proxy enabled, this should work correctly
    const protocol = req.protocol || 'https';
    const host = req.get('host') || req.hostname;
    baseUrl = `${protocol}://${host}`;
  }
  
  return {
    ...product,
    images: product.images.map(img => 
      img.startsWith('http') ? img : `${baseUrl}${img}`
    )
  };
};


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

  const withResolvedUrls = filtered.map(p => resolveImageUrls(p, req));
  res.json({ success: true, count: withResolvedUrls.length, data: withResolvedUrls });
});

// GET featured products
router.get('/featured', (req, res) => {
  const featured = products.filter(p => p.featured);
  const withResolvedUrls = featured.map(p => resolveImageUrls(p, req));
  res.json({ success: true, data: withResolvedUrls });
});

// GET single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  const withResolvedUrl = resolveImageUrls(product, req);
  res.json({ success: true, data: withResolvedUrl });
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
