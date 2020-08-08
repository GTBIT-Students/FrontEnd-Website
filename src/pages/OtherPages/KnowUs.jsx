import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";
import Img1 from "./assets/images/admin.jpg";
import Img2 from "./assets/images/admin2.jpg";
import Img3 from "./assets/images/img3.jpg";

class KnowUs extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Know About Us</h2>
              <div className="facility-page-image-container">
                <div
                  className="facility-page-image-1"
                  style={{ backgroundImage: `url(${Img1})` }}
                ></div>
                <div className="facility-page-image-2-container">
                  <div
                    className="facility-page-image-2"
                    style={{ backgroundImage: `url(${Img2})` }}
                  ></div>
                  <div
                    className="facility-page-image-2"
                    style={{ backgroundImage: `url(${Img3})` }}
                  ></div>
                </div>
              </div>
              <div className="director-page-main-content">
                <p>
                  <b>Guru Tegh Bahadur Institute of Technology (GTBIT)</b> was
                  established in 1999 by Delhi Sikh Gurdwara Management
                  Committee (DSGMC), which is running a large number of
                  educational institutes, besides carrying out large number of
                  religious and social activities. GTBIT is a degree level
                  technical institute, approved by AICTE and affiliated to Guru
                  Gobind Singh Indraprastha University, Delhi. This university
                  was established by Government of NCT of Delhi under provisions
                  of Guru Gobind Singh University Act, 1998 read with its
                  Amendment in 1999. It is affiliating and teaching University.
                  It is recognised by University Grant Commission, India under
                  section 12B of UGC Act. It has also been accredited " A Grade"
                  by NAAC.
                </p>
                <p>
                  GTBIT has a sprawling campus and is centrally located in
                  Rajouri Garden, New Delhi. The institute has five spacious
                  buildings and state-of-art laboratories. Students of GTBIT
                  have the best of facilities, a conducive environment for
                  studies and a dedicated faculty to guide them and lead them to
                  sucess.
                </p>
                <br />
                <p>
                  <b>Vision:</b>
                  <br />
                  Guru Tegh Bahadur Institute of Technology (GTBIT) aims to be
                  among the premier institutes of engineering and technology in
                  the country, recognised for excellence in Teaching, R&D,
                  Sports, Cultural and Social Arena.
                </p>
                <br />
                <p>
                  <b>Mission:</b>
                  <br />
                  Guru Tegh Bahadur Institute of Technology is committed to
                  continuously strive, adopt and implement innovative
                  teaching/learning processes, growth, development, and
                  improvement strategies.These objectives will be achieved
                  through sustained team efforts, involving all stake holders in
                  the institute.
                </p>
                <br />
                <div>
                  <b>Office bearers:</b>
                  <br />
                  <ul>
                    <li>Chairman (GTBIT) : S. Avtar Singh Hit</li>
                    <li>Manager (GTBIT) : S. Gurmeet Singh Bhatia</li>
                    <li>Director : Dr. Rominder Kaur Randhawa</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <SideNavPane content={SideNavObj.ImportantLinks} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default KnowUs;
