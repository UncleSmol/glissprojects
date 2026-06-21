import clsx from "clsx";
import styles from "./SectionHeader.module.scss";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  titleClassName?: string;
  text?: string;
};

export function SectionHeader({ eyebrow, title, titleClassName, text }: SectionHeaderProps) {
  return (
    <header className={styles["section-header"]}>
      {eyebrow ? <p className={styles["section-header__eyebrow"]}>{eyebrow}</p> : null}
      <h2 className={clsx(styles["section-header__title"], titleClassName)}>{title}</h2>
      {text ? <p className={styles["section-header__text"]}>{text}</p> : null}
    </header>
  );
}
