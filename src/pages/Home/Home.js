import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

//images
import bolobrigadeiro from "../../assets/bolo-brigadeiro.jpeg";
import paobatata from "../../assets/pao-batata.jpeg";
import redvelvet from "../../assets/red-velvet.jpeg";

//styles
import "./Home.css";

export default function Home() {
  return (
    <>
      <Carousel className="main-slide">
        <div className="wrapper">
          <div className="description1">
            <h1 className="title">BRIGADEIRO CAKE</h1>
          </div>
          <img src={bolobrigadeiro} className="images-carousel" />
        </div>
        <div className="wrapper">
          <div className="description2">
            <h1 className="title">POTATO BREAD WITH CREAM CHEESE</h1>
          </div>
          <img src={paobatata} className="images-carousel" />
        </div>
        <div className="wrapper">
          <div className="description3">
            {" "}
            <h1 className="title">RED VELVET CAKE</h1>
          </div>
          <img src={redvelvet} className="images-carousel" />
        </div>
      </Carousel>
      <div>
        <h2 className="mais-vendidos">BEST SELLERS</h2>
      </div>
    </>
  );
}
