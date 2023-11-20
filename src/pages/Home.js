import React, { useState, useEffect } from "react";
import { withTranslation } from "react-i18next";
import axios from "axios";
import stamp from "../images/stamp.png";
import headerBg from "../images/headerBg.png";
import Gallery from "../components/Gallery";
import "./Home.scss";

const Home = ({ t, i18n }) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${process.env.REACT_APP_API_URL}/api/posts`, {
        headers: {
          "Accept-Language": i18n.language,
        },
      });

      setPosts(result.data);
    };

    fetchData();
  }, [i18n.language]);

  return (
    <>
      <header className="header__wrapper">
        <div className="header__content">
          <div className="header">
            <p className="header__text">{t("header-main-title")}</p>
            <p className="subheader__text">{t("header-sub-title")}</p>
          </div>
          <img alt="stamp" src={stamp} width="360px" />
        </div>
        <img alt="stamp" src={headerBg} className="header__separator" />
      </header>
      {/* <section className="page__intro">{t("intro-first-page")}</section> */}
      <Gallery data={posts} />
    </>
  );
};

export default withTranslation()(Home);
