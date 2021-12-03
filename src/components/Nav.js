import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";
import HamburgerMenu from "./HamburgerMenu";
import "./Nav.scss";

const menuItems = [
  { title: "nav-page1", link: "/" },
  { title: "nav-page2", link: "/page2" },
  { title: "nav-page3", link: "/page3" },
  { title: "nav-page4", link: "/page4" },
  { title: "nav-page5", link: "/page5" },
];

const Nav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);
  return (
    <>
      <LanguageSwitch />
      <nav className="menu-container">
        <HamburgerMenu
          shouldExpand={expanded}
          onExpand={() => setExpanded((prevState) => !prevState)}
        />
        <ul className="menu__list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`menu__item ${
                pathname === item.link && "menu__item--current"
              }`}
            >
              <Link to={item.link} className="menu__link">
                {t(item.title)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
