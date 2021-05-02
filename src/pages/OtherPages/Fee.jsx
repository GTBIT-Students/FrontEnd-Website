import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";

class Fee extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Fee Information</h2>
              <div className="director-page-main-content">
                <p>
                  <b>Fee Notice for existing students</b>
                </p>
                <p>
                  <a href="https://forms.gle/zWKJLW7ddMzLaStq5">
                    https://forms.gle/zWKJLW7ddMzLaStq5
                  </a>
                </p>
                <p>
                  All the students admitted in academic session
                  2017-18,2018-19,LE-2018-19, 2019-20 and LE-2019-20 are hereby
                  informed that they must deposit their annual fees for the
                  Academic Session 2020-21 up to 15th July, 2020.
                </p>
                <p>The bank details are as under:</p>
                <p>
                  <b>Punjab National Bank</b>,<br />
                  <b>Subhash Nagar Branch</b>, New Delhi-110018. Bank
                  <br /> A/c# 1527000109402281,
                  <br />
                  IFSC# PUNB0595200 <br />
                  (for RTGS, IMPS, TRF and NEFT transactions)
                </p>
                <p>
                  Those students who want to deposit their fee through cheque,
                  they should deposit the cheque at institute gate in favour of
                  Guru Tegh Bahadur Institute of Technology with the details on
                  back side of cheque:{" "}
                  <b>Name, Enrollment Number Branch and Mobile number</b>
                </p>
                <p>
                  For fee amount details, kindly see:
                  <br />
                  <a href="https://archives.gtbit.org/fee-notice.pdf">
                    Fee Notice 2020 - 2021
                  </a>
                </p>
                <p>
                  <a href="https://archives.gtbit.org/news/uploads/feeslip.jpg">
                    Fee Slip 2020-2021
                  </a>
                </p>
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

export default Fee;
