import React, { Component } from "react";
import Achievement from "../images/achievement-1.jpg";
import "../css/photoViewer.css";

class PhotoViewer extends Component {
  state = {};
  render() {
    return (
      <>
        <div
          className="photo-viewer-overlay"
          onClick={() => this.props.toggleViewer("")}
        ></div>
        <div className="photo-viewer-container">
          <img src={Achievement} alt="Achievements" />
        </div>
      </>
    );
  }
}

export default PhotoViewer;
