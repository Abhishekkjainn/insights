export default function Menu({ isMenuOpen, toggleMenu }) {
  return (
    <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
      <div className="close-button" onClick={toggleMenu}>
        &times; {/* Cross button */}
      </div>
      <div className="menu-content">
        <div className="menutag" data-text="Home">
          Home
        </div>
        <div className="menutag" data-text="About">
          About
        </div>
        <div className="menutag" data-text="Portfolio">
          Portfolio
        </div>
        <div className="menutag" data-text="Contributions">
          Contributions
        </div>
        <div className="menutag" data-text="Contact">
          Contact
        </div>
        <div className="menutag" data-text="Services">
          Services
        </div>
        <div className="menutag" data-text="Testimonials">
          Testimonials
        </div>
      </div>
    </div>
  );
}
