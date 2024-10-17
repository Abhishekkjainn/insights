import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Mainbar from './components/mainbar';
import Menu from './components/menupage';
import Sidebar from './components/sidebar';

function App() {
  // State to control the visibility of the full-page menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      {/* Wrapper for Sidebar and Mainbar */}
      <div className="layout">
        <Mainbar />
        <Sidebar />
      </div>
      {/* Full-page Menu */}
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </>
  );
}

export default App;
