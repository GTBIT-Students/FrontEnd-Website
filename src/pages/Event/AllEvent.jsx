import React, { Component } from "react";
import { Link } from "react-router-dom";
import DateConverter from "../../month";
import Loader from "../../components/Loader/loader";

class AllEvent extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="director-heading notices-heading">Latest Events</div>

        <div className="all-notice-table-container">
          <div className="table-head-container">
            <div>Sr&nbsp;&nbsp;</div>
            <div>Events</div>
            <div className="hide-on-mobile">Updated On</div>
          </div>
          {/* Start */}
          {this.props.innerEvent.length ? (
            <>
              {this.props.innerEvent.map((elmt, index) => (
                <div className="table-content" key={`event-${index}`}>
                  <div>{index + 1}.&nbsp;&nbsp;&nbsp;</div>
                  <Link className="notice-text" to={`/event/${elmt.slug}`}>
                    {elmt.event_name}
                  </Link>
                  <div className="display-in-mobile"></div>
                  <div className="all-notice-date">
                    {DateConverter(elmt.created_date)}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <Loader />
          )}
          {/* End */}
        </div>
      </>
    );
  }
}

export default AllEvent;
