import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./assets/css/carousel.css";

class Carousels extends Component {
  state = {};
  render() {
    return (
      <>
        {/* <div className="CarouselUpperSpacing" /> */}
        <Carousel pause="hover" interval="5000" touch={true} slide={true}>
          <Carousel.Item>
            <div
              className="carouselInnerContent"
              style={{
                backgroundImage: `url(
                  "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/08/143944974601-materialdesign_introduction.png"
                )`,
              }}
            ></div>
            <Carousel.Caption>
              <h3>First slide heading</h3>
              <p>Content</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="carouselInnerContent"
              style={{
                backgroundImage: `url(
                  "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/08/143944974601-materialdesign_introduction.png"
                )`,
              }}
            ></div>
            <Carousel.Caption>
              <h3>Second slide heading</h3>
              <p>Content</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="carouselInnerContent"
              style={{
                backgroundImage: `url(
                  "https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/08/143944974601-materialdesign_introduction.png"
                )`,
              }}
            ></div>
            <Carousel.Caption>
              <h3>Third slide heading</h3>
              <p>Content</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Carousels;
