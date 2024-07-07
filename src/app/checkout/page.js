import React from "react";
import Header from "../../components/Header";
import Link from "next/link";
import Image from "next/image";
import creditcard from "public/images/creditcard.png";
import mastercard from "public/images/mastercard.png";

const Checkout = () => {
  return (
    <>
      <Header />
      <section className="flex flex-col lg:flex-row">
        <div className="container px-12 py-10 bg-white lg:w-[60%]">
          <h1 className="text-xl font-bold mb-6">Billing Details</h1>
          <form className="space-y-4 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-sm block text-[#1A1A1A] mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="w-full py-2 px-4 border border-[#E6E6E6] rounded text-[#999999]"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="text-sm block text-[#1A1A1A] mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="w-full py-2 px-4 border border-[#E6E6E6] rounded text-[#999999]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="streetAddress"
                className="text-sm block text-[#1A1A1A] mb-2"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                placeholder="Enter your street address"
                className="w-full py-2 px-4 border border-[#E6E6E6] rounded text-[#999999]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="emailAddress"
                  className="text-sm block text-[#1A1A1A] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="Enter your email address"
                  className="w-full py-2 px-4 border border-[#E6E6E6] rounded text-[#999999]"
                />
              </div>
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="text-sm block text-[#1A1A1A] mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone number"
                  className="w-full py-2 px-4 border border-[#E6E6E6] rounded text-[#999999]"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                id="shipDifferentAddress"
              />
              <label htmlFor="shipDifferentAddress">
                Ship to a different address
              </label>
            </div>
          </form>

          <h1 className="text-xl font-bold mb-6">Payment Method</h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="creditCard"
                className="text-sm block text-[#1A1A1A] mb-2"
              >
                Credit Card
              </label>
              <div className="relative flex items-center space-x-4">
                <input
                  type="text"
                  id="creditCard"
                  placeholder="Credit Card"
                  className="w-[320px] py-2 px-4 border border-[#0B7D6A] rounded"
                />
                <div className="flex gap-2 absolute left-[230px]">
                  <Image
                    src={creditcard}
                    alt="Credit card"
                    width={48}
                    height={32}
                    className="w-6 h-6"
                  />
                  <Image
                    src={mastercard}
                    alt="Mastercard Logo"
                    width={48}
                    height={32}
                    className="w-8 h-6"
                  />
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="cardNumber"
                className="text-sm block text-[#1A1A1A] mb-2"
              >
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="5399 5868 8686 8688"
                className="w-full py-2 px-4 border border-[#E6E6E6] rounded text-[#999999]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expiryDate"
                  className="text-sm block text-[#1A1A1A] mb-2"
                >
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  className="w-full py-2 px-4 border border-[#E6E6E6] rounded text-[#999999]"
                />
              </div>
              <div>
                <label
                  htmlFor="securityNumber"
                  className="text-sm block text-[#1A1A1A] mb-2"
                >
                  Security No
                </label>
                <input
                  type="text"
                  id="securityNumber"
                  placeholder="Enter security number"
                  className="w-full py-2 px-4 border border-[#E6E6E6] rounded text-[#999999]"
                />
              </div>
            </div>
            <Link href="/confirm">
              <button className="mt-10 ml-[200px] h-[57px] w-[276px] bg-[#0B7D6A] text-white py-2 px-6 rounded-2xl">
                Place Order
              </button>
            </Link>
          </form>
        </div>

        <div className="container  mt-10 px-12 py-10 lg:w-[40%]">
          <div className="w-[475px] h-[330px] rounded-2xl bg-[#FAFAFA]">
            <h1 className="text-xl font-bold mb-6 text-center py-4">
              Cart Summary
            </h1>
            <div className="flex items-center justify-between px-8 mb-8">
              <div>
                <h3 className="text-base font-semibold leading-5 text-[#313131] mb-1">
                  5 X Eclipse Chrono
                </h3>
                <p className="text-[10px] leading-3 font-normal text-[#797F8B]">
                  Sleek modern chronograph with
                  <br />a black dial
                </p>
              </div>
              <h3 className="text-xl font-semibold leading-7 text-[#313131]">
                NGN 180,000
              </h3>
            </div>
            <div className="flex items-center justify-between px-8 mb-8">
              <div>
                <h3 className="text-base font-semibold leading-5 text-[#313131] mb-1">
                  2 X Urban Classic
                </h3>
                <p className="text-[10px] leading-3 font-normal text-[#797F8B]">
                  Sleek modern chronograph with
                  <br />a black dial
                </p>
              </div>
              <h3 className="text-xl font-semibold leading-7 text-[#313131]">
                NGN 100,000
              </h3>
            </div>
            <hr />
            <div className="flex items-center justify-end mt-4 mr-6">
              <p className="mr-4 text-sm leading-3 font-normal text-[#797F8B]">
                Total
              </p>
              <h3 className="text-xl font-semibold leading-7 text-[#797F8B]">
                NGN 280,000
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
