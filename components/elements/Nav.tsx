"use client";
import React from "react";
import { links } from "@/data/Header";
import Link from "next/link";
import { BsXLg } from "react-icons/bs";
import { useActiveSectionContext } from "@/context/ActiveContextSection";
import { usePathname } from "next/navigation";
const Nav = () => {
  const { activeSection, setActiveaction, setTimeOfLastClick } =
  useActiveSectionContext();
  const pathname = usePathname();

  const handleCrossClick=()=>{
    const headerLeft = document.querySelector('.header--left');
    if (headerLeft) {
      headerLeft.classList.remove('header--open');
    }
  }

  const handleNavLinkClick = () => {
    const headerLeft = document.querySelector('.header--left');
    if (headerLeft) {
      headerLeft.classList.remove('header--open');
    }
  };
  return (
    <nav className="header__nav">
      <div className="header__nav-cross" onClick={handleCrossClick}>
        <BsXLg />{" "}
      </div>
      <ul className="nav">
        {links?.map((link, index) => {
          const href = pathname !=='/' ? `/${link?.href}` : link?.href;
          return (
            <li key={index} className="nav__item ">
              <Link
                href={href}
                className={`nav__link  ${
                  activeSection === link?.label ? "nav__link--active" : "" }`} onClick={() => {
                  setActiveaction(link?.label);
                  setTimeOfLastClick(Date.now());
                  handleNavLinkClick()
                }}
              >
                {link?.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
