import React from 'react';
import HeaderIcon from '../../assets/headerIcon.svg'
import './Header.css';
function Header() {
  return (
    <div>
      <header className="header">
        <div className="container header__container">
          <div className="header-icon">
            <img src={HeaderIcon} alt="headerIcon" width={177} />
          </div>
          <div className="header-nav">
            <ul className="header-list">
              <li className="active">Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Pages</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
