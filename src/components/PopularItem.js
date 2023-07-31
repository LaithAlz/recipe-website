import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "../styles/PopularItem.css";

const PopularItem = ({ id, title, image }) => {
  return (
    <div className="item">
      <li key={id}>
        <h3>{title}</h3>
        <img src={image} alt={title} />
      </li>
    </div>
  );
};

export default PopularItem;
