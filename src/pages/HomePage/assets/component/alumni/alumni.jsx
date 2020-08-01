import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../../../../closeNavBarProps";
import Harsh from "./assets/harshdeep.jpg";
import Tapsee from "./assets/tapsee.jpg";
import "./assets/alumni.css";

class AlumniSection extends Component {
  state = {
    alumni: [
      {
        name: "Tapsee Pannu",
        designation: "Actress",
        image: Tapsee,
        testimonial: "",
      },
      {
        name: "Harshdeep Ahuja",
        designation: "Youtuber",
        image: Harsh,
        testimonial: "",
      },
    ],
  };
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
          <h2 className="director-heading">Our Alumnus</h2>
        </div>
        <div>
          <Carousel {...this.carouselSettings}>
            {/* Start */}
            {this.state.alumni.map((alumni, index) => (
              <Carousel.Item key={`Alumni-${index}`}>
                <div
                  className="alumni-carousel-container"
                  style={{
                    backgroundImage: `url(${alumni.image})`,
                  }}
                >
                  <div className="alumni-carousel-inner">
                    <div className="alumni-name-container">
                      <div className="alumni-name">{alumni.name}</div>
                      <div className="alumni-work">{alumni.designation}</div>
                    </div>
                    <div className="alumni-testimonial">
                      {alumni.testimonial}
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
            {/* End */}
          </Carousel>
          <div className="alumni-btn-container">
            <Link
              to="/alumni"
              className="alumni-button"
              onClick={closeNavBarProps}
            >
              Alumni List
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AlumniSection;
