import React, { Component } from "react";
import SocietyList from "./SocietyList";
import AboutSociety from "./AboutSociety";

export class Society extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-0 border">
            <SocietyList />
          </div>
          <div className="col-12 col-sm-9 border">
              <AboutSociety/>
          </div>
        </div>
      </div>
    );
  }
}

export default Society;
