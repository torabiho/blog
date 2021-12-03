import React, { useEffect, useRef } from "react";

const CloudinaryGallery = ({ media, index, postId }) => {
  const cloudnaryGalleryRef = useRef(null);
  useEffect(() => {
    const paragraphMeida = window.cloudinary.galleryWidget({
      container: `#media${index}`,
      cloudName: "dxmkio4a8",
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
  }, [index, media, postId]);

  return <div id={`media${index}`} className="post__paragraph--gallery"></div>;
};

export default CloudinaryGallery;
