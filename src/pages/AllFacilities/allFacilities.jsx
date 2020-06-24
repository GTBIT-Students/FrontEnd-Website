import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import closeNavBarProps from "../../closeNavBarProps";
import BackImg from "./assets/images/img1.jpeg";

class AllFacilities extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="table-head-container all-departments-head">
          List of Facilities
        </div>
        <div className="department-content-grid">
          <Link
            className="all-department-link"
            to="/facilities/medical-counsellor"
            onClick={closeNavBarProps}
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">Medical Counsellor</div>
            </div>
          </Link>
          <Link
            className="all-department-link"
            onClick={closeNavBarProps}
            to="/facilities/lab"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">Lab Rooms</div>
            </div>
          </Link>
          <Link
            className="all-department-link"
            onClick={closeNavBarProps}
            to="/facilities/library-and-book-bank"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">
                Library and Book Bank
              </div>
            </div>
          </Link>
          <Link
            className="all-department-link"
            onClick={closeNavBarProps}
            to="/facilities/computing-facility"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">
                Computing Facilities
              </div>
            </div>
          </Link>
          <Link
            className="all-department-link"
            onClick={closeNavBarProps}
            to="/facilities/iipc"
          >
            <div
              className="department-inner-container"
              style={{ backgroundImage: `url(${BackImg})` }}
            >
              <div className="department-inner-content">The IIPC</div>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default AllFacilities;
