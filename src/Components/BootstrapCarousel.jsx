

import {Carousel} from "react-bootstrap";
import image1 from "./image/Screenshot2.png";
import image2 from "./image/Screenshot3.png";

export const BootstrapCarousel = () => {
  return (
    <div>
      <h1 className="todayoffers">TODAY'S TOP OFFERS</h1>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-90"
            src={image1}
            alt="Second slide"
            style={{"margin":"auto"}}
          />   
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-90"
            src={image2}
            alt="Third slide"
            style={{"margin":"auto"}}
            
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
