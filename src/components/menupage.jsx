export default function Menu({ isMenuOpen, toggleMenu }) {
  return (
    <div className={`fullpage-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className="close-button" onClick={toggleMenu}>
        &times; {/* Cross button */}
      </div>
      {/* Add menu content here */}
      <div className="menu-content">
        <h1>Menu</h1>
        <p>Content goes here</p>
      </div>
    </div>
  );
}
