import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Trans, withTranslation } from "react-i18next";

const Post = ({ match, i18n }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postId = match.params.id;
        const result = await axios(
          `${process.env.REACT_APP_API_URL}/api/posts/${postId}`,
          {
            headers: {
              "Accept-Language": i18n.language,
            },
          }
        );

        setPost(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [i18n.language, match.params.id]);

  return useMemo(
    () => (
      <div className="body">
        <p>{post?.title}</p>
        <p>{post?.subtitle}</p>

        {post?.content.map((item, index) => (
          <p key={index}>{item[i18n.language]}</p>
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
    [post, i18n.language]
  );
};

export default withTranslation()(Post);
