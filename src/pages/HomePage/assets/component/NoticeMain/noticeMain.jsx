import React, { Component } from "react";
import "./assets/noticeMain.css";
import { Link } from "react-router-dom";
import DateConverter from "../../../../../month";
import Loader from "../../../../../components/Loader/loader";

class NoticeMain extends Component {
  state = {};
  render() {
    return (
      <div className="notice-main-container">
        <div className="notice-main-legend">Notices</div>
        <div className="notice-main-inner-container">
          {/* <div className="notice-main-inner-heading">
            <div className="notice-main-notice-text">Notice &nbsp;</div>
            <div>Updated On</div>
          </div> */}
          <div>
            {this.props.noticeList.length === 0 ? (
              <Loader />
            ) : (
              <>
                {this.props.noticeList.map((elmt) => (
                  <div className="notice-main-content">
                    <Link tp="#">{elmt.notice}</Link>
                    <div>{DateConverter(elmt.created_date)}</div>
                  </div>
                ))}
              </>
            )}
          </div>
          <div>
            <Link to="#">View All</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NoticeMain;
