import { useContext } from "react";
import "../styles/Home.css";
import { recipesContext } from "../API/API_Context";
import PopularItem from "../components/PopularItem";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Home = ({ search }) => {
  const { random } = useContext(recipesContext);
  console.log(random);

  if (!random)
    return (
      <div className="home">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="home">
      <h1>Popular Items:</h1>
      <AliceCarousel autoPlay autoPlayInterval="3000">

      {random.map((popular) => {
        return (
          <div className="item">
            <ul>
                <PopularItem
                  title={popular.title}
                  id={popular.id}
                  image={popular.image}
                />
            </ul>
          </div>
        );
      })}
      </AliceCarousel>
      {search}
    </div>
  );
};

export default Home;
