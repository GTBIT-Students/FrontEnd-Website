import React, { Component } from "react";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../closeNavBarProps";

class ECEProgram extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">
          Electronics and Communications Programme
        </h2>
        <h4 className="single-department-secondary-header">
          <p>
            The department aims to impart quality technical education to the
            students aspiring for a career in the field of electronics and
            communications engineering.
          </p>
        </h4>
        <div className="single-department-content-container-1">
          <div className="single-department-image-1"></div>
          <div className="single-department-content justifyCenter">
            A wide curriculum ranging from basic Analog and Digital Electronics
            to EMT Theory, Communication Systems to Telecommunication Networks,
            Microprocessor (8085 and 8086) to Computer Architecture, Microwave
            Engineering to Digital Signal Processing, core VLSI design to
            Advanced VLSI Design, Satellite and Mobile Communication to Embedded
            System Design and other related subjects are being taught.
          </div>
        </div>
        <div className="single-department-content-container-2">
          <div className="single-department-content justifyCenter">
            <p>
              Every year, numerous professional activities are organised in the
              department. Industrial visits and lectures of experts from the
              industry form an integral part of the curriculum. Students are
              encouraged to become members of important professional bodies like
              IEE, IEEE, IETE and ISTE.
            </p>
            <p>
              The Department of Electronics and Communication comprises 15
              well-equipped Labs The basic departmental Labs consist of Analog
              Electronics, Digital Electronics, Microwave Engg., Circuits and
              Systems and Electrical Science.
            </p>
          </div>
          <div className="single-department-image-inner-container">
            <div className="single-department-image-2"></div>
            <div className="single-department-image-2"></div>
          </div>
        </div>
        <div className="single-department-content">
          <h4 className="single-department-secondary-header">
            Emphasis is given to:
          </h4>
          <p>
            The other specialized Labs of the department deal with
            Microprocessors, Consumer Electronics and Satellite and Mobile
            Communication, Embedded Systems, VLSI, Control Systems,
            Telecommunication and Communication System.
          </p>
          <p>
            The aim is to impart high quality education in the field of
            electronics and communication engineering to prepare the graduates
            who will be able to serve/lead various organizations with acquired
            skills and knowledge.
          </p>
        </div>
        <div className="alumni-btn-container">
          <Link
            to="/programs"
            onClick={closeNavBarProps}
            className="alumni-button"
          >
            Other Programmes
          </Link>
        </div>
      </>
    );
  }
}

export default ECEProgram;
