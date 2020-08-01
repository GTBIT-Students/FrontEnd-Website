import React, { Component } from "react";
import BackImg from "./assets/images/img1.jpeg";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../closeNavBarProps";

class allProgrammes extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading-center">List Of Programmes</h2>

        <div className="department-content-grid">
          <Link
            className="all-department-link"
            to="/programs/computer-science"
            onClick={closeNavBarProps}
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">Computer Science</div>
            </div>
          </Link>
          <Link
            className="all-department-link"
            onClick={closeNavBarProps}
            to="/programs/information-technology"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">
                Information technology
              </div>
            </div>
          </Link>
          <Link
            className="all-department-link"
            onClick={closeNavBarProps}
            to="/programs/electronics-and-communication"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">
                Electronics and Communication
              </div>
            </div>
          </Link>
          <Link
            className="all-department-link"
            onClick={closeNavBarProps}
            to="/programs/electrical-and-electronics"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">
                Electrical and Electronics
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default allProgrammes;
