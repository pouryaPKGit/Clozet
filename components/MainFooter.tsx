"use client"
import React from "react";
import Image from "next/image";
import { FaTelegram, FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import Link from "next/link";

const scrollToDiscountSection = (): void => {
  const section = document.getElementById("discount-section");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const MainFooter: React.FC = () => {
  return (
    <div className="w-[100%] min-h-[500px] bg-[#faebd4]  pb-5">
      <div className="flex flex-wrap items-center justify-between px-10 smpx-16  md:px-32 pt-16">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/images/Untitled-2.png2222.png"
              alt="Description of the image"
              priority={true}
              className="cursor-pointer hover:opacity-20 duration-500 sm:w-[60px] sm:h-[60px]"
              width={40}
              height={40}
            />
          </Link>
         
        </div>
        <div className="flex items-center gap-3">
          <FaTelegram className=" text-white text-4xl rounded-full cursor-pointer hover:opacity-50 duration-300" />
          <FaInstagram className="bg-white rounded-full text-[#ffe0bf] p-1 text-4xl cursor-pointer hover:opacity-50 duration-300" />
        </div>
      </div>
      <div className="flex-col sm:flex-row sm:flex justify-center md:justify-start items-center gap-10 sm:pr-0 pr-16 md:pr-32 pt-10">
        <div className="flex items-center gap-2 cursor-pointer text-gray-600">
          <FaPhone className="text-xl" />
          <p className="text-sm">0219109832</p>
        </div>
        <div className="flex mt-4 sm:mt-0 items-center gap-2 cursor-pointer text-gray-600">
          <MdEmail className="text-2xl" />
          <p className="text-sm">infoLuigi@gmail.com</p>
        </div>
        <div className="flex mt-4 sm:mt-0 items-center gap-2 cursor-pointer text-gray-600">
          <BiLogoTelegram className="text-2xl" />
          <p className="text-sm ">@LuiTel_support</p>
        </div>
      </div>
      <hr className="w-[84%] mx-auto mt-5 border-gray-700" />

      <div className="flex lg:flex-row text-gray-600 flex-col pt-10 px-10 sm:px-32 items-start gap-x-20 gap-y-10 lg:gap-0 lg:justify-between">
        <div className=" ">
          <h1 className="text-2xl font-bold ">درباره کلوزت</h1>
          <p className="text-sm sm:w-[350px] w-[250px] mt-4 leading-7 font-semibold">
            کلوزت یک سایت در عرضه تکنولوژی های روز دنیاست که که علاوه بر تامین
            نیاز شما امتیازاتی از جمله گارانتی در اختیار شما قرار میدهد
          </p>
        </div>
        <div className="flex flex-col gap-y-2 text-sm">
          <h2 className="text-2xl font-bold">دسترسی سریع</h2>
          <Link href="/AllProducts">
            <p className="cursor-pointer hover:text-gray-400 duration-300 font-semibold">
              همه محصولات
            </p>
          </Link>
          <nav>
            <button onClick={scrollToDiscountSection}>
              <Link href="#" />
              <span className="cursor-pointer hover:text-gray-400 duration-300 font-semibold">
                تخفیف ها
              </span>
            </button>
          </nav>
          <Link href="/AboutUs">
            <p className="cursor-pointer hover:text-gray-400 duration-300 font-semibold">
              درباره ما
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-y-2 text-sm">
          <h2 className="text-2xl font-bold">بخش های پرطرفدار</h2>
          <p className="cursor-pointer hover:text-gray-400 duration-300 font-semibold">
            پرفروش ترین محصولات
          </p>
          <p className="cursor-pointer hover:text-gray-400 duration-300 font-semibold">
            بهترین پشنهادات
          </p>
          <p className="cursor-pointer hover:text-gray-400 duration-300 font-semibold">
            بهترین های ما
          </p>
        </div>
      </div>
    
        <p className="md:text-xl text-sm mr-10 font-bold pt-10 sm:mr-32 text-gray-600">| Developed By: Pourkhani |</p>
     
    </div>
  );
};

export default MainFooter;
