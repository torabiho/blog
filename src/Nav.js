import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const menuItems = [
  { title: "home", link: "/" },
  { title: "page2", link: "/page2" },
  { title: "page3", link: "/page3" },
  { title: "page4", link: "/page4" },
  { title: "page5", link: "/page5" },
];

const Nav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <nav className="menu-container">
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
  );
};

export default Nav;
