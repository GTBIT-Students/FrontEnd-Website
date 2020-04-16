import React, { Component } from "react";
import Loader from "../Loader/loader";
import { Link } from "react-router-dom";

class ImportantLinkBox extends Component {
  state = {
    isLoaded: true,
  };
  render() {
    return (
      <>
        <div className="event-container">
          <div className="event-heading">
            <span>Important Links</span>
          </div>
          <div className="event-content">
            <div className="event-inner-box-shadow"></div>
            {this.state.isLoaded ? (
              <>
                <div className="event-content-inner">
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">
                        Guru Gobind Singh Indraprastha University
                      </div>
                    </Link>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">
                        Guru Tegh Bahadur Memorial, New Delhi
                      </div>
                    </Link>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">Student Login</div>
                    </Link>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">Teacher Login</div>
                    </Link>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">Admin Portal</div>
                    </Link>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">
                        Latest New about the COVID-19 virus in world
                      </div>
                    </Link>
                  </div>
                  <div className="event-name">
                    <Link to="#">
                      <div className="event-title">Admission in IPU</div>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <Loader />
            )}
            <div className="event-inner-box-shadow"></div>
          </div>
        </div>
      </>
    );
  }
}

export default ImportantLinkBox;
