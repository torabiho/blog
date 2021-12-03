import React, { useEffect, useRef } from "react";
import { CloudinaryImage, cloudName } from "./CloudinaryImage";

const CloudinaryGallery = ({ media, index, postId }) => {
  const cloudnaryGalleryRef = useRef(null);
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
      }

      return () => {
        cloudnaryGalleryRef.current = paragraphMeida.destroy();
      };
    }
  }, [index, media, postId]);

  return media.length === 1 ? (
    <CloudinaryImage
      publicId={`${postId}/${media[0]}`}
      className="post__paragraph--gallery"
    />
  ) : (
    <div id={`media${index}`} className="post__paragraph--gallery"></div>
  );
};
export default CloudinaryGallery;
