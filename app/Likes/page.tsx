"use client";
import { useContext } from 'react';
import { UserContext } from '../../Context/Context';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegTrashCan } from "react-icons/fa6";
import Image from "next/image";
import { FaBasketShopping } from "react-icons/fa6";

// تعریف نوع محصول
export interface Product {
  id: number; // یا string بر اساس نوع id
  img: string;
  name: string;
  price: number; // یا string اگر قیمت شامل واحد باشد
  quantity: number; // تعداد محصول
}
// تعریف نوع UserContext
interface UserContextType {
  removeFromLikes: (product: Product) => void;
  likes: Product[];
  addToCart: (product: Product) => void;
}

const Likes = () => {
  const { removeFromLikes, likes, addToCart } = useContext(UserContext) as UserContextType; // مشخص کردن نوع

  const handleRemoveClick = (product: Product) => {
    removeFromLikes(product);
  };

  const handleAddToCartClick = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className='pt-16 pb-24'>
      {likes.length === 0 ? (
        <div>
          <Image
            src="/images/Untitled-1.png2112.png"
            alt="Description of the image"
            priority={true} // بهینه‌سازی بیشتر برای تصاویر بالای صفحه
            className="flex items-center justify-center sm:w-[300px] xs:w-[350px] m-auto bg-[#faebd4] rounded-full p-1"
            width={500}
            height={500}
          />
          <p className="flex items-center justify-center text-lg -mt-10  text-gray-900">علاقه مندی شما خالی میباشد</p>
        </div>
      ) : (
        <div className='flex items-center justify-center mt-10'>
          <ul className="space-y-4">
            {likes.map((product, index) => (
              <li key={index} className="flex justify-between items-center p-4 bg-[#faebd4] xl:w-[1200px] lg:w-[900px] sm:w-[500px] xs:w-[400px] shadow-md rounded-lg">
                <div className="flex gap-5">
                  <div className=''>
                    <Image
                      src={product.img || 'default-image.jpg'}
                      alt="Description of the image"
                      priority={true} // بهینه‌سازی بیشتر برای تصاویر بالای صفحه
                      className="sm:w-[100px] xs:w-[80px] xs:h-[80px] sm:h-[100px] "
                      width={100}
                      height={100}
                    />
                  </div>
                  <div>
                    <h2 className="text-md text-gray-800">{product.name || 'نام محصول'}</h2>
                    <p className="pt-5 text-sm text-gray-800">قیمت: {product.price || 'قیمت نا معلوم'} تومان</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className="bg-white duration-300 hover:opacity-75 border-2 rounded-full w-[45px] h-[45px] flex items-center justify-center">
                    <button
                      onClick={() => handleRemoveClick(product)}
                      className="text-gray-800"
                    >
                      <FaRegTrashCan className="text-2xl text-[#ffdca7]" />
                    </button>
                  </div>
                  <button onClick={() => handleAddToCartClick(product)} className='text-[#ffdca7] border-2 bg-white rounded-full p-2 duration-300 hover:opacity-75'>
                    <FaBasketShopping className='text-2xl ' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Likes;