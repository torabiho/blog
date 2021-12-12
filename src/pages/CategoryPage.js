import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import Gallery from "../components/Gallery";
import { navItems } from "../constants/constants";
import "./CategoryPage.scss";

const CategoryPage = ({ location }) => {
  const { i18n, t } = useTranslation();
  const { search, state } = location;
  const [posts, setPosts] = useState(null);
  const title = useMemo(
    () =>
      state?.title ||
      navItems.find((item) => item.pathname === location.pathname).state.title,
    [location.pathname, state?.title]
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
      <Gallery data={posts} />
    </>
  );
};

export default CategoryPage;
