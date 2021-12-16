import { CloudinaryContext, Image, Transformation } from "cloudinary-react";
import "./CloudinaryRenderer.scss";

export const cloudName = "dxmkio4a8";
export const cloudinaryBaseUrl = `https://res.cloudinary.com/${cloudName}/image/upload/v1/blog/`;

export const CloudinaryImage = ({ publicId, className }) => (
  <CloudinaryContext cloudName={cloudName}>
    <Image
      publicId={`blog/${publicId}`}
      className={`post__single-image ${className ? className : ""}`}
    />
  </CloudinaryContext>
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
        <Transformation width="150" crop="scale" density="300" />
      </Image>
    </CloudinaryContext>
    {mediaCaption && <p className="post__file-caption">{mediaCaption}</p>}
  </a>
);
