import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav">
          <a href="/" className="logo">
            <img src="../Assets/navLogo.svg" alt="Positanonboard Logo" />
          </a>
          <input className="menu-btn" id="menu-btn" type="checkbox" />
          <label for="menu-btn" className="menu-icon">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Tours">Tours</a>
            </li>
            <li>
              <a href="#About">About us</a>
            </li>
            <li>
              <a href="#Photo">Photo Gallery</a>
            </li>
            <li>
              <a href="#Contacts">Contact us </a>
            </li>
          </ul>
        
      </nav>
    </>
  );
}

export default Navbar;
