import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class Administration extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Administration</h2>
              <div className="director-page-main-content">
                <p>
                  <b>THE MANAGEMENT Delhi Sikh Gurdwara Management Committee</b>
                  The Delhi Sikh Gurdwara Management Committee is a statutory
                  welfare society established under the Delhi Sikh Gurdwara Act
                  of 1971, dedicated to the service of society.
                </p>
                <p>
                  In addition to managing the historic gurdwaras of Delhi with
                  free kitchens, serving lakhs of devotees daily, the Committee
                  manages an Engineering College, a post graduate Management
                  Institute, a College of education, Degree Colleges, a Gurmat
                  College, a Sangeet College, Polytechnic Institutes, an
                  Industrial Training Centre, a chain of public govt.-aided
                  schools, hospitals, several dispensaries libraries.
                </p>
                <p>
                  The Committee is dedicated towards imparting quality education
                  to the students of Delhi works on the basic tenets laid down
                  in the Sikh scriptures which advocate <b>SARBAT DA BHALA.</b>
                </p>
                <br />
                <b>Office Bearers:</b>
                <ul style={{ padding: "0 1em" }}>
                  <li>President (DSGMC) : S. Manjinder Singh Sirsa</li>
                  <li>General Secretory (DSGMC): S. Harmeet Singh Kalka</li>
                  <li>Chairman (GTBIT) : S. Avtar Singh Hit</li>
                  <li>Manager (GTBIT) : S. Gurmeet Singh Bhatia</li>
                  <li>Director : Dr. Rominder Kaur Randhawa</li>
                </ul>
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

export default Administration;
