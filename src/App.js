import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBarMenu from './Components/SideBarMenu';
import { Toaster } from 'react-hot-toast';
import Experience from './Components/Experience';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Publications from './Components/Publications';
import Gallery from './Components/Gallery';
import Achievements from './Components/Achievements';
import ReserachGuide from './Components/ReserachGuide';

const App = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [sidebarWidth, setSidebarWidth] = useState('0px');

  const updateSidebarWidth = () => {
    setSidebarWidth(sidebarCollapsed ? '0px' : '9.35rem');
  };

  useEffect(() => {
    updateSidebarWidth();
  }, [sidebarCollapsed]);

  return (
    <Router>
      <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fafafa' }}>
        <SideBarMenu onCollapse={(collapsed) => {
          setSidebarCollapsed(collapsed);
          updateSidebarWidth();
        }} />
        <div
          style={{
            flex: 1,
            marginLeft: `calc(${sidebarWidth})`,
            transition: 'margin-left 0.3s ease',
          }}
        >
          <Routes>
            <Route path="/experience" element={<Experience />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/" element={<AboutMe />} />
            <Route path="/education" element={<Education />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/researchGuide" element={<ReserachGuide />} />
          </Routes>
        </div>
      </div>
      <Toaster />
    </Router>
  );
};

export default App;
