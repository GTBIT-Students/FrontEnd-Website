import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/uppernoticebar.css";

class UpperNoticeBar extends Component {
  state = {
    componentVisibility: true,
  };

  render() {
    return (
      <>
        {this.state.componentVisibility ? (
          <div id="UpperBarContainer" className="UpperBarContainer">
            <div className="container-big">
              <div className="UpperContainerGrid">
                <div className="Running-Line">
                  <>
                    <div>
                      <div className="upper-notice-announcements">
                        <div className="upper-notice-announcements-text">
                          Announcements
                        </div>
                        <div className="upper-notice-announcements-notice">
                          {this.props.notice === "" ? (
                            <>
                              <div style={{ display: "flex" }}>
                                {" "}
                                <svg className="loader-svg-upper">
                                  <circle r="5px" className="upper-loader" />
                                </svg>{" "}
                                Loading...
                              </div>
                            </>
                          ) : (
                            <div className="upper-notice-announcements-notice-inner">
                              <Link
                                to="/notice/new-admission-2020"
                                style={{
                                  color: "var(--black)",
                                  textDecoration: "none",
                                }}
                              >
                                {this.props.notice}
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                </div>
                <div
                  className="RightContainer-UpperBar"
                  onClick={() => this.setState({ componentVisibility: false })}
                >
                  &times;
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  }
}

export default UpperNoticeBar;
