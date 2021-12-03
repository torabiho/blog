import { CloudinaryContext, Image } from "cloudinary-react";

export const cloudName = "dxmkio4a8";

export const CloudinaryImage = ({ publicId, className }) => {
  return (
    <CloudinaryContext cloudName={cloudName}>
      <Image publicId={`blog/${publicId}`} className={className} />
    </CloudinaryContext>
  );
};
