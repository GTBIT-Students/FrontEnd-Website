import React, { Component } from "react";
import axios from "axios";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import API_Domain from "../../baseDomain";
import Loader from "../../components/Loader/loader";
import SideNavObj from "../../SideNavBar";
import "./assets/css/alumni.css";

class AlumniList extends Component {
  state = {
    alumni: [],
  };

  componentDidMount = () => {
    axios({
      url: `${API_Domain.route}/alumni-list`,
      method: "GET",
      headers: {
        Authorization: `Token ${API_Domain.API_Token}`,
      },
    }).then((data) => {
      this.setState({ alumni: data.data.alumni });
    });
  };
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">The Alumni</h2>
              <div className="director-page-main-content">
                {this.state.alumni.length ? (
                  <div className="achievements-container-grid">
                    {this.state.alumni.map((alumni, index) => (
                      <div
                        className="achievements-content-container"
                        key={`Alumni-${index}`}
                      >
                        <div className="achievements-image-content-grid">
                          <div
                            className="achievement-image"
                            style={{
                              backgroundImage: `url(${alumni.image})`,
                            }}
                          ></div>
                          <div className="achievement-text three-dots">
                            <span className="bold">{alumni.name}</span>
                            <br />
                            <span>{alumni.batch}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <Loader />
                )}
              </div>
              <br />
              <h2 className="director-heading">Alumni speaks</h2>
              <div className="alumni-speaks-grid">
                <div className="container-responsive">
                  <iframe
                    title="ASAH"
                    className="video-responsive"
                    src="https://www.youtube.com/embed/JSzGteJ-snY"
                    frameborder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="container-responsive">
                  <iframe
                    title="ASAH"
                    className="video-responsive"
                    src="https://www.youtube.com/embed/RUTvCbvs5S4"
                    frameborder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="container-responsive">
                  <iframe
                    title="ASAH"
                    className="video-responsive"
                    src="https://www.youtube.com/embed/aw9hgmuwjzE"
                    frameborder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <br />
              <p className="director-page-main-content-designation">
                Are you an alumni of GTBIT?{" "}
                <a
                  href="https://forms.gle/DgieXeLXPhAWhgNV7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill up the form
                </a>
              </p>
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

export default AlumniList;
