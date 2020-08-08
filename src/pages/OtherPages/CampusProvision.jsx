import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";
import Admin1 from "./assets/images/admin.jpg";
import Admin2 from "./assets/images/admin2.jpg";
import Admin3 from "./assets/images/img3.jpg";
import Lab1 from "./assets/images/lab_block.jpg";
import Lab2 from "./assets/images/img5.jpg";
import Lab3 from "./assets/images/img4.jpg";

class CampusProvision extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Campus Provision</h2>
              <div className="director-page-main-content">
                <p>
                  <b>Admin Block</b>
                </p>
                <div className="facility-page-image-container">
                  <div
                    className="facility-page-image-1"
                    style={{ backgroundImage: `url(${Admin1})` }}
                  ></div>
                  <div className="facility-page-image-2-container">
                    <div
                      className="facility-page-image-2"
                      style={{ backgroundImage: `url(${Admin2})` }}
                    ></div>
                    <div
                      className="facility-page-image-2"
                      style={{ backgroundImage: `url(${Admin3})` }}
                    ></div>
                  </div>
                </div>
                <p>
                  Every building has a well-equipped conference/seminar hall
                  where a variety of Academic and other activities take place
                  throughout the year.
                </p>
                <p>
                  Admin Block is reserved for the administration of the college.
                  It has a reception,account's section for the fee related
                  tasks.
                </p>
                <p>
                  It also has an exam cell where students can get the
                  information regarding the exams or results.
                </p>
                <br />
                <p>
                  <b>LECTURE BLOCKS</b>
                </p>
                <div className="facility-page-image-container">
                  <div
                    className="facility-page-image-1"
                    style={{ backgroundImage: `url(${Admin1})` }}
                  ></div>
                  <div className="facility-page-image-2-container">
                    <div
                      className="facility-page-image-2"
                      style={{ backgroundImage: `url(${Lab3})` }}
                    ></div>
                    <div
                      className="facility-page-image-2"
                      style={{ backgroundImage: `url(${Lab3})` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <p>
                    Every building has a well-equipped conference/seminar hall
                    where a variety of Academic and other activities take place
                    throughout the year.
                  </p>
                  <p>
                    Lecture Block is where the classes for Second and Third year
                    students are held. Classrooms are airy and well built.
                  </p>
                  <p>
                    Along with the classes there is a library on the first floor
                    where students can sit and study and can get a variety of
                    books on any subject.
                  </p>
                  <p>
                    This block is well connected with the Admin Block as well as
                    BVS Block.
                  </p>
                </div>
                <br />
                <p>
                  <b>LAB BLOCK</b>
                </p>
                <div className="facility-page-image-container">
                  <div
                    className="facility-page-image-1"
                    style={{ backgroundImage: `url(${Lab1})` }}
                  ></div>
                  <div className="facility-page-image-2-container">
                    <div
                      className="facility-page-image-2"
                      style={{ backgroundImage: `url(${Lab2})` }}
                    ></div>
                    <div
                      className="facility-page-image-2"
                      style={{ backgroundImage: `url(${Lab3})` }}
                    ></div>
                  </div>
                </div>
                <p>
                  The Institute has state-of-the-art computing or web learning
                  facilities. The Computer centre comprises various labs, out of
                  which Software Engg Lab, Operating System Lab and two internet
                  labs are equipped with 100 IBM Machines.
                </p>
                <p>
                  Networking and Multimedia Lab are equipped with 50 Dell
                  Computers of latest configuration.
                </p>
                <p>
                  Programming Lab I and II, Software Testing Lab and Compiler
                  Design Lab are equipped with Multimedia Projectors and 120
                  Dell and HP Computers.
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

export default CampusProvision;
