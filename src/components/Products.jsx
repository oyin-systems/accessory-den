import React from 'react';
import StarRating from './StarRating';

const products = [
  { id: 1, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", image: "/images/eclipse.png" },
  { id: 2, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", image: "/images/luxe.png" },
  { id: 3, name: "Urban Classic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 35,000", image: "/images/urbanblue.png" },
  { id: 4, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 80,000", image: "/images/stellarwatchgreen.png" },
  { id: 5, name: "Elite Chronograph", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 85,000", image: "/images/elite.png" },
  { id: 6, name: "Timeless Elegance", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 85,000", image: "/images/timeless.png" },
  { id: 7, name: "Luxery Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 75,000", image: "/images/luxery.png" },
  { id: 8, name: "Urban CLassic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", image: "/images/urbangrey.png" },
  { id: 9, name: "Zenith Time", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 115,000", image: "/images/zenith.png" },
  { id: 10, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 95,000", image: "/images/luxetime.png" },
  { id: 11, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 75,000", image: "/images/stellarwatchgray.png" },
  { id: 12, name: "Regar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", image: "/images/regarwatch.png" },
  { id: 13, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 78,000", image: "/images/eclipsechrono.png" },
  { id: 14, name: "Elite Chronograph", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 125,000", image: "/images/elitechrono.png" },
  { id: 15, name: "Timeless Elegance", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 105,000", image: "/images/timelesselegance.png" },
  { id: 16, name: "Zenith Time", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 25,000", image: "/images/elite.png" },
];

const Products = () => {
  return (
    <section className="px-20 py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-left">Wristwatch for you!</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
          {products.map((product) => (
            <div key={product.id} className="bg-white w-[223px] h-[290px] space-y-1.5">
              <div className='w-[223px] h-[151px] rounded-lg bg-[#FAFAFA] flex items-center justify-center relative'>
                <img src={product.image} alt={product.name} className="w-[176px] h-[130px] object-cover mb-4" />
                <img src='images/heart.png' alt="heart" className="absolute top-[30px] right-[15px]"/>
              </div>
              <div className='flex items-center justify-between'>
                <h3 className="text-base font-medium">{product.name}</h3>
                <StarRating rating={product.rating} />
              </div>
              <p className="text-gray-700 text-sm">{product.description}</p>
              <p className="text-base font-medium">{product.price}</p>
              <button className="bg-white text-xs text-[#0B7D6A] border border-[#0B7D6A] hover:bg-[#0B7D6A] hover:text-white rounded-[116px] mt-2 w-[119px] h-[36px] py-2.5 px-6">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;


// import React from 'react';

// const products = [
//   { id: 1, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", image: "/images/eclipse.png" },
//   { id: 2, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", image: "/images/luxe.png" },
//   { id: 3, name: "Urban Classic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 35,000", image: "/images/urbanblue.png" },
//   { id: 4, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 80,000", image: "/images/stellarwatchgreen.png" },
//   { id: 5, name: "Elite Chronograph", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 85,000", image: "/images/elite.png" },
//   { id: 6, name: "Timeless Elegance", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 85,000", image: "/images/timeless.png" },
//   { id: 7, name: "Luxery Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 75,000", image: "/images/luxery.png" },
//   { id: 8, name: "Urban CLassic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", image: "/images/urbangrey.png" },
//   { id: 9, name: "Zenith Time", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 115,000", image: "/images/zenith.png" },
//   { id: 10, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 95,000", image: "/images/luxetime.png" },
//   { id: 11, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 75,000", image: "/images/stellarwatchgray.png" },
//   { id: 12, name: "Regar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", image: "/images/regarwatch.png" },
//   { id: 13, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 78,000", image: "/images/eclipsechrono.png" },
//   { id: 14, name: "Elite Chronograph", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 125,000", image: "/images/elitechrono.png" },
//   { id: 15, name: "Timeless Elegance", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 105,000", image: "/images/timelesselegance.png" },
//   { id: 16, name: "Zenith Time", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 25,000", image: "/images/elite.png" },
// ];


// const Products = () => {
//   return (
//     <section className="px-20 py-20">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-16 text-left">Wristwatch for you!</h2>
//         <div className="grid grid-cols-4 gap-16">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white w-[223px] h-[290px] space-y-1.5">
//               <div className='w-[223px] h-[151px] rounded-lg bg-[#FAFAFA] flex items-center justify-center relative'>
//                 <img src={product.image} alt={product.name} className="w-[176px] h-[130px] object-cover mb-4" />
//                 <img src='images/heart.png' alt="heart" className="absolute top-[30px] right-[15px]"/>
//               </div>
              
//               <h3 className="text-base font-medium">{product.name}</h3>
//               {/* <p className="text-gray-600">{product.rating} ⭐</p> */}
//               <p className="text-gray-700 text-sm">{product.description}</p>
//               <p className="text-base font-medium">{product.price}</p>
//               <button className="bg-white text-xs text-[#0B7D6A] border border-[#0B7D6A] hover:bg-[#0B7D6A] hover:text-white rounded-[116px] mt-2 w-[119px] h-[36px] py-2.5 px-6">Add to Cart</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Products;
