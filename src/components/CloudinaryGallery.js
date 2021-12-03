import React, { useEffect, useRef } from "react";
import { CloudinaryContext, Image } from "cloudinary-react";

const myCloudName = "dxmkio4a8";

const CloudinaryGallery = ({ media, index, postId }) => {
  const cloudnaryGalleryRef = useRef(null);
  useEffect(() => {
    if (media.length > 1) {
      const paragraphMeida = window.cloudinary.galleryWidget({
        container: `#media${index}`,
        cloudName: myCloudName,
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
    <CloudinaryContext cloudName={myCloudName}>
      <Image
        publicId={`blog/${postId}/${media[0]}`}
        className="post__paragraph--gallery"
      />
    </CloudinaryContext>
  ) : (
    <div id={`media${index}`} className="post__paragraph--gallery"></div>
  );
};
export default CloudinaryGallery;
