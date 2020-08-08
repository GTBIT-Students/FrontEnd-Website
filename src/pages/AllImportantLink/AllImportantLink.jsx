import React, { Component } from "react";
import Loader from "../../components/Loader/loader";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

import "../Society/assets/css/allSociety.css";
// import "./assets/css/AllImportantLink.css";

class AllSociety extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <div className="director-heading notices-heading">
                Important Links
              </div>

              <div className="all-notice-table-container">
                <div className="table-head-container">
                  <div>Sr&nbsp;&nbsp;</div>
                  <div>Links</div>
                </div>
                {/* Start */}
                {this.props.innerLinks.length !== 0 ? (
                  <>
                    {this.props.innerLinks.map((elmt, index) => (
                      <div className="table-content" key={`link-${index}`}>
                        <div>{index + 1}.&nbsp;&nbsp;&nbsp;</div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="notice-text"
                          href={elmt.link}
                        >
                          {elmt.link_text}
                        </a>
                      </div>
                    ))}
                  </>
                ) : (
                  <Loader />
                )}
                {/* End */}
              </div>
            </div>
            <div>
              <SideNavPane content={SideNavObj.SideEventNotice} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AllSociety;
