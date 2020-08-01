import React, { Component } from "react";
import axios from "axios";
import API_Domain from "../../baseDomain";
import Loader from "../../components/Loader/loader";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";
// import Achievement from "./assets/images/achievement-1.jpg";
import PhotoViewer from "./assets/component/PhotoViewer";
import "./assets/css/achievements.css";

class Achievements extends Component {
  state = {
    achievement: [],
    image: null,
    details: "",
    isViewerOpened: false,
    isDetails: false,
  };

  toggleViewer = (img, details) => {
    this.setState({
      isViewerOpened: !this.state.isViewerOpened,
      image: img,
      isDetails: false,
      details: details,
    });
  };
  handleText = () => {
    this.setState({ isDetails: !this.state.isDetails });
  };

  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/achievements`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      this.setState({ achievement: data.data.achievement });
    });
  };

  render() {
    return (
      <>
        {this.state.isViewerOpened ? (
          <PhotoViewer
            image={this.state}
            handleText={this.handleText}
            toggleViewer={this.toggleViewer}
          />
        ) : null}
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Achievements</h2>
              <div className="director-page-main-content">
                {this.state.achievement.length ? (
                  <div className="achievements-container-grid">
                    {/* Achievements Content */}
                    {this.state.achievement.map((achievement, index) => (
                      <div
                        key={`Achievement-${index}`}
                        className="achievements-content-container"
                        onClick={() =>
                          this.toggleViewer(
                            achievement.image,
                            achievement.description
                          )
                        }
                      >
                        <div className="achievements-image-content-grid">
                          <div
                            className="achievement-image"
                            style={{
                              backgroundImage: `url(${achievement.image})`,
                            }}
                          ></div>
                          <div className="achievement-text three-dots">
                            <span className="bold">{achievement.title}</span>
                            <br />
                            <span>{achievement.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Achievements Content */}
                  </div>
                ) : (
                  <Loader />
                )}
              </div>
            </div>
            <div>
              <SideNavPane content={SideNavObj.ImportantLinks} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Achievements;
