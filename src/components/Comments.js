import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import moment from "jalali-moment";
import commentIcon from "../images/comment.png";
import { isRTL } from "../helpers";
import ReCaptchaV2 from "react-google-recaptcha";
import "./Comments.scss";

const Comments = ({ comments, postId }) => {
  const { t, i18n } = useTranslation();
  const [commentsList, setCommentsList] = useState(comments);
  const commentRef = useRef(null);
  const authorRef = useRef(null);

  const handleExpire = (g) => {
    // setForm((currentForm) => {
    //  return {...currentForm, token: null }
    // })
    console.log("on expire", g);
  };

  const handleToken = async (token) => {
    // setForm((currentForm) => {
    //  return {...currentForm, token }
    // })
    console.log("this is token", token);
    try {
      const result = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        { secret: process.env.REACT_APP_SECRET_KEY, response: token }
      );
      console.log("result", result);
    } catch (error) {
      console.log(error);
    }
  };

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
        <ReCaptchaV2
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={handleToken}
          onExpire={handleExpire}
        />
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
