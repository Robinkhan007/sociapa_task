import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header-container">
      <div className="top-banner">
        <p>
          We Here At Apis Keep Quality On Top Preference As We Believe Your
          Trust Is Our Presence.
        </p>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">
          <img src="ap1.png" alt="Logo" />
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#" onClick={closeMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                About Us
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Our Brand
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Investors
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Careers
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Media
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Sustainability
              </a>
            </li>
            <li>
              <a href="#" onClick={closeMenu}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="search-icon">
          <i className="fas fa-search"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
