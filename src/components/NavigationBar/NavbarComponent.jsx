import React, { Component } from "react";
import LoginNavbarComponent from "./LoginNavbarComponent";
import AboutNavbarComponent from "./AboutNavbarComponent";
import DiscoverNavbarComponent from "./DiscoverNavbarComponent";
import "./assets/css/navbar-component.css";

class NavbarComponent extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          className="navbar-dropdown-overlay"
          onClick={this.props.onToggleNavBar}
        ></div>

        {this.props.onCall.component === "discover" ? (
          <DiscoverNavbarComponent onCall={this.props.onCall} />
        ) : (
          ""
        )}
        {this.props.onCall.component === "about" ? (
          <AboutNavbarComponent onCall={this.props.onCall} />
        ) : (
          ""
        )}
        {this.props.onCall.component === "login" ? (
          <LoginNavbarComponent onCall={this.props.onCall} />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default NavbarComponent;
