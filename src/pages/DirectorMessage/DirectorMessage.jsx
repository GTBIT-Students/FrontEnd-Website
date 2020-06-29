import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";
import DirectorImage from "./assets/images/director.jpg";
import "./assets/css/directorMessage.css";

class DirectorMessage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Message from Director</h2>
              <div className="director-page-image-container">
                <div
                  className="director-page-img-1"
                  style={{ backgroundImage: `url(${DirectorImage})` }}
                ></div>
                <div className="director-quote justifyCenter">
                  <p>
                    Enthusiasm is excitement with inspiration, motivation, and a
                    pinch of creativity.
                  </p>
                  <p style={{ textAlign: "right" }}>- Bo Bennet</p>
                </div>
              </div>
              <div className="director-page-main-content">
                <p>
                  Each one of us thinks in a unique way. The student body of
                  Guru Tegh Bahadur Institute of Technology is built from an
                  assortment of students who come from different backgrounds and
                  yet continue to function amicably and efficiently as a family.
                  Guru Tegh Bahadur Institute of Technology showcases a wide
                  range of academic and extra-curricular aptitudes, skills and
                  accomplishments while still conserving and retaining our
                  cultural and traditional values. The brilliance and diligence
                  of our students, of course, is notable and praiseworthy but at
                  the same time I also recognize the role of the staff members
                  in being persistent, enthusiastic, proactive, thought
                  provoking and constantly striving hard to achieve success and
                  raise their excellence to the next level.
                </p>
                <p className="director-page-main-content-designation">
                  Dr. Rominder Kaur
                  <br />
                  Director - GTBIT
                  <br />
                </p>
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

export default DirectorMessage;
