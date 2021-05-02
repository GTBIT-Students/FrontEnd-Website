import React, { Component } from "react";
import AMAZON_IMAGE from "./assets/image/amazon.png";
import DIRECTI_IMAGE from "./assets/image/DIRECTI.png";
import ORACLE_IMAGE from "./assets/image/oracle.png";
import "./assets/css/popup.css";

class PopUp extends Component {
  state = {
    isShow: true,
    students: [
      { name: "Rahul Gupta", package: "31.25Lpa" },
      { name: "Saurabh Gupta", package: "30Lpa" },
      { name: "Samarth Gaur", package: "30Lpa" },
      { name: "Ujjwal Jindal", package: "28.5Lpa" },
      { name: "Mohd. Afzal Ansari", package: "28Lpa" },
      { name: "Suruchi Jain", package: "26.9Lpa" },
      { name: "Ajay Bhardwaj", package: "19Lpa" },
    ],
  };
  componentDidMount = () => {};
  render() {
    if (this.state.isShow)
      return (
        <>
          <div
            className="popup-overlay"
            onClick={() => this.setState({ isShow: false })}
          ></div>
          <div className="popup-container">
            <div className="popup-heading">Congratulations</div>
            <div className="popup-sub-heading">
              Guru Tegh Bahadur Institute of Technology congratulates its{" "}
              <b>GEMS</b> for getting placed at Amazon, Oracle, Direct-I
            </div>
            <br />
            <div className="popup-content">
              <div className="popup-grid">
                {this.state.students.map((st, index) => (
                  <div
                    className="popup-content-student"
                    key={`student-placed-${index}`}
                  >
                    <div className="popup-name">{st.name}</div>
                    <div>Got package of {st.package}</div>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <p>
                <img src={AMAZON_IMAGE} alt="AMAZON" width="100px" />
                <img
                  src={DIRECTI_IMAGE}
                  style={{ margin: "1rem" }}
                  alt="ORACLE"
                  width="100px"
                />
                <img src={ORACLE_IMAGE} alt="DIRECT-I" width="100px" />
              </p>
            </div>
          </div>
        </>
      );
    return null;
  }
}

export default PopUp;
