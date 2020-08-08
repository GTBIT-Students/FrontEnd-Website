import React, { Component } from "react";
import { Link } from "react-router-dom";
import SideNavObj from "../../SideNavBar";
import closeNavBarProps from "../../closeNavBarProps";

class allProgrammes extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">List Of Programmes</h2>

        <div className="department-content-grid">
          {SideNavObj.Programmes.elements.map((program, index) => (
            <Link
              className="all-department-link"
              to={program.link}
              key={`program-${index}`}
              onClick={closeNavBarProps}
            >
              <div
                className="department-inner-container"
                style={{ backgroundImage: `url(${program.image})` }}
              >
                <div className="department-inner-content">{program.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default allProgrammes;
