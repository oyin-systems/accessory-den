"use client";

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.unique_id === product.unique_id
      );
      if (existingProduct) {
        return prevCart.map((item) =>
          item.unique_id === product.unique_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    console.log(`${product.name} added to cart!`);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.unique_id !== product.unique_id)
    );
    console.log(`${product.name} removed from cart!`);
  };

  const incrementQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.unique_id === product.unique_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.unique_id === product.unique_id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
