import "./MovingImage.css"; // Import the CSS file for styling
import MovingImg from "../assets/movingimage.png";
const MovingImage = () => {
  return (
    <>
      <div className="moving-image-container absolute">
        <img src={MovingImg} alt="Moving Image" className="moving-image" />
      </div>
    </>
  );
};

export default MovingImage;
