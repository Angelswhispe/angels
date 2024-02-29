// import React from "react";
import Home from "../assets/Home.png";
import Sidebp from "../assets/sidebp.png";
import Sidebp1 from "../assets/sidebp1.png";

function RoadMap() {
  return (
    <>
      <div className="-mt-[140%] lg:-mt-[40%] text-xs ml-6 text-white  relative top-0">
        <h1 className="text-2xl lg:text-5xl lg:text-center font-bold text-orange-300">
          ROAD MAP
        </h1>
        <div className="flex">
          <div className="absolute hidden lg:ml-11 lg:block">
            <img className="relative" src={Sidebp} />
            <img className="relative lg:-ml-[7%]" src={Sidebp1} />
          </div>
          <div className="font-sans lg:ml-32 lg:w-[48%] lg:pt-5 lg:text-base">
            <p>2023 Q4</p>
            <li>
              Creation of the game script and character original drawings.
            </li>
            <br />
            <div className="lg:-mt-2">
              <p>2024 Q1</p>

              <li>Release of OG NFTs</li>
              <li>Release of Error Angel (EAGL) Tokens</li>
              <li>Completion and launch of the game demo</li>
              <li>Fundraising for the short drama production.</li>
            </div>
            <br />
            <div className="lg:-mt-2">
              <p>2024 Q2</p>

              <li>Completion and launch of the game phase 1.</li>
              <li>
                Completing cross-chain bridge will allow more players to
                experience this game.
              </li>
              <li>Launching the Web2 version of the game.</li>
              <li>Conducting an airdrop and launch of item NFTs.</li>
              <li>Launching Angel`&apos;`,s Whisper App</li>
            </div>
            <br />
            <p className="lg:-mt-">2024 Q4</p>

            <li>Launch of Phase 2.</li>
            <li>Profit distribution to community of Phase 1.</li>
            <li>
              Introducing the “Build Angel” feature, which allows players to
              turn Angels they`&apos;`,ve trained in the game and app into NFTs and to
              import others`&apos;`, NFTs.
            </li>
            <li>
              Initiation of the AI-driven Web3 interactive game incubator
              program, and select teams for Winter 2024 Batch.
            </li>

            <br />
            <p className="lg:-mt-2">2024 Q4</p>

            <li> Launch of Phase 3.</li>
            <li>Profit distribution to community of Phase 2.</li>
            <li>
              Launching the Angels trading market, allowing players to trade
              Angels they have trained in the game and app as NFTs.
            </li>
            <li>
              Assisting teams within the incubator to promote and launch their
              NFTs, with 30% of the revenue earned by Angel`&apos;`,s Whisper
              distributed to all OG and EAGL Holders
            </li>
          </div>
          <div>
            <img className="hidden lg:block w-[31pc] mt-20 h-80" src={Home} />
          </div>
        </div>
      </div>
    </>
  );
}

export default RoadMap;
