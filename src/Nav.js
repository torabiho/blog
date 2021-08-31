import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const menuItems = [
  { title: "home", link: "/" },
  { title: "page2", link: "/page2" },
  { title: "What we offer", link: "/page2" },
  { title: "Our news", link: "/page2" },
  { title: "Contact us", link: "/page2" },
];

const Nav = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <nav className="menu-container">
      <ul className="menu__list">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedItem(index)}
            className={`menu__item ${
              selectedItem === index && "menu__item--current"
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
