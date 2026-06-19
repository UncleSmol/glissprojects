import type { PropsWithChildren, ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = PropsWithChildren<{
  icon?: ReactNode;
  title: string;
}>;

export function Card({ children, icon, title }: CardProps) {
  return (
    <article className={styles.card}>
      {icon ? <div className={styles["card__icon"]}>{icon}</div> : null}
      <h3 className={styles["card__title"]}>{title}</h3>
      <p className={styles["card__text"]}>{children}</p>
    </article>
  );
}
