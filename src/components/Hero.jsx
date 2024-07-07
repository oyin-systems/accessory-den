import React from 'react';
import Image from 'next/image';
import heroimage from 'public/images/hero.png'


const Hero = () => {
  return (
    <section className="px-20 py-12 mx-auto h-[407px] w-[1300px] bg-custom-gradient rounded-3xl">
      <div className="flex items-center justify-between w-full">
        <div>
          <h1 className="text-4xl font-medium leading-[48px] text-[#313131]">Grab up to 20% discount on <br/> selected Wrist Watch</h1>
          <button className="bg-[#0B7D6A] font-normal text-white text-base leading-5 py-4 px-10 rounded-2xl w-[165px] h-[51px] mt-8 text-center">Buy Now</button>
        </div>
        <div>
        <Image
      src={heroimage}
      alt="Wristwatch"
    />
        </div>
      </div>
    </section>
  );
}

export default Hero;
