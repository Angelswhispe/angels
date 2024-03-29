import React, { useState, useEffect, useRef } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "./LandingRes.css";

import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActiveSlider = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 70; // Adjust the scroll amount as needed
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 90; // Adjust the scroll amount as needed
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevScrollPosition) => {
        const newScrollPosition = prevScrollPosition + 1;
        if (newScrollPosition >= scrollWidth) {
          clearInterval(scrollInterval);
        }
        return newScrollPosition;
      });
    }, 20);

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);
  return (
    <>
      <div className="relative w-[100%] lg:[100%] lg:-top-[10.2%] -top-[26.2%] overflow-x-hidden ">
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
            className="w-[173%] lg:mb-0 lg:pl-1 lg:ml-[8.7%] lg:-mt-[5%] pl-7 mt-10 lg:h-96 lg:w-[84.5%]"
          >
            <FontAwesomeIcon
              className="absolute font-light left-14 bg-white top-[40%] w-6 h-6 px-2 py-2 rounded-3xl z-50"
              icon={faChevronLeft}
              onClick={scrollLeft}
            />
            <FontAwesomeIcon
              className="absolute font-light lg:left-[30.6%] left-80 bg-white top-[40%] w-6 h-6 px-2 py-2 rounded-3xl z-50"
              icon={faChevronRight}
              onClick={scrollRight}
            />
            <div className="w-[81%]   ">
              {/* {ServiceData.map((item) => ( */}
              <SwiperSlide
               ref={scrollRef}
               style={{
          

          transition: 'scrollLeft 0.5s ease-in-out', // Add transition effect
        }}
           
                className="flex w-[100%] lg:pb-10 h-[105%] -mt-1 lg:-mt-9 overflow-y-hidden oscroll">
                <div
        
                 className="flex gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className={` lg:h-full  relative h-[100%] img w-60 lg:w-80 `} />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img1 lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img2 lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img3 lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img4 lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img1 lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img2 lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img3 lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[120%] w-[100%] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img4 lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
                </div>
                <div className="flex ml-6  gap-6 mb-[-28%]  relative py-10 h-[100vh] w-[100vw] lg:h-[400px] lg:w-[350px]  cursor-pointer">
                  <div className="lg:h-full  relative h-[100%] w-60 img lg:w-80" />
                  <div className="absolute imgop w-60  h-[43%] lg:w-80 lg:mt-[24%] lg:h-[81%] mt-7  inset-0 bg-black hover:opacity-10 opacity-50" />
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
