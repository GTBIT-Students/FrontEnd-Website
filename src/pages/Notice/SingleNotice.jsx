import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import API_Domain from "../../baseDomain";
import axios from "axios";
import DateConverter from "../../month";
import Loader from "../../components/Loader/loader";
import "../Society/assets/css/SingleSociety.css";
import "./assets/css/singleNotice.css";

class SingleNotice extends Component {
  state = {
    isLoaded: false,
    notice: {},
  };

  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/notice-list?slug=${this.props.match.params.noticeSlug}`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      if (data.data.notice.length !== 1) {
        window.location.href = "/error-404";
      } else {
        this.setState({ notice: data.data.notice[0], isLoaded: true });
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
        <h2 className="director-heading">{this.state.notice.notice}</h2>

        {/* <div className="table-head-container single-notice-heading">
          <div>{this.state.notice.notice}</div>
        </div> */}
        <div className="society-prior-details notice-prior-detail">
          <p>
            Updated on: <b>{DateConverter(this.state.notice.created_date)}</b>
          </p>
        </div>
        <div className="singleSociety-main-content single-notice-main-content">
          {ReactHtmlParser(this.state.notice.description)}
        </div>
      </>
    );
  }
}

export default SingleNotice;
