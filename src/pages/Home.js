import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trans, withTranslation } from "react-i18next";
import axios from "axios";
import stamp from "../images/stamp.png";
import headerBg from "../images/headerBg.png";
import Gallery from "../components/Gallery";
import "./Home.scss";

const Home = ({ t, i18n }) => {
  // const [username, setUsername] = useState("default user");
  // const usernameInput = useRef(null);

  // const handleClickEvent = () => {
  //   const currentUsername = usernameInput.current;
  //   setUsername(currentUsername.value);
  // };

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
            <p className="header__text">{t("header-sub-title")}</p>
          </div>
          <img alt="stamp" src={stamp} width="360px" />
        </div>
        <img alt="stamp" src={headerBg} className="header__separator" />
      </header>
      <Gallery data={posts} />
      {/* <p>{t("welcome", { username: username })}</p>

        <div>
          <label>{t("change-username")}</label>
          <input type="text" ref={usernameInput} />
          <button onClick={handleClickEvent}>{t("submit")}</button>
        </div> */}

      {/* <p>
          <Trans i18nKey="go-to-page2">
            <Link to="/page2"></Link>
            {{ username }}
          </Trans>
        </p> */}
    </>
  );
};

export default withTranslation()(Home);
