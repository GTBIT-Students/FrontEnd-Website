import React, { Component } from "react";
import "./assets/noticeMain.css";
import { Link } from "react-router-dom";
import DateConverter from "../../../../../month";
import Loader from "../../../../../components/Loader/loader";
import Slider from "react-slick";
import closeNavBarProps from "../../../../../closeNavBarProps";

class NoticeMain extends Component {
  state = {};

  SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    touchMove: true,
    autoplaySpeed: 5000,
    slidesToScroll: 3,
    vertical: true,
  };

  render() {
    return (
      <fieldset className="notice-main-container">
        <legend className="notice-main-legend">Notice Board</legend>
        <div className="notice-main-inner-container">
          <div>
            {this.props.noticeList.length === 0 ? (
              <Loader />
            ) : (
              <>
                <Slider {...this.SliderSettings}>
                  {this.props.noticeList.map((elmt, index) => (
                    <div key={`notice-main-${index}`}>
                      <div className="notice-main-content">
                        <Link to={`/notice/${elmt.slug}`}>{elmt.notice}</Link>
                        <div>{DateConverter(elmt.created_date)}</div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </>
            )}
          </div>
          <div>
            <div className="alumni-btn-container notice-btn-container">
              <Link
                to="/notice"
                className="alumni-button"
                onClick={closeNavBarProps}
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default NoticeMain;
