import React from "react";
import Header from "@components/Header";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  return (
    <>
      <Header />
      <section className="bg-white w-screen px-5 md:px-20 mx-auto">
        <h1 className="text-xl md:text-3xl text-center font-bold py-10">
          My Shopping Cart
        </h1>
        <div className="container py-2 md:py-10 bg-[#FAFAFA] rounded-3xl">
          <div className="hidden md:grid grid-cols-5 mb-4 text-[#404859] text-xs md:text-sm">
            <div className="font-semibold uppercase ml-4 md:ml-16">Product</div>
            <div className="font-semibold uppercase ml-14 md:ml-0">
              Description
            </div>
            <div className="font-semibold uppercase ml-32 md:ml-12">Price</div>
            <div className="font-semibold uppercase ml-6 md:ml-14 hidden md:block ">
              Quantity
            </div>
            <div className="font-semibold uppercase hidden md:block ">
              Subtotal
            </div>
          </div>
          <hr className="hidden md:block" />
          {[
            {
              id: 1,
              name: "Eclipse Chrono",
              description:
                "Sleek Modern Chronograph with a black dial and stainless steel brand perfect for any occasion.",
              price: "NGN 36,000",
              quantity: 5,
              image: "/images/eclipse.png",
            },
            {
              id: 2,
              name: "Urban Classic",
              description:
                "Sleek Modern Chronograph with a black dial and stainless steel brand perfect for any occasion.",
              price: "NGN 50,000",
              quantity: 2,
              image: "/images/urbanblue.png",
            },
          ].map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-3 md:grid-cols-5 gap-2 mb-4 md:mb-16 mt-4"
            >
              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={176}
                  height={130}
                  className="w-[100px] h-[100px] object-cover ml-2 md:ml-16 mb-4 border border-[#E6E6E6] rounded-2xl"
                />
              </div>
              <div>
                <h1 className="text-base md:text-2xl text-[#313131] font-semibold mb-2">
                  {product.name}
                </h1>
                <p className="text-[#797F8B] text-[10px] md:text-xs">
                  {product.description}
                </p>
              </div>
              <div className="text-center font-semibold text-base md:text-2xl text-[#313131]">
                {product.price}
                <div className="md:hidden flex items-center justify-center space-x-1 md:space-x-2 bg-white rounded-3xl h-fit w-fit p-2 ml-4 md:ml-10 mt-4">
                  <div className="rounded-full bg-gray-300 w-6 md:w-8 h-6 md:h-8 flex items-center justify-center">
                    <span className="text-black">-</span>
                  </div>
                  <span className="px-2 py-1 text-base md:text-lg font-medium">
                    {product.quantity}
                  </span>
                  <div className="rounded-full bg-[#0B7D6A] w-6 md:w-8 h-6 md:h-8 flex items-center justify-center">
                    <span className="text-white">+</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex items-center justify-center space-x-1 md:space-x-2 bg-white rounded-3xl h-fit w-fit p-2 md:ml-10 ">
                <div className="rounded-full bg-gray-300 w-6 md:w-8 h-6 md:h-8 flex items-center justify-center">
                  <span className="text-black">-</span>
                </div>
                <span className="px-2 py-1 text-base md:text-lg font-medium">
                  {product.quantity}
                </span>
                <div className="rounded-full bg-[#0B7D6A] w-6 md:w-8 h-6 md:h-8 flex items-center justify-center">
                  <span className="text-white">+</span>
                </div>
              </div>
              <div className="hidden md:block text-center font-semibold text-base md:text-2xl text-[#313131] ml-[-120px]">
                {product.price}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:flex justify-between items-center mx-auto my-10 bg-white text-[#797F8B]">
          <div className="flex items-center justify-between w-[200px] h-[56px] px-4 rounded-lg border border-[#E6E6E6]">
            <p className="text-xs font-normal leading-5 ">Discount</p>
            <h2 className="text-base font-medium leading-8">NGN 0</h2>
          </div>
          <div className="flex items-center justify-between w-[200px] h-[56px] px-4 rounded-lg border border-[#E6E6E6]">
            <p className="text-xs font-normal leading-5 ">Delivery</p>
            <h2 className="text-base font-medium leading-8">NGN 0</h2>
          </div>
          <div className="flex items-center justify-between w-[220px] h-[56px] px-4 rounded-lg border border-[#E6E6E6]">
            <p className="text-xs font-normal leading-5 ">Subtotal</p>
            <h2 className="text-base font-medium leading-8">NGN 280,000</h2>
          </div>
          <div className="flex items-center justify-between w-[240px] h-[56px] px-4 rounded-lg border border-[#E6E6E6]">
            <p className="text-xs font-normal leading-5 ">Total</p>
            <h2 className="text-2xl font-medium leading-8">NGN 280,000</h2>
          </div>
        </div>

        <div className="md:hidden w-[80vw] mx-10 mt-5 bg-white text-[#797F8B]">
          <div className="flex items-center justify-between">
            <p className="text-sm font-normal leading-5 ">Subtotal</p>
            <h2 className="text-base font-medium leading-8">NGN 280,000</h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-normal leading-5 ">Total</p>
            <h2 className="text-xl font-medium leading-9">NGN 280,000</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-[350px] md:w-[820px] container flex items-center md:mr-20 rounded-lg md:rounded-2xl bg-white mt-10 border border-[#E6E6E6]">
            <div className="flex items-center w-fit h-11 md:h-[90px] p-2 md:p-5">
              <h3 className="text-[10px] md:text-xl font-medium mr-2 md:mr-6">
                Coupon Code
              </h3>
              <form className="relative flex">
                <input
                  type="text"
                  className="text-[8px] md:text-base py-2 px-2 md:px-4 bg-white border border-[#E6E6E6] rounded-lg md:rounded-2xl w-[250px] md:w-[600px] h-[25px] md:h-[50px]"
                  placeholder="Enter code"
                />
                <button
                  type="button"
                  className="absolute right-0 bg-[#0B7D6A] opacity-50 hover:opacity-100 text-white rounded-lg md:rounded-2xl w-[74px] md:w-[162px] h-[25px] md:h-[50px] text-[8px] md:text-base font-normal leading-5"
                >
                  Apply Coupon
                </button>
              </form>
            </div>
          </div>
          <Link href="/checkout">
            <button className="bg-[#0B7D6A] text-xs md:text-sm text-white rounded-lg md:rounded-2xl mt-6 md:mt-10 w-[115px] md:w-[188px] h-[39px] md:h-[57px]">
              Check out
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
