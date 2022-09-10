import React from "react";
import { Carousel } from "react-bootstrap";
import "./imgcarousel.css";
import Ozer1 from "../../img/ozer-proje-1.jpg";
import Ozer2 from "../../img/ozer-proje-2.jpg";
import Ozer3 from "../../img/ozer-proje-3.jpg";

function ImgCarousel() {
  return (
    <div className="c">
      <Carousel className="c" fade>
        <Carousel.Item className="c-i">
          <img className="d-block h-c-i " src={Ozer1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-i">
          <img className="d-block  h-c-i " src={Ozer2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="c-i">
          <img className="d-block h-c-i" src={Ozer3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ImgCarousel;
