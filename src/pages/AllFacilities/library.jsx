import React, { Component } from "react";

class Library extends Component {
  state = {};
  render() {
    return (
      <>
        <h2 className="director-heading">Library and Book Bank</h2>
        <div className="director-page-main-content">
          GTBIT library has a well equipped library with a collection of more
          than 60,000 books.
        </div>
        {/* <div className="facility-page-image-container">
          <div className="facility-page-image-1"></div>
          <div className="facility-page-image-2-container">
            <div className="facility-page-image-2"></div>
            <div className="facility-page-image-2"></div>
          </div>
        </div> */}
        <div className="director-page-main-content">
          <p>
            To help the students to make knowledgeable decisions, Guru Tegh
            Bahadur Institute of Technology provides latest information in the
            field of on going research in the form of peer reviewed academic
            journals, books and reports
          </p>
          <p>
            It has a specialised collection of books, journals and other
            resources in the field of Engineering and Technology. Library
            subscribes to national and international journals in print and
            electronic form. The library has Book Bank facility for all the
            students in which books are issued for the whole semester as this
            being a <b>semester based scheme</b>.
          </p>
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

          <p className="director-page-main-content-designation">
            Library Services:
          </p>
          <ul style={{ listStyle: "none" }}>
            <li>• Circulation Service</li>
            <li>• Internet Service</li>
            <li>• Reference Service</li>
            <li>• Circulation Service</li>
            <li>• OPAC (Online Public Access Catalogue)</li>
            <li>• Inter Library Loan Service</li>
          </ul>
          <br />
          <p className="director-page-main-content-designation">Collection:</p>
          <ul style={{ listStyle: "none" }}>
            <li>• Books</li>
            <li>• Research Journals (Print and Online) and Periodicals.</li>
            <li>• Reference Books.</li>
            <li>• Magazines and News Papers.</li>
            <li>• CD’s DVD’s etc. </li>
          </ul>
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
            Library Timings: 10:00 am to 4:00 pm (On all working days)
          </p>
          <br />
          <h3>
            <u>Reopening of Library</u>
          </h3>
          <p>
            Book bank (Issue/return) facility is now available in library. Due
            to COVID-19 Pandemic for the safety of staff and students, it is
            requested to maintain social distancing while using library.
          </p>
        </div>
      </>
    );
  }
}

export default Library;
