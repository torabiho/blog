import React, { useCallback, useEffect, useRef, useState } from "react";
import { cloudName } from "./CloudinaryRenderer";

const CloudinaryImageSlides = ({ images, captions, postId, index }) => {
  const cloudnaryGalleryRef = useRef(null);
  const [imageCaption, setImageCaption] = useState(captions[images[0]]);

  const setCaption = useCallback(
    (label) => {
      const caption = Object.keys(captions).find((element) =>
        label.includes(element)
      );

      setImageCaption(captions[caption]);
    },
    [captions]
  );

  useEffect(() => {
    const paragraphMeida = window.cloudinary.galleryWidget({
      container: `#media${index}`,
      cloudName: cloudName,
      themeProps: { active: "#d94f5c" },
      transition: "fade",
      mediaAssets: images.map((element) => ({
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
  }, [index, postId, images, setCaption]);

  return (
    <>
      <div id={`media${index}`} className="post__media-gallery"></div>
      <p className="post__media-caption">{imageCaption}</p>
    </>
  );
};

export default CloudinaryImageSlides;
