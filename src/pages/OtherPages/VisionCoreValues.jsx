import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class VisionCoreValues extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Vision and Core Values</h2>
              <div className="director-page-main-content">
                <p>
                  Guru Tegh Bahadur Institute of Technology(GTBIT) aims to be
                  among the premier institutes of engineering and technology in
                  the country,recognised for excellence in
                  Teaching,R&amp;D,Sports,Cultural and Social Arena.
                </p>
                <p>
                  Our vision as a technical Institution is to provide an open
                  opportunity to the young generation, irrespective of their
                  caste, creed or sex to imbibe knowledge and wisdom in various
                  technical disciplines including engineering, management and
                  Computer Science and Development of holistic personality and
                  entrepreneurship enabling them to carve a niche in the Society
                  for themselves.
                </p>
                <p>
                  Also, To consistently provide multi talented adroit budding
                  professionals blended with positive approach and attitude
                  towards life who can effectively meet the expectations of the
                  Industry
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

export default VisionCoreValues;
