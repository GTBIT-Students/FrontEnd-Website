import React, { Component } from "react";
import closeNavBarProps from "../../../../../closeNavBarProps";
import { Link } from "react-router-dom";

class AdmissionForm extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="director-right-content">
          <h2 className="director-heading">Admission 2020</h2>
          <p className="director-content">
            Admission notice in Guru Tegh Bahadur Institute of Technology,
            Delhi, for B.Tech courses CSE, IT, ECE and EEE (seats reserved for
            Sikh minority students) <br />
            For more information, please refer to: <br />
            {/* <a href="https://archives.gtbit.org/admission-notice.pdf">
              Admission Notice
            </a> */}
            <div className="alumni-btn-container">
              <Link
                to="/notice/spot-round-2-schedule-2020"
                className="alumni-button"
                onClick={closeNavBarProps}
              >
                Spot Round 2 Notice
              </Link>
            </div>
            <div className="alumni-btn-container">
              <Link
                to="/notice/spot-round-admissions-2020"
                className="alumni-button"
                onClick={closeNavBarProps}
              >
                Spot Round Admission
              </Link>
            </div>
            <div className="alumni-btn-container">
              <Link
                to="/notice/new-admission-2020"
                className="alumni-button"
                onClick={closeNavBarProps}
              >
                New Admission Notice
              </Link>
            </div>
          </p>

          <div style={{ height: "1.5em" }} />
        </div>
      </>
    );
  }
}

export default AdmissionForm;
