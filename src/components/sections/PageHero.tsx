import { Container } from "@/components/layout/Container";
import styles from "./PageHero.module.scss";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
};

export function PageHero({ eyebrow, title, text }: PageHeroProps) {
  return (
    <section className={styles["page-hero"]}>
      <Container>
        <p className={styles["page-hero__eyebrow"]}>{eyebrow}</p>
        <h1 className={styles["page-hero__title"]}>{title}</h1>
        <p className={styles["page-hero__text"]}>{text}</p>
      </Container>
    </section>
  );
}
