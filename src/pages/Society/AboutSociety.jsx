import React, { Component } from "react";
import { Carousel } from "antd";
import "./assets/society.css";
import SocietyEvents from "./SocietyEvents";
import iipcImg from "./assets/image/iipc.png";
import grpImage from "./assets/image/group.jpeg";
import { Divider } from "antd";
export class AboutSociety extends Component {
  render() {
    return (
      <div>
      <div className="container-fluid">
        <div className="Sheading border mt-3">
          <h1 className="m-0">IIPC</h1>
          <p>Industrial Institute Partnership Cell</p>
        </div>

        <div className="row mt-4">
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

        <div className="row my-2">
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

        <div className="row justify-content-center mt-5">
          <div className="col-10 col-sm-8">
            <Carousel autoplay>
              <div>
                <img src={grpImage} />
              </div>
              <div>
                <img src={grpImage} />
              </div>
              <div>
                <img src={grpImage} />
              </div>
            </Carousel>
          </div>
        </div>

        <div
          className="societydesc"
          //style={{backgroundImage:`url(${grpImage})`}}
        >
          <img src={iipcImg} className="aboutBgImg" />
          
            <Divider
              style={{ fontSize: "2rem" }}
              className="S_headings font-weight-light "
            >
              About IIPC
            </Divider>
        
          <div>
            Industry Institute Partnership Cell(IIPC) enhances the interface
            between industry and institute.Purpose of IIPC is to identifies the
            trends and expectations of industry and prepare students for meeting
            the latest requirements by giving Workshops, Seminars, Expert Talks
            and other Training programmes by experts.
            <div className="my-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              vitae ipsa facilis assumenda inventore minus deleniti possimus
              deserunt recusandae saepe. Numquam odit, adipisci ipsum aspernatur
              in reprehenderit ad porro. Maxime!
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            fugit cum illo laboriosam reiciendis, sint doloremque iure beatae
            tempora maiores asperiores itaque totam accusamus numquam tempore
            excepturi quasi eveniet doloribus. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Quasi, in? Nihil quasi, amet fugit
            omnis quas ullam reprehenderit voluptatum in quaerat! Nesciunt ut
            laborum illum dolorem et dolor vel dicta.
          </div>
        </div>
        <SocietyEvents />
      </div>
      </div>
    );
  }
}

export default AboutSociety;
