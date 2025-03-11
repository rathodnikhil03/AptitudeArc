import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoryDetail from './components/CategoryDetail';
import GeneralAptitude from "./pages/GeneralAptitude";
import Interview from "./pages/Interview";
import Engineering from "./pages/Engineering";
import Programming from "./pages/Programming";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Arithmetic from "./pages/Arithmetic";
import DataInterpretation from "./pages/DataInterpretation";
import VerbalAbility from "./pages/VerbalAbility";
import SharePage from "./pages/SharePage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from './auth/LoginPage'; 
import RegisterPage from "./auth/RegisterPage";
import ForgotPasswordPage from "./auth/ForgotPasswordPage";
import TopicDetail from "./pages/TopicDetail"; // A new component for topic details
import "./styles/Home.css";
import "./styles/Navbar.css";
import "./styles/Sidebar.css";
import "./styles/GeneralAptitude.css";
import "./styles/Interview.css";
import "./styles/Engineering.css";
import "./styles/Programming.css";
import "./styles/Arithmetic.css";
import "./styles/DataInterpretation.css";
import "./styles/VerbalAbility.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/general-aptitude" element={<GeneralAptitude />} />
              <Route path="/interview" element={<Interview />} />
              <Route path="/engineering" element={<Engineering />} />
              <Route path="/programming" element={<Programming />} />
              <Route path="/arithmetic" element={<Arithmetic />} />
              <Route path="/data-interpretation" element={<DataInterpretation />} />
              <Route path="/verbal-ability" element={<VerbalAbility />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/share" element={<SharePage />} />
              <Route path="/category/:categoryId" element={<CategoryDetail />} />
              <Route path="/category/general-aptitude/item/arithmetic" element={<Arithmetic />} />
              <Route path="/category/general-aptitude/item/data-interpretation" element={<DataInterpretation />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />
              <Route path="/" element={<LoginPage />} /> {/* Default route */}
              <Route path="/topics/:topicName" element={<TopicDetail />} />
              </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
