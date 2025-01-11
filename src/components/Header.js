import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-primary" style={{ padding: '20px 0' }}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <h1 className="text-white" style={{ margin: 0, textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)' }}>TODO LIST</h1>
          <div className="nav-links" style={{ display: 'flex', gap: '20px' }}>
            <Link to="/" className="text-white text-decoration-none" style={{ fontSize: '18px'  }}>Home</Link>
            <Link to="/about" className="text-white text-decoration-none" style={{ fontSize: '18px' }}>About</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;