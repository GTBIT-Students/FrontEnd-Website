import React, { Component } from "react";
import SideNavPane from "../../components/SideNavPane/SideNavPane";
import SideNavObj from "../../SideNavBar";
import "./assets/css/contactUs.css";

class ContactUs extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-big">
          <div className="single-society-container-grid">
            <div>
              <h2 className="director-heading">Contact Us</h2>
              <div className="director-page-main-content">
                <p className="director-page-main-content-designation">
                  Guru Tegh Bahadur Institute of Technology
                  <br />
                  G-8 Area, Rajouri Garden
                  <br />
                  New Delhi, 110064 (India)
                  <br />
                </p>
                <br />

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28015.45948494765!2d77.116482!3d28.631787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x68966aea6bc15b7e!2sGuru%20Tegh%20Bahadur%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1592329881025!5m2!1sen!2sus"
                  className="contact-us-gtbit-location"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="GTBIT college"
                ></iframe>

                <br />
                <br />
                <p className="director-page-main-content-designation">
                  Phone No: <a href="tel:911145599900">+91-11-45599900</a>
                  <br />
                  Email id:
                  <a href="mailto:gtbit@rediffmail.com">gtbit@rediffmail.com</a>
                  <br />
                </p>
                <br />
                <b>Note**</b>
                <p>
                  The admission in the different courses offered by the
                  institute is through the Common Entrance Test conducted by the
                  Guru Gobind Singh Indraprastha University (GGSIPU), New Delhi.
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

export default ContactUs;
