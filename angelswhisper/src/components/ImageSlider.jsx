import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
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
      <div className="relative w-[100%] overflow-hidden">
        <div className="flex items-center justify-center relative top-[-2%] -ml-5 w-[120%] flex-col h-[900px]">
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
            className="w-[173%] pl-7 -mt-9 lg:max-w-[80%]"
          >
              <FontAwesomeIcon
                className="absolute font-light left-14 bg-white top-28 w-6 h-6 px-2 py-2 rounded-3xl z-50"
                icon={faChevronLeft}
              />
              <FontAwesomeIcon
                className="absolute font-light left-80 bg-white top-28 w-6 h-6 px-2 py-2 rounded-3xl z-50"
                icon={faChevronRight}
              />
            <div className="w-[80%] ">
              {/* {ServiceData.map((item) => ( */}
              <SwiperSlide className="flex w-[100%] -mt-12 overflow-y-hidden overflow-x-scroll">
                <div className="flex gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity1})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
                </div>
                <div className="flex ml-6 gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity5})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
                </div>
                <div className="flex ml-6 gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity6})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
                </div>
                <div className="flex ml-6 gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity7})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
                </div>
                <div className="flex ml-6 gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity8})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
                </div>
                <div className="flex ml-6 gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity9})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
                </div>
                <div className="flex ml-6 gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity1})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
                </div>
                <div className="flex ml-6 gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity5})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
                </div>
                <div className="flex ml-6 gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity7})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
                </div>
                <div className="flex ml-6 gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div
                    className="relative w-60"
                    style={{
                      backgroundImage: `url(${SpaceCity8})`,
                      backgroundSize: "contain",
                      backgroundSize: "65vw 55vh",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute w-60 h-[56%] mt-10 inset-0 bg-black group-hover:opacity-10 opacity-50" />
                  
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
