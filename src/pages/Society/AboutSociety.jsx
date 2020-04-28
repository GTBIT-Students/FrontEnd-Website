import React, { Component } from "react";
import { Carousel } from "antd";
import "./assets/society.css";
import SocietyEvents from "./SocietyEvents";
import iipcImg from "./assets/image/iipc.png";

export class AboutSociety extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="Sheading">
          <h1 className="text-center text-dark m-0">IIPC</h1>
          <p className="text-secondary text-center">
            Industrial Institute Partnership Cell
          </p>
        </div>

        <div className="row">
          <div className="col">
            <div className="row justify-content-end">
              <div className="col">
                <span>Formed on:</span>
                <span>12-12-2010</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row justify-content-end">
              <div className="col-auto">
                <span>Active:</span>
                <span>Yes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="row justify-content-end">
              <div className="col">
                <span>Incharge:</span>
                <span>Mr Mukesh Sahu</span>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row justify-content-end">
              <div className="col-auto">
                <span>Head:</span>
                <span>Maninder Singh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-3">
          <div className="col-10 col-sm-8">
            <Carousel autoplay>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
            </Carousel>
          </div>
        </div>

        <div className="societydesc" 
        //style={{backgroundImage:`url(${grpImage})`}}
        >
        <img src={iipcImg} className="aboutBgImg"/>
          <div className="text-secondary">About IIPC</div>
          <div>
            Industry Institute Partnership Cell(IIPC) enhances the interface
            between industry and institute.Purpose of IIPC is to identifies the
            trends and expectations of industry and prepare students for meeting
            the latest requirements by giving Workshops, Seminars, Expert Talks
            and other Training programmes by experts Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ratione fugit cum illo laboriosam
            reiciendis, sint doloremque iure beatae tempora maiores asperiores
            itaque totam accusamus numquam tempore excepturi quasi eveniet
            doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Quasi, in? Nihil quasi, amet fugit omnis quas ullam reprehenderit
            voluptatum in quaerat! Nesciunt ut laborum illum dolorem et dolor
            vel dicta.
          </div>
        </div>
        <SocietyEvents/>
      </div>
    );
  }
}

export default AboutSociety;
