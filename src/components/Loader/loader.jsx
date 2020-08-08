import React, { Component } from "react";
import "./assets/loader.css";

class Loader extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="loader-container">
          <svg className="loader-inner-svg">
            <circle
              cx="35px"
              cy="35px"
              r="25px"
              fill="rgba(0,0,0,0)"
              strokeWidth="5px"
              stroke="#eee"
            />
            <circle
              cx="35px"
              cy="35px"
              r="25px"
              fill="rgba(0,0,0,0)"
              strokeWidth="5px"
              className="loader-circle"
            />
          </svg>
        </div>
      </>
    );
  }
}

export default Loader;
