// src/pages/cart.jsx
import React from 'react';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Cart</h1>
      <Cart />
    </div>
  );
};

export default CartPage;
