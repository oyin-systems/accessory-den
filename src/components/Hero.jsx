import React from 'react';
import Image from 'next/image';
import heroimage from 'public/images/hero.png'
import Link from 'next/link';


const Hero = () => {
  return (
    <section className="px-5 md:px-20 mx-auto h-[251px] md:h-[407px] w-screen bg-white rounded-3xl">
      <div className="flex items-center justify-between px-2 md:px-20 py-4 md:py-12 bg-custom-gradient">
        <div>
          <h1 className="text-lg md:text-4xl w-[200px] md:w-[530px] font-medium leading-[27px] md:leading-[48px] text-[#313131]">Grab up to 20% discount on selected Wrist Watch</h1>
          <Link href="/checkout">
          <button className="bg-[#0B7D6A] font-normal text-white text-xs md:text-base leading-5 py-1 md:py-4 px-4 md:px-10 rounded-2xl md:w-[165px] w-[81px] h-[31px] md:h-[51px] mt-8 text-center">Buy Now</button>
          </Link>
        </div>
        <Image
          src={heroimage}
          alt="Wristwatch"
          className='w-[135px] md:w-[344px] h-[124px] md:h-[307px] object-cover ml-[-50px] md:ml-0'
    />
      </div>
    </section>
  );
}

export default Hero;
