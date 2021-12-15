import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { CloudinaryImage, cloudName, CloudinaryPdf } from "./CloudinaryImage";

const CloudinaryGallery = ({ media, index, postId, mediaDescription }) => {
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

  const cloudnaryGalleryRef = useRef(null);
  const [mediaCaption, setMediaCaption] = useState(mediaDescription[images[0]]);

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
    if (images.length > 1) {
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
    }
  }, [index, postId, images, setCaption]);

  return (
    <>
      {images.length === 1 && (
        <CloudinaryImage
          publicId={`${postId}/${images[0]}`}
          className="post__paragraph--gallery"
          mediaCaption={mediaCaption}
        />
      )}
      {images.length > 1 && (
        <>
          <div id={`media${index}`} className="post__paragraph--gallery"></div>
          <p className="post__paragraph--media-description">{mediaCaption}</p>
        </>
      )}
      {files.length > 0 && (
        <div className="post__pdf--gallery">
          {files.map((file, index) => (
            <CloudinaryPdf
              key={index}
              publicId={`${postId}/${file}`}
              className="post__paragraph--gallery"
              mediaCaption={mediaDescription[file.replace(".pdf", "")]}
            />
          ))}
        </div>
      )}
    </>
  );
};
export default CloudinaryGallery;
