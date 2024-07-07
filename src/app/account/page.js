import React from "react";
import Header from "../../components/Header";

const Account = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-6">Account Information</h1>
        <div className="space-y-4">
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            <p>
              <strong>Name:</strong> John Doe
            </p>
            <p>
              <strong>Email:</strong> john.doe@example.com
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Order History</h2>
            <ul className="list-disc ml-5">
              <li>Order #1 - Completed</li>
              <li>Order #2 - In Progress</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
