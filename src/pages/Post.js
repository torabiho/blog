import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactGA from "react-ga";
import axios from "axios";
import { Trans, withTranslation } from "react-i18next";
import Comments from "../components/Comments";
import ContentParser from "../components/ContentParser";
import Postscripts from "../components/Postscripts";
import "./Post.scss";

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
        ReactGA.event({
          category: "post",
          action: "Visited post",
          label: `Language: ${i18n.language}`,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [i18n.language, match.params.id]);

  return (
    post && (
      <div className="post-container">
        <div className="post__paper">
          <h1 className="post__title">{post.title}</h1>
          <h2 className="post__subtitle hamburger-trigger">{post.subtitle}</h2>
          <ContentParser
            content={post.content}
            postId={post._id}
            mediaDescription={post.mediaDescription}
          />

          <Trans i18nKey="go-to-home">
            <Link className="go-home" to="/"></Link>
          </Trans>

          {post?.postscripts?.length > 0 && (
            <Postscripts postscripts={post.postscripts} />
          )}
        </div>
        {post?.comments && (
          <Comments comments={post.comments} postId={match.params.id} />
        )}
      </div>
    )
  );
};

export default withTranslation()(Post);
