"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import StarRating from "./StarRating";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [prevPageUrl, setPrevPageUrl] = useState(null);
  const productsPerPage = 10;
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async (page) => {
      try {
        const response = await fetch(`/api/timbu?page=${page}&size=${productsPerPage}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.items);
        setTotalPages(Math.ceil(data.total / productsPerPage));
        setNextPageUrl(data.next_page);
        setPrevPageUrl(data.previous_page);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts(currentPage);
  }, [currentPage]);

  // Pagination controls
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <section id="products" className="px-5 md:px-20 py-1 md:py-20 w-screen">
      <div className="container mx-auto">
        <h2 className="text-xl md:text-3xl font-bold mx-5 mb-8 md:mb-16 text-left">Wristwatch for you!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {products.map((product) => (
            <div
              key={product.unique_id}
              className={`bg-white w-[80vw] mx-5 md:w-[223px] h-[350px] md:h-[290px] space-y-1.5`}
            >
              <Link href={`/product/${product.url_slug}`}>
                <div className="rounded-lg bg-[#FAFAFA] flex items-center justify-center relative">
                  <Image
                    src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                    alt={product.name}
                    width={176}
                    height={130}
                    priority={true}
                    className="object-cover mb-4 w-[300px] md:w-[176px] h-[200px] md:h-[130px]"
                  />
                </div>
              </Link>

              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium">{product.name}</h3>
                <StarRating rating={4} />
              </div>
              <p className="text-gray-700 text-sm">{product.description}</p>
              <p className="text-base font-medium">NGN {product.current_price[0]?.NGN[0]}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-white text-xs text-[#0B7D6A] border border-[#0B7D6A] hover:bg-[#0B7D6A] hover:text-white rounded-[116px] mt-2 w-[119px] h-[36px] py-2.5 px-6"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'bg-gray-300' : 'bg-[#0B7D6A] text-white'}`}
          >
            Prev
          </button>
          {[...Array(totalPages).keys()].map((number) => (
            <button
              key={number + 1}
              onClick={() => setCurrentPage(number + 1)}
              className={`px-4 py-2 mx-1 ${currentPage === number + 1 ? 'bg-[#0B7D6A] text-white' : 'bg-white text-[#0B7D6A] border border-[#0B7D6A]'}`}
            >
              {number + 1}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 mx-1 ${currentPage === totalPages ? 'bg-gray-300' : 'bg-[#0B7D6A] text-white'}`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;


// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import StarRating from "./StarRating";
// import Link from "next/link";
// import { useCart } from "../context/CartContext";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 10;
//   const { addToCart } = useCart();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch("/api/timbu");
//         if (!response.ok) {
//           throw new Error("Failed to fetch products");
//         }
//         const data = await response.json();
//         setProducts(data.items);
//       } catch (error) {
//         setError(error.message);
//       }
//     };

//     fetchProducts();
//   }, []);

//   // Get current products
//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <section id="products" className="px-5 md:px-20 py-1 md:py-20 w-screen">
//       <div className="container mx-auto">
//         <h2 className="text-xl md:text-3xl font-bold mx-5 mb-8 md:mb-16 text-left">Wristwatch for you!</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
//           {currentProducts.map((product) => (
//             <div
//               key={product.unique_id}
//               className={`bg-white w-[80vw] mx-5 md:w-[223px] h-[350px] md:h-[290px] space-y-1.5`}
//             >
//               <Link href={`/product/${product.url_slug}`}>
//                 <div className="rounded-lg bg-[#FAFAFA] flex items-center justify-center relative">
//                   <Image
//                     src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
//                     alt={product.name}
//                     width={176}
//                     height={130}
//                     priority={true}
//                     className="object-cover mb-4 w-[300px] md:w-[176px] h-[200px] md:h-[130px]"
//                   />
//                 </div>
//               </Link>

//               <div className="flex items-center justify-between">
//                 <h3 className="text-base font-medium">{product.name}</h3>
//                 <StarRating rating={4} />
//               </div>
//               <p className="text-gray-700 text-sm">{product.description}</p>
//               <p className="text-base font-medium">NGN {product.current_price[0]?.NGN[0]}</p>
//               <button
//                 onClick={() => addToCart(product)}
//                 className="bg-white text-xs text-[#0B7D6A] border border-[#0B7D6A] hover:bg-[#0B7D6A] hover:text-white rounded-[116px] mt-2 w-[119px] h-[36px] py-2.5 px-6"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>

//         {/* Pagination Controls */}
//         <div className="flex justify-center mt-8">
//           <button
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//             className={`px-4 py-2 mx-1 ${currentPage === 1 ? 'bg-gray-300' : 'bg-[#0B7D6A] text-white'}`}
//           >
//             Prev
//           </button>
//           {[...Array(Math.ceil(products.length / productsPerPage)).keys()].map((number) => (
//             <button
//               key={number + 1}
//               onClick={() => paginate(number + 1)}
//               className={`px-4 py-2 mx-1 ${currentPage === number + 1 ? 'bg-[#0B7D6A] text-white' : 'bg-white text-[#0B7D6A] border border-[#0B7D6A]'}`}
//             >
//               {number + 1}
//             </button>
//           ))}
//           <button
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentPage === Math.ceil(products.length / productsPerPage)}
//             className={`px-4 py-2 mx-1 ${currentPage === Math.ceil(products.length / productsPerPage) ? 'bg-gray-300' : 'bg-[#0B7D6A] text-white'}`}
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

