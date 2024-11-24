import React from "react";
import Image from "next/image";
import { TiStarOutline, TiStar } from "react-icons/ti";
import { AllBoxes } from '../Assets/ProductsDetailes';
import Link from 'next/link';
const ProductBox = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center"
    data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-delay="400"
     >
      {AllBoxes.slice(14,20).map((product) => (
         
        <div
          key={product.id} 
          className="bg-[#faebd4] w-[400px] h-[350px] mt-20 rounded-xl cursor-pointer product-box hover:opacity-85 duration-300"
        >
          <div className="bg-white m-5 rounded-lg">

          <Link href={`/product/${product.id}`}>
          <div className="flex justify-center items-center overflow-hidden"
          >
            <Image
              src={product.img}
              alt={product.name}
              priority={true}
              className="product-image -mt-10"
              width={300}
              height={300}
            />
          </div>
          <div className="flex justify-center gap-16 bg-[#faebd4]  -mt-10">
            <div className="flex flex-col gap-4 mt-2">
              <p className="text-gray-800">{product.name}</p>
              <span className="text-gray-800">{product.price.toLocaleString()} تومان</span>
            </div>
            <div className="flex text-xl mt-[52px] text-gray-800 font-bold">
              <TiStarOutline />
              <TiStar />
              <TiStar />
              <TiStar />
              <TiStar />
            </div>
          </div>
          </Link>
        </div>
        </div>
      ))}
    </div>
  );
};

export default ProductBox;
