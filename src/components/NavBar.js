/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import logo from '../static/img/rgb.png';
function Menu() {
  return (
    <div>
<header className="navbar is-black">

      <div className="container">
        <div className="navbar-brand">
        <a className="navbar-item" href="https://github.com/apsrcreatix">
      <img src={logo} width="30" height="40" alt="logo rbg"/>
    </a>       
          <div className="navbar-end">
            <span className="navbar-item">
              <a className="button is-inverted">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
                <span>Github</span>
              </a>
            </span>
          </div>
       
        </div>
      </div>
    </header>
    </div>
  );
}

export default Menu;
