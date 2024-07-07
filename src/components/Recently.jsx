import React from 'react';
import Image from 'next/image';
import StarRating from './StarRating';

const recents = [
    { id: 1, name: "Elite Chronograph", rating: 4, description: "Striking starry dial", price: "NGN 85,000", image: "/images/elite.png" },
    { id: 2, name: "Timeless Elegance", rating: 4, description: "Striking starry dial", price: "NGN 95,000", image: "/images/timeless.png" },
    { id: 3, name: "Luxery Timepiece", rating: 4, description: "Luxurious, minimalist", price: "NGN 75,000", image: "/images/luxery.png" },
    { id: 4, name: "Urban CLassic", rating: 4, description: "Stylish everyday wear", price: "NGN 45,000", image: "/images/urbangrey.png" }, 
];

const Recently = () => {
  return (
    <section className="px-20 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-left">Recently viewed</h2>
        <div className="grid grid-cols-4 gap-16">
          {recents.map((recent) => (
            <div key={recent.id} className="bg-white w-[223px] h-[290px] space-y-1.5">
              <div className='w-[223px] h-[151px] rounded-lg bg-[#FAFAFA] flex items-center justify-center'>
                <Image src={recent.image} alt={recent.name} width={176} height={130} className="w-[176px] h-[130px] object-cover mb-4" />
              </div>
              <div className='flex items-center justify-between'>
                <h3 className="text-base font-medium">{recent.name}</h3>
                <StarRating rating={recent.rating} />
              </div>
              <p className="text-gray-700 text-sm">{recent.description}</p>
              <p className="text-base font-medium">{recent.price}</p>
              <button className="bg-white text-xs text-[#0B7D6A] border border-[#0B7D6A] hover:bg-[#0B7D6A] hover:text-white rounded-[116px] mt-2 w-[119px] h-[36px] py-2.5 px-6">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recently;


// import React from 'react';
// import StarRating from './StarRating';

// const recents = [
//     { id: 1, name: "Elite Chronograph", rating: 4, description: "Striking starry dial", price: "NGN 85,000", image: "/images/elite.png" },
//     { id: 2, name: "Timeless Elegance", rating: 4, description: "Striking starry dial", price: "NGN 95,000", image: "/images/timeless.png" },
//     { id: 3, name: "Luxery Timepiece", rating: 4, description: "Luxurious, minimalist", price: "NGN 75,000", image: "/images/luxery.png" },
//     { id: 4, name: "Urban CLassic", rating: 4, description: "Stylish everyday wear", price: "NGN 45,000", image: "/images/urbangrey.png" }, 
// ];


// const Recently = () => {
//   return (
//     <section className="px-20 py-20">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-16 text-left">Recently viewed</h2>
//         <div className="grid grid-cols-4 gap-16">
//           {recents.map((recent) => (
//             <div key={recent.id} className="bg-white w-[223px] h-[290px] space-y-1.5">
//               <div className='w-[223px] h-[151px] rounded-lg bg-[#FAFAFA] flex items-center justify-center'>
//                 <img src={recent.image} alt={recent.name} className="w-[176px] h-[130px] object-cover mb-4" />
//               </div>
//               <div className='flex items-center justify-between'>
//                 <h3 className="text-base font-medium">{recent.name}</h3>
//                 <StarRating rating={recent.rating} />
//               </div>
//               <p className="text-gray-700 text-sm">{recent.description}</p>
//               <p className="text-base font-medium">{recent.price}</p>
//               <button className="bg-white text-xs text-[#0B7D6A] border border-[#0B7D6A] hover:bg-[#0B7D6A] hover:text-white rounded-[116px] mt-2 w-[119px] h-[36px] py-2.5 px-6">Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Recently;
