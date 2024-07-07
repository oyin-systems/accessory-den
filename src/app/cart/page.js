import React from "react";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";

const Cart = () => {
  return (
    <>
      <Header />
      <section className="bg-white">
        <h1 className="text-3xl text-center font-bold py-10">
          My Shopping Cart
        </h1>
        <div className="container mx-20 py-10 bg-[#FAFAFA] rounded-3xl ">
          <div className="grid grid-cols-5 mb-6 text-[#404859] text-sm border-b border-gray-200">
            <div className="font-semibold uppercase ml-10">Product</div>
            <div className="font-semibold uppercase">Description</div>
            <div className="font-semibold uppercase ml-20">Price</div>
            <div className="font-semibold uppercase ml-20">Quantity</div>
            <div className="font-semibold uppercase">Subtotal</div>
          </div>
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
            <div key={product.id} className="grid grid-cols-5 gap-2 mb-16">
              <div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={176}
                  height={130}
                  className="object-cover mb-4"
                />
              </div>
              <div>
                <h1 className="text-2xl text-[#313131] font-semibold mb-2">
                  {product.name}
                </h1>
                <p className="text-[#797F8B] text-xs">{product.description}</p>
              </div>
              <div className="text-center font-semibold text-2xl text-[#313131]">
                {product.price}
              </div>
              <div className="bg-white rounded-3xl h-fit w-fit p-2 ml-10">
                <div className="flex items-center justify-center space-x-2">
                  <div className="rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center">
                    <span className="text-[#F2F2F2]">-</span>
                  </div>
                  <span className="px-2 py-1 text-lg font-medium">
                    {product.quantity}
                  </span>
                  <div className="rounded-full bg-[#0B7D6A] w-8 h-8 flex items-center justify-center">
                    <span className="text-white">+</span>
                  </div>
                </div>
              </div>
              <div className="text-center font-semibold text-2xl text-[#313131] ml-[-120px]">
                {product.price}
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center">
          <div className="w-fit container flex items-center mx-20 rounded-2xl bg-white mt-10 border border-[#E6E6E6]">
            <div className="flex items-center w-fit h-[90px] p-5">
              <h3 className="text-xl font-medium mr-6">Coupon Code</h3>
              <form className="relative flex">
                <input
                  type="text"
                  className=" py-2 px-4 bg-white border border-[#E6E6E6] rounded-2xl w-[650px] h-[50px]"
                  placeholder="Enter code"
                />
                <button
                  type="button"
                  className="absolute right-0 bg-[#0B7D6A] opacity-50 hover:opacity-100 text-white py-2 px-6 rounded-2xl w-fit h-[50px] text-base font-normal leading-5"
                >
                  Apply Coupon
                </button>
              </form>
            </div>
          </div>
          <Link href="/checkout">
            <button className="bg-[#0B7D6A] text-white py-2 px-6 rounded-2xl mt-10">
              Checkout
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
