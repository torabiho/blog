import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "./HamburgerMenu.scss";

const HamburgerMenu = ({ shouldExpand, onExpand }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [pathname]);

  return (
    <>
      <input
        id="click-reciever"
        type="checkbox"
        checked={shouldExpand}
        onChange={onExpand}
      />
      <div
        className="hamburger-wrapper"
        data-aos="hamburger-color-animation"
        data-aos-anchor=".hamburger-trigger"
        data-aos-offset="250"
        data-aos-anchor-placement="top-center"
      >
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </div>
    </>
  );
};

export default HamburgerMenu;
