/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import VanillaTilt from 'vanilla-tilt';

function GradientBox(props) {
  VanillaTilt.init(document.querySelectorAll(".dynamic-shadow"),{
    max:25,
    speed:500,
    glare:true,
    scale: 1.2,
    'max-glare':0.5
  });
  return (
    <div 
    style={{
        background: `${props.type}(${props.colors})`
      }} 
      className="dynamic-shadow" onClick={props.change}>
      </div>
  );
}

export default GradientBox;
