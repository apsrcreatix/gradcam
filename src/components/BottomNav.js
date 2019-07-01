/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function BottomNav(props) {
  return (
    <div>
  <div className="hero-foot">
    <nav className="tabs is-boxed is-fullwidth">
      <div className="container">
        <ul>
          <li name="Home" className={props.activeOption==="Home"?"is-active":""} onClick={props.handleActiveOption}><a>Home</a></li>
          <li name="Settings" className={props.activeOption==="Settings"?"is-active":""} onClick={props.handleActiveOption}><a>Settings</a></li>
          <li name="About" className={props.activeOption==="About"?"is-active":""} onClick={props.handleActiveOption}><a>About</a></li>
        </ul>
      </div>
    </nav>
  </div>
    </div>
  );
}

export default BottomNav;
