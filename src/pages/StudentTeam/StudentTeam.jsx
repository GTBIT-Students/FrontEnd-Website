import React, { Component } from "react";
import SideNavObj from "../../SideNavBar";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import Website from "./assets/images/website.svg";
import Facebook from "./assets/images/facebook.svg";
import Twitter from "./assets/images/twitter.svg";
import Linkedin from "./assets/images/linkedin.svg";
import Github from "./assets/images/github.svg";
import Raghav from "./assets/images/raghavdhingra.jpg";
import Jayant from "./assets/images/jayant.jpg";
import Sachin from "./assets/images/sachin.jpeg";
import Pulkit from "./assets/images/pulkit.jpg";
import Ashima from "./assets/images/ashima.jpg";
import Ashita from "./assets/images/ashita.jpg";
import Akshit from "./assets/images/akshit.jpg";
import "./assets/css/studentTeam.css";

class StudentTeam extends Component {
  state = {
    student: [
      {
        image: Raghav,
        name: "Raghav Dhingra",
        designation: "Full Stack Developer",
        github: "https://github.com/raghavdhingra",
        linkedin: "https://www.linkedin.com/in/raghav-dhingra",
        website: "https://raghavdhingra.com",
      },
      {
        image: Sachin,
        name: "Sachin Negi",
        designation: "Full Stack Developer",
        github: "https://github.com/negi-sachin",
        linkedin: "https://www.linkedin.com/in/negi-sachin/",
        facebook: "https://www.facebook.com/sachin.negi.9275439",
      },
      {
        image: Jayant,
        name: "Jayant Dhingra",
        designation: "IOS/Android Developer",
        github: "https://github.com/jayant1441",
        linkedin: "https://www.linkedin.com/in/jayant1441",
        twitter: "https://twitter.com/JayantDhingra",
      },
      {
        image: Pulkit,
        name: "Pulkit Midha",
        designation: "VR Developer",
        github: "https://github.com/midopooler",
        linkedin: "https://www.linkedin.com/in/pulkit-midha28",
        website: "https://pulkitmidha.com/",
      },
      {
        image: Ashita,
        name: "Ashita Bajaj",
        designation: "Content Creator",
        github: "https://github.com/ashi0405",
        facebook: "https://www.facebook.com/aashita.bajaj.5",
        website: "mailto:aashitabajaj2@gmail.com ",
      },
      {
        image: Ashima,
        name: "Ashima Bajaj",
        designation: "Content Creator",
        github: "https://github.com/aashimabajaj0405",
        linkedin: "https://www.linkedin.com/in/ashima-bajaj-4215321b0",
        website: "mailto:aashimabajaj2@gmail.com",
      },
      {
        image: Akshit,
        name: "Akshit Mittal",
        designation: "Graphic Designer",
        twitter: "https://twitter.com/Akshit91303134",
        linkedin: "https://www.linkedin.com/in/akshit-mittal-190a1b150",
        facebook: "https://www.facebook.com/akshit.mittal.94 ",
      },
    ],
  };
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Student Team</h2>
              <div className="student-container">
                {this.state.student.map((student, index) => (
                  <div className="developer-box" key={`Student-${index}`}>
                    <div
                      className="developer-box-image"
                      style={{
                        backgroundImage: `url(${student.image})`,
                      }}
                    >
                      <div className="developer-box-image-inner">
                        {student.github ? (
                          <div className="developer-social">
                            <a href={student.github}>
                              <img src={Github} width="30px" alt="Github" />
                            </a>
                          </div>
                        ) : null}
                        {student.linkedin ? (
                          <div className="developer-social">
                            <a href={student.linkedin}>
                              <img src={Linkedin} width="25px" alt="Linkedin" />
                            </a>
                          </div>
                        ) : null}
                        {student.website ? (
                          <div className="developer-social">
                            <a href={student.website}>
                              <img src={Website} width="25px" alt="Website" />
                            </a>
                          </div>
                        ) : null}
                        {student.twitter ? (
                          <div className="developer-social">
                            <a href={student.twitter}>
                              <img src={Twitter} width="25px" alt="Twitter" />
                            </a>
                          </div>
                        ) : null}
                        {student.facebook ? (
                          <div className="developer-social">
                            <a href={student.facebook}>
                              <img src={Facebook} width="25px" alt="Facebook" />
                            </a>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="developer-box-inner">
                      <div className="developer-box-name">{student.name}</div>
                      <div className="developer-box-sub">
                        {student.designation}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SideNavPane content={SideNavObj.QuickLinks} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default StudentTeam;
