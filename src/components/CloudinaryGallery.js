import React, { useCallback, useEffect, useRef, useState } from "react";
import { CloudinaryImage, cloudName } from "./CloudinaryImage";

const CloudinaryGallery = ({ media, index, postId, mediaDescription }) => {
  const cloudnaryGalleryRef = useRef(null);
  const [mediaCaption, setMediaCaption] = useState(mediaDescription[media[0]]);

  const setCaption = useCallback(
    (label) => {
      const caption = Object.keys(mediaDescription).find((element) =>
        label.includes(element)
      );

      setMediaCaption(mediaDescription[caption]);
    },
    [mediaDescription]
  );

  useEffect(() => {
    if (media.length > 1) {
      const paragraphMeida = window.cloudinary.galleryWidget({
        container: `#media${index}`,
        cloudName: cloudName,
        themeProps: { active: "#d94f5c" },
        transition: "fade",
        mediaAssets: media.map((element) => ({
          publicId: `blog/${postId}/${element}`,
        })),
      });

      if (!cloudnaryGalleryRef.current && typeof window !== "undefined") {
        cloudnaryGalleryRef.current = paragraphMeida.render();

        ["viewernext", "viewerprev", "thumbclick"].forEach((item) => {
          paragraphMeida.on(item, (data) => {
            setCaption(data.label);
          });
        });
      }

      return () => {
        cloudnaryGalleryRef.current = paragraphMeida.destroy();
      };
    }
  }, [index, media, postId, setCaption]);

  return (
    <>
      {media.length === 1 ? (
        <CloudinaryImage
          publicId={`${postId}/${media[0]}`}
          className="post__paragraph--gallery"
        />
      ) : (
        <div id={`media${index}`} className="post__paragraph--gallery"></div>
      )}
      <p className="post__paragraph--media-description">{mediaCaption}</p>
    </>
  );
};
export default CloudinaryGallery;
