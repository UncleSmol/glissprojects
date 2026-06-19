import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { commitments, values } from "@/data/company";
import { Award, Handshake, Target } from "lucide-react";
import styles from "../marketing.module.scss";

export const metadata = {
  title: "About",
  description:
    "Learn about Gliss Projects SA, an eMalahleni-based mining, maintenance, industrial supply and project services company.",
};

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="About Gliss Projects"
        title="A practical services partner for industry."
        text="Gliss Projects was established in 2013 to bridge gaps in industrial service, maintenance and supply, giving clients a reachable partner focused on quality, affordability and operational continuity."
      />
      <section className={styles["page__section"]}>
        <Container className={styles["page__split"]}>
          <SectionHeader
            eyebrow="Business overview"
            title="Built from service and maintenance needs"
            text="The business supports mining, construction and industrial sectors through supply, site services, project solutions and maintenance-led problem solving."
          />
          <div className={styles["page__stack"]}>
            <div className={styles["page__panel"]}>
              <h2 className={styles["page__panel-title"]}>Mission</h2>
              <p className={styles["page__text"]}>
                Invest in quality service, provide practical solutions, and help clients maintain
                smooth operations by solving industrial problems first-hand and affordably.
              </p>
            </div>
            <div className={styles["page__panel"]}>
              <h2 className={styles["page__panel-title"]}>Vision</h2>
              <p className={styles["page__text"]}>
                Build long-term client relationships, create value for money, improve services, and
                grow into a trusted service supplier with sustainable job creation.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className={`${styles["page__section"]} ${styles["page__section--white"]}`}>
        <Container>
          <SectionHeader
            eyebrow="What guides the work"
            title="Values and commitments"
            text="The company profile emphasizes client-first service, quality delivery, open communication, and community contribution."
          />
          <div className={styles["page__grid"]}>
            <Card icon={<Target aria-hidden="true" size={24} />} title="Client first">
              {values[0]}
            </Card>
            <Card icon={<Award aria-hidden="true" size={24} />} title="Quality delivery">
              {values[1]}
            </Card>
            <Card icon={<Handshake aria-hidden="true" size={24} />} title="Reliable partnerships">
              {commitments[0]}
            </Card>
          </div>
        </Container>
      </section>
      <section className={styles["page__section"]}>
        <Container>
          <div className={styles["page__cta"]}>
            <div>
              <h2 className={styles["page__cta-title"]}>Talk to the team behind the work.</h2>
              <p className={styles["page__cta-text"]}>
                Share the requirement, site context, timeframe and procurement route. Gliss Projects
                can respond around supply, maintenance or project support.
              </p>
            </div>
            <Button href="/contact" variant="light">
              Contact us
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
