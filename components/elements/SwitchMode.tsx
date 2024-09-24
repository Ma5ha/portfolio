"use client"
import React from "react";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const SwitchMode = () => {
  const {theme,setTheme}=useTheme()
  return (
    <div className="header__switch-mode">
      <div className="switch-mode">
        <button
        className="switch-mode__btn"
          onClick={()=>setTheme(theme==="dark"? "light":"dark")}>
          <BsFillSunFill 
            className="switch-mode__icon switch-mode__icon--dark"/>
          <BsMoonFill 
          className="switch-mode__icon switch-mode__icon--light "/>
        </button>
      </div>
    </div>
  );
};

export default SwitchMode;
