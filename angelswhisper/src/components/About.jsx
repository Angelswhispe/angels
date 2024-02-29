// import React from 'react'

function About() {
  return (
    <>
      <div className="lg:h-80 h-40 lg:mb-60">
        <div className="p-7 bg-[#000000] top-20 relative opacity-70  w-[88%] lg:w-[55%] lg:ml-[23.4%] ml-6 text-white lg:text-lg  lg:h-[140%] h-[155%] text-[65%] font-bold">
          <h1 className=" text-center lg:text-3xl text-sm text-orange-100 -top-2 relative lg:p-5">WHAT'S ANGEL'S WHISPER?</h1>
          <p className="font-bold lg:w-[80%] font-sans lg:left-16 relative">
            "ANGEL'S WHISPER" is an upcoming AI-driven Web3 romance development
            game from the BitCast team. It features a unique Web3 gameplay where
            each choice in the game represents a vote. This voting system is
            used to reshape and extend the narratives and characters, driven by
            the Generative AI and our community.
          </p>
          <p className="mt-6 font-sans lg:w-[80%] lg:left-16 relative">
            Revenue generated from the reshaped game is distributed among early
            players. This introduces a new GameFi token economy system,
            encapsulating a Play-to-Build-to-Earn model.
          </p>
        </div>

        <div className="bg-[#FEF1E0] hidden font-sans">
          <h1>HOW TO PLAY THE DEMO?</h1>
          <p>
            1. Each girl has a unique personality and preferences. Try to
            converse with and understand her.
          </p>
          <p>
            2. Above the dialogue box, the AI will calculate 'Love Points' based
            on each interaction.
          </p>
          <p>
            3. When 'Love Points' reach 30, the AI will give you a passcode. (If
            no passcode appears, it means the girl isn't satisfied with your
            performance, and you need to accumulate Love Points again.)
          </p>
          <p>
            4. Collect 3 different passcodes to redeem the ANGEL'S WHISPER OG WL
            on the website
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
