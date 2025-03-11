import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBars, FaSearch, FaShareAlt, FaSignOutAlt, FaSun, FaMoon } from 'react-icons/fa';
import Sidebar from './Sidebar';
import '../styles/Home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve the user's preference from localStorage
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode === 'true' || (savedMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // Sidebar visibility state

  const categories = [
    {
      title: 'General Aptitude',
      id: 'general-aptitude',
      items: ['Arithmetic', 'DataInterpretation'],
    },
    {
      title: 'Verbal and Reasoning',
      id: 'verbal-reasoning',
      items: ['VerbalAbility', 'LogicalReasoning'],
    },
  ];

  const handleItemClick = (categoryId, itemName) => {
    navigate(`/category/${categoryId}/item/${itemName}`);
  };

  const handleShare = () => {
    const currentUrl = window.location.href;
    if (navigator.share) {
      // Web Share API: Mobile devices
      navigator
        .share({
          title: 'AptitudeArc',
          text: 'Check out this amazing site for aptitude questions and answers!',
          url: currentUrl,
        })
        .then(() => console.log('Share successful'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      // Fallback for desktop
      const shareText = `Check out this amazing site: ${currentUrl}`;
      const encodedText = encodeURIComponent(shareText);
      const encodedUrl = encodeURIComponent(currentUrl);
      const shareUrl = `https://social-plugins.line.me/lineit/share?url=${encodedUrl}&text=${encodedText}`;
      window.open(shareUrl, '_blank', 'noopener,noreferrer,width=550,height=550');
    }
  };

  const toggleBrightness = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', newMode); // Save user preference
      return newMode;
    });
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prevVisibility) => !prevVisibility);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove authentication token
    localStorage.removeItem('user'); // Remove user data if stored
    navigate('/login'); // Redirect to the login page
  };
  

  // Apply dark mode class to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className={`home-container ${isDarkMode ? 'dark' : ''}`}>
      <Sidebar isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
      <div className="main-content">
        <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
          <div className="navbar-left">
            <button className="icon-button" onClick={toggleSidebar}>
              <FaBars className="icon menu-icon" />
            </button>
            <h2 className="logo">AptitudeArc</h2>
          </div>
          <div className="navbar-center">
            <div className="search-box">
              <input type="text" className="search-input" placeholder="Search categories..." />
              <FaSearch className="icon search-icon" />
            </div>
          </div>
          <div className="navbar-right">
            <button className="icon-button" onClick={handleShare}>
              <FaShareAlt className="icon" />
            </button>
            <button className="icon-button" onClick={toggleBrightness}>
              {isDarkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
            </button>
            <button className="icon-button" onClick={handleLogout}>
              <FaSignOutAlt className="icon" />
            </button>
          </div>
        </nav>
        <div className="welcome-section">
          <h2>
            Welcome to <span className="highlight">AptitudeArc</span>
          </h2>
          <p>Aptitude questions and answers for your placement interviews and competitive exams!</p>
        </div>
        <div className="grid-container">
          {categories.map((category, index) => (
            <div key={index} className={`grid-card ${isDarkMode ? 'dark' : ''}`}>
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item, i) => (
                  <li key={i} onClick={() => handleItemClick(category.id, item)}>
                    {item.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
