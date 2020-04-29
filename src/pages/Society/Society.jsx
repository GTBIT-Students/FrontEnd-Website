import React, { Component } from "react";
import SocietyList from "./SocietyList";
import AboutSociety from "./AboutSociety";

export class Society extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 d-none d-md-block">
            <SocietyList />
          </div>
          <div className="col-12 col-md-9 p-0 ">
              <AboutSociety/>
          </div>
        </div>
      </div>
    );
  }
}

export default Society;
