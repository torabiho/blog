import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import moment from "jalali-moment";
import commentIcon from "../images/comment.png";
import { isRTL } from "../helpers";
import "./Comments.scss";

const Comments = ({ comments, postId }) => {
  const { t, i18n } = useTranslation();
  const [commentsList, setCommentsList] = useState(comments);
  const commentRef = useRef(null);
  const authorRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentPayload = {
      comment: {
        name: authorRef.current.value,
        comment: commentRef.current.value,
        commentDate: new Date(),
        lang: i18n.language,
        approved: true,
      },
    };
    try {
      const result = await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/posts/${postId}`,
        commentPayload
      );
      setCommentsList(result.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="cm__form">
        <label className="cm__author--label">
          {t("comment-author")}
          <input className="cm--author__input" ref={authorRef} type="text" />
        </label>
        <textarea className="cm--message__input" ref={commentRef} />
        <input
          className="cm--message__submit"
          type="submit"
          value={t("send-comment")}
        />
      </form>
      {commentsList.length > 0 && (
        <section className="comments__wrapper">
          <h1 className="comments__top">{t("comments")}</h1>
          <div className="comment">
            {commentsList.map((item) => (
              <article className="comment__wrapper" key={item._id}>
                <div className="comment__header">
                  <img className="comment__icon" alt="user" src={commentIcon} />
                  <p className="comment__author">
                    {item.name}
                    <span className="comment__date">
                      {moment(item.commentDate, "YYYY/MM/DD")
                        .locale(i18n.language)
                        .format("D MMMM YYYY")}
                    </span>
                  </p>
                </div>
                <div
                  className={`comment__text ${
                    isRTL(item.comment) ? "rtl-comment" : "ltr-comment"
                  }`}
                >
                  {item.comment}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Comments;
