import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Trans, withTranslation } from "react-i18next";
import Comments from "../components/Comments";
import CloudinaryGallery from "../components/CloudinaryGallery";
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
    <div className="post-container">
      <div className="post__paper">
        <h1 className="post__title">{post?.title}</h1>
        <h2 className="post__subtitle hamburger-trigger">{post?.subtitle}</h2>

        {post?.content.map((item, index) => (
          <div key={index}>
            <p className="post__paragraph">{item.paragraph}</p>
            {item.media?.length > 0 && (
              <CloudinaryGallery
                index={index}
                media={item.media}
                postId={post._id}
              />
            )}
          </div>
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
      {post?.comments && (
        <Comments comments={post.comments} postId={match.params.id} />
      )}
    </div>
  );
};

export default withTranslation()(Post);
