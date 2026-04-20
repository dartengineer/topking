const express = require('express');
const cors = require('cors');
const app = express();

// Allow requests from your Vercel frontend URL + local dev
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  process.env.FRONTEND_URL, // e.g. https://topking-luxury.vercel.app
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, Render health checks)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error(`CORS blocked: ${origin}`));
    }
  },
  credentials: true
}));

app.use(express.json());

// Serve static files from public folder
app.use('/public', express.static('public'));

// Routes
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));

// Health check (Render uses this to confirm your service is alive)
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'TopKing Luxury API is running', timestamp: new Date().toISOString() });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n👑 TopKing Luxury API running on port ${PORT}`);
  console.log(`   Allowed origins: ${allowedOrigins.join(', ')}\n`);
});
