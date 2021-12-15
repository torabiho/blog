import { CloudinaryContext, Image, Transformation } from "cloudinary-react";

export const cloudName = "dxmkio4a8";
export const cloudinaryBaseUrl = `https://res.cloudinary.com/${cloudName}/image/upload/v1/blog/`;

export const CloudinaryImage = ({ publicId, className, mediaCaption }) => (
  <>
    <CloudinaryContext
      cloudName={cloudName}
      className="cloudinaryImage__container"
    >
      <Image publicId={`blog/${publicId}`} className={className} />
    </CloudinaryContext>
    <p className="post__paragraph--media-description">{mediaCaption}</p>
  </>
);

export const CloudinaryPdf = ({ publicId, className, mediaCaption }) => (
  <div>
    <a
      href={cloudinaryBaseUrl.concat(publicId)}
      rel="noreferrer"
      target="_blank"
    >
      <CloudinaryContext
        cloudName={cloudName}
        className="cloudinaryImage__container"
      >
        <Image
          publicId={`blog/${publicId.replace(".pdf", ".jpg")}`}
          className={className}
        >
          <Transformation width="100" crop="scale" />
        </Image>
      </CloudinaryContext>
    </a>
    <p className="post__paragraph--media-description">{mediaCaption}</p>
  </div>
);
