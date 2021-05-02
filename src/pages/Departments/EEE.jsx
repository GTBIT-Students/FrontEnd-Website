import React, { Component } from "react";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../closeNavBarProps";
import EEE1 from "./assets/images/img10.jpg";
import EEE2 from "./assets/images/img11.jpg";
import EEE3 from "./assets/images/img9.jpg";

class EEEDepartment extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">
          Electrical and Electronics Department
        </h2>
        <h4 className="single-department-secondary-header">
          <p>
            The Department of Electrical and Electronics Engineering has been
            imparting quality technical education to produce engineers of the
            highest caliber ever since it was established in the year 2006.
          </p>
        </h4>
        <div className="container-responsive">
          <iframe
            title="EEE"
            className="video-responsive"
            src="https://www.youtube.com/embed/Athrv8E_Avs"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="single-department-content-container-1">
          <div
            className="single-department-image-1"
            style={{ backgroundImage: `url(${EEE1})` }}
          ></div>
          <div className="single-department-content justifyCenter">
            <p>
              The department caters to the ever challenging need of technical
              excellence in almost all areas of electrical engineering with the
              help of its well established labs such as that for Electrical
              Technology, Circuits and Systems and Sensors and transducers lab.
            </p>
            The other specialized Labs of the department include
            <p>
              ElectroMechanical Energy conversion, Power systems, utilization of
              electrical energy, Power electronics, Electric drives, Control
              Systems and Advanced Control System lab etc.
            </p>
          </div>
        </div>
        <div className="single-department-content-container-2">
          <div className="single-department-content justifyCenter">
            <p>
              The infrastructure and lab facilities are upgraded from time to
              time and provide adequate opportunities for students to learn and
              innovate. Every year, numerous professional activities are being
              organized in the department such as Seminars, Conferences and
              Workshops to give students an opportunity to learn the latest
              developments in their field, beyond their curriculum.
            </p>
            <p>
              Experts from industry are frequently invited for the students to
              get an insightful overview of the current trends in the industry
              and Industrial visits are regularly arranged. Students are
              encouraged to become members of important professional societies
              like IEEE, IETE and ISTE etc.
            </p>
          </div>
          <div className="single-department-image-inner-container">
            <div className="justifyCenter">
              <div
                className="single-department-image-2"
                style={{ backgroundImage: `url(${EEE2})` }}
              ></div>
            </div>
            <div className="justifyCenter">
              <div
                className="single-department-image-2"
                style={{ backgroundImage: `url(${EEE3})` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="single-department-content">
          <h4 className="single-department-secondary-header">
            Emphasis is given to:
          </h4>
          <p>
            Many of our students bring glory to the department and thus
            institute by scoring top positions in competitive exams like UPSC
            (IES), various national/international level project competitions
            along with high selection rate in admission to post graduate courses
            in top international universities abroad.
          </p>
        </div>

        <div className="director-page-main-content">
          <p className="director-page-main-content-designation">
            Dr. Deepali Sharma
            <br />
            HOD (EEE)
            <br />
            Mobile: <a href="tel:919212365617">+91-9212365617</a>
            <br />
            Email:{" "}
            <a href="mailto:deepalisharma@gtbit.org">deepalisharma@gtbit.org</a>
          </p>
        </div>
        <div className="alumni-btn-container">
          <Link
            to="/department"
            onClick={closeNavBarProps}
            className="alumni-button"
          >
            Other Departments
          </Link>
        </div>
      </>
    );
  }
}

export default EEEDepartment;
