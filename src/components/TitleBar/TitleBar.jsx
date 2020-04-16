import React, { Component } from "react";
import GTBIT_LOGO from "./assets/images/GTBIT-LOGO.png";
import Digital_India from "./assets/images/digital-India.png";
import "./assets/css/titlebar.css";

class TitleBar extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="Title-Bar-Container">
          <div className="container-big">
            <div className="Title-Bar-Grid">
              <div className="main-logo-container">
                <img
                  src={GTBIT_LOGO}
                  className="gtbit-logo"
                  alt="Guru Tegh Bahadur Institute of Technology"
                />
              </div>
              <div className="GTBIT-Logo-Text">
                <div className="logo-name-header">
                  Guru Tegh Bahadur Institute of Technology
                </div>
                <div className="logo-name-description">
                  Affiliated to Guru Gobind Singh Indraprastha University, New
                  Delhi
                </div>
              </div>
              <div className="digital-india-container">
                <img width="100%" src={Digital_India} alt="Digital India" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TitleBar;
