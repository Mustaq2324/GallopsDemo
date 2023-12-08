import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Carousel() {
  return (
    <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <div
            className="relative w-full h-[400px] bg-cover"
            style={{
              backgroundImage: `url(${img1})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-vast-shadow">
                CLASSIC ITALIAN FAMILY RECIPES
              </h1>
              <div className=" mt-2">
                <button className="bg-[#E8AF3E] px-4 py-2 text-black hover:bg-white transition-all duration-500 hover:text-[#e8af3e] mt-2 font-[Lato]">
                  PARTIES
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[400px] bg-cover "
            style={{
              backgroundImage: `url(${img3})`,
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-vast-shadow">FAMILY OWNED</h1>
              <div className=" mt-2">
                <button className="bg-[#E8AF3E] px-4 py-2 text-black hover:bg-white transition-all duration-500 hover:text-[#e8af3e] mt-2 font-[Lato]">
                  RESERVATIONS
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[400px] bg-cover"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-vast-shadow">
                FRESH, QUALITY INGREDIENTS
              </h1>
              <div className=" mt-2">
                <button className="bg-[#E8AF3E] px-4 py-2 text-black hover:bg-white transition-all duration-500 hover:text-[#e8af3e] mt-2 font-[Lato]">
                  ORDER ONLINE
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="relative w-full h-[400px] bg-cover"
            style={{
              backgroundImage: `url(${img4})`,
              backgroundPosition:"center"
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
            <div className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-2xl lg:text-5xl font-vast-shadow">
                AUTHENTIC CREOLE AND ITALIAN CUISINE
              </h1>
              <div className=" mt-2">
                <button className="bg-[#E8AF3E] px-4 py-2 text-black hover:bg-white transition-all duration-500 hover:text-[#e8af3e] mt-2 font-[Lato]">
                 OUR MENU
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
  )
}

export default Carousel