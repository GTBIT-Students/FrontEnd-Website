import React, { Component } from "react";
import { Link } from "react-router-dom";

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
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 1)}>
                      Admin Login
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
                    <div className={`navbar-login-content`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti, voluptate facilis voluptas quam velit quisquam
                      dolorem provident nam sed, molestiae, praesentium
                      repellat. Hic expedita delectus est repudiandae doloremque
                      fugit sit.
                      <br />
                    </div>
                    <div className="nav-bar-login-btn-container">
                      <Link to="#" className="nav-bar-login-btn">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 2)}>
                      Teachers Login
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
                    <div className={`navbar-login-content`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti, voluptate facilis voluptas quam velit quisquam
                      dolorem provident nam sed, molestiae, praesentium
                      repellat. Hic expedita delectus est repudiandae doloremque
                      fugit sit.
                      <br />
                    </div>
                    <div className="nav-bar-login-btn-container">
                      <Link to="#" className="nav-bar-login-btn">
                        Login
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="navbar-login-container-element">
                  <div className="navbar-login-heading">
                    <div onClick={() => this.expandNavbar("login", 3)}>
                      Students Login
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
                    <div className={`navbar-login-content`}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti, voluptate facilis voluptas quam velit quisquam
                      dolorem provident nam sed, molestiae, praesentium
                      repellat. Hic expedita delectus est repudiandae doloremque
                      fugit sit.
                      <br />
                    </div>
                    <div className="nav-bar-login-btn-container">
                      <Link to="#" className="nav-bar-login-btn">
                        Login
                      </Link>
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

export default LoginNavbarComponent;
