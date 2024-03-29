import React, { useMemo } from "react";
import { CloudinaryImage, CloudinaryPdf } from "./CloudinaryRenderer";
import CloudinaryImageSlides from "./CloudinaryImageSlides";

const PostMedia = ({ media, index, postId, mediaDescription }) => {
  const [files, images] = useMemo(
    () =>
      media.reduce(
        (result, element) => {
          result[element.endsWith(".pdf") ? 0 : 1].push(element);
          return result;
        },
        [[], []]
      ),
    [media]
  );

  return (
    <>
      {images.length === 1 ? (
        <div className="post__single-image__container">
          <CloudinaryImage
            publicId={`${postId}/${images[0]}.jpg`}
            caption={mediaDescription && mediaDescription[images[0]]}
          />
        </div>
      ) : (
        images.length > 1 && (
          <CloudinaryImageSlides
            images={images}
            captions={mediaDescription}
            postId={postId}
            index={index}
          />
        )
      )}
      {files.length > 0 && (
        <div
          className="post__file--gallery"
          style={{ maxWidth: `${Math.min(1200, files.length * 200)}px` }}
        >
          {files.map((file, index) => (
            <CloudinaryPdf
              key={index}
              publicId={`${postId}/${file}`}
              mediaCaption={
                mediaDescription && mediaDescription[file.replace(".pdf", "")]
              }
            />
          ))}
        </div>
      )}
    </>
  );
};
export default PostMedia;
