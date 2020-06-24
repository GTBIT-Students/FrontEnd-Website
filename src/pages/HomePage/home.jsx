import React, { Component } from "react";
import "./assets/css/home.css";
import Carousels from "../../components/Carousels/carousel";
import DirectorDesk from "./assets/component/director/director";
import AlumniSection from "./assets/component/alumni/alumni";
import EventMain from "./assets/component/Event/eventMain";
import LinkMain from "./assets/component/LinkMain/linkMain";
import NoticeMain from "./assets/component/NoticeMain/noticeMain";

class Home extends Component {
  state = {};

  render() {
    return (
      <>
        <div>
          <Carousels />
          <div style={{ height: "5em" }}></div>
          <div className="container-big">
            <DirectorDesk />

            <div className="spacing-5"></div>
            <div className="alumni-event-container">
              <AlumniSection />
              <EventMain eventList={this.props.information.event} />
            </div>
            <div className="spacing-5"></div>
            <div className="notice-link-container">
              <LinkMain linkList={this.props.information.link} />
              <NoticeMain noticeList={this.props.information.notice} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
