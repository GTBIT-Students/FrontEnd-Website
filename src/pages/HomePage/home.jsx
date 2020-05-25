import React, { Component } from "react";
import axios from "axios";
import "./assets/css/home.css";
import API_Domain from "../../baseDomain";
import Carousels from "../../components/Carousels/carousel";
import DirectorDesk from "./assets/component/director/director";
import AlumniSection from "./assets/component/alumni/alumni";
import EventMain from "./assets/component/Event/eventMain";
import LinkMain from "./assets/component/LinkMain/linkMain";
import NoticeMain from "./assets/component/NoticeMain/noticeMain";

class Home extends Component {
  state = {
    events: [],
    links: [],
    notices: [],
  };
  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/event-list`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => this.setState({ events: data.data.current_event }));
    axios({
      url: `${API_Domain.route}/notice-list`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => this.setState({ notices: data.data.current_notice }));
    axios({
      url: `${API_Domain.route}/important-link-list`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => this.setState({ links: data.data.current_links }));
  };
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
              <EventMain eventList={this.state.events} />
            </div>
            <div className="spacing-5"></div>
            <div className="notice-link-container">
              <LinkMain linkList={this.state.links} />
              <NoticeMain noticeList={this.state.notices} />
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              dolor nobis quia deserunt blanditiis illum magnam atque,
              reiciendis dicta omnis laboriosam consequatur, repellat placeat
              eligendi iusto totam modi, vero voluptate. Lorem ipsum dolor sit
              amet consectetur, adipisicing elit. Corporis dolor nobis quia
              deserunt blanditiis illum magnam atque, reiciendis dicta omnis
              laboriosam consequatur, repellat placeat eligendi iusto totam
              modi, vero voluptate.
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
