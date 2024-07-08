import React from 'react';
import Image from 'next/image';
import StarRating from './StarRating';
import Link from "next/link";

const products = [
  { id: 1, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", display: true, image: "/images/eclipse.png" },
  { id: 2, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", display: true, image: "/images/luxe.png" },
  { id: 3, name: "Urban Classic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 35,000", display: true, image: "/images/urbanblue.png" },
  { id: 4, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 80,000", display: true, image: "/images/stellarwatchgreen.png" },
  { id: 5, name: "Elite Chronograph", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 85,000", display: true, image: "/images/elite.png" },
  { id: 6, name: "Timeless Elegance", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 85,000", display: true, image: "/images/timeless.png" },
  { id: 7, name: "Luxury Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 75,000", display: true, image: "/images/luxery.png" },
  { id: 8, name: "Urban Classic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", display: true, image: "/images/urbangrey.png" },
  { id: 9, name: "Zenith Time", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 115,000", display: true, image: "/images/zenith.png" },
  { id: 10, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 95,000", display: true, image: "/images/luxetime.png" },
  { id: 11, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 75,000", display: true, image: "/images/stellarwatchgray.png" },
  { id: 12, name: "Regar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", display: true, image: "/images/regarwatch.png" },
  { id: 13, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 78,000", display: true, image: "/images/eclipsechrono.png" },
  { id: 14, name: "Elite Chronograph", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 125,000", display: true, image: "/images/elitechrono.png" },
  { id: 15, name: "Timeless Elegance", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 105,000", display: true, image: "/images/timelesselegance.png" },
  { id: 16, name: "Zenith Time", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 25,000", display: true, image: "/images/elite.png" },
  { id: 17, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", display: false, image: "/images/eclipse.png" },
  { id: 18, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", display: false, image: "/images/luxe.png" },
  { id: 19, name: "Urban Classic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 35,000", display: false, image: "/images/urbanblue.png" },
  { id: 20, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 80,000", display: false, image: "/images/stellarwatchgreen.png" },
];

const Products = () => {
  return (
    <section id="products" className="px-5 md:px-20 py-1 md:py-20 w-screen">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-bold mx-5 mb-8 md:mb-16 text-left">Wristwatch for you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {products.map((product) => (
            <div 
              key={product.id} 
              className={`bg-white w-[80vw] mx-5 md:w-[223px] h-[350px] md:h-[290px] space-y-1.5 ${product.display ? 'hidden md:block' : 'block md:hidden'}`}
            >
            <Link href="/product"><div className='rounded-lg bg-[#FAFAFA] flex items-center justify-center relative'>
                <Image src={product.image} alt={product.name} width={176} height={130} className="object-cover mb-4 w-[300px] md:w-[176px] h-[200px] md:h-[130px]" />
                {/* <Image src='/images/heart.png' alt="heart" width={24} height={24} className="absolute top-[30px] right-[15px]" /> */}
              </div></Link>
              
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
// import Image from 'next/image';
// import StarRating from './StarRating';

// const products = [
//   { id: 1, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", display: true, image: "/images/eclipse.png" },
//   { id: 2, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", display: true, image: "/images/luxe.png" },
//   { id: 3, name: "Urban Classic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 35,000", display: true, image: "/images/urbanblue.png" },
//   { id: 4, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 80,000", display: true, image: "/images/stellarwatchgreen.png" },
//   { id: 5, name: "Elite Chronograph", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 85,000", display: true, image: "/images/elite.png" },
//   { id: 6, name: "Timeless Elegance", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 85,000", display: true, image: "/images/timeless.png" },
//   { id: 7, name: "Luxery Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 75,000", display: true, image: "/images/luxery.png" },
//   { id: 8, name: "Urban CLassic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", display: true, image: "/images/urbangrey.png" },
//   { id: 9, name: "Zenith Time", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 115,000", display: true, image: "/images/zenith.png" },
//   { id: 10, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 95,000", display: true, image: "/images/luxetime.png" },
//   { id: 11, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 75,000", display: true, image: "/images/stellarwatchgray.png" },
//   { id: 12, name: "Regar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", display: true, image: "/images/regarwatch.png" },
//   { id: 13, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 78,000", display: true, image: "/images/eclipsechrono.png" },
//   { id: 14, name: "Elite Chronograph", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 125,000", display: true, image: "/images/elitechrono.png" },
//   { id: 15, name: "Timeless Elegance", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 105,000", display: true, image: "/images/timelesselegance.png" },
//   { id: 16, name: "Zenith Time", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 25,000", display: true, image: "/images/elite.png" },
//   { id: 17, name: "Eclipse Chrono", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 45,000", display: false, image: "/images/eclipse.png" },
//   { id: 18, name: "Luxe Timepiece", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 65,000", display: false, image: "/images/luxe.png" },
//   { id: 19, name: "Urban Classic", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 35,000", display: false, image: "/images/urbanblue.png" },
//   { id: 20, name: "Stellar Watch", rating: 4, description: "Sleek Modern Chronograph", price: "NGN 80,000", display: false, image: "/images/stellarwatchgreen.png" },
// ];

// const Products = () => {
//   return (
//     // <section className="px-5 md:px-20 mx-auto h-[251px] md:h-[407px]  bg-white rounded-3xl"></section>
//     <section id="products" className="px-5 md:px-20 py-1 md:py-20 w-screen">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold mb-16 text-left">Wristwatch for you!</h2>
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
//           {products.map((product) => (
//             <div key={product.id} className="bg-white w-[223px] h-[290px] space-y-1.5">
//               <div className='w-[223px] h-[151px] rounded-lg bg-[#FAFAFA] flex items-center justify-center relative'>
//                 <Image src={product.image} alt={product.name} width={176} height={130} className="object-cover mb-4" />
//                 <Image src='/images/heart.png' alt="heart" width={24} height={24} className="absolute top-[30px] right-[15px]" />
//               </div>
//               <div className='flex items-center justify-between'>
//                 <h3 className="text-base font-medium">{product.name}</h3>
//                 <StarRating rating={product.rating} />
//               </div>
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

