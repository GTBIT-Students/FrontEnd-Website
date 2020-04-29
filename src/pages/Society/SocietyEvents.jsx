import React, { Component } from "react";
import grpImage from "./assets/image/square.jpeg";
import { Divider } from "antd";
import "./assets/society.css";

export class SocietyEvents extends Component {
  state = {
    events: [
      {
        title: "Mega Tech Event",
      },
      {
        title: "Session on WebDev",
      },
      {
        title: "Free Git Tutorial",
      },
      {
        title: "Live Job Talks",
      },
    ],
  };
  render() {
    return (
      <div>
        {["Past Events", "Upcoming Events"].map((item, index) => (
          <>
            <div className="my-2">
              <Divider
                className="S_headings font-weight-light"
                orientation="left"
                style={{ fontSize: "2rem" }}
              >
                {item}
              </Divider>
            </div>
            {this.state.events.map((ev, index) => (
              <div className="row border S_eventBox">
                <div className="col-2 my-auto m-0 p-0">
                  <img src={grpImage} style={{ width: "100%" }} />
                </div>
                <div className="col-10 ">
                  <div className="row">
                    <div className="col-12 pr-0">
                      <h5>{ev.title}</h5>
                    </div>
                    <div className="col-12 pr-0">
                      <p>Short Description about {ev.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ))}
      </div>
    );
  }
}

export default SocietyEvents;
