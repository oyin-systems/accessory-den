import React from "react";
import Header from "../../components/Header";
import Image from "next/image";
import complete from "public/images/complete.png";

const Account = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto my-32 py-10 w-fit p-10 rounded-2xl space-y-2 text-center">
        <Image
          src={complete}
          alt="complete sign"
          width={25}
          height={25}
          className="w-16 h-16 text-center mx-auto mb-10"
        />
        <h1 className="text-3xl font-bold mb-6">Thank you!</h1>
        <p>Your order #BE12345 has been placed.</p>
        <p>
          We sent an email to orders@banuelson.com with your order confirmation
          and bill.
        </p>
        <p>Date and Time placed: 17/02/2020 12:45PM</p>
      </div>
    </>
  );
};

export default Account;
