import React, { Component } from "react";
import UpperNoticeBar from "../../components/UpperNoticeBar/UpperNoticeBar";
import TitleBar from "../../components/TitleBar/TitleBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Carousel from "../../components/Carousels/carousel";
import NoticeBox from "../../components/event-notice-link/NoticeBox";
import EventBox from "../../components/event-notice-link/EventBox";
import ImportantLinkBox from "../../components/event-notice-link/ImportantLinkBox";
import Footer from "../../components/footer/footer";
import AdmissionPlacementDetails from "../../components/admission-placements-details/admissionPlacement";
import "./assets/css/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <UpperNoticeBar />
          <TitleBar />
          <NavigationBar />
          <Carousel />
          <AdmissionPlacementDetails />
          {/* Notice-Event-Links container */}
          <div className="spacing-5"></div>
          <div className="event-notice-link-container">
            <div className="container-big">
              <div className="spacing-5"></div>
              <div className="grid-of-3">
                <div className="notice-box">
                  <NoticeBox />
                </div>
                <div className="event-box">
                  <EventBox />
                </div>
                <div className="link-box">
                  <ImportantLinkBox />
                </div>
              </div>
            </div>
            <div className="spacing-5"></div>
          </div>
        </div>
        <div className="spacing-5"></div>
        {/* Notice-Event-Links container */}
        <Footer />
      </>
    );
  }
}

export default Home;
