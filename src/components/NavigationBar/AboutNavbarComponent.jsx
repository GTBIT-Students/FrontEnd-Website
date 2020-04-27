import React, { Component } from "react";
import { Link } from "react-router-dom";

class AboutNavbarComponent extends Component {
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
            {this.props.onCall.component === "about" ? (
              <div className="navbar-dropdown-discover-grid">
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 1)}>
                      UG Programmes
                    </div>
                    <div
                      className="justifyCenter-btn"
                      onClick={() => this.expandNavbar("login", 1)}
                    >
                      <div
                        className={`mobile-nav-expand-btn ${
                          !this.state.isOpened.value
                            ? ""
                            : this.state.isOpened.id === "login-1"
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
                        : this.state.isOpened.id === "login-1"
                        ? ""
                        : "mobile-navigation-content-hide"
                    }`}
                  >
                    <div className={`navbar-discover-content`}>
                      <Link to="#">Computer Science Engineering (CSE)</Link>
                      <Link to="#">Information Technology (IT)</Link>
                      <Link to="#">
                        Electronics and Communication Engineering (ECE)
                      </Link>
                      <Link to="#">
                        Electrical and Electronic Engineering (EEE)
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 2)}>
                      Academics
                    </div>
                    <div
                      className="justifyCenter-btn"
                      onClick={() => this.expandNavbar("login", 2)}
                    >
                      <div
                        className={`mobile-nav-expand-btn ${
                          !this.state.isOpened.value
                            ? ""
                            : this.state.isOpened.id === "login-2"
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
                        : this.state.isOpened.id === "login-2"
                        ? ""
                        : "mobile-navigation-content-hide"
                    }`}
                  >
                    <div className={`navbar-discover-content`}>
                      <Link to="#">Lorem ipsum</Link>
                      <Link to="#">Lorem ipsum</Link>
                      <Link to="#">Lorem ipsum</Link>
                      <Link to="#">Lorem ipsum</Link>
                    </div>
                  </div>
                </div>

                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 3)}>
                      Societies
                    </div>
                    <div
                      className="justifyCenter-btn"
                      onClick={() => this.expandNavbar("login", 3)}
                    >
                      <div
                        className={`mobile-nav-expand-btn ${
                          !this.state.isOpened.value
                            ? ""
                            : this.state.isOpened.id === "login-3"
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
                        : this.state.isOpened.id === "login-3"
                        ? ""
                        : "mobile-navigation-content-hide"
                    }`}
                  >
                    <div className={`navbar-discover-content`}>
                      <Link to="#">Technical Societies</Link>
                      <Link to="#">Cultural Societies</Link>
                      <Link to="#">Religious Societies</Link>
                      <Link to="#">Drama Societies</Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 4)}>
                      Quick Links
                    </div>
                    <div
                      className="justifyCenter-btn"
                      onClick={() => this.expandNavbar("login", 4)}
                    >
                      <div
                        className={`mobile-nav-expand-btn ${
                          !this.state.isOpened.value
                            ? ""
                            : this.state.isOpened.id === "login-4"
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
                        : this.state.isOpened.id === "login-4"
                        ? ""
                        : "mobile-navigation-content-hide"
                    }`}
                  >
                    <div className={`navbar-discover-content`}>
                      <Link to="#">Admissions</Link>
                      <Link to="#">Students</Link>
                      <Link to="#">Photo Gallery</Link>
                      <Link to="#">Contact Us</Link>
                    </div>
                  </div>
                </div>

                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 5)}>
                      Other Information
                    </div>
                    <div
                      className="justifyCenter-btn"
                      onClick={() => this.expandNavbar("login", 5)}
                    >
                      <div
                        className={`mobile-nav-expand-btn ${
                          !this.state.isOpened.value
                            ? ""
                            : this.state.isOpened.id === "login-5"
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
                        : this.state.isOpened.id === "login-5"
                        ? ""
                        : "mobile-navigation-content-hide"
                    }`}
                  >
                    <div className={`navbar-discover-content`}>
                      <Link to="#">Online Fee Payment</Link>
                      <Link to="#">Download Brochure</Link>
                    </div>
                  </div>
                </div>
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

export default AboutNavbarComponent;
