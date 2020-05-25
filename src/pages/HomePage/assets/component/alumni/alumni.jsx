import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import AlumniImg from "./assets/alumni.png";
import "./assets/alumni.css";

class AlumniSection extends Component {
  state = {};
  carouselSettings = {
    controls: false,
    pause: "hover",
    interval: 3000,
    touch: true,
    slide: true,
    // indicators: false,
  };
  render() {
    return (
      <div className="alumni-container-grid">
        <div className="alumni-container">
          <h2 className="director-heading">Alumni Stories</h2>
          <h5>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus,
            impedit animi. Impedit fugit quia blanditiis veniam ad accusantium
          </h5>
        </div>
        <div>
          <Carousel {...this.carouselSettings}>
            {/* Start */}
            <Carousel.Item>
              <div
                className="alumni-carousel-container"
                style={{
                  backgroundImage: `url(${AlumniImg})`,
                }}
              >
                <div className="alumni-carousel-inner">
                  <div className="alumni-name-container">
                    <div className="alumni-name">Tapsi Pannu</div>
                    <div className="alumni-work">Actress</div>
                  </div>
                  <div className="alumni-testimonial">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto debitis nam harum error laudantium in molestias autem,
                    quasi itaque. Repellat alias blanditiis iure necessitatibus
                    minima ullam, veniam dolorem itaque ipsam.
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div
                className="alumni-carousel-container"
                style={{
                  backgroundImage: `url(${AlumniImg})`,
                }}
              >
                <div className="alumni-carousel-inner">
                  <div className="alumni-name-container">
                    <div className="alumni-name">Tapsi Pannu</div>
                    <div className="alumni-work">Actress</div>
                  </div>
                  <div className="alumni-testimonial">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto debitis nam harum error laudantium in molestias autem,
                    quasi itaque. Repellat alias blanditiis iure necessitatibus
                    minima ullam, veniam dolorem itaque ipsam.
                  </div>
                </div>
              </div>
            </Carousel.Item>
            {/* End */}
          </Carousel>
          <div className="alumni-btn-container">
            <Link to="#" className="alumni-button">
              Alumni List
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AlumniSection;
