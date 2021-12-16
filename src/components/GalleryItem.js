import { Link } from "react-router-dom";
import { CloudinaryImage } from "./CloudinaryRenderer";
import { useTranslation } from "react-i18next";
import moment from "jalali-moment";
import "./GalleryItem.scss";

export const GridViewItem = ({ post }) => {
  return (
    <li key={post._id}>
      <Link to={`/post/${post._id}`} className="grid-view__link">
        <figure>
          <CloudinaryImage
            publicId={`${post._id}/${post.headerImage}`}
            className="gallery-item__image"
          />
          <figcaption>
            <p className="grid-view__title">{post.title}</p>
            <p className="grid-view__subtitle">{post.subtitle}</p>
          </figcaption>
        </figure>
      </Link>
    </li>
  );
};

export const ListViewItem = ({ post }) => {
  const { t, i18n } = useTranslation();
  return (
    <li key={post._id}>
      <figure>
        <div className="list-view__meta">
          <Link to={`/post/${post._id}`}>
            <CloudinaryImage
              publicId={`${post._id}/${post.headerImage}`}
              className="gallery-item__image"
            />
          </Link>
          <p className="list-view__date">
            {moment(post.postDate, "YYYY/MM/DD")
              .locale(i18n.language)
              .format("D MMMM YYYY")}
          </p>
        </div>
        <figcaption>
          <Link to={`/post/${post._id}`} className="list-view__title">
            {post.title}
          </Link>
          <p className="list-view__paragraph">
            {post.content
              .replace(/(<.*?>|\[.*?\])/g, "")
              .split(" ")
              .slice(0, 75)
              .join(" ") + " ... "}
            <Link to={`/post/${post._id}`}>
              <span>{t("continue")}</span>
            </Link>
          </p>
        </figcaption>
      </figure>
    </li>
  );
};
