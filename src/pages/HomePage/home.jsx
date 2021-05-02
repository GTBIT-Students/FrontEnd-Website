import React, { Component } from "react";
import Carousels from "../../components/Carousels/carousel";
import DirectorDesk from "./assets/component/director/director";
import AlumniSection from "./assets/component/alumni/alumni";
import EventMain from "./assets/component/Event/eventMain";
import LinkMain from "./assets/component/LinkMain/linkMain";
import NoticeMain from "./assets/component/NoticeMain/noticeMain";
import AdmissionForm from "./assets/component/AdmissionForm/AdmissionForm";
import "./assets/css/home.css";

class Home extends Component {
  state = {
    students: [
      { name: "Rahul Gupta", package: "31.25Lpa", company: "Amazon" },
      { name: "Saurabh Gupta", package: "30Lpa", company: "Amazon" },
      { name: "Samarth Gaur", package: "30Lpa", company: "Amazon" },
      { name: "Ujjwal Jindal", package: "28.5Lpa", company: "Amazon" },
      { name: "Mohd. Afzal Ansari", package: "28Lpa", company: "Oracle" },
      { name: "Suruchi Jain", package: "26.9Lpa", company: "Direct-I" },
      { name: "Ajay Bhardwaj", package: "19Lpa", company: "Amazon" },
    ],
  };

  render() {
    return (
      <div>
        <Carousels />
        <div style={{ height: "5em" }}></div>
        <div className="container-big">
          <AdmissionForm />
          <div className="spacing-5"></div>
          <h2 className="director-heading">ECE Department Achievements</h2>
          <div className="container-responsive">
            <iframe
              title="ECE"
              className="video-responsive"
              src="https://www.youtube.com/embed/LYicYver8to"
              frameborder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="spacing-5"></div>
          <DirectorDesk />
          <div className="spacing-5"></div>
          <div className="director-right-content">
            <h2 className="director-heading">Proud Moments</h2>
            <p className="director-content">
              <p>
                Congratulations to all of us.
                <br />
                Guru Tegh Bahadur Institute of Technology congratulates its{" "}
                <b>GEMS</b> for getting placed at Amazon, Oracle, Direct-I
              </p>
              {this.state.students.map((student, index) => (
                <p key={`index=${index}`}>
                  <b>
                    {student.name} ( {student.package} at {student.company} )
                  </b>
                </p>
              ))}
            </p>
            <div style={{ height: "1.5em" }} />
          </div>
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
    );
  }
}

export default Home;
