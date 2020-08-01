import React, { Component } from "react";
import "./assets/css/facility.css";

class MedicalCounsellor extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">Medical Counsellor</h2>
        <div className="facility-page-image-container">
          <div className="facility-page-image-1"></div>
          <div className="facility-page-image-2-container">
            <div className="facility-page-image-2"></div>
            <div className="facility-page-image-2"></div>
          </div>
        </div>
        <div className="director-page-main-content">
          <p></p>
          <p className="director-page-main-content-designation">
            Dr. Priya Babbar
            <br />
            Medical Counsellor
            <br />
            Mobile: <a href="tel:919911205854">+91-9911205854</a>
            <br />
            Email:{" "}
            <a href="mailto:priyabhatnagarbabbar@gmail.com">
              priyabhatnagarbabbar@gmail.com
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default MedicalCounsellor;
