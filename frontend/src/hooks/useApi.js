import { useState, useEffect } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

export const useProducts = (filters = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const params = new URLSearchParams();
        if (filters.category && filters.category !== 'all') params.set('category', filters.category);
        if (filters.minPrice) params.set('minPrice', filters.minPrice);
        if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
        if (filters.size) params.set('size', filters.size);

        const url = `${API_BASE}/products${params.toString() ? '?' + params.toString() : ''}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setProducts(data.data);
      } catch (err) {
        // Fallback to local data if API not running
        const { default: localProducts } = await import('../data/localProducts.js');
        let filtered = localProducts;
        if (filters.category && filters.category !== 'all') {
          filtered = filtered.filter(p => p.category === filters.category);
        }
        if (filters.minPrice) filtered = filtered.filter(p => p.price >= parseFloat(filters.minPrice));
        if (filters.maxPrice) filtered = filtered.filter(p => p.price <= parseFloat(filters.maxPrice));
        if (filters.size) filtered = filtered.filter(p => p.sizes.includes(parseInt(filters.size)));
        setProducts(filtered);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [filters.category, filters.minPrice, filters.maxPrice, filters.size]);

  return { products, loading, error };
};

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${API_BASE}/products/${id}`);
        if (!res.ok) throw new Error('Not found');
        const data = await res.json();
        setProduct(data.data);
      } catch {
        const { default: localProducts } = await import('../data/localProducts.js');
        setProduct(localProducts.find(p => p.id === id) || null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  return { product, loading };
};

export const createOrder = async (orderData) => {
  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
    if (!res.ok) throw new Error('Order failed');
    return await res.json();
  } catch {
    // Mock order for demo
    return {
      success: true,
      data: {
        id: Math.random().toString(36).slice(2, 10).toUpperCase(),
        ...orderData,
        status: 'confirmed',
        createdAt: new Date().toISOString()
      }
    };
  }
};
