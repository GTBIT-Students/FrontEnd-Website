import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./assets/css/default.css";
import SideNavObj from "./SideNavBar";

import UpperNoticeBar from "./components/UpperNoticeBar/UpperNoticeBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/footer/footer";
import Error404Page from "./pages/Error404Page/Error404Page";

import Home from "./pages/HomePage/home";

import AllNotice from "./pages/Notice/AllNotice";
import SingleNotice from "./pages/Notice/SingleNotice";

import AllSociety from "./pages/Society/AllSociety";
import SingleSociety from "./pages/Society/SingleSociety";
import SideNavPane from "./components/SideNavPane/SideNavPane";

import AllDepartments from "./pages/Departments/allDeparment";
import CS from "./pages/Departments/CS";
import IT from "./pages/Departments/IT";
import ECE from "./pages/Departments/ECE";
import EEE from "./pages/Departments/EEE";

import GTBIT360 from "./pages/GTBIT360/gtbit360";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route path="/">
          <UpperNoticeBar />
          <NavigationBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/gtbit-360" component={GTBIT360} />
          <Route path="/notice">
            <div className="container-big">
              <div className="single-society-container-grid">
                <div>
                  <Route exact path="/notice" component={AllNotice} />
                  <Route
                    exact
                    path="/notice/:noticeSlug"
                    component={SingleNotice}
                  />
                </div>
                <div>
                  <SideNavPane content={SideNavObj.SideEventNotice} />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/department">
            <div className="container-big">
              <div className="single-society-container-grid">
                <div>
                  <Route exact path="/department" component={AllDepartments} />
                  <Route
                    exact
                    path="/department/computer-science"
                    component={CS}
                  />
                  <Route
                    exact
                    path="/department/information-technology"
                    component={IT}
                  />
                  <Route
                    exact
                    path="/department/electronics-and-communication"
                    component={ECE}
                  />
                  <Route
                    exact
                    path="/department/electrical-and-electronics"
                    component={EEE}
                  />
                </div>
                <div>
                  <SideNavPane content={SideNavObj.Deparments} />
                </div>
              </div>
            </div>
          </Route>
          <Route path="/society">
            <div className="container-big">
              <div className="single-society-container-grid">
                <div>
                  <Route exact path="/society" component={AllSociety} />
                  <Route
                    exact
                    path="/society/:societySlug"
                    component={SingleSociety}
                  />
                </div>
                <div>
                  <SideNavPane content={SideNavObj.Society} />
                </div>
              </div>
            </div>
          </Route>
          <Route exact path="/error-404" component={Error404Page} />
          <Footer />
        </Route>
      </Switch>
    );
  }
}

export default Routes;
