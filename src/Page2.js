import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Trans, withTranslation } from "react-i18next";

const Page2 = (props) => {
  //const { i18n } = useTranslation();
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

  console.log("hossein", props.i18n.language);
  return (
    <div className="body">
      {posts &&
        posts.map((post) => (
          <li key={post._id}>
            <p>{post[props.i18n.language]?.title}</p>
            <p>{post[props.i18n.language]?.subtitle}</p>
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
  );
};

export default withTranslation()(Page2);
