import MovingImage from "./MovingImage";
// import VideoBackgroundText from './VideoBackgroundText';
import NavBar from "./NavBar";
import HeroText from "./HeroText";
import About from "./About";
import TalkToYourAngel from "./TalkToYourAngel";
import backgroundImg from "./BackgroundImg";
import backgroundImage1 from "../assets/backgroundImage_01.jpg";
import backgroundImage2 from "../assets/backgroundImage_02.jpg";
import BgImgBottom from "../assets/bgImg.jpg";
import ImageSlider from "./ImageSlider";
import ActiveSlider from "./ImageSlider";
import RoadMap from "./RoadMap";
import videoFile from "../assets/introaw.mp4";
import "./LandingRes.css";

import StartTalk from "./StartTalk";

function LandingPage() {
  return (
    <>
      <div className="w-[100%] lg:h-screen">
        <div className="lg:relative bg h-[48pc] lg:h-[100vh] mt-0">
          <MovingImage />
          <NavBar />
          {/* <BackgroundImg>
            
        </BackgroundImg> */}
          <div className="lg:pt-[29%] pt-[23%]">
            <HeroText />
          </div>
        </div>

        <div className="  bg2 h-[48pc] lg:h-[181.5vh] lg:mt-0 -mt-[144%]">
          <About />
          <video controls className="mt-24 p-0 lg:ml-[23.5%] lg:w-[55%] ">
            <source src={videoFile} type="video/mp4" />
            {/* Your browser does not support the video tag. */}
          </video>
          <TalkToYourAngel />
          {/* <StartTalk /> */}

          <div>
            <div className="h-2 z-30 relative bg-yellow-300"></div>
          </div>
          <div
            className=" bg3 lg:h-[110pc] h-[85pc] lg:mt-[0%] mt-[0%]"
            // className="h-screen relative -mt-[61.6%] bg-gradient-to-r from-blue-500 to-green-500"
          >
            <ActiveSlider />
            <RoadMap />
            {/* <br/> */}
            <hr className="mt-14 lg:mt-20 lg:border-0 shadow-lg" />
            <video controls className="mt-16 p-5 lg:ml-[23%] ">
              <source src={videoFile} type="video/mp4" />
              {/* Your browser does not support the video tag. */}
            </video>
            <p className="font-sans h-10 mt-3 lg:mt-9 text-center text-white">
              &copy; 2024 by Emmy
            </p>
          </div>
        </div>
      </div>
      {/* <div>
      <h1 className="text-2xl font-bold mb-4">Video Background Text Example</h1>
      <VideoBackgroundText />
    </div> */}
    </>
  );
}

export default LandingPage;
