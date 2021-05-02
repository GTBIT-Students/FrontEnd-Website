import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class Placements extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Placements</h2>
              <div className="director-page-main-content">
                <p>
                  <b>
                    CAREER DEVELOPMENT AND MANAGEMENT CELL / TRAINING and
                    PLACEMENT DEPARTMENT
                  </b>
                </p>
                <p>
                  “The future belongs to those who believe in the beauty of
                  their dreams.”
                </p>
                <p>
                  This is the ideology on which Career Development Management
                  Cell (CDMC) / Training and Placement Department of this
                  Institute runs.
                </p>
                <div className="container-responsive">
                  <iframe
                    title="IT"
                    className="video-responsive"
                    src="https://www.youtube.com/embed/Kx36_KbMlTE"
                    frameborder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <br />
                <p>
                  The Career Development Management Cell (CDMC)/ T&amp;P Dept is
                  an integral part of Guru Tegh Bahadur Institute of Technology
                  (GTBIT) and has been designed to function with high degree of
                  professionalism. It plays a pivotal role in exploring and
                  locating job opportunities for the young engineers passing out
                  from GTBIT by liaisoning with reputed industrial firmaments.
                  GTBIT aspires to provide these students with a platform for
                  using their potential and transforming them into young
                  corporals.
                </p>
                <p>
                  It has always strived to provide almost instantaneous data to
                  the corporate sector with regard to the candidates available
                  for consideration towards placement in accordance with the
                  preserved requirements. Training activities are organized
                  throughout the year with the sole motive towards strengthening
                  the student’s forte in today’s ever challenging technical
                  world along with technical expertise combined with effective
                  inter-personal skills.
                </p>
                <p>
                  CDMC / T&amp;P acts as an interface between the Institute and
                  Corporate by inviting them in the campus, where the eligible
                  students are facilitated to go through the entire selection
                  process. The entire process is governed by the student’s
                  ability and performance, as well as the requirements and norms
                  of the Industry.
                </p>
                <p>
                  It has a systematic process of dovetailing the final year
                  student’s career aspirations with corporate expectations by
                  imparting comprehensive training to the students which
                  includes special Skill Enhancement Training Programmes also.
                </p>
                <p>
                  Our Alumni are working in leading companies across India and
                  abroad serving as goodwill ambassadors for their Alma-Mater
                  ensuring more such opportunities for their juniors.
                </p>
                <p>
                  Our motto lies in leveraging the human capital for
                  competitiveness by nurturing knowledge, entrepreneurship and
                  creativity. We believe, it is these strengths that will help
                  one successfully compete globally and exploit emerging
                  opportunities.
                </p>
                <br />
                <p>For any placement related queries, contact:</p>
                <p className="director-page-main-content-designation">
                  Head, CDMC
                  <br />
                  Guru Tegh Bahadur Institute of Technology
                  <br />
                  G-8 Area, Rajouri Garden
                  <br />
                  New Delhi
                  <br />
                  <br />
                  Email <br />
                  <a href="mailto:gtbit.ipu.delhi@gmail.com">
                    gtbit.ipu.delhi@gmail.com
                  </a>
                  <br />
                  <br />
                  For student verification, please mail on
                  <br />
                  <a href="mailto:verifystudentgtbit@gmail.com">
                    verifystudentgtbit@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div>
              <SideNavPane content={SideNavObj.ImportantLinks} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Placements;
