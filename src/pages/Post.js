import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactGA from "react-ga";
import axios from "axios";
import { Trans, withTranslation } from "react-i18next";
import Comments from "../components/Comments";
import ContentParser from "../components/ContentParser";
import Postscripts from "../components/Postscripts";
import "./Post.scss";

const Post = ({ i18n }) => {
  const [post, setPost] = useState(null);
  const { id: postId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `${process.env.REACT_APP_API_URL}/api/posts/${postId}`,
          {
            headers: {
              "Accept-Language": i18n.language,
            },
          }
        );
        setPost(result.data);

        const {data: updatedDoc} = await axios.get(
          `${process.env.REACT_APP_DOCS_API_URL}/${result?.data?.link}/export`,
          {
            params: {
              mimeType: 'text/plain',
              key: process.env.REACT_APP_DOCS_API_KEY,
            },
          }
        );

        if(updatedDoc !== undefined && updatedDoc !== result.data.content){
          setPost(prev => ({ ...prev, content:updatedDoc}));         
        }

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
  }, [i18n.language, postId]);

  return (
    post && (
      <div className="post-container">
        <article className="post__paper">
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
        </article>
        {post?.comments && (
          <Comments comments={post.comments} postId={postId} />
        )}
      </div>
    )
  );
};

export default withTranslation()(Post);
