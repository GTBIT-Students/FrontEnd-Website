import React, { Component } from "react";
import API_Domain from "../../baseDomain";
import "./assets/css/uppernoticebar.css";
import axios from "axios";

class UpperNoticeBar extends Component {
  state = {
    notice: "",
    componentVisibility: true,
  };
  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/upper-notice`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      if (
        data.data.current_notice[0].notice === "" ||
        data.data.current_notice[0].notice === null
      ) {
        return null;
      } else {
        // console.log(data.data.current_notice[0].notice);
        this.setState({ notice: data.data.current_notice[0].notice });
      }
    });
  };

  render() {
    // if (this.state.componentVisibility) {
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
                          {this.state.notice === "" ? (
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
                              {this.state.notice}
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
