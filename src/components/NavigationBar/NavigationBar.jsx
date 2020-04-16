import React, { Component } from "react";
import "./assets/css/navbar.css";
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  state = {
    isMobileNavOpened: false,
  };
  toggleMobileNav = () => {
    this.state.isMobileNavOpened
      ? this.setState({ isMobileNavOpened: false })
      : this.setState({ isMobileNavOpened: true });
  };
  render() {
    return (
      <>
        <div className="nav-bar-container">
          <div className="container-big">
            <div className="nav-bar-inner-container">
              <div className="desktop-navbar">
                <Link to="#" className="nav-bar-content nav-bar-link">
                  Home
                </Link>
                <Link to="#" className="nav-bar-content nav-bar-link">
                  About
                </Link>
                <Link to="#" className="nav-bar-content nav-bar-link">
                  Academics
                </Link>
                <Link to="#" className="nav-bar-content nav-bar-link">
                  Admissions
                </Link>
                <Link to="#" className="nav-bar-content nav-bar-link">
                  Quick Links
                </Link>
                <Link to="#" className="nav-bar-content nav-bar-link">
                  Contact
                </Link>
              </div>
              <div className="OnlineFeeContainer">
                <Link
                  to="#"
                  className="nav-bar-content nav-bar-link online-fee"
                >
                  Online Fee Payment
                </Link>
              </div>
              <div className="mobile-navbar" onClick={this.toggleMobileNav}>
                <div
                  className={`Navbar-menu-btn ${
                    this.state.isMobileNavOpened
                      ? "Navbar-menu-btnOpen Navbar-menu-btn-open"
                      : ""
                  }`}
                >
                  <span
                    className={`Navbar-menu-btn-inner ${
                      this.state.isMobileNavOpened
                        ? "Navbar-menu-btn-inner-open"
                        : ""
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavigationBar;
