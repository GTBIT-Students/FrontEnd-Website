const NavBarColumns = {
  discover: [
    {
      name: "Campus Life",
      columns: [
        { name: "Administration", link: "/administration" },
        { name: "Campus Provisions", link: "/campus-provision" },
        { name: "Virtual Tour", link: "/virtual-tour" },
        { name: "GATES - Annual Fest of GTBIT", link: "/gates" },
      ],
    },
    {
      name: "Facilities",
      columns: [
        { name: "Medical Counsellor", link: "/facilities/medical-counsellor" },
        {
          name: "Computing Facilities",
          link: "/facilities/computing-facility",
        },
        { name: "Labs Rooms", link: "/facilities/lab" },
        {
          name: "Library and Book Bank",
          link: "/facilities/library-and-book-bank",
        },
        {
          name: "Industry Institute Partnership Cell (IIPC)",
          link: "/facilities/iipc",
        },
      ],
    },
    {
      name: "Departments",
      columns: [
        {
          name: "Computer Science Department",
          link: "/department/computer-science",
        },
        {
          name: "Information Technology Department",
          link: "/department/information-technology",
        },
        {
          name: "Electronics and Communication Department",
          link: "/department/electronics-and-communication",
        },
        {
          name: "Electrical and Electronics Department",
          link: "/department/electrical-and-electronics",
        },
      ],
    },
    {
      name: "Important Links",
      columns: [
        { name: "Placements", link: "/placements" },
        { name: "Achievements", link: "/achievements" },
        { name: "Know Us", link: "/know-us" },
        { name: "Student Grievance", link: "/student-grievance" },
      ],
    },
    {
      name: "Login Panels",
      columns: [
        { name: "Admin Login", link: "https://admin.gtbit.org", anchor: true },
        {
          name: "Teachers Login",
          link: "https://teacher.gtbit.org",
          anchor: true,
        },
        {
          name: "Students Login",
          link: "https://student.gtbit.org",
          anchor: true,
        },
      ],
    },
    {
      name: "Know More",
      columns: [
        { name: "Mission and Aim", link: "/mission-and-aim" },
        { name: "Vision and Core Values", link: "/vision-and-core-values" },
        { name: "Privacy Policy", link: "/privacy-policy" },
        { name: "Code of Conduct", link: "/code-of-conduct" },
      ],
    },
  ],
  about: [
    {
      name: "UG Programmes",
      columns: [
        {
          name: "Computer Science Engineering (CSE)",
          link: "/programs/computer-science",
        },
        {
          name: "Information Technology (IT)",
          link: "/programs/information-technology",
        },
        {
          name: "Electronics and Communication Engineering (ECE)",
          link: "/programs/electronics-and-communication",
        },
        {
          name: "Electrical and Electronic Engineering (EEE)",
          link: "/programs/electrical-and-electronics",
        },
      ],
    },
    {
      name: "Academics",
      columns: [
        { name: "Examination Schedule", link: "/examination/schedule" },
        { name: "Exam Results", link: "/examination/result" },
        { name: "Academic Calendar", link: "/examination/calendar" },
      ],
    },
    {
      name: "Societies",
      columns: [
        { name: "Technical Societies", link: "/society/#technical" },
        { name: "Cultural Societies", link: "/society/#cultural" },
        { name: "Religious Societies", link: "/society/#religious" },
        { name: "More Societies", link: "/society/#miscellaneous" },
      ],
    },
    {
      name: "Quick Links",
      columns: [
        {
          name: "Online Skill Test by MHRD",
          link: "https://www.youth4work.com/onlinetalenttest",
          anchor: true,
        },
        {
          name: "Unnat Bharat",
          link: "http://unnatbharatabhiyan.gov.in:8080/new-website/",
          anchor: true,
        },
        { name: "MOOCS Swayam", link: "https://swayam.gov.in/", anchor: true },
        {
          name: "AICTE Faculty Feedback",
          link: "https://www.aicte-india.org/feedback/faculty.php",
          anchor: true,
        },
        {
          name: "AICTE Student Feedback",
          link: "https://www.aicte-india.org/feedback/students.php",
          anchor: true,
        },
      ],
    },
    {
      name: "Other Links",
      columns: [
        { name: "Admissions", link: "/admissions" },
        {
          name: "Mandatory Disclosure",
          link: "https://gtbit.org/assets/mandatory_disclosure.pdf",
          anchor: true,
        },
        { name: "Photo Gallery", link: "/gallery" },
        { name: "Contact Us", link: "/contact-us" },
      ],
    },
    {
      name: "Other Information",
      columns: [
        { name: "Online Fee Payment", link: "/online-fee-payment" },
        {
          name: "Download Brochure",
          link: "https://gtbit.org/assets/brochure.pdf",
          anchor: true,
        },
        { name: "Affiliated University", link: "/affiliated-university" },
        { name: "Student Developer Team", link: "/student-developer-team" },
        // { name: "Newsletters", link: "/newsletter" },
      ],
    },
  ],
  login: [
    {
      name: "Admin Login",
      description:
        "Only to be logined by admins. Allows admin to control various features of the website. Manage students, assignment, college and university updates and much more.",
      link: "https://admin.gtbit.org",
      btnText: "Login",
    },
    {
      name: "Teachers Login",
      description:
        "Allows teachers to view a student, assign some task to them, update assignments, homework and much more.",
      link: "https://teacher.gtbit.org",
      btnText: "Login",
    },
    {
      name: "Students Login",
      description:
        "Login for Student of GTBIT only. Provides a platform for viewing their current record in GGSIPU. Allow them to view their assignments, homework, mark attendance, attend online classes, view their library status and much more.",
      link: "https://student.gtbit.org",
      btnText: "Login",
    },
  ],
};

export default NavBarColumns;
