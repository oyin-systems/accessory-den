import React from "react";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Products from "@components/Products";
import Similar from "@components/Similar";
import Recently from "@components/Recently";
import Footer from "@components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-white">
        <Header />
        <Hero />
        <Products />
        <Similar />
        <Recently />
        <Footer />
      </div>
    </>
  );
};

export default Home;
