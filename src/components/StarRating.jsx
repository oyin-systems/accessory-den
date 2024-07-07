"use client";

// import { useState } from 'react';

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <Star 
          key={index} 
          filled={index < rating}
        />
      ))}
    </div>
  );
};

const Star = ({ filled }) => {
  return (
    <svg
      className={`w-3 h-3 cursor-pointer ${filled ? 'text-[#0B7D6A]' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049.927c.3-.921 1.603-.921 1.902 0l2.1 6.481a1 1 0 00.95.69h6.814c.97 0 1.372 1.24.588 1.81l-5.517 4.017a1 1 0 00-.364 1.118l2.1 6.482c.3.92-.755 1.688-1.54 1.118l-5.516-4.018a1 1 0 00-1.176 0l-5.516 4.018c-.785.57-1.84-.198-1.54-1.118l2.1-6.482a1 1 0 00-.364-1.118L.598 9.907c-.784-.57-.381-1.81.588-1.81h6.814a1 1 0 00.95-.69L9.049.927z" />
    </svg>
  );
};

export default StarRating;
