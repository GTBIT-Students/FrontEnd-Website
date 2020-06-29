import React, { Component } from "react";

class Library extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">Library and Book Bank</h2>
        <div className="director-page-main-content">
          GTBIT library has a well equipped library with a collection of more
          than 53,000 books.
        </div>
        <div className="facility-page-image-container">
          <div className="facility-page-image-1"></div>
          <div className="facility-page-image-2-container">
            <div className="facility-page-image-2"></div>
            <div className="facility-page-image-2"></div>
          </div>
        </div>
        <div className="director-page-main-content">
          <p>
            Apart from books library also subscribes a large number of national
            and international online and print journals, wide variety of
            magazines, newspapers and non-book materials. GTBIT library support
            the teaching, research and extension programmes of the Institute.
            All Student, Faculty and Staff members are entitled to make use of
            the library facilities on taking library membership. Library aims to
            provide wide and efficient library and information services to the
            users.
          </p>
          <br />
          <p>
            <ul style={{ listStyle: "none" }}>
              <p className="director-page-main-content-designation">
                Collection:
              </p>
              <li>• Books</li>
              <li>• Research Journals (Print and Online) and Periodicals.</li>
              <li>• Reference Books.</li> <li>• Magazines and News Papers.</li>
              <li>• CD’s DVD’s etc. </li>
            </ul>
            <ul style={{ listStyle: "none" }}>
              <p className="director-page-main-content-designation">
                Library Services:
              </p>
              <li>• Reprographic service</li> <li>• Internet facility</li>
              <li>
                • Online access to selected Journals through IEEE aspp, Springer
                Link online
              </li>
              <li>• Database search through OPAC and Internet</li>
              <li>• Current Awareness Service</li> <li>• Reference Service</li>
              <li>• ILL Service through DELNET.</li>
            </ul>
          </p>
          <br />
          <p className="director-page-main-content-designation">
            BOOK REQUISITION SUBMISSION DATE:
          </p>
          <div>Odd Semester: April 30</div>
          <div>Even Semester: September 30</div>
          <br />

          <p className="director-page-main-content-designation">
            Library Contact Information
          </p>
          <div>
            Phone: <a href="tel:911145599900">+91 11 45599900 ext. 248</a>
          </div>
          <div>
            Fax: <a href="tel:911125136819">+91 11 25136819</a>
          </div>
          <div>
            Email:{" "}
            <a href="mailto:gtbitlibrary@gmail.com">gtbitlibrary@gmail.com</a>
          </div>
          <br />

          <p className="director-page-main-content-designation">
            Library Hours : 9.00 am to 7.00 pm ( Saturday and Sunday Closed)
          </p>
        </div>
      </>
    );
  }
}

export default Library;
