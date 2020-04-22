import React, { Component } from "react";
import UpperNoticeBar from "../../components/UpperNoticeBar/UpperNoticeBar";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Carousel from "../../components/Carousels/carousel";
import Footer from "../../components/footer/footer";
import "./assets/css/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <UpperNoticeBar />
          <NavigationBar />
          <Carousel />
          <div style={{ height: "5em" }}></div>
          <div className="container-big">
            <h1>Content</h1>
            <h1>Content</h1>
            <h1>Content</h1>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
