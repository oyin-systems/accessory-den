import React from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';

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
    <header className={`px-20 bg-white text-slate-900 py-10 ${pryFont.className}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-2xl font-bold text-[#0B7D6A] ${secFont.className}`}>Accessory Den</div>
        <nav>
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
          <div className="flex mr-8">
            <Image src="/images/account.png" alt="account" width={24} height={24} className="mr-2"/>
            <a href="#account" className="hover:text-gray-400">
              Account
            </a>
          </div>
          <div className="flex">
            <Image src="/images/cart.png" alt="cart" width={24} height={24} className="mr-2"/>
            <a href="#cart" className="hover:text-gray-400">
              Cart
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


// import React from 'react';
// import localFont from 'next/font/local';

// const pryFont = localFont({
//   src: "../Satoshi-Variable.ttf",
//   display: "swap",
// });

// const secFont = localFont({
//   src: "../Amug-Regular.ttf",
//   display: "swap",
// });

// const Header = () => {
//   return (
//     <header className={`px-20 bg-white text-slate-900 py-10 ${pryFont.className}`}>
//       <div className="container mx-auto flex justify-between items-center">
//         <div className={`text-2xl font-bold text-[#0B7D6A] ${secFont.className}`}>Accessory Den</div>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <a href="#products" className="hover:text-gray-400">
//                 Products
//               </a>
//             </li>
//             <li>
//               <a href="#contact" className="hover:text-gray-400">
//                 Contact us
//               </a>
//             </li>
//             <li>
//               <a href="#about" className="hover:text-gray-400">
//                 About us
//               </a>
//             </li>
//           </ul>
//         </nav>
//         <div className="flex space-x-4">
//           <div className="flex mr-8">
//             <img src='images/account.png' alt="account" className="mr-2"/>
//             <a href="#account" className="hover:text-gray-400">
//               Account
//             </a>
//           </div>
//           <div className="flex">
//             <img src='images/cart.png' alt="cart" className="mr-2"/>
//             <a href="#cart" className="hover:text-gray-400">
//               Cart
//             </a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
