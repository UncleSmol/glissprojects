import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { companyRegistrations, vendorNumbers } from "@/data/company";
import styles from "../marketing.module.scss";

export const metadata = {
  title: "Credentials",
  description:
    "Gliss Projects SA company registrations, vendor numbers, CIDB, PSiRA and ISO registration recommendation details.",
};

export default function CredentialsPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="Credentials"
        title="Registration and vendor readiness."
        text="Public-facing credential information is structured from the supplied company profile, vendor reference and ISO recommendation letter."
      />
      <section className={styles["page__section"]}>
        <Container className={styles["page__split"]}>
          <div className={styles["page__stack"]}>
            <SectionHeader
              eyebrow="Company data"
              title="Registrations and compliance references"
              text="These details should be verified before final publication if certificates or registration documents are updated."
            />
            <div className={styles["page__panel"]}>
              <ul className={styles["page__list"]}>
                {companyRegistrations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className={styles["page__panel"]}>
              <h2 className={styles["page__panel-title"]}>Vendor numbers</h2>
              <ul className={styles["page__list"]}>
                {vendorNumbers.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className={`${styles["page__panel"]} ${styles["page__panel--navy"]}`}>
            <h2 className={styles["page__panel-title"]}>Credential readiness</h2>
            <p className={styles["page__text"]}>
              Gliss Projects can support procurement and vendor onboarding conversations with
              registration, vendor and compliance references. Current certificates should be
              requested directly before final procurement decisions.
            </p>
          </div>
        </Container>
      </section>
      <section className={`${styles["page__section"]} ${styles["page__section--white"]}`}>
        <Container>
          <div className={styles["page__cta"]}>
            <div>
              <h2 className={styles["page__cta-title"]}>Need procurement documentation?</h2>
              <p className={styles["page__cta-text"]}>
                Contact the team for current documentation, vendor onboarding support or quote
                requirements.
              </p>
            </div>
            <Button href="/contact" variant="light">
              Request documents
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
