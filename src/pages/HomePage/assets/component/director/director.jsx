import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/directorDesk.css";
import downArrow from "./assets/images/down-arrow.svg";
import closeNavBarProps from "../../../../../closeNavBarProps";
import DirectorImage from "./assets/images/director.jpg";
import DirectorImage1 from "./assets/images/director1.jpg";
import DirectorImage2 from "./assets/images/director2.jpg";

class DirectorDesk extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="director-grid">
          <div className="director-left-content">
            <div
              className="director-left-img-1"
              style={{ backgroundImage: `url(${DirectorImage})` }}
            ></div>
            <div className="director-left-content-inner">
              <div
                className="director-left-img-2"
                style={{ backgroundImage: `url(${DirectorImage1})` }}
              ></div>
              <div
                className="director-left-img-2"
                style={{ backgroundImage: `url(${DirectorImage2})` }}
              ></div>
            </div>
          </div>
          <div className="director-right-content">
            <h2 className="director-heading">Message from Director</h2>
            <p className="director-content">
              Each one of us thinks in a unique way. The student body of Guru
              Tegh Bahadur Institute of Technology is built from an assortment
              of students who come from different backgrounds and yet continue
              to function amicably and efficiently as a family. Guru Tegh
              Bahadur Institute of Technology showcases a wide range of academic
              and extra-curricular aptitudes, skills ...
            </p>

            <div className="director-read-more-container"></div>
            <div className="director-read-more">
              <Link to="/director-message" onClick={closeNavBarProps}>
                Read More{" "}
                <img
                  src={downArrow}
                  alt="arrow"
                  style={{ transform: "rotate(-90deg)" }}
                />
              </Link>
            </div>
            <div style={{ height: "1.5em" }} />
          </div>
        </div>
      </>
    );
  }
}

export default DirectorDesk;
