import React, { Component } from "react";
import Loader from "../Loader/loader";
import { Link } from "react-router-dom";

class NoticeBox extends Component {
  state = {
    isLoaded: true,
  };
  render() {
    return (
      <>
        <div className="event-container">
          <div className="event-heading">
            <span>Notices/Alerts</span>
          </div>
          <div className="event-content">
            <div className="event-inner-box-shadow"></div>
            {this.state.isLoaded ? (
              <>
                <div className="event-content-inner">
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">
                        Admissions in CSE / IT / ECE / EEE 2020-2024
                      </div>
                    </Link>
                    <div className="event-date">May 30, 2020</div>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">
                        Admissions in CSE / IT / ECE / EEE 2020-2024
                      </div>
                    </Link>
                    <div className="event-date">May 30, 2020</div>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">
                        Admissions in CSE / IT / ECE / EEE 2020-2024
                      </div>
                    </Link>
                    <div className="event-date">May 30, 2020</div>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">
                        Admissions in CSE / IT / ECE / EEE 2020-2024
                      </div>
                    </Link>
                    <div className="event-date">May 30, 2020</div>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">
                        Admissions in CSE / IT / ECE / EEE 2020-2024
                      </div>
                    </Link>
                    <div className="event-date">May 30, 2020</div>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">
                        Admissions in CSE / IT / ECE / EEE 2020-2024
                      </div>
                    </Link>
                    <div className="event-date">May 30, 2020</div>
                  </div>
                </div>
              </>
            ) : (
              <Loader />
            )}
            <div className="event-inner-box-shadow"></div>
          </div>
        </div>
      </>
    );
  }
}

export default NoticeBox;
