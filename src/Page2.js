import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Trans, withTranslation } from "react-i18next";

const Page2 = (props) => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${process.env.REACT_APP_API_URL}/api/posts`, {
        headers: {
          "Accept-Language": props.i18n.language,
        },
      });

      setPosts(result.data);
    };

    fetchData();
  }, [props.i18n.language]);

  return useMemo(
    () => (
      <div className="body">
        {posts &&
          posts.map((post) => (
            <li key={post._id}>
              <p>{post.title}</p>
              <p>{post.subtitle}</p>
            </li>
          ))}
        <p>
          <Trans>this-is-page2</Trans>
        </p>
        <p>
          <Trans i18nKey="go-to-home">
            <Link to="/"></Link>
          </Trans>
        </p>
      </div>
    ),
    [posts]
  );
};

export default withTranslation()(Page2);
