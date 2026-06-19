import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import styles from "../marketing.module.scss";

export const metadata = {
  title: "Services",
  description:
    "Mining services, industrial supplies, maintenance, civil construction and project solutions from Gliss Projects SA.",
};

export default function ServicesPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="Services"
        title="Industrial support across supply, site work and delivery."
        text="Gliss Projects supports mining, construction and industrial operations through a broad set of practical services, supplies and maintenance capabilities."
      />
      <section className={styles["page__section"]}>
        <Container>
          <SectionHeader
            eyebrow="Capabilities"
            title="Service lines"
            text="Each category is structured for future expansion into detailed service pages, product categories and sector-specific landing pages."
          />
          <div className={`${styles["page__grid"]} ${styles["page__grid--two"]}`}>
            {services.map((service) => (
              <article
                className={styles["page__panel"]}
                id={service.href?.split("#")[1]}
                key={service.title}
              >
                <h2 className={styles["page__panel-title"]}>{service.title}</h2>
                <p className={styles["page__text"]}>{service.description}</p>
                {service.items ? (
                  <ul className={styles["page__list"]}>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className={`${styles["page__section"]} ${styles["page__section--white"]}`}>
        <Container>
          <div className={styles["page__cta"]}>
            <div>
              <h2 className={styles["page__cta-title"]}>Need supply or project support?</h2>
              <p className={styles["page__cta-text"]}>
                Send the scope, site location, timeframe and procurement requirements so the team
                can prepare a practical response.
              </p>
            </div>
            <Button href="/contact" variant="light">
              Request a quote
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
