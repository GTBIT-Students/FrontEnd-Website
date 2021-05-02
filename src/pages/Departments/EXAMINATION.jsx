import React, { Component } from "react";
import { Link } from "react-router-dom";
import closeNavBarProps from "../../closeNavBarProps";
import "./assets/css/singleDepartment.css";

class EXAMINATION extends Component {
  state = {};

  render() {
    return (
      <>
        <h2 className="director-heading">Examination Department</h2>
        <h4 className="single-department-secondary-header">
          <p>
            The Department of Examination is responsible for conducting all the
            internal as well as external examination in the college.
          </p>
        </h4>
        <div className="director-page-main-content">
          <p className="director-page-main-content-designation">
            <p>For any query related to examination, please contact:</p>
            Dr. Simmi Singh
            <br />
            HOD Examination
            <br />
            Mobile: <a href="tel:919968383900">+91-9968383900</a>
            {/* <br />
            Email: <a href="mailto:parsank@gtbit.org">parsank@gtbit.org</a> */}
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

export default EXAMINATION;
