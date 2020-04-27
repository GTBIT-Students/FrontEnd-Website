import React, { Component } from "react";
import grpImage from "./assets/image/group.jpeg";

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
      {this.state.events.map((ev,index)=>
        <div className="row">
          <div className="col-2 my-auto m-0 p-0">
            <img src={grpImage} style={{ width: "100%" }} />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-10">
                <h3>{ev.title}</h3>
              </div>
              <div className="col-10">
                <p>Short Description about {ev.title}</p>
              </div>
            </div>
          </div>
        </div>
      )}
        
      </div>
    );
  }
}

export default SocietyEvents;
