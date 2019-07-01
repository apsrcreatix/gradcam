/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
function GradientBox(props) {
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
