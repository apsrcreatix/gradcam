/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import logo from '../static/img/rgb.png';
function Menu() {
  return (
    <div>
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
     <div className="navbar is-black" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://github.com/apsrcreatix">
      <img src={logo} width="30" height="40" alt="logo rbg"/>
    </a>
    
    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item">
        Gradcam
      </a>

  
    </div>
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Try Gradcam. It's fun! &amp;hashtags=apsrcreatix&amp;url=http://github.com/apsrcreatix&amp;via=apsrsince97">
              <span class="icon">
                <i class="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p className="control">
          <a href="https://bulma.io">
  <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="auto" height="24"/>
</a>
            </p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Menu;
