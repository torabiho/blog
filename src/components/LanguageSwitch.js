import React from "react";
import { useTranslation } from "react-i18next";
import ReactGA from "react-ga";
import "./LanguageSwitch.scss";

const alternateLanguage = (lang) => {
  return lang === "fa" ? "en" : "fa";
};

const LanguageSwitch = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = () => {
    const newLang = alternateLanguage(i18n.language);
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang;
    ReactGA.event({
      category: "localization",
      action: "Switched language",
      value: newLang,
    });
  };
  return (
    <div className="language-switch">
      <label className="switch">
        <input
          type="checkbox"
          checked={i18n.language === "fa"}
          onChange={changeLanguage}
        />
        <span className="slider">{t(alternateLanguage(i18n.language))}</span>
      </label>
    </div>
  );
};

export default LanguageSwitch;
