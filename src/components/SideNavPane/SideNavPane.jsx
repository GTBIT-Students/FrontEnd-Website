import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./SideNavPane.css";
import closeNavBarProps from "../../closeNavBarProps";

class SideNavPane extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="SideNavPane">
          <div className="SideNavPane-heading">
            {this.props.content.heading}
          </div>
          {this.props.content.elements.map((elmt, index) => (
            <Link
              key={`SideNavPane-${index}`}
              to={elmt.link}
              onClick={closeNavBarProps}
              className="SideNavPane-content"
            >
              {elmt.name}
            </Link>
          ))}
        </div>
      </>
    );
  }
}

export default SideNavPane;
