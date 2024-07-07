import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import Link from 'next/link';

const pryFont = localFont({
  src: "../Satoshi-Variable.ttf",
  display: "swap",
});

const secFont = localFont({
  src: "../Amug-Regular.ttf",
  display: "swap",
});

const Header = () => {
  return (
    <header className={`px-5 md:px-20 w-screen bg-white text-slate-900 py-10 ${pryFont.className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-2xl font-bold text-[#0B7D6A] ${secFont.className}`}>
          <Link href="/"> Accessory Den</Link>
          </div>
        <nav className='hidden md:block'>
          <ul className="flex space-x-4">
            <li>
              <a href="#products" className="hover:text-gray-400">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact us
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About us
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <div className="flex md:hidden">
            <Image src="/images/menu.png" alt="menu" width={24} height={24} className="mr-2" />
          </div>
          <div className="hidden md:flex mr-8">
            <Image src="/images/account.png" alt="account" width={24} height={24} className="mr-2"/>
            <Link href="/account" className="hover:text-gray-400">Account</Link>
          </div>

          <div className="flex mr-10 md:mr-2">
            <Image src="/images/cart.png" alt="cart" width={24} height={24} className="mr-2"/>
            <Link href="/cart" className="hover:text-gray-400">Cart</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
