import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";
import "./assets/css/achievements.css";
import Achievement from "./assets/images/achievement-1.jpg";
import PhotoViewer from "./assets/component/PhotoViewer";

class Achievements extends Component {
  state = {
    image: "",
    isViewerOpened: false,
  };

  toggleViewer = (img) => {
    this.setState({ isViewerOpened: !this.state.isViewerOpened, img: img });
  };

  render() {
    return (
      <>
        {this.state.isViewerOpened ? (
          <PhotoViewer
            image={this.state.image}
            toggleViewer={this.toggleViewer}
          />
        ) : null}
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Achievements</h2>
              <div className="director-page-main-content">
                <div className="achievements-container-grid">
                  {/* Achievements Content */}
                  <div
                    className="achievements-content-container"
                    onClick={() => this.toggleViewer(Achievement)}
                  >
                    <div className="achievements-image-content-grid">
                      <div
                        className="achievement-image"
                        style={{ backgroundImage: `url(${Achievement})` }}
                      ></div>
                      <div className="achievement-text three-dots">
                        <span className="bold">Title</span>
                        <br />
                        <span>May 30, 2020</span>
                      </div>
                    </div>
                  </div>
                  {/* Achievements Content */}
                </div>
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
