import React, { Component } from "react";
import SingleSocietyCarousel from "./assets/component/singleSocietyCarousel";
import ReactHtmlParser from "react-html-parser";
import Slider from "react-slick";
import API_Domain from "../../baseDomain";
import DateConverter from "../../month";
import axios from "axios";
import Loader from "../../components/Loader/loader";
import "./assets/css/SingleSociety.css";

class SingleSociety extends Component {
  state = {
    isLoaded: false,
    society: {},
  };

  SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    touchMove: true,
    autoplaySpeed: 3000,
    slidesToScroll: 2,
    vertical: true,
  };

  isActive = (bool) => {
    if (bool) {
      return "Yes";
    } else {
      return "No";
    }
  };

  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/society-list?slug=${this.props.match.params.societySlug}`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      if (data.data.society.length !== 1) {
        window.location.href = "/error-404";
      } else {
        this.setState({ society: data.data.society[0], isLoaded: true });
      }
    });
  };

  render() {
    if (!this.state.isLoaded) {
      return (
        <>
          <div style={{ height: "5em" }} />
          <Loader />
        </>
      );
    }
    return (
      <>
        <div className="single-society-heading-container">
          <div className="justifyCenter">
            <div
              className="single-society-head-image"
              style={{
                backgroundImage: `url(${this.state.society.logo})`,
              }}
            ></div>
          </div>
          <div className="justifyCenter">
            <div className="single-society-heading">
              {this.state.society.name}
            </div>
            <div className="single-society-heading-content">
              {this.state.society.tag_line}
            </div>
          </div>
        </div>
        <div className="society-prior-details-container">
          <div className="society-prior-details">
            Founded on: <b>{DateConverter(this.state.society.founded_on)}</b>
          </div>
          <div className="society-prior-details">
            Active: <b>{this.isActive(this.state.society.is_active)}</b>
          </div>
          <div className="society-prior-details">
            Incharge: <b>{this.state.society.teacher_incharge}</b>
          </div>
          <div className="society-prior-details">
            Student Incharge: <b>{this.state.society.student_incharge}</b>
          </div>
        </div>
        <div className="single-society-carousel">
          <SingleSocietyCarousel imageArr={this.state.society.image_carousel} />
        </div>
        <div className="singleSociety-main-header">
          About {this.state.society.name}
        </div>
        <div className="singleSociety-main-content">
          {ReactHtmlParser(this.state.society.description)}
        </div>
        <div className="slider-container-grid">
          <div className="slider-upcoming-slider">
            <div className="slider-container-header">Upcoming Event</div>
            <Slider {...this.SliderSettings}>
              {this.state.society.upcoming_event.map((elmt, index) => (
                <div key={`upcoming-slider-${index}`}>
                  <div className="slider-container-content-container">
                    <div className="justifyCenter">
                      <div
                        className="slider-container-content-image"
                        style={{ backgroundImage: `url(${elmt.image})` }}
                      ></div>
                    </div>
                    <div className="justifyContent">
                      <div className="slider-container-content-header">
                        {elmt.name}
                      </div>
                      <div className="slider-container-content-date">
                        {elmt.date}
                      </div>
                      <div className="slider-container-content-content">
                        {elmt.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="slider-past-slider">
            <div className="slider-container-header">Past Event</div>
            <Slider {...this.SliderSettings}>
              {this.state.society.past_event.map((elmt, index) => (
                <div key={`Past-slider-${index}`}>
                  <div className="slider-container-content-container">
                    <div className="justifyCenter">
                      <div
                        className="slider-container-content-image"
                        style={{ backgroundImage: `url(${elmt.image})` }}
                      ></div>
                    </div>
                    <div className="justifyContent">
                      <div className="slider-container-content-header">
                        {elmt.name}
                      </div>
                      <div className="slider-container-content-date">
                        {elmt.date}
                      </div>
                      <div className="slider-container-content-content">
                        {elmt.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </>
    );
  }
}

export default SingleSociety;
