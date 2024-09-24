"use client"
import React, { useState } from 'react';

const ButtonToggle = () => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const handleClick = () => {
    setIsToggled((prevState) => !prevState);
    const headerLeft = document.querySelector('.header--left');
    if (headerLeft) {
      headerLeft.classList.toggle('header--open');
    }
  };

  return (
    <button className="button-toggle" id="buttonToggle" onClick={handleClick}>
      <span></span>
    </button>
  )
}

export default ButtonToggle