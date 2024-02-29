// import React from 'react'
import Bunny from "../assets/bunny.webp";
import Arisa from "../assets/arisa.webp";
import Reina from "../assets/reina.webp";
import Mei from "../assets/mei.webp";
import Alice from "../assets/alice.webp";

function TalkToYourAngel() {
  return (
    <>
      <div
        className="w-[100%] bg-black mt-0 lg:z-50 justify-center"
        
      >
        <div className=" w-[100%]">
          <h1 className="text-center text-2xl lg:text-7xl lg:pt-10 text-orange-100">TALK TO YOUR ANGEL</h1>
          <div className="flex lg:text-5xl lg:ml-24 lg:mt-16 z-40 lg:top-10 lg:space-x-28 relative text-orange-100 left-5 w-60 space-x-[11%]">
            <p className="relative  cursor-pointer left-0">BUNNY</p>
            <p className="relative  cursor-pointer -left-3">ARISA</p>
            <p className="relative  cursor-pointer -left-9">REINA</p>
            <p className="relative  cursor-pointer -left-12">MEI</p>
            <p className="relative  cursor-pointer -left-6">ALICE</p>
          </div>
          <div className="z-20 relative top- overflow-hidden">
            <div className="flex relative lg:w-96 w-80 left-[7%] lg:left-[36%]  justify-center">
              <img
                className="lg:w-[96vw] lg:h-[43pc]  w-[110px] relative lg:left-[63%] left-[27%] top-1 lg:top-20 h-52 hover:p-0 p-1 cursor-pointer"
                src={Bunny}
              />
              <img
                className="lg:w-[96vw] lg:h-[130%]  w-[110px] relative lg:left-36 left-10 h-52 top-1 lg:top-20 hover:p-0 p-1 cursor-pointer"
                src={Arisa}
              />
              <img
                className="lg:w-[99vw] lg:h-[680px] w-[110px] h-52 z-40 hover:p-0 p-1 top-1 lg:top-12 relative cursor-pointer"
                src={Reina}
              />
              <img
                className="lg:w-[96vw] lg:h-[120%]  w-[110px] h-52 relative z-30 lg:-left-36 right-9 top-1 lg:top-28 hover:p-0 p-1 cursor-pointer"
                src={Mei}
              />
              <img
                className="lg:w-[96vw] lg:h-[120%]  w-[110px] h-52 relative z-20 lg:right-[61%] right-[27%] lg:top-36 top-1 hover:p-0 p-1 cursor-pointer"
                src={Alice}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TalkToYourAngel;
