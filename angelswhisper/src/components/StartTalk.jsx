// import React from 'react'
// import { Link, NavLink } from "react-router-dom";
import Bunny from "../assets/bunny.webp";
import Arisa from "../assets/arisa.webp";
import Reina from "../assets/reina.webp";
import Mei from "../assets/mei.webp";
import Alice from "../assets/alice.webp";

import {
  faXmark
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function StartTalk() {
  // const activeLink = "border-b-2 border-white pb-[3px]";
  // const normalLink = "";
  return (
    <>
      <div className="text-white w-80 left-[7%] h-[108%] z-50 -mt-60 opacity-92 bg-[#313133] absolute">
        {/* <div className="lg:flex lg:items-center "> */}
        <div className=" p-3 border border-black m-4 rounded-xl">
          <p className="font-semibold">
            Mission: To learn about Reina's superpower.
          </p>
          <p>
            Once you discover Reina's superpower, I will tell you the passcode.
          </p>
        </div>
        <FontAwesomeIcon className="text-white font-light text-5xl absolute left-[80%] -mt-8" icon={faXmark} />
        <div className="border border-black m-4 rounded-xl h-72">
          <div className="text-sm float-right mt-2 mr-5">
            <p>Name: Reina</p>
            <p>Age: 20</p>
            <p>Occupation: Office Clerk</p>


            <p>peek her file</p>

            <div className="h-[31%] mt-7 w-40 bg-black absolute rounded-sm text-[62%] p-2">
              <li>
                Hobbies: Earning money, financial planning, singing, cosplay,
                selfies.
              </li>
              <li>
                Personality: Introverted, expressive, vain, emotionally fragile,
                sentimental.
              </li>
              <li>
                Background: Modest, early workforce, self-reliant, hardworking,
                mistake-prone.
              </li>
            </div>
          </div>
          <img className="w-28 mt-[28%]" src={Reina} />
        </div>
        <input
          type="text"
          placeholder="Please enter your question here"
          className="rounded-lg ml-4 h-9 text-sm w-56 p-2"
        />
      </div>
    </>
  );
}

export default StartTalk;
