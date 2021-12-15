import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import "./CloudinaryRenderer.scss";

export const cloudName = "dxmkio4a8";
export const cloudinaryBaseUrl = `https://res.cloudinary.com/${cloudName}/image/upload/v1/blog/`;

export const CloudinaryImage = ({ publicId, mediaCaption }) => (
  <div className="post__single-image__container">
    <CloudinaryContext cloudName={cloudName}>
      <Image publicId={`blog/${publicId}`} className="post__single-image" />
    </CloudinaryContext>
    <p className="post__single-image__caption">{mediaCaption}</p>
  </div>
);

export const CloudinaryPdf = ({ publicId, mediaCaption }) => (
  <a
    href={cloudinaryBaseUrl.concat(publicId)}
    className="post__file-container"
    rel="noreferrer"
    target="_blank"
  >
    <CloudinaryContext cloudName={cloudName}>
      <Image
        className="post__file__image"
        publicId={`blog/${publicId.replace(".pdf", ".jpg")}`}
      >
        <Transformation width="150" crop="scale" />
      </Image>
    </CloudinaryContext>
    <p className="post__file-caption">{mediaCaption}</p>
  </a>
);
