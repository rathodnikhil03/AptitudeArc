import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/AptitudeArc.jpg";
import "../styles/Sidebar.css"; // Ensure this file is correctly linked

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="logo-container">
      <img src={logo} alt="AptitudeArc Logo" className="sidebar-logo" />
      </div>


      {/* Sidebar Navigation */}
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/general-aptitude" activeClassName="active-link">
            General Aptitude
          </NavLink>
        </li>
        <li>
          <NavLink to="/interview" activeClassName="active-link">
            Interview
          </NavLink>
        </li>
        <li>
          <NavLink to="/engineering" activeClassName="active-link">
            Engineering
          </NavLink>
        </li>
        <li>
          <NavLink to="/programming" activeClassName="active-link">
            Programming
          </NavLink>
        </li>
        <li>
          <NavLink to="/arithmetic" activeClassName="active-link">
            Arithmetic Aptitude
          </NavLink>
        </li>
        <li>
          <NavLink to="/data-interpretation" activeClassName="active-link">
            Data Interpretation
          </NavLink>
        </li>
        <li>
          <NavLink to="/verbal-ability" activeClassName="active-link">
            Verbal Ability
          </NavLink>
        </li>
        <li>
          <NavLink to="/logical-reasoning" activeClassName="active-link">
            Logical Reasoning
          </NavLink>
        </li>
        <li>
          <NavLink to="/verbal-reasoning" activeClassName="active-link">
            Verbal Reasoning
          </NavLink>
        </li>
        <li>
          <NavLink to="/nonverbal-reasoning" activeClassName="active-link">
            Nonverbal Reasoning
          </NavLink>
        </li>
        <li>
          <NavLink to="/online-tests" activeClassName="active-link">
            Online Tests
          </NavLink>
        </li>
        <li>
          <NavLink to="/current-affairs" activeClassName="active-link">
            Current Affairs
          </NavLink>
        </li>
        <li>
          <NavLink to="/general-knowledge" activeClassName="active-link">
            General Knowledge
          </NavLink>
        </li>
        <li>
          <NavLink to="/hr-interview" activeClassName="active-link">
            HR Interview
          </NavLink>
        </li>
        <li>
          <NavLink to="/group-discussion" activeClassName="active-link">
            Group Discussion
          </NavLink>
        </li>
        <li>
          <NavLink to="/placement-papers" activeClassName="active-link">
            Placement Papers
          </NavLink>
        </li>
        <li>
          <NavLink to="/technical-interview" activeClassName="active-link">
            Technical Interview
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;


// import { FaHome, FaGlobe, FaUserTie, FaUsers, FaFileAlt, FaMicrochip } from "react-icons/fa";
// import { PiExam } from "react-icons/pi";
// import { IoMdCalculator } from "react-icons/io";
// import { BsGraphUp, BsChatDots, BsCpu, BsBook } from "react-icons/bs";
// import { TbAbc } from "react-icons/tb";
// import { MdOutlineScience } from "react-icons/md";

// const Sidebar = () => {
//   return (
    // <div className="w-64 bg-white h-screen p-4 border-r shadow-md fixed">
    //   {/* Logo */}
    //   <div className="flex justify-center mb-6">
    //     <img src="/logo.png" alt="AptitudeArc" className="w-40" />
    //   </div>

//       {/* Navigation Menu */}
//       <ul className="space-y-2 text-gray-700">
//         <MenuItem to="/" icon={<FaHome />} text="Home" />
//         <MenuItem to="/arithmetic" icon={<IoMdCalculator />} text="Arithmetic Aptitude" />
//         <MenuItem to="/data-interpretation" icon={<BsGraphUp />} text="Data Interpretation" />
//         <MenuItem to="/verbal-ability" icon={<BsChatDots />} text="Verbal Ability" />
//         <MenuItem to="/logical-reasoning" icon={<FaMicrochip />} text="Logical Reasoning" />
//         <MenuItem to="/verbal-reasoning" icon={<TbAbc />} text="Verbal Reasoning" />
//         <MenuItem to="/nonverbal-reasoning" icon={<BsCpu />} text="Nonverbal Reasoning" />

//         <hr className="my-2 border-gray-300" />

//         <MenuItem to="/online-tests" icon={<PiExam />} text="Online Tests" />
//         <MenuItem to="/current-affairs" icon={<FaGlobe />} text="Current Affairs" />
//         <MenuItem to="/general-knowledge" icon={<BsBook />} text="General Knowledge" />

//         <hr className="my-2 border-gray-300" />

//         <MenuItem to="/hr-interview" icon={<FaUserTie />} text="HR Interview" />
//         <MenuItem to="/group-discussion" icon={<FaUsers />} text="Group Discussion" />
//         <MenuItem to="/placement-papers" icon={<FaFileAlt />} text="Placement Papers" />
//         <MenuItem to="/technical-interview" icon={<MdOutlineScience />} text="Technical Interview" />
//       </ul>
//     </div>
//   );
// };

// // Reusable Sidebar Menu Item Component
// const MenuItem = ({ to, icon, text }) => {
//   return (
//     <li>
//       <Link to={to} className="flex items-center px-4 py-2 rounded-lg hover:bg-green-100 cursor-pointer">
//         <span className="text-lg mr-3">{icon}</span>
//         <span className="font-medium">{text}</span>
//       </Link>
//     </li>
//   );
// };





 