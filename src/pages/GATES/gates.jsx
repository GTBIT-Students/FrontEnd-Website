import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class Gates extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">GATES, Annual Fest</h2>
              <div className="director-page-main-content">
                (GATES) - GTBIT's Annual Techno-cultural Event for creative
                Souls
              </div>
              <div className="director-quote">
                <p>
                  "Creativity, Endurance, Intelligence, Wits, Inquisitiveness,
                  Managerial, literary and technical Skills, Hark Work.
                </p>
                <p>GATES is the litmus test of all."</p>
              </div>
              <div className="facility-page-image-container">
                <div className="facility-page-image-1"></div>
                <div className="facility-page-image-2-container">
                  <div className="facility-page-image-2"></div>
                  <div className="facility-page-image-2"></div>
                </div>
              </div>
              <div className="director-page-main-content">
                <p>
                  GATES is the annual techno-cultural fest of GTBIT. Its an
                  opportunity for the GTBIT community to showcase the rich
                  culture of GTBITians; a venture to initiate, build and
                  maintain acquaintances in the academic and industrial arena.
                </p>
                <p>
                  GATES is organized in the month of March and has been achieved
                  new landmarks every year from its inception in 2004. Each year
                  1000s of students from various colleges of north India gather
                  at GTBIT and challenge their wits to compete in various
                  Technical, Managerial and Literary Events. The Cultural events
                  at GATES provides a platform for the students to showcase
                  their talents. In 2007, sports events were also incorporated
                  in GATES and were a huge success.
                </p>

                <p className="director-page-main-content-designation">
                  Gates 2019:{" "}
                  <a
                    href="https://gates-2k19.firebaseapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    gates2k19.in
                  </a>
                </p>
              </div>
            </div>
            <div>
              <SideNavPane content={SideNavObj.CampusLife} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Gates;
