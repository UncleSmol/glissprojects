import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/sections/PageHero";
import styles from "./marketing.module.scss";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="404"
        title="Page not found."
        text="The page you are looking for may have moved, been renamed, or no longer exists."
      />
      <section className={styles["page__section"]}>
        <div className={styles["page__not-found"]}>
          <p className={styles["page__text"]}>
            Return to the homepage or contact Gliss Projects if you need help finding a service,
            project reference, or company credential.
          </p>
          <div className={styles["page__not-found-actions"]}>
            <Button href="/">Go home</Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
