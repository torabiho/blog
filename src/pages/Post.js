import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Trans, withTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";
import Comments from "../components/Comments";
import CloudinaryGallery from "../components/CloudinaryGallery";
import ParagraphParser from "../components/ParagraphParser";
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
          <ParagraphParser text={post.content?.main} />
          {/* {post?.content?.media?.length > 0 && (
              <CloudinaryGallery
                index={index}
                media={item.media}
                postId={post._id}
              />
            )} */}

          <button className="go-home">
            <Trans i18nKey="go-to-home">
              <Link to="/"></Link>
            </Trans>
          </button>
          {post?.postscripts && (
            <div className="post_postscripts" id="postscriptsRef">
              {post.postscripts.map((item, index) => (
                <ScrollLink
                  key={index}
                  activeClass="current"
                  to={`postscript[${index + 1}]`}
                  offset={-200}
                  smooth={true}
                >
                  <p key={index}>
                    <span className="postscript">[{index + 1}]</span>{" "}
                    {item.postscript}
                  </p>
                </ScrollLink>
              ))}
            </div>
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
