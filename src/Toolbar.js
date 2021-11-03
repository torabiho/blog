import React, { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { useTranslation } from "react-i18next";
import "./Toolbar.scss";

const active = "active";
const listView = "listView";
const gridView = "gridView";
const dNone = "d-none";
const Toolbar = (props) => {
  const { t } = useTranslation();
  const [rangeValue, setRangeValue] = useState("280");
  const isDesktop = useMediaQuery("(min-width: 992px)");
  useEffect(() => {
    if (isDesktop) {
      document.documentElement.style.setProperty(
        "--minRangeValue",
        `${rangeValue}px`
      );
    } else {
      document.documentElement.style.removeProperty("--minRangeValue");
    }
  }, [rangeValue, isDesktop]);

  return (
    <div className="toolbar">
      <div className="search-wrapper">
        <input
          type="search"
          autoFocus={isDesktop}
          placeholder={t("Gallery-toolbar-search-placeholder")}
          onChange={props.onHandleSearch}
        />
        <div className="counter">
          Total photos: <span>{props.total}</span>
        </div>
      </div>
      <ul className="view-options">
        <li className={`zoom ${props.view === listView ? dNone : ""}`}>
          <input
            type="range"
            min="180"
            max="380"
            onChange={(e) => setRangeValue(e.target.value)}
            value={rangeValue}
          />
        </li>
        <li className={`show-grid ${props.view === gridView ? active : ""}`}>
          <button
            onClick={() => props.onSwitchView(gridView)}
            disabled={props.view === gridView}
          >
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/grid-view.svg"
              alt="grid view"
            />
          </button>
        </li>
        <li className={`show-list ${props.view === listView ? active : ""}`}>
          <button
            onClick={() => props.onSwitchView(listView)}
            disabled={props.view === listView}
          >
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/list-view.svg"
              alt="list view"
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Toolbar;
