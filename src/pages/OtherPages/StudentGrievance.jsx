import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class StudentGrievance extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Student Grievance</h2>
              <div className="director-page-main-content">
                <p>
                  The Student having any grievances or suggestions may write to
                  Director-GTBIT giving his/her Name, Enrolment Number and
                  Stream, at e-mail id:{" "}
                  <a href="mailto:dirgtbit@gmail.com">dirgtbit@gmail.com</a>
                </p>
                <p>
                  <b>His/her identity will be kept confidential</b>
                </p>
                <p>
                  <a href="http://gtbit.org/news/uploads/grievance_reversal_2019-20.jpg">
                    Circular for Students Grievance Redressal Committee
                  </a>
                </p>
                <p>
                  <a href="http://gtbit.org/news/download/Legal_ipu_20001.pdf">
                    Notice for grievance redressal and welfare{" "}
                  </a>
                </p>
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

export default StudentGrievance;
