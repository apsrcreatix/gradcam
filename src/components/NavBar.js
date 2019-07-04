/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import logo from '../static/img/rgb.png';
function Menu(props) {
  return (
    <div>
<header className="navbar">

      <div className="container">
        <div className="navbar-brand">
        <a className="navbar-item" href="https://github.com/apsrcreatix">
      <img src={logo} width="30" height="40" alt="logo rbg"/>
    </a>       
          <div className="navbar-end">
            <span className="navbar-item">
            <div  className="field is-grouped is-grouped-multiline">
              <p className="control">
              <a className="button is-inverted">
                <span className="icon">
                  <i className="fab fa-github"></i>
                </span>
              </a>
              </p>
              <p className="control">
              <a className="button" onClick={props.onclick}>
                <span className="icon">
                  {<i className={props.timeFlag}></i>}
                </span>
              </a>
              </p>
              </div>
            </span>
          </div>
       
        </div>
      </div>
    </header>
    </div>
  );
}

export default Menu;
