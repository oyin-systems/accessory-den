// src/pages/checkout.jsx
import React from 'react';
import Checkout from '../components/Checkout';

const CheckoutPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
