'use client'
import React, { useState } from 'react';

const CartPage: React.FC = () => {
  const [quantities, setQuantities] = useState({ lcdMonitor: 1, ps4Gamepad: 7 });
  const [coupon, setCoupon] = useState('');
  const [subtotal, setSubtotal] = useState(1300);
  const shipping = 199;
  const total = subtotal + shipping;

  const handleQuantityChange = (product: string, quantity: number) => {
    setQuantities({ ...quantities, [product]: quantity });
    updateSubtotal();
  };

  const updateSubtotal = () => {
    const newSubtotal = quantities.lcdMonitor * 600 + quantities.ps4Gamepad * 100;
    setSubtotal(newSubtotal);
  };

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    // Apply coupon logic here
  };

  return (
    <div className="cart-page">
            <main>
        <h2>Cart</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LCD Monitor</td>
              <td>$600</td>
              <td>
                <input
                  type="number"
                  value={quantities.lcdMonitor}
                  onChange={(e) => handleQuantityChange('lcdMonitor', parseInt(e.target.value))}
                />
              </td>
              <td>${quantities.lcdMonitor * 600}</td>
            </tr>
            <tr>
              <td>PS4 Gamepad</td>
              <td>$100</td>
              <td>
                <input
                  type="number"
                  value={quantities.ps4Gamepad}
                  onChange={(e) => handleQuantityChange('ps4Gamepad', parseInt(e.target.value))}
                />
              </td>
              <td>${quantities.ps4Gamepad * 100}</td>
            </tr>
          </tbody>
        </table>
        <div className="coupon-section">
          <input
            type="text"
            value={coupon}
            onChange={handleCouponChange}
            placeholder="Coupon Code"
          />
          <button onClick={applyCoupon}>Apply Coupon</button>
        </div>
        <div className="cart-total">
          <p>Subtotal: ${subtotal}</p>
          <p>Shipping: ${shipping}</p>
          <p>Total: ${total}</p>
          <button>Proceed to Checkout</button>
        </div>
      </main>
      <footer>
        <div className="subscribe">
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="support">
          <h3>Support</h3>
          <p>Call us: +123456789</p>
          <p>Email: support@example.com</p>
        </div>
        <div className="account">
          <h3>Account</h3>
          <a href="/login">My Account</a>
          <a href="/register">Register</a>
          <a href="/wishlist">Wishlist</a>
          <a href="/shop">Shop</a>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
          <a href="/signup">Sign Up</a>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
