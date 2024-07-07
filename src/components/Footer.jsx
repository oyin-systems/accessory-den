import React from 'react';
import Image from 'next/image';
import Twitter from 'public/images/twitter.png';
import IG from 'public/images/ig.png';
import FB from 'public/images/fb.png';
import localFont from 'next/font/local';

const pryFont = localFont({
  src: '../Satoshi-Variable.ttf',
  display: 'swap',
});

const secFont = localFont({
  src: '../Amug-Regular.ttf',
  display: 'swap',
});

const Footer = () => {
  return (
    <footer className={`bg-[#0B7D6A1A] text-black px-20 py-20 mt-40 h-[400px] flex items-center ${pryFont.className}`}>
      <div className='flex items-center'>
        <div className='mr-32'>
          <h1 className={`text-3xl leading-[46px] font-normal text-[#0B7D6A] mb-6 ${secFont.className}`}>
            Accessory Den
          </h1>
          <p className='text-sm leading-5 font-normal text-[#323232] mb-14'>
            Our passion lies in curating a collection of premium <br />
            wristwatches and accessories that speak to the <br />
            modern gentleman&apos;s taste and lifestyle.
          </p>
          <div className='flex gap-6'>
            <Image src={Twitter} alt='Twitter' />
            <Image src={IG} alt='Instagram' />
            <Image src={FB} alt='Facebook' />
          </div>
        </div>
        <div className='mx-10 text-[#404859] space-y-4'>
          <h3 className='text-lg leading-7 font-medium'>My Account</h3>
          <ul className='font-normal text-sm leading-5 space-y-4'>
            <li>My Account</li>
            <li>Order History</li>
            <li>Shopping Cart</li>
          </ul>
        </div>
        <div className='mx-10 text-[#404859] space-y-4'>
          <h3 className='text-lg leading-7 font-medium'>Help</h3>
          <ul className='font-normal text-sm leading-5 space-y-4'>
            <li>Contact</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
