import React, { Component } from "react";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../closeNavBarProps";
import IT1 from "./assets/images/img3.jpg";
import IT2 from "./assets/images/img2.jpg";
import IT3 from "./assets/images/img4.jpg";

class ITDepartment extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">Information Technology Department</h2>
        <h4 className="single-department-secondary-header">
          <p>
            The Department of Information Technology deals with the dynamic
            analysis of an evolving plethora of information and applying it
            towards the manipulation of design and development of communication
            strategies.
          </p>
        </h4>
        <div className="container-responsive">
          <iframe
            title="IT"
            className="video-responsive"
            src=""
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="single-department-content-container-1">
          <div
            className="single-department-image-1"
            style={{ backgroundImage: `url(${IT1})` }}
          ></div>
          <div className="single-department-content justifyCenter">
            The emphasis of the information technology curriculum is on subjects
            like Theory of Automata, Computer Graphics ,Operating Systems, Data
            Communication Networks and Interface Programming in the 2nd and 3rd
            year. In the final year more advanced courses are offered like
            E-Commerce and ERP, Artificial Intelligence, Network Management and
            Security, Software Engineering and Network Technology.
          </div>
        </div>
        <div className="single-department-content-container-2">
          <div className="single-department-content justifyCenter">
            <p>
              The department of Information Technology has laboratories in
              various disciplines such as Operating Systems, Computer
              Networking, Programming, Software Engineering, Database Management
              Systems and Internetworking. The thrust areas of the department
              are Networking, Internetworking, Network Management Security and
              Web Engineering.
            </p>
            <p>
              Our aim here is to expose students to the latest and growing
              technologies which help them to become highly skilled IT
              professionals.
            </p>
          </div>
          <div className="single-department-image-inner-container">
            <div
              className="single-department-image-2"
              style={{ backgroundImage: `url(${IT2})` }}
            ></div>
            <div
              className="single-department-image-2"
              style={{ backgroundImage: `url(${IT3})` }}
            ></div>
          </div>
        </div>
        <div className="single-department-content">
          <h4 className="single-department-secondary-header">
            Emphasis is given to:
          </h4>
          <ul>
            <li>
              Quality education to comply with dynamic industry trends and
              global challenges.
            </li>
            <li>
              Acquainting the students with the latest technology in networking.
            </li>
            <li>
              To develop human resources with sound knowledge and intellectual
              capability for innovation, research and excellence in the field of
              Information Technology.
            </li>
            <li>
              This department has strong computer labs in the form of
              state-of-the-art IBM computers,with the latest softwares and
              internet facilities. Student computer ratio is 1:1.
            </li>
          </ul>
        </div>
        <div className="director-page-main-content">
          <p className="director-page-main-content-designation">
            P. S. Bedi
            <br />
            HOD (IT)
            <br />
            Mobile: <a href="tel:919818778755">+91-9818778755</a>
            <br />
            Email: <a href="mailto:psbedi@gtbit.org">psbedi@gtbit.org</a>
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

export default ITDepartment;
