import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Navbar = ({ title, mode, toggleMode }) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${
        mode ? "dark" : "light"
      } bg-${mode ? "dark" : "light"}`}
    >
      <div className='container-fluid'>
        <NavLink className='navbar-brand' to='/'>
          {title}
        </NavLink>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                aria-current='page'
                to='/'
                activeClassName='active'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                className='nav-link'
                to='/about'
                activeClassName='active'
              >
                About
              </NavLink>
            </li>
          </ul>
          <form className='d-flex'>
            {/* <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            /> */}
          </form>

          <div
            className={`form-check form-switch text-${mode ? "light" : "dark"}`}
          >
            <input
              className='form-check-input'
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
              onClick={toggleMode}
            />
            <label
              className='form-check-label'
              htmlFor='flexSwitchCheckDefault'
            >
              {`${mode ? "Disable" : "Enable"} `} Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Text Utilities",
};

export default Navbar;
