import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface Product { id: string; name: string; price: number; }
interface CartItem { productId: string; quantity: number; }

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pRes = await axios.get('/api/products');
        const cRes = await axios.get('/api/cart');
        setProducts(pRes.data);
        setCart(cRes.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Helper to find product name by ID for the cart display
  const getProductName = (id: string) => products.find(p => p.id === id)?.name || 'Unknown Item';

  return (
    <div className="App">
      <nav className="navbar">
        <h1>MicroStore 🚀 - Version 2.0 (Live Demo)</h1>
      </nav>

      <div className="container">
        {/* Left Side: Product Catalogue */}
        <section>
          <h2>Latest Products</h2>
          {loading ? <p>Loading inventory...</p> : (
            <div className="product-grid">
              {products.map(p => (
                <div key={p.id} className="card">
                  <h3>{p.name}</h3>
                  <div className="price">${p.price}</div>
                  <button className="add-btn">Add to Cart</button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Right Side: Cart Summary */}
        <aside className="cart-panel">
          <h2>Your Cart 🛒</h2>
          {cart.length === 0 ? <p>Cart is empty</p> : (
            <div>
              {cart.map((item, idx) => (
                <div key={idx} className="cart-item">
                  <span>{getProductName(item.productId)}</span>
                  <strong>x{item.quantity}</strong>
                </div>
              ))}
              <div style={{ marginTop: '1rem', borderTop: '2px solid #eee', paddingTop: '1rem' }}>
                <button className="add-btn" style={{ backgroundColor: '#10b981' }}>Checkout</button>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default App;
