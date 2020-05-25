import React, { Component } from "react";
import "./assets/css/allDepartment.css";
import BackImg from "./assets/images/img1.jpeg";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../closeNavBarProps";

class AllDepartments extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="table-head-container all-departments-head">
          List Of Departments
        </div>
        <div className="department-content-grid">
          <Link
            className="all-department-link"
            to="/department/computer-science"
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
            to="/department/information-technology"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">
                Information technology
              </div>
            </div>{" "}
          </Link>
          <Link
            className="all-department-link"
            onClick={closeNavBarProps}
            to="/department/electronics-and-communication"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">
                Electronics and Communication
              </div>
            </div>{" "}
          </Link>
          <Link
            className="all-department-link"
            onClick={closeNavBarProps}
            to="/department/electrical-and-electronics"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">
                Electrical and Electronics
              </div>
            </div>{" "}
          </Link>
        </div>
      </>
    );
  }
}

export default AllDepartments;
