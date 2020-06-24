import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/loader";
import API_Domain from "../../baseDomain";
import closeNavBarProps from "../../closeNavBarProps";

import "./assets/css/allSociety.css";

class AllSociety extends Component {
  state = {
    society: {
      technical: [],
      cultural: [],
      religious: [],
      miscellaneous: [],
    },
  };

  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/society-list`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      let society = {
        technical: [],
        cultural: [],
        religious: [],
        miscellaneous: [],
      };
      data.data.society_list.map((elmt) => {
        if (elmt.category === "technical") {
          society.technical.push(elmt);
        } else if (elmt.category === "cultural") {
          society.cultural.push(elmt);
        } else if (elmt.category === "religious") {
          society.religious.push(elmt);
        } else {
          society.miscellaneous.push(elmt);
        }
        return null;
      });
      this.setState({ society: society });
    });
  };

  render() {
    return (
      <>
        <div className="single-society-heading-container">
          <div className="single-society-heading" id="technical">
            Societies
          </div>
        </div>
        <div className="all-society-container">
          <div className="singleSociety-main-header">Technical Societies</div>
          {/* Start */}
          {this.state.society.technical.length !== 0 ? (
            <div className="all-society-inner-container">
              {this.state.society.technical.map((elmt, index) => (
                <div key={`society_${index}`}>
                  <div className="all-society-view-box">
                    <div className="all-society-image-head-container">
                      <div className="justifyCenter">
                        <div
                          className="all-society-image-inner"
                          style={{ backgroundImage: `url(${elmt.logo})` }}
                        ></div>
                      </div>
                      <div className="all-society-header-inner">
                        <div className="text-center-mobile">
                          <Link
                            to={`/society/${elmt.slug}`}
                            className="all-society-society-name"
                            onClick={closeNavBarProps}
                          >
                            {elmt.name}
                          </Link>
                          <div className="all-society-society-tagline">
                            {elmt.tag_line}
                          </div>
                          <div className="all-society-society-tagline">
                            Lead: <b>{elmt.student_incharge}</b>
                          </div>
                          <div className="all-society-society-tagline">
                            Incharge: <b>{elmt.teacher_incharge}</b>
                          </div>
                        </div>
                        <div className="all-society-know-more">
                          <Link
                            to={`/society/${elmt.slug}`}
                            onClick={closeNavBarProps}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="spacing-5">
              <Loader />
            </div>
          )}
          {/* End */}
        </div>
        <div className="spacing-3" id="religious"></div>
        <div className="all-society-container">
          <div className="singleSociety-main-header">Religous Societies</div>
          {/* Start */}
          {this.state.society.religious.length !== 0 ? (
            <div className="all-society-inner-container">
              {this.state.society.religious.map((elmt) => (
                <>
                  <div className="all-society-view-box">
                    <div className="all-society-image-head-container">
                      <div className="justifyCenter">
                        <div
                          className="all-society-image-inner"
                          style={{ backgroundImage: `url(${elmt.logo})` }}
                        ></div>
                      </div>
                      <div className="all-society-header-inner">
                        <div>
                          <Link
                            to={`/society/${elmt.slug}`}
                            className="all-society-society-name"
                            onClick={closeNavBarProps}
                          >
                            {elmt.name}
                          </Link>
                          <div className="all-society-society-tagline">
                            {elmt.tag_line}
                          </div>
                        </div>
                        <div className="all-society-know-more">
                          <Link
                            to={`/society/${elmt.slug}`}
                            onClick={closeNavBarProps}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="spacing-5">
              <Loader />
            </div>
          )}
          {/* End */}
        </div>
        <div className="spacing-3" id="cultural"></div>
        <div className="all-society-container">
          <div className="singleSociety-main-header">Cultural Societies</div>
          {/* Start */}
          {this.state.society.cultural.length !== 0 ? (
            <div className="all-society-inner-container">
              {this.state.society.cultural.map((elmt) => (
                <>
                  <div className="all-society-view-box">
                    <div className="all-society-image-head-container">
                      <div className="justifyCenter">
                        <div
                          className="all-society-image-inner"
                          style={{ backgroundImage: `url(${elmt.logo})` }}
                        ></div>
                      </div>
                      <div className="all-society-header-inner">
                        <div>
                          <Link
                            to={`/society/${elmt.slug}`}
                            className="all-society-society-name"
                            onClick={closeNavBarProps}
                          >
                            {elmt.name}
                          </Link>
                          <div className="all-society-society-tagline">
                            {elmt.tag_line}
                          </div>
                        </div>
                        <div className="all-society-know-more">
                          <Link
                            to={`/society/${elmt.slug}`}
                            onClick={closeNavBarProps}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="spacing-5">
              <Loader />
            </div>
          )}
          {/* End */}
        </div>
        <div className="spacing-3" id="miscellaneous"></div>
        <div className="all-society-container">
          <div className="singleSociety-main-header">
            Miscellaneous Societies
          </div>
          {/* Start */}
          {this.state.society.miscellaneous.length !== 0 ? (
            <div className="all-society-inner-container">
              {this.state.society.miscellaneous.map((elmt) => (
                <>
                  <div className="all-society-view-box">
                    <div className="all-society-image-head-container">
                      <div className="justifyCenter">
                        <div
                          className="all-society-image-inner"
                          style={{ backgroundImage: `url(${elmt.logo})` }}
                        ></div>
                      </div>
                      <div className="all-society-header-inner">
                        <div>
                          <Link
                            to={`/society/${elmt.slug}`}
                            className="all-society-society-name"
                            onClick={closeNavBarProps}
                          >
                            {elmt.name}
                          </Link>
                          <div className="all-society-society-tagline">
                            {elmt.tag_line}
                          </div>
                        </div>
                        <div className="all-society-know-more">
                          <Link
                            to={`/society/${elmt.slug}`}
                            onClick={closeNavBarProps}
                          >
                            Know More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          ) : (
            <div className="spacing-5">
              <Loader />
            </div>
          )}
          {/* End */}
        </div>
      </>
    );
  }
}

export default AllSociety;
