import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./LandingRes.css";
import { FreeMode, Pagination } from "swiper/modules";


// import { ServiceData } from "../constants";
import SpaceCity1 from "../assets/girl.png";
import SpaceCity5 from "../assets/girl1.jpg";
import SpaceCity6 from "../assets/girl3.jpg";
import SpaceCity7 from "../assets/girl4.jpg";
import SpaceCity8 from "../assets/girl5.jpg";
import SpaceCity9 from "../assets/girl5.jpg";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActiveSlider = () => {

  return (
    <>
      <div className="relative w-[100%] lg:[100%] lg:-top-[10.2%] -top-[22.2%] overflow-x-hidden">
        <div className="flex items-center justify-center  -ml-5 lg:-ml-[30%]  lg:w-[350vw] z-50 w-[120%] flex-col h-[900px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            loop={true} // Enable loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            className="w-[173%] lg:pl-1 lg:ml-[8.7%] lg:-mt-[5%] pl-7 -mt-9 lg:h-96 lg:w-[84.5%]"
          >
            <FontAwesomeIcon
              className="absolute font-light left-14 bg-white top-40 w-6 h-6 px-2 py-2 rounded-3xl z-50"
              icon={faChevronLeft}
            />
            <FontAwesomeIcon
              className="absolute font-light lg:left-[30.6%] left-80 bg-white top-40 w-6 h-6 px-2 py-2 rounded-3xl z-50"
              icon={faChevronRight}
            />
            <div className="w-[80%] ">
              {/* {ServiceData.map((item) => ( */}
              <SwiperSlide className="flex w-[100%]  -mt-1 overflow-y-hidden overflow-x-auto">
                <div
        
                 className="flex gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className={` h-full relative img w-60 lg:w-80 `} />
                  <div className="absolute imgop w-60  h-[56%] lg:w-80 lg:h-[80%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img1 lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img2 lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img3 lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img4 lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img1 lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img2 lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img3 lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img4 lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="relative w-60 img lg:w-80" />
                  <div className="absolute lg:w-80 lg:h-[80%] w-60 h-[56%] mt-10 inset-0  bg-black hover:opacity-10 opacity-50" />
                </div>
              </SwiperSlide>
              {/* ))} */}
              {/* <FontAwesomeIcon
                className="text-red-700 w-[100%] h-[100%] relative top-0 -right-96 z-50"
                icon={faChevronRight}
              /> */}
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ActiveSlider;
