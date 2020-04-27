import React, { Component } from "react";
import { Link } from "react-router-dom";

class DiscoverNavbarComponent extends Component {
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
            {this.props.onCall.component === "discover" ? (
              <div className="navbar-dropdown-discover-grid">
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 1)}>
                      Campus Life
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
                      <Link to="#">Lorem ipsum</Link>
                      <Link to="#">Lorem ipsum</Link>
                      <Link to="#">GATES - Annual Fest of GTBIT</Link>
                      <Link to="#">Lorem ipsum</Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 2)}>
                      Facilities
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
                      <Link to="#">Medical Counsellor</Link>
                      <Link to="#">Computing Facilities</Link>
                      <Link to="#">Labs Rooms</Link>
                      <Link to="#">Library and Book Bank</Link>
                      <Link to="#">
                        Industry Institute Partnership Cell (IIPC)
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 3)}>
                      Departments
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
                      <Link to="#">Computer Science Department</Link>
                      <Link to="#">Information Technology Department</Link>
                      <Link to="#">
                        Electronics and Communication Department
                      </Link>
                      <Link to="#">Electrical and Electronics Department</Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 4)}>
                      Important Links
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
                      <Link to="#">Placements</Link>
                      <Link to="#">Achievements</Link>
                      <Link to="#">Know Us</Link>
                      <Link to="#">Student Grievance</Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 5)}>
                      Students Login
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
                      <Link to="#">Lorem ipsum</Link>
                      <Link to="#">Lorem ipsum</Link>
                      <Link to="#">Lorem ipsum</Link>
                      <Link to="#">Lorem ipsum</Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 6)}>
                      Why GTBIT?
                    </div>
                    <div
                      className="justifyCenter-btn"
                      onClick={() => this.expandNavbar("login", 6)}
                    >
                      <div
                        className={`mobile-nav-expand-btn ${
                          !this.state.isOpened.value
                            ? ""
                            : this.state.isOpened.id === "login-6"
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
                        : this.state.isOpened.id === "login-6"
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

export default DiscoverNavbarComponent;
