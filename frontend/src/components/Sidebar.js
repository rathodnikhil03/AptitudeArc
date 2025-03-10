import React from "react";
import { Link } from "react-router-dom";
// import { FaHome, FaGlobe, FaUserTie, FaUsers, FaFileAlt, FaMicrochip } from "react-icons/fa";
// import { PiExam } from "react-icons/pi";
// import { IoMdCalculator } from "react-icons/io";
// import { BsGraphUp, BsChatDots, BsCpu, BsBook } from "react-icons/bs";
// import { TbAbc } from "react-icons/tb";
// import { MdOutlineScience } from "react-icons/md";
import "../styles/Sidebar.css";

const Sidebar = () => {
  return (

    <aside className="sidebar">
    
    <div className="flex justify-center mb-6">
      <img src="/baki.jpg" alt="AptitudeArc" className="w-40" />
    </div>

  
      <ul>
      <li><Link to="/">Home</Link></li>
        <li><Link to="/general-aptitude">General Aptitude</Link></li>
        <li><Link to="/interview">Interview</Link></li>
        <li><Link to="/engineering">Engineering</Link></li>
        <li><Link to="/programming">Programming</Link></li>
        <li><Link to="/arithmetic">Arithmetic Aptitude</Link></li>
        <li><Link to="/data-interpretation">Data Interpretation</Link></li>
        <li><Link to="/verbal-ability">Verbal Ability</Link></li>
        <li><Link to="/logical-reasoning">Logical Reasoning</Link></li>
        <li><Link to="/verbal-reasoning">Verbal Reasoning</Link></li>
        <li><Link to="/nonverbal-reasoning">Nonverbal Reasoning</Link></li>
        <li><Link to="/online-tests">Online Tests</Link></li>
        <li><Link to="/current-affairs">Current Affairs</Link></li>

        <li><Link to="/general-knowledge">General Knowledge</Link></li>
        <li><Link to="/hr-interview">HR Interview</Link></li>
        <li><Link to="/group-discussion">Group Discussion</Link></li>
        <li><Link to="/placement-papers">Placement Papers</Link></li>
        <li><Link to="/technical-interview">Technical Interview</Link></li>
      </ul>
    </aside>
  
  );
};

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

export default Sidebar;







 