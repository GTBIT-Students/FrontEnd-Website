import React, { Component } from "react";
import "./assets/css/navbar.css";
import "./assets/css/logo-text-animation.css";
import { Link } from "react-router-dom";
import GTBITLOGO from "../../assets/images/gtbitlogo-old.png";
import downArrow from "./assets/images/down-arrow.svg";
import NavBarComponent from "./NavbarComponent";

class NavigationBar extends Component {
  state = {
    isMobileNavOpened: false,
    isScrolled: false,
    NavbarProperty: {
      isOpened: false,
      top: "",
      component: "",
    },
  };
  toggleMobileNav = () => {
    if (this.state.isMobileNavOpened) {
      document.body.style.overflowY = "scroll";
      this.setState({
        isMobileNavOpened: false,
        NavbarProperty: {
          isOpened: false,
          top: "",
          component: "",
        },
      });
    } else {
      this.setState({ isMobileNavOpened: true });
    }
  };
  childComponentNavbarToggler = () => {
    console.log("toggled");
    this.toggleNavigationBar("");
  };
  getNavbarPostition = () => {
    const navbar = document.getElementById("navbar-container");
    let topPosition = navbar.offsetTop + navbar.clientHeight;
    topPosition += "px";
    // console.log(topPosition);
    return topPosition;
  };
  toggleNavigationBar = (component) => {
    if (component === this.state.NavbarProperty.component) {
      if (this.state.NavbarProperty.isOpened) {
        this.setState({
          NavbarProperty: {
            isOpened: false,
            top: "",
            component: "",
          },
        });
        document.body.style.overflowY = "scroll";
      } else {
        document.body.style.overflowY = "hidden";
        this.setState({
          NavbarProperty: {
            isOpened: true,
            top: this.getNavbarPostition(),
            component: component,
          },
        });
      }
    } else if (component === "") {
      document.body.style.overflowY = "hidden";
      this.setState({
        NavbarProperty: {
          isOpened: false,
          top: "",
          component: "",
        },
      });
    } else {
      document.body.style.overflowY = "hidden";
      this.setState({
        NavbarProperty: {
          isOpened: true,
          top: this.getNavbarPostition(),
          component: component,
        },
      });
    }
  };
  componentDidMount = () => {
    window.onscroll = () => {
      const UpperNoticeBarHeight = document.getElementById("UpperBarContainer");
      if (UpperNoticeBarHeight === null) {
        document.getElementById("mobile-small-nav-3").style.top = `${0}px`;
      } else {
        if (
          document.body.scrollTop > 43 ||
          document.documentElement.scrollTop > 43
        ) {
          document.getElementById("mobile-small-nav-3").style.top = `${0}px`;
        } else {
          var topPosition = document.documentElement.scrollTop;
          topPosition = UpperNoticeBarHeight.offsetHeight - topPosition;
          document.getElementById(
            "mobile-small-nav-3"
          ).style.top = `${topPosition}px`;
        }
      }
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        this.setState({ isScrolled: true });
      } else {
        this.setState({ isScrolled: false });
      }
    };
  };
  render() {
    return (
      <>
        <div
          id="navbar-container"
          className={`nav-bar-container${
            this.state.isScrolled ? " navbar-container-scrolled" : ""
          }`}
        >
          <div className="container-big">
            <div className="navbar-grid">
              <Link to="/">
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
                  <div className="navbar-text-container hide-before-992">
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
                    <div className="mobile-header">
                      {this.state.isScrolled ? (
                        <>GTBIT</>
                      ) : (
                        <>
                          Guru Tegh Bahadur Institute of Technology
                          <div className="mobile-header-content-small">
                            Affiliated to GGSIPU
                          </div>
                        </>
                      )}
                    </div>
                    {/* Not container Anything but part of the grid system for animation */}
                  </div>
                </div>
              </Link>
              <div className="navbar-right-links">
                <div
                  onClick={this.toggleMobileNav}
                  className={`navbar-right-link-ham-menu ${
                    this.state.isScrolled
                      ? "navbar-right-link-ham-menu-scroll"
                      : ""
                  } ${
                    this.state.isMobileNavOpened
                      ? "navbar-right-link-ham-menu-active"
                      : ""
                  }`}
                >
                  <div className="navbar-right-link-ham-menu-inner"></div>
                </div>
                <div
                  id="mobile-small-nav-3"
                  className={`mobile-small-nav-3 ${
                    this.state.isScrolled ? "mobile-small-nav-3-scrolled" : ""
                  } ${
                    this.state.isMobileNavOpened
                      ? ""
                      : "mobile-small-nav-3-hide"
                  }`}
                >
                  <div>
                    <Link
                      to="#"
                      className={
                        !(this.state.NavbarProperty.component === "discover")
                          ? ""
                          : this.state.NavbarProperty.isOpened
                          ? "navbar-right-links-active-onclick"
                          : ""
                      }
                      onClick={() => this.toggleNavigationBar("discover")}
                    >
                      DISCOVER{" "}
                      <span>
                        <img
                          className="navbar-img-arrow"
                          src={downArrow}
                          alt="Arrow"
                        />
                      </span>
                    </Link>
                    <Link
                      to="#"
                      className={
                        !(this.state.NavbarProperty.component === "about")
                          ? ""
                          : this.state.NavbarProperty.isOpened
                          ? "navbar-right-links-active-onclick"
                          : ""
                      }
                      onClick={() => this.toggleNavigationBar("about")}
                    >
                      ABOUT{" "}
                      <span>
                        <img
                          className="navbar-img-arrow"
                          src={downArrow}
                          alt="Arrow"
                        />
                      </span>
                    </Link>
                    <Link
                      to="#"
                      className={
                        !(this.state.NavbarProperty.component === "login")
                          ? ""
                          : this.state.NavbarProperty.isOpened
                          ? "navbar-right-links-active-onclick"
                          : ""
                      }
                      onClick={() => this.toggleNavigationBar("login")}
                    >
                      LOGIN{" "}
                      <span>
                        <img
                          className="navbar-img-arrow"
                          src={downArrow}
                          alt="Arrow"
                        />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.NavbarProperty.isOpened ? (
          <NavBarComponent
            onToggleNavBar={this.childComponentNavbarToggler}
            onCall={this.state.NavbarProperty}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}

export default NavigationBar;
