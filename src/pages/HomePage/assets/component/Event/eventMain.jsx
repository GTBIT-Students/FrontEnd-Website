import React, { Component } from "react";
import "./assets/eventMain.css";
import DateConverter from "../../../../../month";
import Loader from "../../../../../components/Loader/loader";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../../../../closeNavBarProps";

class EventMain extends Component {
  state = {};
  SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    arrows: false,
    autoplay: true,
    touchMove: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    vertical: true,
  };
  render() {
    return (
      <div>
        <h2 className="director-heading">Upcoming Events</h2>
        <div className="event-main-slick-container">
          {/* Start */}
          {this.props.eventList.length === 0 ? (
            <Loader />
          ) : (
            <>
              <Slider {...this.SliderSettings}>
                {this.props.eventList.map((elmt, index) => (
                  <div key={`event-slick-con${index}`}>
                    <Link
                      to={`/event/${elmt.slug}`}
                      onClick={closeNavBarProps}
                      className="eventMain-link"
                    >
                      <div className="event-slick-con">
                        <div
                          className="event-main-image"
                          style={{
                            backgroundImage: `url(${elmt.event_image})`,
                          }}
                        >
                          <div className="event-main-date">
                            {DateConverter(elmt.event_date)}
                          </div>
                        </div>
                        <div className="justifyCenter">{elmt.event_name}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </>
          )}
          {/* End */}
          <div className="alumni-btn-container">
            <Link
              to="/event"
              className="alumni-button"
              onClick={closeNavBarProps}
            >
              All Events
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default EventMain;
