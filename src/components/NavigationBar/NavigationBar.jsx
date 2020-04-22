import React, { Component } from "react";
import "./assets/css/navbar.css";
import "./assets/css/logo-text-animation.css";
import { Link } from "react-router-dom";
import GTBITLOGO from "../../assets/images/gtbitlogo-old.png";
import NavBarComponent from "./NavBarComponent";

class NavigationBar extends Component {
  state = {
    isMobileNavOpened: false,
    isScrolled: false,
    NavbarProperty: {
      isOpened: true,
      top: "50px",
      component: "discover",
    },
  };
  toggleMobileNav = () => {
    this.state.isMobileNavOpened
      ? this.setState({ isMobileNavOpened: false })
      : this.setState({ isMobileNavOpened: true });
  };
  toggleNavigationBar = (component) => {
    if (this.state.NavbarProperty.isOpened) {
      this.setState({
        NavbarProperty: {
          isOpened: false,
          top: "",
          component: "",
        },
      });
    } else {
      this.setState({
        NavbarProperty: {
          isOpened: false,
          top: "",
          component: "",
        },
      });
    }
  };
  componentDidMount = () => {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        this.setState({ isScrolled: true });
        console.log("hi");
      } else {
        this.setState({ isScrolled: false });
      }
    };
  };
  render() {
    return (
      <>
        <div
          className={`nav-bar-container${
            this.state.isScrolled ? " navbar-container-scrolled" : ""
          }`}
        >
          <div className="container-big">
            <div className="navbar-grid">
              <Link to="#">
                <div className="navbar-gtbit-logo-text-container">
                  <div className="navbar-logo-container">
                    <img
                      src={GTBITLOGO}
                      className={`navbar-logo-img${
                        this.state.isScrolled ? " navbar-logo-img-small" : ""
                      }`}
                      alt="GTBIT"
                    />
                  </div>
                  <div className="navbar-text-container">
                    <div
                      className={`navbar-text-main${
                        this.state.isScrolled ? " navbar-ToggleText" : ""
                      }`}
                    >
                      G<div className="navbar-text-main-hide-1">uru&nbsp;</div>{" "}
                      T<div className="navbar-text-main-hide-2">egh&nbsp;</div>{" "}
                      B
                      <div className="navbar-text-main-hide-3">
                        ahadur&nbsp;
                      </div>{" "}
                      I
                      <div className="navbar-text-main-hide-4">
                        nstitute&nbsp;
                      </div>
                      <div className="navbar-text-main-hide-5">of&nbsp;</div> T
                      <div className="navbar-text-main-hide-6">echnology</div>
                    </div>
                    {this.state.isScrolled ? (
                      ""
                    ) : (
                      <div className="navbar-text-secondary">
                        Affiliated to Guru Gobind Singh Indraprastha University,
                        New Delhi
                      </div>
                    )}
                  </div>
                  <div className="important-part-of-navbar">
                    {/* Not container Anything but part of the grid system for animation */}
                  </div>
                </div>
              </Link>
              <div className="navbar-right-links">
                <div className="hide-before-992">
                  <Link to="#">
                    DISCOVER{" "}
                    <span style={{ color: "var(--secondaryColor)" }}>
                      &#11167;
                    </span>
                  </Link>
                  <Link to="#">
                    ABOUT{" "}
                    <span style={{ color: "var(--secondaryColor)" }}>
                      &#11167;
                    </span>
                  </Link>
                  <Link to="#">
                    LOGIN{" "}
                    <span style={{ color: "var(--secondaryColor)" }}>
                      &#11167;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.NavbarProperty.isOpened ? (
          <NavBarComponent onCall={this.state.NavbarProperty} />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default NavigationBar;
