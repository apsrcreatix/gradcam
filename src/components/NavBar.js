/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import logo from '../static/img/rgb.png';
function Menu() {
  return (
    <div>
<header className="navbar is-black">
{
            document.addEventListener('DOMContentLoaded', () => {

                // Get all "navbar-burger" elements
                const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
              
                // Check if there are any navbar burgers
                if ($navbarBurgers.length > 0) {
              
                  // Add a click event on each of them
                  $navbarBurgers.forEach( el => {
                    el.addEventListener('click', () => {
              
                      // Get the target from the "data-target" attribute
                      const target = el.dataset.target;
                      const $target = document.getElementById(target);
              
                      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                      el.classList.toggle('is-active');
                      $target.classList.toggle('is-active');
              
                    });
                  });
                }
              
              })
        }
      <div className="container">
        <div className="navbar-brand">
        <a className="navbar-item" href="https://github.com/apsrcreatix">
      <img src={logo} width="30" height="40" alt="logo rbg"/>
    </a>
          <span className="navbar-burger burger" data-target="navbarMenuHeroC">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroC" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item">
              Documentation
            </a>
            <span className="navbar-item">
              <a className="button is-success is-inverted">
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
