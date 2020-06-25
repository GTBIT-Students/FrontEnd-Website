import React, { Component } from "react";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../closeNavBarProps";

class CSProgram extends Component {
  state = {};

  render() {
    return (
      <>
        <h2 className="director-heading">Computer Science Programme</h2>
        <h4 className="single-department-secondary-header">
          <p>
            The Computer Science Department is the most versatile department of
            the college and caters to the needs of other departments as well.
          </p>
          <p>
            This department has got 450 Computers with the latest configuration.
          </p>
        </h4>
        <div className="single-department-content-container-1">
          <div className="single-department-image-1"></div>
          <div className="single-department-content justifyCenter">
            Engineering Department involves basic sciences and engineering
            subjects at the 1st year level.In the 2nd and 3rd year the core
            courses of Computer Science and Engineering like Data Structure,
            Foundation of Computer Science, Computer Graphics, Operating
            Systems, Computer Architecture, Networking, DBMS, Multimedia
            Technologies and Applications, Data Warehousing and Mining,
            Algorithm Design and Analysis and Distributed Operating Systems are
            offered.
          </div>
        </div>
        <div className="single-department-content-container-2">
          <div className="single-department-content justifyCenter">
            In the final year advanced courses of Computer Engineering like
            Compiler Construction, Artificial Intelligence and Robotics, Network
            Technology, Software Engineering, Mobile Computing, Network
            Management and Security and Embedded Systems are offered.
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
          <ul>
            <li>
              Development of live projects by the students and improving the
              programming skills of students.
            </li>
            <li> Strengthening of research and project development.</li>
            <li>
              Faculty development and training in latest softwares like Rational
              Rose, ASP.net, Data Warehousing and Mining Packages etc.
            </li>
            <li>
              To impart quality engineering education to the students by
              providing effective teaching learning, research and application
              based innovative environments.
            </li>
            <li>
              The department takes immense interest in conducting professional
              activities such as organizing workshops, seminars and expert
              lectures to meet the challenges in the IT industry.
            </li>
            <li>
              This department has strong Computer Labs in the form of
              state-of-the-art IBM computers, with the latest softwares and
              internet facilities. Student computer ratio is 1:1.
            </li>
          </ul>
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

export default CSProgram;
