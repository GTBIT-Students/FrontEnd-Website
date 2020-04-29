import React, { Component } from "react";
import { Carousel } from "antd";
import "./assets/society.css";
import SocietyEvents from "./SocietyEvents";
import iipcImg from "./assets/image/iipc.png";
import grpImage from "./assets/image/group.jpeg";
import { Divider } from "antd";
import { Typography } from 'antd';

const { Paragraph } = Typography;

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
          <div className="col-12 col-sm-6">
            <div className="row ">
              <div className="col">
                <span className="S_span">Formed on:</span>
                <span>12-12-2010</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <div className="row ">
              <div className="col text-sm-right">
                <span className="S_span">Active:</span>
                <span>Yes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col-12 col-sm-6">
            <div className="row ">
              <div className="col">
                <span className="S_span">Incharge:</span>
                <span>Mr Mukesh Sahu</span>
              </div>
            </div>
          </div>

          <div className="col col-12 col-sm-6">
            <div className="row">
              <div className="col text-sm-right">
                <span className="S_span">Head:</span>
                <span>Maninder Singh</span>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-10 col-sm-8">
            <Carousel>
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
            <Paragraph ellipsis={{ rows: 15, expandable: true }}>
            Industry Institute Partnership Cell(IIPC) enhances the interface
            between industry and institute.Purpose of IIPC is to identifies the
            trends and expectations of industry and prepare students for meeting
            the latest requirements by giving Workshops, Seminars, Expert Talks
            and other Training programmes by experts.
          {[1,2,3,4,5].map(item=>(
           <div className="my-1" key={item}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              vitae ipsa facilis assumenda inventore minus deleniti possimus
              deserunt recusandae saepe. Numquam odit, adipisci ipsum aspernatur
              in reprehenderit ad porro. Maxime!
            </div>
          ))} 
          </Paragraph>
          </div>
        </div>
        <SocietyEvents />
      </div>
      </div>
    );
  }
}

export default AboutSociety;
