import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DateConverter from "../../month";
import Loader from "../../components/Loader/loader";
import API_Domain from "../../baseDomain";
import "../Society/assets/css/allSociety.css";
import "./assets/css/allNotice.css";

class AllSociety extends Component {
  state = {
    notices: [],
    isLoaded: false,
  };

  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/notice-list`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      this.setState({ notices: data.data, isLoaded: true });
      return null;
    });
  };

  render() {
    return (
      <>
        <div className="single-society-heading singleSociety-main-header notices-heading">
          Latest Notices
        </div>

        <div className="all-notice-table-container">
          <div className="table-head-container">
            <div>Sr&nbsp;&nbsp;</div>
            <div>Notice</div>
            <div className="hide-on-mobile">Updated On</div>
          </div>
          {/* Start */}
          {this.state.isLoaded ? (
            <>
              {this.state.notices.current_notice.map((elmt, index) => (
                <div className="table-content" key={`notice-${index}`}>
                  <div>{index + 1}.&nbsp;&nbsp;&nbsp;</div>
                  <Link className="notice-text" to={`/notice/${elmt.slug}`}>
                    {elmt.notice}
                  </Link>
                  <div className="display-in-mobile"></div>
                  <div className="all-notice-date">
                    {DateConverter(elmt.created_date)}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <Loader />
          )}
          {/* End */}
        </div>
      </>
    );
  }
}

export default AllSociety;
