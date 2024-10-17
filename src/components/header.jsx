export default function Header({ toggleMenu }) {
  return (
    <div className="headermain">
      <div className="company">
        <img src="/logo.png" alt="mainlogo" className="mainlogo" />
        <div className="companyname">Insights</div>
      </div>
      <div className="search">
        <div className="searchdiv">
          <input
            type="text"
            name="search"
            id="searchquery"
            className="searchfield"
            placeholder="Search Blogs"
          />
          <div className="searchbutton">
            <img
              src="/search.png"
              alt="search icon"
              className="searchbuttonicon"
            />
          </div>
        </div>
      </div>
      <div className="actions">
        <div className="menubutton" onClick={toggleMenu}>
          <img src="/menu.png" alt="Menu icon" className="menubuttonicon" />
        </div>
        <div className="profile">
          <img src="/profile.jpg" alt="profile" className="profileicon" />
        </div>
      </div>
    </div>
  );
}
