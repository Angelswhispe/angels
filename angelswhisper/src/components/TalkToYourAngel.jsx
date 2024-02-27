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
        className="w-[100%] mt-24  justify-center"
        style={{background: "linear-gradient(to top, black 0%, transparent 210%)",
          
        }}
      >
        <div className=" w-[100%]">
          <h1 className="text-center text-white">TALK TO YOUR ANGEL</h1>

          <div className="flex relative text-white left-7 w-60 space-x-[11%]">
            <p>BUNNY</p>
            <p>ARISA</p>
            <p>REINA</p>
            <p>MEI</p>
            <p>ALICE</p>
          </div>
          <div className="z-20 relative top- overflow-hidden">
            <div className="flex relative w-80 left-[7%]  justify-center">
              <img
                className="w-[110px] relative left-[27%] top-1 h-52 hover:p-0 p-1 cursor-pointer"
                src={Bunny}
              />
              <img
                className="w-[110px] relative left-10 h-52 top-1 hover:p-0 p-1 cursor-pointer"
                src={Arisa}
              />
              <img
                className="w-[110px] h-52 z-40 hover:p-0 p-1 top-1 relative cursor-pointer"
                src={Reina}
              />
              <img
                className="w-[110px] h-52 relative z-30 right-9 top-1 hover:p-0 p-1 cursor-pointer"
                src={Mei}
              />
              <img
                className="w-[110px] h-52 relative right-[27%] top-1 hover:p-0 p-1 cursor-pointer"
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
