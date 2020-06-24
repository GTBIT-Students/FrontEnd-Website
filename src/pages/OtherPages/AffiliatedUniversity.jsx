import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class AffiliatedUniversity extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Affiliated University</h2>
              <div className="director-page-main-content">
                <p>
                  <b>Guru Gobind Singh Indraprastha University</b>, established
                  by the Government of Delhi in 1998 is a dynamic and growth
                  oriented university, set up to facilitate and promote studies
                  and research with a focus on professional education in
                  emerging areas of higher education in disciplines of
                  engineering, technology, management studies, medicine,
                  pharmacy, nursing, education, law etc aiming to produce
                  quality man power.
                </p>
                <p>
                  The objective was to achieve excellence in these and related
                  fields and to equip the students to become effective
                  professionals with the best career prospects to meet the
                  emerging global and industrial needs of society in the coming
                  century.
                </p>
                <p>
                  The University visualises its role as a catalyst for
                  developing the technical skills of the students with a view to
                  meet the needs of the industry. It awards various degrees
                  like: B.Tech/M.Tech , MCA , M.Sc. , B.Arch. , BCA/MCA ,
                  BBA/MBA, BMC , BCAM , B.Pharma , BPT , BHMCT , B.Ed. ,
                  LLB(Hons.), MAHM , MCPHM , MHRPD , BHMS, MBBS, PhD etc.
                  Admission to these programmes is through a Common Entrance
                  Test. The University is recognized by the University Grants
                  Commission (UGC) of India under section 12B of the UGC Act.
                </p>
                <p>
                  The Indraprastha University, in pursuance of its objective to
                  encourage participation of self-financing institutions in the
                  emerging areas of professional education, has admitted various
                  institutions to the privileges of the University and granted
                  them provisional affiliation for conducting various
                  programmes. It has affiliated more than 50 Institutes in Delhi
                  and nearby areas. All the affiliated institutions run the
                  programmes strictly adhering to the norms and standards set by
                  the University. The faculty consists of professionally
                  qualified specialists in their respective areas.
                </p>
                <p>
                  The University in its endeavour to ensure excellence at all
                  levels of professional education, intends to maintain high
                  standards in terms of teaching, research, faculty and
                  infrastructure. In order to cultivate habits of regular and
                  systematic study among the students, the University has
                  evolved a system of performance appraisal which is based on a
                  combination of continuous internal assessment and end-term
                  evaluation. It also expects every student of the affiliated
                  institutions to be responsible for regularity of attendance in
                  the institutions and to achieve a certain minimum level of
                  performance and progress.
                </p>
                <div className="director-page-main-content">
                  <p>
                    University Website: <a href="http://ipu.ac.in">ipu.ac.in</a>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <SideNavPane content={SideNavObj.Academics} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AffiliatedUniversity;
