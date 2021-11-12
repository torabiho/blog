import React from "react";
import "./HamburgerMenu.scss";

const HamburgerMenu = ({ shouldExpand, onExpand }) => {
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
        data-aos-anchor="#home-gallery"
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
