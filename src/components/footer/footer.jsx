import React, { Component } from "react";
import "./assets/css/footer.css";
import GTBIT_LOGO from "../../assets/images/gtbitlogo-old.png";
// import GTBIT_LOGO from "../TitleBar/assets/images/GTBIT-LOGO.png";
import closeNavBarProps from "../../closeNavBarProps";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="spacing-5"></div>
        <div className="footer-container">
          <div className="container-big">
            <div className="footer-grid">
              <div className="footer-index-1">
                <div className="footer-index-1-inner-grid">
                  <div className="justify-center">
                    <img src={GTBIT_LOGO} width="100px" alt="GTBIT Logo" />
                  </div>
                  <div
                    className="justify-center"
                    style={{ color: "var(--primaryColor)" }}
                  >
                    Guru Tegh Bahadur Institute Of Technology
                  </div>
                </div>
                <div className="footer-index-1-content">
                  Guru Tegh Bahadur Institute of Technology (GTBIT) aims to be
                  among the premier institutes of engineering and technology in
                  the country, recognised excellence in Teaching, R&amp;D,
                  Sports, Cultural and Social Arena.
                </div>
              </div>
              <div className="footer-index-2">
                <div className="footer-links-container">
                  <div className="footer-links-headers">Admissions</div>
                  <ul style={{ margin: "0 0.5em" }}>
                    <li>
                      <Link to="#" className="footer-index-links">
                        2020-2021
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer-index-links">
                        Guru Gobind Singh Indraprastha University, New Delhi
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer-index-links">
                        2018-2019
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer-index-links">
                        2017-2018
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-links-container">
                  <div className="footer-links-headers">Other Links</div>
                  <ul style={{ margin: "0 0.5em" }}>
                    <li>
                      <Link to="#" className="footer-index-links">
                        Portals for student
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer-index-links">
                        Portal for teachers
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="footer-index-links">
                        Covid-19 Latest News
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-index-3">
                <div style={{ fontWeight: "bold", fontSize: "1.2em" }}>
                  Any Queries? Ask here
                </div>
                <div className="footer-ask-here-container">
                  <div>
                    <input
                      className="footer-ask-query-input"
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div>
                    <input
                      className="footer-ask-query-input"
                      placeholder="Email Address"
                      type="email"
                    />
                  </div>
                  <div>
                    <input
                      className="footer-ask-query-input"
                      placeholder="Phone Number"
                      type="number"
                    />
                  </div>
                  <div>
                    <textarea
                      className="footer-ask-query-input"
                      placeholder="Any Query"
                    ></textarea>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "flex-end",
                    }}
                  >
                    <button className="footer-ask-query-btn">
                      Ask the query
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-privacy-grid">
              <div>
                <Link
                  className="footer-links"
                  to="/privacy-policy"
                  onClick={closeNavBarProps}
                >
                  Privacy Policy
                </Link>
                <Link
                  className="footer-links"
                  to="/code-of-conduct"
                  onClick={closeNavBarProps}
                >
                  Code of Conduct
                </Link>
              </div>
              <div className="footer-webteam">
                Developed by
                <Link
                  className="footer-index-links"
                  to="#"
                  style={{ fontWeight: "bold" }}
                >
                  Student Web Team, GTBIT
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container-big">
            <div className="copyright-inner">
              &copy; Copyright 2020. All rights reserved.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Footer;
