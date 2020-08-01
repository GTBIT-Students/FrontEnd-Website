import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class Gallery extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Photo Gallery</h2>
            </div>
            <div>
              <SideNavPane content={SideNavObj.QuickLinks} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Gallery;
