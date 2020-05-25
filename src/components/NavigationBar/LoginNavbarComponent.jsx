import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBarColumns from "./navigationBarColumns";
import HtmlParser from "react-html-parser";

class LoginNavbarComponent extends Component {
  state = {
    component: this.props.onCall.component,
    isOpened: {
      value: false,
      id: "",
    },
  };
  style = {
    dropDownPosition: {
      top: this.props.onCall.top,
    },
  };
  expandNavbar = (id, val) => {
    const Value = `${id}-${val}`;
    if (this.state.isOpened.id === Value) {
      if (this.state.isOpened.value) {
        this.setState({ isOpened: { value: false, id: "" } });
      } else {
        this.setState({ isOpened: { value: true, id: Value } });
      }
    } else {
      this.setState({ isOpened: { value: true, id: Value } });
    }
  };
  componentDidMount = () => {};
  render() {
    return (
      <>
        <div
          className="navbar-dropdown-container"
          style={this.style.dropDownPosition}
        >
          <div className="container-big">
            {this.props.onCall.component === "login" ? (
              <div className="navbar-dropdown-login-grid">
                {/* Start */}
                {NavBarColumns.login.map((elmt, index) => (
                  <div
                    className="navbar-login-container-element"
                    key={`login-${index}`}
                  >
                    <div className="navbar-login-heading">
                      <div
                        onClick={() => this.expandNavbar("login", index + 1)}
                      >
                        {elmt.name}
                      </div>
                      <div
                        className="justifyCenter-btn"
                        onClick={() => this.expandNavbar("login", index + 1)}
                      >
                        <div
                          className={`mobile-nav-expand-btn ${
                            !this.state.isOpened.value
                              ? ""
                              : this.state.isOpened.id === `login-${index + 1}`
                              ? "mobile-nav-expand-btn-tap"
                              : ""
                          }`}
                        >
                          <div className="mobile-nav-expand-btn-inner"></div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`${
                        !this.state.isOpened.value
                          ? "mobile-navigation-content-hide"
                          : this.state.isOpened.id === `login-${index + 1}`
                          ? ""
                          : "mobile-navigation-content-hide"
                      }`}
                    >
                      <div className="navbar-login-content">
                        {HtmlParser(elmt.description)}
                        <br />
                      </div>
                      <div className="nav-bar-login-btn-container">
                        <Link to={elmt.link} className="nav-bar-login-btn">
                          {elmt.btnText}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                {/* END */}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
}

export default LoginNavbarComponent;
