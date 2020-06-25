import React, { Component } from "react";
import Achievement from "./assets/images/achievement-1.jpg";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class AlumniList extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">The Alumni</h2>
              <div className="director-page-main-content">
                <div className="achievements-container-grid">
                  {/* Achievements Content */}
                  <div className="achievements-content-container">
                    <div className="achievements-image-content-grid">
                      <div
                        className="achievement-image"
                        style={{ backgroundImage: `url(${Achievement})` }}
                      ></div>
                      <div className="achievement-text three-dots">
                        <span className="bold">Tapsee Pannu</span>
                        <br />
                        <span>2009-2013</span>
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

export default AlumniList;
