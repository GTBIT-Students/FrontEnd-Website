import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader/loader";
import API_Domain from "../../baseDomain";
import closeNavBarProps from "../../closeNavBarProps";

import "./assets/css/allSociety.css";

class AllSociety extends Component {
  state = {
    society: [],
    isFilter: 0,
    isLoaded: false,
  };

  society = [];

  toggleFilter = (filter) => {
    this.setState({ isFilter: filter });
    if (filter === 0) {
      this.setState({ society: this.society });
    } else if (filter === 1) {
      let temp = [];
      this.society.forEach((data) => {
        if (data.category === "technical") temp.push(data);
      });
      this.setState({ society: temp });
    } else if (filter === 2) {
      let temp = [];
      this.society.forEach((data) => {
        if (data.category === "religious") temp.push(data);
      });
      this.setState({ society: temp });
    } else if (filter === 3) {
      let temp = [];
      this.society.forEach((data) => {
        if (data.category === "cultural") temp.push(data);
      });
      this.setState({ society: temp });
    } else if (filter === 4) {
      let temp = [];
      this.society.forEach((data) => {
        if (data.category === "miscellaneous") temp.push(data);
      });
      this.setState({ society: temp });
    }
  };

  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/society-list`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      this.society = data.data.society_list;
      this.setState({ society: data.data.society_list, isLoaded: true });
    });
  };

  render() {
    return (
      <>
        <h2 className="director-heading">Societies in the college</h2>
        <div className="filter-container">
          <div
            className={`filter-content ${
              this.state.isFilter === 0 ? "filter-active" : ""
            }`}
            onClick={() => this.toggleFilter(0)}
          >
            All
          </div>
          <div
            className={`filter-content ${
              this.state.isFilter === 1 ? "filter-active" : ""
            }`}
            onClick={() => this.toggleFilter(1)}
          >
            Technical
          </div>
          <div
            className={`filter-content ${
              this.state.isFilter === 2 ? "filter-active" : ""
            }`}
            onClick={() => this.toggleFilter(2)}
          >
            Religious
          </div>
          <div
            className={`filter-content ${
              this.state.isFilter === 3 ? "filter-active" : ""
            }`}
            onClick={() => this.toggleFilter(3)}
          >
            Cultural
          </div>
          <div
            className={`filter-content ${
              this.state.isFilter === 4 ? "filter-active" : ""
            }`}
            onClick={() => this.toggleFilter(4)}
          >
            Miscellaneous
          </div>
        </div>
        {this.state.isLoaded ? (
          <div className="all-society-grid">
            {/* Start */}
            {this.state.society.length ? (
              <>
                {this.state.society.map((society, index) => (
                  <div key={`society-${index}`} className="all-society-content">
                    <div
                      className="all-society-images"
                      style={{ backgroundImage: `url(${society.logo})` }}
                    >
                      <div className="all-society-images-overlay">
                        <div></div>
                        <div className="all-society-name">{society.name}</div>
                      </div>
                    </div>
                    <div className="all-society-content-inner">
                      <div className="all-society-tagline">
                        {society.tag_line}
                      </div>
                      <div>
                        Student Lead:{" "}
                        <div className="all-society-lead">
                          {society.student_incharge}
                        </div>
                      </div>
                      <div>
                        Incharge:{" "}
                        <div className="all-society-lead">
                          {society.teacher_incharge}
                        </div>
                      </div>
                      <div className="all-society-margin">
                        <Link
                          to={`/society/${society.slug}`}
                          onClick={closeNavBarProps}
                          className="all-society-know-more"
                        >
                          Know More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <h3>No Society :(</h3>
            )}
            {/* End */}
          </div>
        ) : (
          <Loader />
        )}
      </>
    );
  }
}

export default AllSociety;
