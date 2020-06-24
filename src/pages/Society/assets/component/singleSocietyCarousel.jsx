import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "../css/singlesocietyCarousel.css";

class Carousels extends Component {
  state = {};
  render() {
    return (
      <>
        <Carousel pause="hover" interval="5000" touch={true} slide={true}>
          {this.props.imageArr.map((elmt) => (
            <Carousel.Item>
              <div
                className="carouselInnerContent-society"
                style={{
                  backgroundImage: `url(
                  ${elmt}
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
