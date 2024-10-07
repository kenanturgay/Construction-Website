import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; // CSS dosyanızı import ettiğinizden emin olun

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/" className="menu-item">Home</Link></li>
          <li><Link to="/about" className="menu-item">About</Link></li>
          <li><Link to="/projects" className="menu-item">Projects</Link></li>
          <li><Link to="/contact" className="menu-item">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
