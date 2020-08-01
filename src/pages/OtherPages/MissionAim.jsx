import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class MissionAim extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Mission and Aim</h2>
              <div className="director-page-main-content">
                <p>
                  Guru Tegh Bahadur Institute of Technology(GTBIT) is committed
                  to continuously strive, adopt and implement innovative
                  teaching/learning processes, growth, development, and
                  improvement strategies. These objectives will be achieved
                  through sustained team efforts,involving all stakeholders in
                  the institute.
                </p>
                <b>Our Mission</b>
                <br />
                <ul style={{ padding: "0 1em" }}>
                  <li>
                    To create an environment of collaboration, experimentation,
                    imagination and creativity.
                  </li>
                  <li>To provide the best possible education facilities.</li>
                  <li>
                    To develop sensitivity in our students to be responsible
                    citizens of the nation to think in the direction of
                    improving the quality of life and meeting society needs.
                  </li>
                  <li>
                    To link studies with contemporary industry developments and
                    applications.
                  </li>
                  <li>
                    To imbibe national values leading to student's empowerment.
                  </li>
                </ul>
                <p>
                  Also, To work as a unified team to leverage the inherent
                  creative and professional skills of the students and further
                  train them according to industry needs so as to help them in
                  transforming their dreams into reality.
                </p>
              </div>
            </div>
            <div>
              <SideNavPane content={SideNavObj.KnowMore} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MissionAim;
