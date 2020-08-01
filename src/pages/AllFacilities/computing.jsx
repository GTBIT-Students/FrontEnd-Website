import React, { Component } from "react";
import Img1 from "../Departments/assets/images/img1.jpg";
import Img2 from "../Departments/assets/images/img2.jpg";
import Img3 from "../Departments/assets/images/img3.jpg";

class ComputingFacility extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">Computing Facility</h2>
        <div className="director-page-main-content">
          The Computing Facilities comprise of 8 state of the art labs :
          Programming labs, Operating Systems lab, Internet and Networking labs,
          Electronics Computer Aided Design lab and the Multimedia lab. The labs
          are equipped with 550 machines of latest configuration. The recent
          developments include installation of two hundred new P-IV computers in
          the labs. All the labs are internally networked and inter-connected to
          each other to form a LAN. The centre has twelve 6 KVA UPS (72 KVA) to
          provide reliability in case of power failure.
        </div>
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
          <p className="director-page-main-content-designation">
            Programming Labs:
          </p>
          <p>
            The college boasts of the posession of two programming labs (in one
            of the labs Wi-Fi is enabled). These labs meet the basic
            requirements of the 1st and 2nd year students of all the three
            streams. Programming skills in languages such as C, C++, Java, Data
            Structures, AutoCad and ComputermGraphics are imparted to the
            students. Students are also made familiar with the basic application
            tools such as MS-Office, PhotoShop, DOS, etc.
          </p>
        </div>
        <div className="director-page-main-content">
          <p className="director-page-main-content-designation">
            Operating Systems Lab:
          </p>
          <p>
            This lab is devoted to the study of various operating systems such
            as windows 8.1 64 Bit,Unix and Linux. Students are taught how to be
            well -versed with the programming techniques using these O.S.
            Practical classes of subjects like compiler design, software
            engineering and artificial intelligence are also conducted in this
            lab .
          </p>
        </div>
        <div className="director-page-main-content">
          <p className="director-page-main-content-designation">
            Internet and Networking Labs:
          </p>
          <p>
            These labs have been developed in collaboration with CISCO and are
            equipped with one 5100 series IBM server, a 220 x-series server, 45
            nodes, 3 routers, three 8 ports switches and two 24 ports hubs.The
            labs are devoted to router and other network based programming
            techniques. They also have a LAN Trainer Kit to simulate the
            implementation of networks. These labs also serve the purpose of
            enabling students to obtain CISCO certification. These labs have a
            50 mbps (CIR 1:1) RF Internet connection. Internet access facility
            is made available to the students so that they can explore the
            latest technologies available on the web and update their knowledge
            base.
          </p>
        </div>
        <div className="director-page-main-content">
          <p className="director-page-main-content-designation">
            Electronics Computer Aided Design Lab:
          </p>
          <p>
            This lab is well equipped with the latest software available for
            Electronic Circuit Design. Licensed 5.2 version of Mentra Graphics
            (FPGA) advantage along with TINA PRO are a regular part of the
            curriculum for the third semester and upwards. Apart from this,
            ORCAD and Matlab 6.1 version is also available for various signal
            processing, PCB designing, fuzzy logic conrol, Neural Network etc.
          </p>
        </div>
      </>
    );
  }
}

export default ComputingFacility;
