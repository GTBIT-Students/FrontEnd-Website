import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class Admissions extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Admissions</h2>
              <div className="director-page-main-content">
                <p>
                  <b>GTBIT Admission 2020</b>
                </p>
                <p>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2xhvLq3AtEOrmztk3obUWDOUdzvhB_3b_-rN7v90tCLibJg/viewform">
                    Click here for Registration of Admission 2020
                  </a>
                </p>
                <p>
                  Please find below the eligibility criteria required to fill
                  this form: Students should be from the Science stream with
                  Maths as a compulsory subject. All the interested students who
                  are keen to take the admission still have an opportunity to
                  apply as GGSIPU has extended the date for filling the form
                  till 25th May 2020.
                </p>
                <p>
                  Hello students, as we all are stuck in our houses because of
                  the global pandemic and we are not aware of certain things
                  happening around.So here is a notice for you all that *GGSIPU
                  admission forms are out*. In case any of you is willing to
                  take admission in colleges affiliated to GGSIPU you may fill
                  the form given below in the link. All the information
                  regarding the admission process will be delivered on the
                  information provided by you. *GGSIPU admission will close
                  soon, so hurry up!!!!*
                </p>
                <p>
                  The admission in the different courses offered by the
                  institute is through the Common Entrance Test conducted by the
                  Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi.
                  For more details on the admission procedure, application
                  deadlines and test dates, check out the university website:
                </p>
                <p>
                  <a href="http://www.ipu.ac.in/">
                    Link to University Website - Indraprastha University (IPU)
                  </a>
                </p>
                <br />
                <p>
                  <b>
                    Admission in GTBIT can be sought for in the Bachelor's of
                    Technology degree in one of the following streams:{" "}
                  </b>
                </p>
                <br />
                <ul>
                  <li>Computer Science and Engineering (180 Seats)</li>
                  <li>Information Technology (180 Seats)</li>
                  <li>
                    Electronics and Communications Engineering (180 Seats)
                  </li>
                  <li>Electrical and Electronics Engineering(60 Seats)</li>
                </ul>
              </div>
            </div>
            <div>
              <SideNavPane content={SideNavObj.QuickLinks} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Admissions;
