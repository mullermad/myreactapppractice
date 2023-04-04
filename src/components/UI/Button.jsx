import React from 'react'
import './Button.css';
const Button = (props) => {
  return (
    <div className="my-button">
      <button onClick={props.onClick} className='button'>{props.buttonName}</button>
    </div>
  );
}

export default Button;