import { css } from "@emotion/css";
import clsx from "clsx";
import Image from "next/image";

const photos: string[] = [
  "/images/photo-wall/IMG_3461.JPG",
  "/images/photo-wall/IMG_3661.JPG",
  "/images/photo-wall/IMG_1740131503967.JPEG",
  "/images/photo-wall/IMG_1739589814486.JPEG",
  ];

type Props = {
  size?: number;
};

const PhotoWall: React.FC<Props> = ({ size = 512 }) => {
  return (
    <div className="flex gap-1" style={{ width: size, height: size }}>
      {photos.map((photo, index) => (
        <div
          key={photo}
          style={{ animationDelay: `${index * 0.5 + 0.5}s` }}
          className={clsx(
            "relative transition-[width]",
            "animate__animated animate__fadeInDown",
            css`
              width: ${size / 4}px;
              height: ${size}px;

              &:hover {
                width: ${size / 2}px;
              }
            `,
          )}
        >
          <Image
            fill
            priority
            src={photo}
            alt="azri"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={clsx("object-cover", { "rounded-l": index === 0, "rounded-r": index === photos.length - 1 })}
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoWall;
