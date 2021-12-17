import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReactGA from "react-ga";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "./LanguageSwitch";
import HamburgerMenu from "./HamburgerMenu";
import { navItems } from "../constants/constants";
import "./Nav.scss";

const Nav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    ReactGA.set({ page: pathname });
    ReactGA.pageview(pathname);
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
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`menu__item ${
                pathname === item.pathname && "menu__item--current"
              }`}
            >
              <Link className="menu__link" to={item}>
                {t(item.state.title)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
