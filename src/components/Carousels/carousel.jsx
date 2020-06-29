import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
// import Banner1 from "./assets/images/banner-1.jpg";
import { carousel } from "./CarouselContent";
import "./assets/css/carousel.css";

class Carousels extends Component {
  state = {};

  settings = {
    pause: "hover",
    interval: 5000,
    touch: true,
    slide: true,
  };

  render() {
    return (
      <>
        <Carousel {...this.settings}>
          {carousel.map((data, index) => (
            <Carousel.Item key={`carousel-${index}`}>
              <div
                className="carouselInnerContent"
                style={{
                  backgroundImage: `url(
                  ${data.image}
                )`,
                }}
              ></div>
            </Carousel.Item>
          ))}
        </Carousel>
      </>
    );
  }
}

export default Carousels;
