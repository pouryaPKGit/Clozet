import React from "react";
import Image from "next/image";
import { Banners4 } from "../Assets/ProductsDetailes";

const MiddleBanners = () => {
  return (
    <div className="flex flex-wrap mt-20 gap-24 py-10 justify-center">
      {Banners4.map((banner, index) => (
        <div
         data-aos="flip-left"
          key={index}
          className="relative  transition-transform duration-700 ease-in-out hover:scale-105 hover:z-10"
        >
          <Image
            src={banner.img}
            alt={banner.description || "Banner Image"}
            priority={true}
            className="cursor-pointer rounded-xl "
            width={360}
            height={650}
          />
       
        </div>
      ))}
    </div>
  );
};

export default MiddleBanners;
