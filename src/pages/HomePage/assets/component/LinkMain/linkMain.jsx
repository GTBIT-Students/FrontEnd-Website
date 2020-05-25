import React, { Component } from "react";
import "./assets/linkMain.css";
import Loader from "../../../../../components/Loader/loader";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
    autoplaySpeed: 3000,
    slidesToScroll: 4,
    vertical: true,
  };
  render() {
    return (
      <div>
        <h2 className="director-heading">Important Links</h2>
        <div className="event-main-slick-container">
          {/* Start */}
          {this.props.linkList.length === 0 ? (
            <Loader />
          ) : (
            <>
              <Slider {...this.SliderSettings}>
                {this.props.linkList.map((elmt, index) => (
                  <div key={`link-slick-con${index}`}>
                    <Link to={`/event/${elmt.link}`} className="eventMain-link">
                      <div className="link-slick-link">{elmt.link_text}</div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </>
          )}
          {/* End */}
          <div className="alumni-btn-container">
            <Link to="#" className="alumni-button">
              All Links
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkMain;
