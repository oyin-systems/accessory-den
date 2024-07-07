// pages/index.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Footer />
    </>
  );
}

export default Home;




// import React, { useState, useEffect } from 'react';
// import ProductList from '@/components/ProductList';

// const Shop = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // Fetch products from an API or use static data
//     const fetchProducts = async () => {
//       const response = await fetch('/api/products'); // Update with your API endpoint
//       const data = await response.json();
//       setProducts(data);
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Shop</h1>
//       <ProductList products={products} />
//     </div>
//   );
// };

// export default Shop;
