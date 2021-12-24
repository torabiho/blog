import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Gallery from "../components/Gallery";
import { navItems } from "../constants/constants";
import "./CategoryPage.scss";

const CategoryPage = () => {
  const { i18n, t } = useTranslation();
  const { search, state, pathname } = useLocation();
  const [posts, setPosts] = useState(null);
  const title = useMemo(
    () =>
      state?.title ||
      navItems.find((item) => item.pathname === pathname).state.title,
    [pathname, state?.title]
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${process.env.REACT_APP_API_URL}/api/posts/${search}`,
        {
          headers: {
            "Accept-Language": i18n.language,
          },
        }
      );

      setPosts(result.data);
    };

    fetchData();
  }, [i18n.language, search]);
  return (
    <>
      <div className="page-title">{t(title)}</div>
      {posts && <Gallery data={posts} />}
    </>
  );
};

export default CategoryPage;
