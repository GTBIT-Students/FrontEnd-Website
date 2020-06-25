import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import API_Domain from "../../baseDomain";
import axios from "axios";
import DateConverter from "../../month";
import Loader from "../../components/Loader/loader";
import "./assets/css/singleEvent.css";

class SingleEvent extends Component {
  state = {
    isLoaded: false,
    event: {},
  };

  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/event-list?slug=${this.props.match.params.eventSlug}`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      if (data.data.event.length !== 1) {
        window.location.href = "/error-404";
      } else {
        this.setState({ event: data.data.event[0], isLoaded: true });
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
        <h2 className="director-heading">{this.state.event.event_name}</h2>
        <div className="society-prior-details-container event-prior-details-container">
          <div className="society-prior-details"></div>
          <div className="society-prior-details">
            Date: <b>{DateConverter(this.state.event.event_date)}</b>
          </div>
          <div className="society-prior-details">
            Venue: <b>{this.state.event.event_venue}</b>
          </div>
          <div className="society-prior-details">
            Time: <b>{this.state.event.event_time}</b>
          </div>
        </div>
        <div className="singleSociety-main-content single-notice-main-content">
          <div
            className="single-event-image"
            style={{ backgroundImage: `url(${this.state.event.event_image})` }}
          ></div>
          {ReactHtmlParser(this.state.event.description)}
        </div>
      </>
    );
  }
}

export default SingleEvent;
