"use client"
import Image from "next/image";
import { useState } from "react";
import {  AllBoxes  } from "../Assets/ProductsDetailes";
import Link from "next/link";

const PopularCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("لباس زنانه"); 

  // فیلتر کردن محصولات بر اساس دسته‌بندی انتخاب‌شده
  const filteredProducts =  AllBoxes .filter(item => item.category === selectedCategory);

  return (
    <div className="mt-20">
     
      <div className="flex flex-wrap gap-10 items-center px-3 justify-center ">
        <div 
          className={`flex flex-col items-center gap-2 cursor-pointer ${selectedCategory === "بچگانه" ? 'active' : ''}`}
          onClick={() => setSelectedCategory("بچگانه")}
        >
          <Image
            src="/images/Untitled-1.png01.png" // تصویر کیبورد
            alt="زنانه"
            priority={true} 
            width={80}
            height={80}
            className=" hover:opacity-50 duration-300"
          />
         <span className="text-sm">بچگانه</span>
        </div>

        <div 
          className={`flex flex-col items-center gap-2 cursor-pointer ${selectedCategory === "کفش" ? 'active' : ''}`}
          onClick={() => setSelectedCategory("کفش")}
        >
           <Image
            src="/images/Untitled-1.png02.png" // تصویر آیپد
            alt="آیپد"
            priority={true}
            width={80}
            height={80}
            className=" hover:opacity-50 duration-300"
          />
          <span className="text-sm">کفش</span>
        </div>

        <div 
          className={`flex flex-col items-center gap-2 cursor-pointer ${selectedCategory === "مردانه" ? 'active' : ''}`}
          onClick={() => setSelectedCategory("مردانه")}
        >
          <Image
            src="/images/Untitled-1.png05.png" // تصویر هدفون
            alt="هدفون"
            priority={true}
            width={80}
            height={80}
            className="mt-3 hover:opacity-50 duration-300"
          />
         <span className="text-sm">مردانه</span>
        </div>

        <div 
          className={`flex flex-col items-center gap-2 cursor-pointer ${selectedCategory === "لباس زنانه" ? 'active' : ''}`}
          onClick={() => setSelectedCategory("لباس زنانه")}
        >
          <Image
            src="/images/Untitled-1.png03.png" // تصویر هدفون
            alt="هدفون"
            priority={true}
            width={80}
            height={80}
            className=" hover:opacity-50 duration-300"
          />
         <span className="text-sm">زنانه</span>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-8 px-5" >
        {filteredProducts.map((item, index) => (
          <div key={index} className="bg-[#faebd4] rounded-2xl shadow-white shadow-md p-3  w-[300px] h-[360px] group relative overflow-hidden " data-aos="zoom-in">
            <Link href={`/product/${item.id}`}>
              <div className="flex flex-col gap-y-2 items-center ">
                <div className="relative" >
                  <Image
                    src={item.img}
                    alt={item.name}
                    priority={true}
                    className="cursor-pointer transition-transform duration-700 group-hover:scale-110 "
                    width={269}
                    height={269}
                  />
                </div>
                <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-700 font-semibold">{item.price} تومان</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCategories;
