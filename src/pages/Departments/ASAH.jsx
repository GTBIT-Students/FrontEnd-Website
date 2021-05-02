import React, { Component } from "react";
import { Link } from "react-router-dom";
import ASAH1 from "./assets/images/asah2.jpg";
import ASAH2 from "./assets/images/asah1.jpg";
import ASAH3 from "./assets/images/asah3.jpg";
import closeNavBarProps from "../../closeNavBarProps";
import "./assets/css/singleDepartment.css";

class ASAH extends Component {
  state = {};

  render() {
    return (
      <>
        <h2 className="director-heading">
          Applied Science and Humanities Department
        </h2>
        <h4 className="single-department-secondary-header">
          <p>
            The Department of Applied Sciences and Humanities is a
            multidisciplinary department and it is functioning with a team of
            dedicated faculty members who have been actively engaged in
            imparting quality teaching of the courses in basic science and
            humanities for the graduating engineering students.
          </p>
          <p>
            The department has a very good amalgamation of highly qualified and
            experienced faculty members, drawn from reputed universities of
            India, more than 75% of them are PhDs.
          </p>
        </h4>
        <div className="container-responsive">
          <iframe
            title="ASAH"
            className="video-responsive"
            src="https://www.youtube.com/embed/7GDIycKwIWc"
            frameborder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="single-department-content-container-1">
          <div
            className="single-department-image-1"
            style={{ backgroundImage: `url(${ASAH1})` }}
          ></div>
          <div className="single-department-content justifyCenter">
            The faculty is dedicated to provide individual attention to the
            students with the goal of developing a strong foundation for their
            future careers by nurturing their analytical abilities and critical
            thinking. The students are exposed to humanities and basic sciences
            with a view to equip them with holistic values implicit in
            technological and professional options; to appreciate their social
            surroundings; and to communicate effectively.
          </div>
        </div>
        <div className="single-department-content-container-2">
          <div className="single-department-content justifyCenter">
            In the first year, students of all the branches are imparted
            knowledge of the Applied Sciences and Humanities so that these
            budding engineers develop a strong foundation in subjects like
            Physics, Chemistry, Mathematics, Communication Skills and Human
            values and Professional Ethics.
          </div>
          <div className="single-department-image-inner-container">
            <div
              className="single-department-image-2"
              style={{ backgroundImage: `url(${ASAH2})` }}
            ></div>
            <div
              className="single-department-image-2"
              style={{ backgroundImage: `url(${ASAH3})` }}
            ></div>
          </div>
        </div>
        <div className="single-department-content">
          <h4 className="single-department-secondary-header">
            The emphasis is given to:
          </h4>
          <ul>
            <li>
              The Department of Applied Sciences organizes PTMs on a regular
              basis to meet the parents of students and apprise them of their
              progress. These parental interactions are carried out with a view
              to curb student absenteeism and build a strong parent-teacher
              bond.
            </li>
            <li>
              Teacher mentors for each class keep a close tab on the students’
              progress and counsel them regularly, advise them and troubleshoot
              their problems, thus building a strong teacher-student bond and an
              environment of trust and cooperation.
            </li>
          </ul>
        </div>
        <br />
        <div className="single-department-content">
          <h4 className="single-department-secondary-header">
            Department Objectives
          </h4>
          <ul>
            <li>
              To provide an environment for working effectively in groups.
            </li>
            <li>
              To motivate students to study and apply the fundamental aspects of
              Applied Sciences to the domain of Engineering and Technology.
            </li>
            <li>
              To sensitise students towards environmental and ethical issues.
            </li>
            <li>
              To groom students to be at par with the global technical
              workforce, build confidence, character and human values.
            </li>
            <li>
              To create a good foundation for further engineering education
            </li>
          </ul>
        </div>
        <br />
        <div className="single-department-content">
          Mathematics being the queen of the sciences, is an integral part of
          this department. To impart the sound knowledge of the subject, one of
          the computer labs in our institute has been dedicated to Mathematics
          Laboratory for thorough understanding of the various mathematical
          tools and their applications in the engineering subjects. The syllabus
          as prescribed by the University, provides an opportunity for the
          students to discover mathematics through doing. Mathematical facts are
          verified using MATLAB software making the subject more interesting to
          the students. The Objective is to create engineers with strong
          mathematical background, creative thinking, and problem-solving skills
          through systematic training and to help student understand the
          significance of application and logical thinking.
        </div>
        <br />
        <div className="single-department-content">
          As we know, Physics is the backbone of Engineering, so a Laboratory is
          required where students can see the principles of Physics in action.
          The faculty members focus on developing student scientific temper and
          encourage them to innovate in different technical areas for better
          understanding of technical and engineering problems. There are two
          Physics Laboratories each for the first and the second shift. These
          labs are well ventilated and have steel almirahs for the safe storage
          of equipment. The dark rooms of the labs are well-equipped with
          apparatus like spectrometer, polarimeter, travelling microscope etc.
          to conduct experiments of optics which are a part of the prescribed
          syllabus of the first semester by GGSIPU. In the second semester
          students work on various experimental set-ups to verify the laws which
          they are taught in the theory classes such as the verification of
          Stephan’s law, Hall Effect, Planck’s constant. Additionally, the Labs
          have computer systems that train students for research work in future
          through simulation of the experiments such as the charging and the
          discharging of capacitor, Brownian motion using MATLAB which is also
          prescribed by the University.
        </div>
        <br />
        <div className="single-department-content">
          The domain of Chemistry has two well-equipped curricular laboratories
          with modern and state-of-the-art equipment. The labs are spacious and
          provide a conducive environment for the students. These labs provide
          practical exposure to students, methods of imparting practical
          learning and to develop a feel for the subjects taught through various
          experiments like qualitative and quantitative analysis, chemical
          synthesis involved in inorganic, organic, physical chemistry and
          environmental sciences. Constant guidance and support are provided to
          the students by our able faculty members and the Lab staff. Frequent
          audits and inspection are done to ensure safety of the students and
          the staff members.
        </div>
        <br />
        <div className="single-department-content">
          For the effective Communication Skills and the integrated personality
          development of the students, the Institute has also set up a
          Professional Development and Communication Skills Lab. The Lab
          attempts to bring about a holistic development of the students by
          giving them the required exposure and enhancing their self-expression.
          The syllabus as prescribed by the University, helps students gain
          proficiency in Listening, Reading, Writing and Speaking skills by way
          of activities such as group discussions, role-plays, extempore,
          recitation, mock interviews and presentations. By providing practical
          lessons, the faculty helps students learn how to communicate
          effectively and impactfully in the classroom or workplace. The
          Language Lab is entirely dedicated for their practical training and
          skill development.
        </div>
        <div className="director-page-main-content">
          <p className="director-page-main-content-designation">
            Dr Parsan Kaur
            <br />
            Mobile: <a href="tel:919868448812">+91-9868448812</a>
            <br />
            Email: <a href="mailto:parsank@gtbit.org">parsank@gtbit.org</a>
          </p>
        </div>
        <div className="alumni-btn-container">
          <Link
            to="/department"
            onClick={closeNavBarProps}
            className="alumni-button"
          >
            Other Departments
          </Link>
        </div>
      </>
    );
  }
}

export default ASAH;
