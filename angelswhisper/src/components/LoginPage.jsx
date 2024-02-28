import "./LandingRes.css";
import MovingImage from "./MovingImage";
import HeroText from "./HeroText";
import LoginBtn from "./LoginBtn";

function LoginPage() {
  return (
    <>
      <div className="w-[100%] h-svh lg:h-screen overflow-x-hidden">
        <div className="bgL lg:h-[100%] h-[309px] overflow-hidden">
          <MovingImage />
          <LoginBtn />
         <div className="lg:pt-28 pt-2">
         <HeroText />
         </div>
        </div>

        <div className="  bg2L h-[255.3px] overflow-hidden lg:h-[141.5vh] -mt-10 lg:mt-0 "></div>
      </div>
    </>
  );
}

export default LoginPage;
