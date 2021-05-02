import React, { Component } from "react";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../closeNavBarProps";
import ECE1 from "./assets/images/ece3.jpeg";
import ECE2 from "./assets/images/ece2.jpeg";
import ECE3 from "./assets/images/ece1.jpeg";
import ECE4 from "./assets/images/ece4.jpeg";
import MUKESH_SAHU from "./assets/images/mukeshSahu.jpeg";

class ECEDepartment extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">
          Electronics and Communications Department
        </h2>
        <h4 className="single-department-secondary-header">
          <p>
            The department aims to impart quality technical education to the
            students aspiring for a career in the field of electronics and
            communications engineering.
          </p>
        </h4>
        <div className="container-responsive">
          <iframe
            title="ECE"
            className="video-responsive"
            src="https://www.youtube.com/embed/LYicYver8to"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
        <br />
        <br />
        <div className="single-department-content">
          <h4 className="single-department-secondary-header">Key Features -</h4>
          <ul>
            <li>
              The Department of Electronics and Communication comprises 15
              well-equipped Labs with state of art equipments of Analog
              Electronics, Digital Electronics, Microprocessors, Microwave,
              Communication Systems, Digital Signal Processing, Digital System
              Design, Advance VLSI design, Satellite and Mobile communication,
              and Embedded Systems.
            </li>
            <li>
              The only department under GGSIPU providing{" "}
              <b>free summer in-house trainings</b> of six weeks (summer) and 2
              weeks (winter) duration for the students of 2nd and 3rd year.
            </li>
            <li>
              The department follows the concept of "Learning by doing" and the
              students are taught PCB designing in the very first year of
              engineering, which is not done in any other institute of IPU.
            </li>
            <li>
              Every year, numerous professional activities are organised in the
              department. Industrial visits and lectures of experts from the
              industry form an integral part of the curriculum. Students are
              encouraged to become members of important professional bodies like
              IEEE, IETE and ISTE.
            </li>
            <li>
              The aim is to impart high quality education in the field of
              electronics and communication engineering to prepare the graduates
              who will be able to serve/lead various organizations with acquired
              skills and knowledge.
            </li>
          </ul>
        </div>
        <div className="single-department-content-container-1">
          <div
            className="single-department-image-1"
            style={{ backgroundImage: `url(${ECE1})` }}
          ></div>
          <div
            className="single-department-image-1"
            style={{ backgroundImage: `url(${ECE2})` }}
          ></div>
        </div>
        <div className="single-department-content-container-1">
          <div
            className="single-department-image-1"
            style={{ backgroundImage: `url(${ECE3})` }}
          ></div>
          <div
            className="single-department-image-1"
            style={{ backgroundImage: `url(${ECE4})` }}
          ></div>
        </div>
        <div className="director-page-main-content">
          <p className="director-page-main-content-designation">
            <a href="https://archives.gtbit.org/ece_number_list.jpeg">
              ECE Department Faculty List
            </a>
          </p>
        </div>
        <div className="director-page-main-content">
          <p className="director-page-main-content-designation">
            <img
              src={MUKESH_SAHU}
              alt="Mukesh Sahu, ECE HOD"
              width="200px"
              style={{
                border: "0.3rem solid var(--primaryColor)",
                borderRadius: "3px",
              }}
            />
            <br />
            Mukesh Sahu
            <br />
            HOD (ECE)
            <br />
            Mobile: <a href="tel:919212425434">+91-9212425434</a>
            <br />
            Email:{" "}
            <a href="mailto:mukeshsahu@gtbit.org">mukeshsahu@gtbit.org</a>
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

export default ECEDepartment;
