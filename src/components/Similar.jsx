import React from 'react';
import Image from 'next/image';
import StarRating from './StarRating';

const likes = [
  { id: 1, name: "Cufflinks", rating: 4, description: "Striking starry dial", price: "NGN 78,000", display: true, image: "/images/cufflinks.png" },
  { id: 2, name: "Rings", rating: 4, description: "Striking starry dial", price: "NGN 78,000", display: true, image: "/images/rings.png" },
  { id: 3, name: "Necklace", rating: 4, description: "Luxurious, minimalist", price: "NGN 105,000", display: true, image: "/images/necklace.png" },
  { id: 4, name: "Watch accessories", rating: 4, description: "Stylish everyday wear", price: "NGN 25,000", display: true, image: "/images/accessories.png" },
  { id: 5, name: "Cufflinks", rating: 4, description: "Striking starry dial", price: "NGN 78,000", display: false, image: "/images/cufflinks.png" },
  { id: 6, name: "Necklace", rating: 4, description: "Luxurious, minimalist", price: "NGN 105,000", display: false, image: "/images/necklace.png" },
];

const Similar = () => {
  return (
    <section className="px-5 md:px-20 py-1 md:py-20 w-screen">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-bold mx-5 mt-10 md:mt-0 mb-8 md:mb-16 text-left">Similar items you might like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {likes.map((like) => (
            <div key={like.id} className={`bg-white w-[80vw] mx-5 md:w-[223px] h-[350px] md:h-[290px] space-y-1.5 ${like.display ? 'hidden md:block' : 'block md:hidden'}`}>
              <div className='rounded-lg bg-[#FAFAFA] flex items-center justify-center'>
                <Image src={like.image} alt={like.name} width={176} height={130} className="w-[300px] md:w-[176px] h-[200px] md:h-[130px] object-cover mb-4" />
              </div>
              <div className='flex items-center justify-between'>
                <h3 className="text-base font-medium">{like.name}</h3>
                <StarRating rating={like.rating} />
              </div>
              <p className="text-gray-700 text-sm">{like.description}</p>
              <p className="text-base font-medium">{like.price}</p>
              <button className="bg-white text-xs text-[#0B7D6A] border border-[#0B7D6A] hover:bg-[#0B7D6A] hover:text-white rounded-[116px] mt-2 w-[119px] h-[36px] py-2.5 px-6">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Similar;
