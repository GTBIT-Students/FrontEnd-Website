import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";
import Lab1 from "./assets/images/img4.jpg";
import Lab2 from "./assets/images/img5.jpg";
import Lab3 from "./assets/images/img6.jpg";

class Infrastucture extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Infrastucture</h2>
              <div className="director-page-main-content">
                <p>
                  <b>Admin Block</b>
                </p>
                <div className="facility-page-image-container">
                  <div className="facility-page-image-1"></div>
                  <div className="facility-page-image-2-container">
                    <div className="facility-page-image-2"></div>
                    <div className="facility-page-image-2"></div>
                  </div>
                </div>
                <p>
                  Every building has a well equipped confrence /seminar hall
                  where a variety of Academic and other activities take place
                  throughout the year.Admin Block is reserved for the
                  administration of the college.It has a reception,account's
                  section for the fee related tasks.
                </p>
                <br />
                <p>
                  <b>LECTURE BLOCKS</b>
                </p>
                <div className="facility-page-image-container">
                  <div className="facility-page-image-1"></div>
                  <div className="facility-page-image-2-container">
                    <div className="facility-page-image-2"></div>
                    <div className="facility-page-image-2"></div>
                  </div>
                </div>
                <p>
                  Every buikding has a well equipped confrence /seminar hall
                  where a variety of Academic and other activities take place
                  throughout the year.Lecture block is where the classes for
                  First and Second year students is held.Classrooms are airy and
                  well built.Along with the classes there's a canteen on the
                  upper floor interconnected to the block with a bridge.
                </p>
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
                  The institute has state-of-the-art computing or web learning
                  facilities.The Computer center comprises of variuos labs,out
                  of which Software Engg Lab,Operating Sytstem Lab and two
                  internet labs are equipped with 100 IBM Machines.Networking
                  and Multimedia Lab are equipped with with 50 Dell Computers of
                  latest Configuration.Programming Lab I and II,Siftware Testing
                  Lab and Compiler Design Lab are equipped with MultiMedia
                  Projectors and 120 Dell and Hp Computers.
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

export default Infrastucture;
