import "./Comments.scss";
import { useTranslation } from "react-i18next";
import moment from "jalali-moment";
import commentIcon from "../images/comment.png";
import { isRTL } from "../helpers";

const Comments = (props) => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  return (
    <section className="comments__wrapper">
      <h1 className="comments__top">{t("comments")}</h1>
      <div className="comment">
        {props?.comments.map((item) => (
          <article className="comment__wrapper" key={item.id}>
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
  );
};

export default Comments;
