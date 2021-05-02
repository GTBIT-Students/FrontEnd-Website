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
import Sachin from "./assets/images/sachin.jpg";
import Pulkit from "./assets/images/pulkit.jpg";
import Karanveer from "./assets/images/karanveer.jpg";
import Ashima from "./assets/images/ashima.jpg";
import Ashita from "./assets/images/ashita.jpg";
import Akshit from "./assets/images/akshit.jpg";
import Nanak from "./assets/images/nanak.jpg";
import Japneet from "./assets/images/japneet.jpg";
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
        image: Karanveer,
        name: "Karanveer Singh",
        designation: "Management",
        website: "mailto:kvssandhu@live.in",
        github: "https://github.com/kvssandhu",
        twitter: "https://twitter.com/kvssandhu",
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
        image: Japneet,
        name: "Japneet Singh Sethi",
        designation: "Graphic Designer",
        github: "https://github.com/designedcode",
        linkedin: "https://www.linkedin.com/in/japneet-singh-029537190/",
        website: "mailto:japneet.aiesec@gmail.com",
      },
      {
        image: Akshit,
        name: "Akshit Mittal",
        designation: "Graphic Designer",
        twitter: "https://twitter.com/Akshit91303134",
        linkedin: "https://www.linkedin.com/in/akshit-mittal-190a1b150",
        facebook: "https://www.facebook.com/akshit.mittal.94 ",
      },
      {
        image: Nanak,
        name: "Nanak Singh Khurana",
        designation: "Cyber Security",
        github: "https://github.com/nanak-singh",
        linkedin: "https://www.linkedin.com/in/nanak-singh-khurana/",
        website: "mailto:mr.nanakskhurana@gmail.com ",
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
