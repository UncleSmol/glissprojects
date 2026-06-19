import clsx from "clsx";
import Image, { type ImageProps } from "next/image";
import styles from "./OptimizedImage.module.scss";

type OptimizedImageProps = ImageProps & {
  frameClassName?: string;
};

export function OptimizedImage({ className, frameClassName, alt, ...props }: OptimizedImageProps) {
  return (
    <div className={clsx(styles["optimized-image"], frameClassName)}>
      <Image className={clsx(styles["optimized-image__asset"], className)} alt={alt} {...props} />
    </div>
  );
}
