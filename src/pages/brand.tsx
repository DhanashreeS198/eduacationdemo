import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

// JSON data for logos
const logosData = [
  { img: "/images/logo/logo1.png" },
  { img: "/images/logo/logo2.png" },
  { img: "/images/logo/logo3.png" },
  { img: "/images/logo/logo4.png" },
  { img: "/images/logo/logo5.png" },  
  { img: "/images/logo/logo6.png" },
];

SwiperCore.use([Autoplay]);
const LogoSwiper = () => {
  return (
    <div className="max-w-7xl mx-auto pt-[8%] ">
      <h1 className="text-lg lg:text-3xl font-bold mb-4 underline text-black-500 ">We Work With Best Brands</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        autoplay={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {logosData.map((logo, index) => (
         <SwiperSlide key={index}>
       <div className="flex flex-col items-center pt-[20%]">
  <div className="bg-white rounded-full black h-50 w-50 sm:h-20 sm:w-24 lg:w-100 lg:h-100 flex justify-center items-center">
    <img
      src={logo.img}
      alt={`Logo ${index + 1}`}
      className="h-50 w-50 lg:w-100 lg:h-100 sm:h-10 sm:w-10 md:w-30 md:h-30"
    />
  </div>
</div>

       </SwiperSlide>
       
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSwiper;




