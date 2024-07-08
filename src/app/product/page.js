import React from "react";
import Header from "@components/Header";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@components/StarRating";

const products = [
  {
    id: 1,
    name: "Eclipse Chrono",
    rating: 4,
    description:
      "Sleek modern chronograph with a black dial and stainless steel brand perfect for any occassion",
    price: "NGN 36,000",
    image: "/images/eclipse.png",
    quantity: 5,
  },
];

const recents = [
  {
    id: 1,
    image: "/images/elite.png",
    display: true,
  },
  {
    id: 2,
    image: "/images/urbangrey.png",
    display: true,
  },
  {
    id: 3,
    image: "/images/cufflinks.png",
    display: true,
  },
  {
    id: 4,
    image: "/images/elite.png",
    display: false,
  },
  {
    id: 5,
    image: "/images/cufflinks.png",
    display: false,
  },
];

const SingleProduct = () => {
  return (
    <>
      <Header />
      <section id="products" className="px-5 md:px-20 py-1 md:py-20 w-screen">
        <div className="container mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex md:flex-row flex-col py-10 gap-10"
            >
              {/* product image */}
              <div className="rounded-lg bg-[#FAFAFA] w-[85vw] md:w-[650px] h-[260px] md:h-[400px] flex items-center justify-center relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={176}
                  height={130}
                  className="object-cover w-[270px] md:w-[420px] h-[200px] md:h-[350px]"
                />
              </div>

              {/* product Details */}
              <div className="bg-white w-[85vw] md:w-[550px] h-[295px] md:h-[400px]">
                <h3 className="text-xl md:text-3xl font-medium text-[#313131]">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-xs md:text-xl my-4">
                  {product.description}
                </p>
                <div className="flex items-center">
                  <StarRating rating={product.rating} />
                  <span className="ml-4 text-xs md:text-xl text-[#404859B2]">
                    (121)
                  </span>
                </div>

                <div className="flex items-center gap-4 md:gap-6 my-4 md:my-10">
                  <p className="line-through text-[#B3B3B3] text-base md:text-xl leading-8 font-normal">
                    NGN 45,000
                  </p>
                  <p className="text-xl md:text-2xl text-[#0B7D6A] font-medium">
                    {product.price}
                  </p>
                  <div className=" bg-[#EA4B481A] rounded-[30px] flex items-center justify-center px-2 w-[67px] md:w-[75px] h-[24px] md:h-[27px]">
                    <p className="text-xs md:text-sm font-medium text-[#EA4B48]">
                      20% off
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4 md:mb-10">
                  {/* signs */}
                  <div className="flex items-center justify-center text-black bg-[#FAFAFA] rounded-3xl w-[124px] h-[50px]">
                    <div className="rounded-full bg-[#F2F2F2] w-[34px] h-[34px] flex items-center justify-center">
                      <span className="text-xl font-semibold">-</span>
                    </div>
                    <span className="px-4 text-base font-normal">
                      {product.quantity}
                    </span>
                    <div className="rounded-full bg-[#F2F2F2] w-[34px] h-[34px] flex items-center justify-center">
                      <span className="text-xl font-semibold">+</span>
                    </div>
                  </div>

                  {/* ad */}
                  <div className="text-[#404859] text-[8px] md:text-[10px] font-normal ml-10">
                    <p>
                      Only <span className="text-[#0B7D6A]">12 items</span>{" "}
                      left!
                    </p>
                    <p>Don&apos;t miss it</p>
                  </div>
                </div>

                <Link href="/checkout">
                  <button className="bg-[#0B7D6A] hover:bg-white text-sm leading-4 text-white hover:text-[#0B7D6A] hover:border border-[#0B7D6A] rounded-xl mt-2 w-[109px] md:w-[157px] h-[39px] md:h-[49px] mr-8">
                    Buy Now
                  </button>
                </Link>
                <Link href="/cart">
                  <button className="bg-white text-sm leading-4 text-[#0B7D6A] border border-[#0B7D6A] hover:bg-[#0B7D6A] hover:text-white rounded-xl mt-2 w-[109px] md:w-[157px] h-[39px] md:h-[49px]">
                    Add to Cart
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* recents */}
        <h1 className="text-2xl text-[#313131] font-bold mt-8 md:mt-14">
          Recently viewed
        </h1>
        <div className="flex gap-8 mt-10">
          {recents.map((recent) => (
            <div
              key={recent.id}
              className={`bg-white w-[40vw] md:w-[200px] h-[150px] ${
                recent.display ? "hidden md:block" : "block md:hidden"
              }`}
            >
              <div className="rounded-lg bg-[#FAFAFA] flex items-center justify-center">
                <Image
                  src={recent.image}
                  alt="recent"
                  width={176}
                  height={130}
                  className="w-[150px] md:w-[157px] h-[130px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
