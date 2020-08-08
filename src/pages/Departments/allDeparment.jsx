import React, { Component } from "react";
import SideNavObj from "../../SideNavBar";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../closeNavBarProps";
import "./assets/css/allDepartment.css";

class AllDepartments extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">List Of Departments</h2>

        <div className="department-content-grid">
          {SideNavObj.Deparments.elements.map((department, index) => (
            <Link
              className="all-department-link"
              to={department.link}
              onClick={closeNavBarProps}
              key={`Department-${index}`}
            >
              <div
                className="department-inner-container"
                style={{ backgroundImage: `url(${department.image})` }}
              >
                <div className="department-inner-content">
                  {department.name}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default AllDepartments;
