import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import NavBarColumns from "./navigationBarColumns";

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
                {/* Start */}
                {NavBarColumns.discover.map((elmt, index) => (
                  <div
                    className="navbar-login-container-element"
                    key={`outerDiscover-${index}`}
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
                      {elmt.columns.map((innerElmt, index) => (
                        <div
                          className="navbar-discover-content"
                          key={`innerDiscover-${index}`}
                        >
                          {!innerElmt.anchor ? (
                            <Link
                              className="navbar-discover-content-link"
                              onClick={this.props.closeNav}
                              to={innerElmt.link}
                            >
                              {innerElmt.name}
                            </Link>
                          ) : (
                            <a
                              href={innerElmt.link}
                              className="navbar-discover-content-link"
                            >
                              {innerElmt.name}
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                {/* End */}
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
