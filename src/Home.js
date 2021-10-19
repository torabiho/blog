import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trans, withTranslation } from "react-i18next";
import stamp from "./images/stamp.png";
import "./Home.scss";

const Home = ({ t }) => {
  const [username, setUsername] = useState("default user");
  const [input, setInput] = useState("");
  const handleInput = (e) => setInput(e.target.value);

  return (
    <>
      <div className="header__wrapper">
        <img alt="stamp" src={stamp} />
        <div className="header">
          <p className="header__text">نویسنده‌ی کدهای رنگی</p>
          <p className="header__text">وی، در سایر امور نیز نظراتی داشت</p>
        </div>
      </div>
      <div className="body">
        <p>{t("welcome", { username: username })}</p>

        <div>
          <label>{t("change-username")}</label>
          <input type="text" onChange={handleInput} />
          <button onClick={() => setUsername(input)}>{t("submit")}</button>
        </div>

        <p>
          <Trans i18nKey="go-to-page2">
            <Link to="/page2"></Link>
            {{ username }}
          </Trans>
        </p>
        {Array(16)
          .join(
            `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.*`
          )
          .split("*")
          .map((element, index) => (
            <p key={index}>{element}</p>
          ))}
      </div>
    </>
  );
};

export default withTranslation()(Home);
