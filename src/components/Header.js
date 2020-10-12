import React from "react";

function Header() {
  return (
    <header classNameName="l-header">
      <nav className="nav bd-grid bd-grid1">
        <div className="nav__icon" id="nav-show">
          <i className="bx bx-menu"></i>
        </div>
        <div>
          <a className="nav__logo" href="home">
            SHIVRAJ MUTTAGI
          </a>
        </div>

        <div className="nav__menu" id="nav-menu">
          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
          <ul className="nav__list">
            <li className="nav__item nav__item1">
              <a href="#home" className="nav__link nav__link1  active">
                HOME
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link ">
                SKILL SET
              </a>{" "}
            </li>
            <li className="nav__item">
              <a href="#works" className="nav__link ">
                WORKS
              </a>{" "}
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link ">
                ABOUT
              </a>{" "}
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link ">
                CONTACT
              </a>{" "}
            </li>
            <li className="nav__item">
              <a href="#interests" className="nav__link ">
                {" "}
                INTERESTS
              </a>{" "}
            </li>
            <li className="nav__item">
              <a className="nav__link " href="#home" style={{ cursor: "not-allowed" }}>
                REGISTER
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
