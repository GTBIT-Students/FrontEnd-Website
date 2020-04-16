import React, { Component } from "react";
import { API_Domain } from "../../pages/baseDomain";
import searchBar from "./assets/images/search.svg";
import "./assets/css/uppernoticebar.css";
import axios from "axios";

class UpperNoticeBar extends Component {
  state = {
    searchVisibility: false,
    notice: "",
  };

  ToggleSearchBar = () => {
    this.state.searchVisibility
      ? this.setState({ searchVisibility: false })
      : this.setState({ searchVisibility: true });
  };

  componentDidMount = () => {
    axios.get(`${API_Domain.route}/api/v1/upper-notice`).then((data) => {
      if (
        data.data.current_notice[0].notice === "" ||
        data.data.current_notice[0].notice === null
      ) {
        return null;
      } else {
        console.log(data.data.current_notice[0].notice);
        this.setState({ notice: data.data.current_notice[0].notice });
      }
    });
  };

  render() {
    return (
      <>
        <div className="UpperBarContainer">
          <div className="container-big">
            <div className="UpperContainerGrid">
              <div className="Running-Line">
                {this.state.notice === "" ? (
                  ""
                ) : (
                  <>
                    {/* eslint-disable-next-line */}
                    <marquee className="display-after-992">
                      <b>Notice</b> - {this.state.notice}
                    </marquee>
                  </>
                )}
              </div>
              <div className="RightContainer-UpperBar">
                <div
                  className={`search-box-container ${
                    this.state.searchVisibility
                      ? ""
                      : "RightContainer-Upper-Hide"
                  }`}
                >
                  <input type="text" placeholder="Search..." />
                </div>
                <div
                  className={`UpperBar-LoginBtn UpperBar-SearchImg ${
                    this.state.searchVisibility
                      ? "UpperBar-LoginBtn-active"
                      : ""
                  }`}
                  onClick={this.ToggleSearchBar}
                >
                  <img
                    className="SearchImage"
                    src={searchBar}
                    alt="Search Bar"
                  />
                </div>
                <div className="UpperBar-LoginBtn">Login</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UpperNoticeBar;
