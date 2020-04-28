import React, { Component } from "react";
import grpImage from "./assets/image/group.jpeg";
import { Divider } from "antd";
import "./assets/society.css";

export class SocietyEvents extends Component {
  state = {
    events: [
      {
        title: "Event 1",
      },
      {
        title: "Event 2",
      },
      {
        title: "Event 3",
      },
      {
        title: "Event 4",
      },
    ],
  };
  render() {
    return (
      <div>
        <div className="my-2">
          <Divider
            className="S_headings font-weight-light"
            orientation="left"
            style={{fontSize:"2rem"}}
          >
            Past Events
          </Divider>
        </div>
        {this.state.events.map((ev, index) => (
          <div className="row border S_eventBox">
            <div className="col-2 my-auto m-0 p-0">
              <img src={grpImage} style={{ width: "100%" }} />
            </div>
            <div className="col-10 ">
              <div className="row">
                <div className="col-10 pr-0">
                  <h3>{ev.title}</h3>
                </div>
                <div className="col-12 pr-0">
                  <p>Short Description about {ev.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default SocietyEvents;
