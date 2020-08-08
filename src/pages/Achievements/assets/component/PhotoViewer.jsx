import React, { Component } from "react";
import Award from "../images/award.svg";
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
          {this.props.image.isDetails ? (
            <div className="photo-info-container">
              {this.props.image.details}
            </div>
          ) : null}
          <img src={this.props.image.image} alt="Achievements" />
          <div
            className="photo-viewer-help-container"
            onClick={this.props.handleText}
          >
            <img src={Award} alt="Award" width="25px" />
          </div>
        </div>
      </>
    );
  }
}

export default PhotoViewer;
