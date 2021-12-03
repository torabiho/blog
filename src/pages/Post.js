import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Trans, withTranslation } from "react-i18next";
import Comments from "../components/Comments";
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

  useEffect(() => {
    if (post) {
      let paragraphMeida;
      post.content.forEach((paragraph, index) => {
        if (paragraph.media.length > 0) {
          paragraphMeida = window.cloudinary.galleryWidget({
            container: `#media${index}`,
            cloudName: "dxmkio4a8",
            mediaAssets: paragraph.media.map((element) => ({
              publicId: `blog/${post._id}/${element}`,
            })),
          });
          paragraphMeida.render();
        }
      });
    }
  }, [post]);

  return (
    <div className="post-container">
      <div className="post__paper">
        <h1 className="post__title">{post?.title}</h1>
        <h2 className="post__subtitle hamburger-trigger">{post?.subtitle}</h2>

        {post?.content.map((item, index) => (
          <div key={index}>
            <p className="post__paragraph">{item.paragraph}</p>
            <div
              id={`media${index}`}
              className="post__paragraph--gallery"
            ></div>
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
