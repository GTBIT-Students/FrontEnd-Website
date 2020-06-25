import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import API_Domain from "./baseDomain";

import "./assets/css/default.css";

import SideNavObj from "./SideNavBar";
import UpperNoticeBar from "./components/UpperNoticeBar/UpperNoticeBar";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Footer from "./components/footer/footer";
import Error404Page from "./pages/Error404Page/Error404Page";
import SideNavPane from "./components/SideNavPane/SideNavPane";

import Home from "./pages/HomePage/home";
import DirectorMessage from "./pages/DirectorMessage/DirectorMessage";

import AllNotice from "./pages/Notice/AllNotice";
import SingleNotice from "./pages/Notice/SingleNotice";

import AllImportantLink from "./pages/AllImportantLink/AllImportantLink";

import AllSociety from "./pages/Society/AllSociety";
import SingleSociety from "./pages/Society/SingleSociety";

import AllFacilities from "./pages/AllFacilities/allFacilities";
import MedicalCounsellor from "./pages/AllFacilities/medicalCounsellor";
import ComputingFacility from "./pages/AllFacilities/computing";
import IIPC from "./pages/AllFacilities/iipc";
import Library from "./pages/AllFacilities/library";
import LabFacility from "./pages/AllFacilities/lab";

// Departments
import AllDepartments from "./pages/Departments/allDeparment";
import CS from "./pages/Departments/CS";
import IT from "./pages/Departments/IT";
import ECE from "./pages/Departments/ECE";
import EEE from "./pages/Departments/EEE";
// Departments

// Programme
import allProgrammes from "./pages/Programmes/allProgrammes";
import CSProgram from "./pages/Programmes/CS";
import ITProgram from "./pages/Programmes/IT";
import ECEProgram from "./pages/Programmes/ECE";
import EEEProgram from "./pages/Programmes/EEE";
// Programme

// Gates
import Gates from "./pages/GATES/gates";
// Gates

// Other Pages
import PrivacyPolicy from "./pages/OtherPages/PrivacyPolicy";
import CodeOfConduct from "./pages/OtherPages/CodeOfConduct";
import Infrastructure from "./pages/OtherPages/Infrastructure";
import AffiliatedUniversity from "./pages/OtherPages/AffiliatedUniversity";
import Administration from "./pages/OtherPages/Administration";
import CampusProvision from "./pages/OtherPages/CampusProvision";
import MissionAim from "./pages/OtherPages/MissionAim";
import VisionCoreValues from "./pages/OtherPages/VisionCoreValues";
import Placements from "./pages/OtherPages/Placements";
import Achievements from "./pages/Achievements/Achievements";
import KnowUs from "./pages/OtherPages/KnowUs";
import StudentGrievance from "./pages/OtherPages/StudentGrievance";
import Admissions from "./pages/OtherPages/Admissions";
import ContactUs from "./pages/OtherPages/ContactUs";
import GTBIT360 from "./pages/GTBIT360/gtbit360";
import Newsletter from "./pages/OtherPages/Newsletter";
import Gallery from "./pages/Gallery/gallery";
import Result from "./pages/Examination/result";
import Schedule from "./pages/Examination/schedule";
import Calendar from "./pages/Examination/Calendar";
import AlumniList from "./pages/Alumni/almuniList";
import SingleEvent from "./pages/Event/SingleEvent";
import AllEvent from "./pages/Event/AllEvent";
// Other Pages

class Routes extends Component {
  state = {
    upper_notice: [{ notice: "" }],
    link: [],
    notice: [],
    event: [],
  };

  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/website-master-response`,
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      this.setState({ ...data.data });
    });
  };

  render() {
    return (
      <>
        <UpperNoticeBar notice={this.state.upper_notice[0].notice} />
        <NavigationBar />
        <Switch>
          {/* Home Page */}
          <Route exact path="/">
            <Home information={this.state} />
          </Route>
          {/* Home Page */}

          {/* Director Desk */}
          <Route exact path="/director-message" component={DirectorMessage} />
          {/* Director Desk */}

          {/* GTBIT 360 */}
          <Route exact path="/gtbit-360" component={GTBIT360} />
          {/* GTBIT 360 */}

          {/* Important Links */}
          <Route exact path="/important-links">
            <AllImportantLink innerLinks={this.state.link} />
          </Route>
          {/* Important Links */}

          {/* Facilities */}
          <Route path="/facilities">
            <div className="container-big">
              <div className="single-society-container-grid">
                <div>
                  <Route exact path="/facilities" component={AllFacilities} />
                  <Route
                    exact
                    path="/facilities/medical-counsellor"
                    component={MedicalCounsellor}
                  />
                  <Route exact path="/facilities/lab" component={LabFacility} />
                  <Route
                    exact
                    path="/facilities/library-and-book-bank"
                    component={Library}
                  />
                  <Route exact path="/facilities/iipc" component={IIPC} />
                  <Route
                    exact
                    path="/facilities/computing-facility"
                    component={ComputingFacility}
                  />
                </div>
                <div>
                  <SideNavPane content={SideNavObj.Facilities} />
                </div>
              </div>
            </div>
          </Route>
          {/* Facilities */}

          {/* Notices */}
          <Route path="/notice">
            <div className="container-big">
              <div className="single-society-container-grid">
                <div>
                  <Route exact path="/notice">
                    <AllNotice innerNotice={this.state.notice} />
                  </Route>
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
          {/* Notices */}

          {/* Events */}
          <Route path="/event">
            <div className="container-big">
              <div className="single-society-container-grid">
                <div>
                  <Route exact path="/event">
                    <AllEvent innerEvent={this.state.event} />
                  </Route>
                  <Route
                    exact
                    path="/event/:eventSlug"
                    component={SingleEvent}
                  />
                </div>
                <div>
                  <SideNavPane content={SideNavObj.SideEventNotice} />
                </div>
              </div>
            </div>
          </Route>
          {/* Events */}

          {/* Deparments */}
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
          {/* Deparments */}

          {/* Programmes */}
          <Route path="/programs">
            <div className="container-big">
              <div className="single-society-container-grid">
                <div>
                  <Route exact path="/programs" component={allProgrammes} />
                  <Route
                    exact
                    path="/programs/computer-science"
                    component={CSProgram}
                  />
                  <Route
                    exact
                    path="/programs/information-technology"
                    component={ITProgram}
                  />
                  <Route
                    exact
                    path="/programs/electronics-and-communication"
                    component={ECEProgram}
                  />
                  <Route
                    exact
                    path="/programs/electrical-and-electronics"
                    component={EEEProgram}
                  />
                </div>
                <div>
                  <SideNavPane content={SideNavObj.Programmes} />
                </div>
              </div>
            </div>
          </Route>
          {/* Programmes */}

          {/* Gates FEST */}
          <Route exact path="/gates" component={Gates} />
          {/* Gates FEST */}

          {/* Gallery */}
          <Route exact path="/gallery" component={Gallery} />
          {/* Gallery */}

          {/* Examination */}
          <Route path="/examination">
            <Route exact path="/examination/result" component={Result} />
            <Route exact path="/examination/schedule" component={Schedule} />
            <Route exact path="/examination/calendar" component={Calendar} />
          </Route>
          {/* Examination */}

          {/* Society */}
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
          {/* Society */}

          {/* Other Pages */}
          <Route exact path="/alumni" component={AlumniList} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/code-of-conduct" component={CodeOfConduct} />
          <Route exact path="/infrastructure" component={Infrastructure} />
          <Route exact path="/administration" component={Administration} />
          <Route
            exact
            path="/affiliated-university"
            component={AffiliatedUniversity}
          />
          <Route exact path="/campus-provision" component={CampusProvision} />
          <Route exact path="/mission-and-aim" component={MissionAim} />
          <Route
            exact
            path="/vision-and-core-values"
            component={VisionCoreValues}
          />
          <Route exact path="/placements" component={Placements} />
          <Route exact path="/achievements" component={Achievements} />
          <Route exact path="/know-us" component={KnowUs} />
          <Route exact path="/student-grievance" component={StudentGrievance} />
          <Route exact path="/admissions" component={Admissions} />
          <Route exact path="/contact-us" component={ContactUs} />
          <Route exact path="/newsletter" component={Newsletter} />

          {/* Other Pages */}

          {/* Error 404 */}
          <Route component={Error404Page} />
          {/* Error 404 */}
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Routes;
