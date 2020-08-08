import React, { Component } from "react";
import LoginNavbarComponent from "./LoginNavbarComponent";
import AboutNavbarComponent from "./AboutNavbarComponent";
import DiscoverNavbarComponent from "./DiscoverNavbarComponent";
import "./assets/css/navbar-component.css";

class NavbarComponent extends Component {
  state = {};
  closeNav = () => {
    this.props.closeNav();
  };
  render() {
    return (
      <>
        <div
          className="navbar-dropdown-overlay"
          onClick={this.props.onToggleNavBar}
        ></div>

        {this.props.onCall.component === "discover" ? (
          <DiscoverNavbarComponent
            closeNav={this.closeNav}
            onCall={this.props.onCall}
          />
        ) : (
          ""
        )}
        {this.props.onCall.component === "about" ? (
          <AboutNavbarComponent
            closeNav={this.closeNav}
            onCall={this.props.onCall}
          />
        ) : (
          ""
        )}
        {this.props.onCall.component === "login" ? (
          <LoginNavbarComponent
            closeNav={this.closeNav}
            onCall={this.props.onCall}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default NavbarComponent;
