import React, { Component } from "react";
import "./assets/linkMain.css";
import Loader from "../../../../../components/Loader/loader";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../../../../closeNavBarProps";

class LinkMain extends Component {
  state = {};
  SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    touchMove: true,
    autoplaySpeed: 7000,
    slidesToScroll: 4,
    vertical: true,
  };
  render() {
    return (
      <div>
        {/* <h2 className="director-heading">Important Links</h2> */}
        <fieldset className="notice-main-container">
          <legend className="notice-main-legend">Important Links</legend>
          <div className="event-main-slick-container">
            {/* Start */}
            {this.props.linkList.length === 0 ? (
              <Loader />
            ) : (
              <>
                <Slider {...this.SliderSettings}>
                  {this.props.linkList.map((elmt, index) => (
                    <div key={`link-slick-con${index}`}>
                      <a
                        href={elmt.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="eventMain-link"
                      >
                        <div className="link-slick-link">{elmt.link_text}</div>
                      </a>
                    </div>
                  ))}
                </Slider>
              </>
            )}
            {/* End */}
            <div className="alumni-btn-container">
              <Link
                to="/important-links"
                className="alumni-button"
                onClick={closeNavBarProps}
              >
                All Links
              </Link>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default LinkMain;
