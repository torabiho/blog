import { useState, useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import useMediaQuery from "../hooks/useMediaQuery";
import axios from "axios";
import moment from "jalali-moment";
import commentIcon from "../images/comment.png";
import { isRTL } from "../helpers";
import ReCaptchaV2 from "react-google-recaptcha";
import "./Comments.scss";

const Comments = ({ comments, postId }) => {
  const { t, i18n } = useTranslation();
  const formRef = useRef(null);
  const [commentsList, setCommentsList] = useState(comments);
  const isDesktop = useMediaQuery("(min-width: 576px)");
  const [captchaSize, setCaptchaSize] = useState("compact");
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (isDesktop) {
      setCaptchaSize("normal");
    }
  }, [isDesktop]);

  const resetForm = () => {
    formRef.current.reset();
    window.grecaptcha.reset();
    setToken(null);
    setAuthor("");
    setComment("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const commentPayload = {
      comment: {
        name: author,
        comment: comment,
        commentDate: new Date(),
        lang: i18n.language,
        approved: true,
      },
      token,
    };
    try {
      const result = await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/posts/${postId}`,
        commentPayload
      );
      resetForm();
      setCommentsList(result.data.comments);
    } catch (error) {
      console.log(error);
      window.grecaptcha.reset();
    }
  };

  const canSubmitComment = useMemo(
    () => token && comment.length > 0 && author.length > 0,
    [token, author.length, comment.length]
  );

  return (
    <>
      <h1 className="cm__header">{t("send-comment-header")}</h1>
      <form onSubmit={handleSubmit} className="cm__form" ref={formRef}>
        <label className="cm__author--label">
          {t("comment-author")}
          <input
            className="cm--author__input"
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
          />
        </label>
        <textarea
          className="cm--message__input"
          onChange={(e) => setComment(e.target.value)}
        />
        <ReCaptchaV2
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={setToken}
          size={captchaSize}
          className="cm--message__captcha"
        />
        <input
          className="cm--message__submit"
          type="submit"
          value={t("send-comment")}
          disabled={!canSubmitComment}
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
