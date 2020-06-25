import React, { Component } from "react";
import { Link } from "react-router-dom";
import DateConverter from "../../month";
import Loader from "../../components/Loader/loader";
import "../Society/assets/css/allSociety.css";
import "./assets/css/allNotice.css";

class AllNotice extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="director-heading notices-heading">Latest Notices</div>

        <div className="all-notice-table-container">
          <div className="table-head-container">
            <div>Sr&nbsp;&nbsp;</div>
            <div>Notice</div>
            <div className="hide-on-mobile">Updated On</div>
          </div>
          {/* Start */}
          {this.props.innerNotice.length !== 0 ? (
            <>
              {this.props.innerNotice.map((elmt, index) => (
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

export default AllNotice;
