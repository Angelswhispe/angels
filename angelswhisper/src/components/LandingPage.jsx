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
import "./ImageSlider.css"; // Import the CSS file for styling

function LandingPage() {
  return (
    <>
      <div className="w-[100%]">
        <div
          className="h-[48pc] mt-0"
          style={{
            backgroundImage: `url(${backgroundImage1})`,
            // backgroundImage: `url(${require("../assets/backgroundImage_01.jpg").default})`,
            backgroundSize: "contain",
            backgroundSize: "100% 30%", // 120% width, auto height
            // backgroundPosition: "",
            backgroundRepeat: "no-repeat",
          }}
        >
          <MovingImage />
          <NavBar />
          {/* <BackgroundImg>
            
        </BackgroundImg> */}

          <HeroText />
        </div>

        <div
          className="h-[50pc] -mt-[144%]"
          style={{
            backgroundImage: `url(${backgroundImage2})`,
            backgroundSize: "contain",
            backgroundSize: "100% 50%", // 120% width, auto height
            // backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <About />
          <TalkToYourAngel />
          <div className="h-2 z-30 bg-yellow-300"></div>
          <div
            className="h-[100pc] -mt-[70%]"
            // className="h-screen relative -mt-[61.6%] bg-gradient-to-r from-blue-500 to-green-500"
            style={{
              backgroundImage: `url(${BgImgBottom})`,
              // backgroundSize: "contain, contain",
              backgroundPosition: "left, right",
              backgroundRepeat: "no-repeat, no-repeat",
            }}
          >
            <ActiveSlider />
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
