import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`vertical-navbar ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleNavbar}>
        <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
      </button>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active-link">
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
