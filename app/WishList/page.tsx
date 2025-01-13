'use client'
import React, { useState } from 'react';

const CheckoutPage: React.FC = () => {
  const [billingDetails, setBillingDetails] = useState({
    firstName: '',
    companyName: '',
    streetAddress: '',
    apartmentSuite: '',
    townCity: '',
    phoneNumber: '',
    emailAddress: '',
  });
  const [coupon, setCoupon] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoupon(e.target.value);
  };

  const applyCoupon = () => {
    // Apply coupon logic here
  };

  const placeOrder = () => {
    // Place order logic here
  };

  const subtotal = 750; // Example subtotal
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="checkout-page">
         <main>
        <h2>CheckOut</h2>
        <form className="billing-details">
          <label>
            First Name
            <input type="text" name="firstName" value={billingDetails.firstName} onChange={handleChange} />
          </label>
          <label>
            Company Name
            <input type="text" name="companyName" value={billingDetails.companyName} onChange={handleChange} />
          </label>
          <label>
            Street Address
            <input type="text" name="streetAddress" value={billingDetails.streetAddress} onChange={handleChange} />
          </label>
          <label>
            Apartment/Suite
            <input type="text" name="apartmentSuite" value={billingDetails.apartmentSuite} onChange={handleChange} />
          </label>
          <label>
            Town/City
            <input type="text" name="townCity" value={billingDetails.townCity} onChange={handleChange} />
          </label>
          <label>
            Phone Number
            <input type="text" name="phoneNumber" value={billingDetails.phoneNumber} onChange={handleChange} />
          </label>
          <label>
            Email Address
            <input type="email" name="emailAddress" value={billingDetails.emailAddress} onChange={handleChange} />
          </label>
          <label>
            <input type="checkbox" /> Save this information for next time
          </label>
        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          <ul>
            <li>LCD Monitor: $650</li>
            <li>HP Omenpod: $100</li>
          </ul>
          <p>Subtotal: ${subtotal}</p>
          <p>Shipping: Free</p>
          <p>Total: ${total}</p>
        </div>

        <div className="payment-options">
          <label>
            <input type="radio" name="payment" value="bank" /> Pay via Bank
          </label>
          <label>
            <input type="radio" name="payment" value="cod" /> Cash on Delivery
          </label>
        </div>

        <div className="coupon-section">
          <input type="text" value={coupon} onChange={handleCouponChange} placeholder="Coupon Code" />
          <button onClick={applyCoupon}>Apply Coupon</button>
        </div>

        <button onClick={placeOrder}>Place Order</button>
      </main>
      <footer>
        <div className="subscribe">
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
              </footer>
    </div>
  );
};

export default CheckoutPage;
