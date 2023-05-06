import React, { useState } from 'react';
import '../styles/Headers.css';

const Head = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <header>
        <nav className={`navbar navbar-expand-lg ${isNavOpen ? 'open' : ''}`}>
          <div className="container">
            <a className="navbar-brand brandIcon" href="/">
              <h2
                style={{
                  fontSize: '36px',
                  overflow: 'hidden',
                  fontFamily: 'sans-serif',
                  color: 'black',
                  fontWeight: '900',
                }}
              >
                TBTTP
              </h2>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleNav}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${
                isNavOpen ? 'show' : ''
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item navItems active text">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>

                <li className="nav-item navItems text">
                  <a className="nav-link" href="/Form">
                    Form
                  </a>
                </li>

                <li className="nav-item navItems text">
                  <a className="nav-link" href="/About">
                    About
                  </a>
                </li>
                <li className="nav-item navItems text">
                  <a className="nav-link" href="/Region">
                    Regions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Head;
