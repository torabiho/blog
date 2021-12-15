import React, { useMemo } from "react";
import { CloudinaryImage, CloudinaryPdf } from "./CloudinaryRenderer";
import CloudinaryImageSlides from "./CloudinaryImageSlides";

const CloudinaryMedia = ({ media, index, postId, mediaDescription }) => {
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
        <CloudinaryImage
          publicId={`${postId}/${images[0]}`}
          className="post__media-gallery"
          mediaCaption={mediaDescription[images[0]]}
        />
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
        <div className="post__pdf--gallery">
          {files.map((file, index) => (
            <CloudinaryPdf
              key={index}
              publicId={`${postId}/${file}`}
              className="post__media-gallery"
              mediaCaption={mediaDescription[file.replace(".pdf", "")]}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default CloudinaryMedia;
