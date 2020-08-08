import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import closeNavBarProps from "../../closeNavBarProps";
import SideNavObj from "../../SideNavBar";

class AllFacilities extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">List of Facilities</h2>
        <div className="department-content-grid">
          {SideNavObj.Facilities.elements.map((facility, index) => (
            <Link
              className="all-department-link"
              key={`facility-${index}`}
              to={facility.link}
              onClick={closeNavBarProps}
            >
              <div
                className="department-inner-container"
                style={{ backgroundImage: `url(${facility.image})` }}
              >
                <div className="department-inner-content">{facility.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default AllFacilities;
