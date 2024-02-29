import BackgroundImage1 from "../assets/backgroundImage_01.jpg";
import BackgroundImage2 from "../assets/backgroundImage_02.jpg";


function BackgroundImg() {
  return (
    <div className="z-0">
      <img className="ml-0" src={BackgroundImage1} />
      <img src={BackgroundImage2} />
    </div>
  );
}

export default BackgroundImg;
