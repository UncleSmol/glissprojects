import { ContactForm } from "@/components/forms/ContactForm";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { siteConfig } from "@/constants/site";
import styles from "../marketing.module.scss";

export const metadata = {
  title: "Contact",
  description:
    "Contact Gliss Projects SA for mining services, industrial supply, maintenance and project solution quotes.",
};

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="Contact"
        title="Request a quote or project discussion."
        text="Send your requirement, location, scope and timeframe. The form is validation-ready and can be connected to email or CRM submission later."
      />
      <section className={styles["page__section"]}>
        <Container className={styles["page__split"]}>
          <div className={styles["page__stack"]}>
            <SectionHeader
              eyebrow="Company contact"
              title="Speak to Gliss Projects"
              text={`${siteConfig.director}, ${siteConfig.directorTitle}`}
            />
            <div className={styles["page__panel"]}>
              <h2 className={styles["page__panel-title"]}>Direct details</h2>
              <ul className={styles["page__list"]}>
                <li>Phone: {siteConfig.phone}</li>
                <li>Email: {siteConfig.email}</li>
                <li>Address: {siteConfig.location}</li>
                <li>CSD: MAAA0057950</li>
              </ul>
            </div>
            <div className={`${styles["page__panel"]} ${styles["page__panel--navy"]}`}>
              <h2 className={styles["page__panel-title"]}>Good quote information</h2>
              <ul className={styles["page__list"]}>
                <li>Site location and access requirements</li>
                <li>Service, supply or project scope</li>
                <li>Required timeframe or shutdown window</li>
                <li>Procurement, vendor or compliance requirements</li>
              </ul>
            </div>
          </div>
          <ContactForm />
        </Container>
      </section>
    </main>
  );
}
