import styles from "./SectionHeader.module.scss";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
};

export function SectionHeader({ eyebrow, title, text }: SectionHeaderProps) {
  return (
    <header className={styles["section-header"]}>
      {eyebrow ? <p className={styles["section-header__eyebrow"]}>{eyebrow}</p> : null}
      <h2 className={styles["section-header__title"]}>{title}</h2>
      {text ? <p className={styles["section-header__text"]}>{text}</p> : null}
    </header>
  );
}
