import { Play } from "lucide-react";
import styles from "./VideoEmbed.module.scss";

type VideoEmbedProps = {
  title: string;
};

export function VideoEmbed({ title }: VideoEmbedProps) {
  return (
    <div className={styles["video-embed"]} role="img" aria-label={title}>
      <div className={styles["video-embed__button"]}>
        <Play aria-hidden="true" size={22} />
      </div>
      <span className={styles["video-embed__label"]}>Video placeholder</span>
    </div>
  );
}
