/* eslint-disable react/no-unescaped-entities */

"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@components/Header";
import Image from "next/image";
import StarRating from "@components/StarRating";
// import Link from "next/link";
import { useCart } from "../../../context/CartContext";

// Dummy product data (for demonstration purposes)
const products = [
  {
    unique_id: 1,
    name: "Eclipse Chrono",
    rating: 4,
    description:
      "Sleek modern chronograph with a black dial and stainless steel brand perfect for any occasion",
    current_price: [{ NGN: [36000] }],
    photos: [{ url: "eclipse.png" }],
    slug: "eclipse-chrono",
  },
];

const SingleProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const { addToCart } = useCart();
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/api/timbu");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data.items);
        const foundProduct = data.items.find((item) => item.url_slug === slug);

        if (!foundProduct) {
          throw new Error("Product not found");
        }

        setProduct(foundProduct);
      } catch (error) {
        setError(error.message);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const productInCart = cart.find(
    (item) => item.unique_id === product?.unique_id
  );
  const quantity = productInCart ? productInCart.quantity : 1;

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <section id="products" className="px-5 md:px-20 py-1 md:py-20 w-screen">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col py-10 gap-10">
            {/* Product image */}
            <div className="rounded-lg bg-[#FAFAFA] w-[85vw] md:w-[650px] h-[260px] md:h-[400px] flex items-center justify-center relative">
              <Image
                src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
                width={420}
                height={350}
                className="object-cover w-[270px] md:w-[420px] h-[200px] md:h-[350px]"
              />
            </div>

            {/* Product Details */}
            <div className="bg-white w-[85vw] md:w-[550px] h-[295px] md:h-[400px]">
              <h3 className="text-xl md:text-3xl font-medium text-[#313131]">
                {product.name}
              </h3>
              <p className="text-gray-700 text-xs md:text-xl my-4">
                {product.description}
              </p>
              <div className="flex items-center">
                <StarRating rating={4} />
                <span className="ml-4 text-xs md:text-xl text-[#404859B2]">
                  (121)
                </span>
              </div>

              <div className="flex items-center gap-4 md:gap-6 my-4 md:my-10">
                <p className="line-through text-[#B3B3B3] text-base md:text-xl leading-8 font-normal">
                  NGN {product.current_price[0]?.NGN[0] + 30000}
                </p>
                <p className="text-xl md:text-2xl text-[#0B7D6A] font-medium">
                  NGN {product.current_price[0]?.NGN[0]}
                </p>
                <div className="bg-[#EA4B481A] rounded-[30px] flex items-center justify-center px-2 w-[67px] md:w-[75px] h-[24px] md:h-[27px]">
                  <p className="text-xs md:text-sm font-medium text-[#EA4B48]">
                    20% off
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4 md:mb-10">
                {/* Quantity Controls */}
                <div className="flex items-center justify-center text-black bg-[#FAFAFA] rounded-3xl w-[124px] h-[50px]">
                  <div
                    className="rounded-full bg-[#F2F2F2] w-[34px] h-[34px] flex items-center justify-center cursor-pointer z-[100]"
                    onClick={() => decrementQuantity(product)}
                  >
                    <span className="text-xl font-semibold">-</span>
                  </div>
                  <span className="px-4 text-base font-normal">{quantity}</span>
                  <div
                    className="rounded-full bg-[#F2F2F2] w-[34px] h-[34px] flex items-center justify-center cursor-pointer z-[100]"
                    onClick={() => incrementQuantity(product)}
                  >
                    <span className="text-xl font-semibold">+</span>
                  </div>
                </div>

                {/* Stock Info */}
                <div className="text-[#404859] text-[8px] md:text-[10px] font-normal ml-10">
                  <p>
                    Only <span className="text-[#0B7D6A]">12 items</span> left!
                  </p>
                  <p>Don&apos;t miss it</p>
                </div>
              </div>

              <button
                onClick={() => addToCart(product)}
                className="bg-[#0B7D6A] hover:bg-white text-sm leading-4 text-white hover:text-[#0B7D6A] border border-[#0B7D6A] rounded-xl mt-2 w-[109px] md:w-[157px] h-[39px] md:h-[49px] mr-8"
              >
                Add to Cart
              </button>

              {/* <Link href="/checkout"> */}
              <button
                className="bg-white hover:bg-[#0B7D6A] text-sm leading-4 text-[#0B7D6A] hover:text-white border border-[#0B7D6A] rounded-xl mt-2 w-[109px] md:w-[157px] h-[39px] md:h-[49px] "
                onClick={() => removeFromCart(product)}
              >
                Remove from Cart
              </button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
