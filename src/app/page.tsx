import { Container } from "@/components/layout/Container";
import { HeroCarousel } from "@/components/media/HeroCarousel";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MotionWrapper } from "@/components/ui/MotionWrapper";
import { siteConfig } from "@/constants/site";
import { companyRegistrations, projectHighlights } from "@/data/company";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { ArrowRight, Drill, Gauge, HardHat, Settings, ShieldCheck, Wrench } from "lucide-react";
import styles from "./page.module.scss";

const iconMap = {
  pump: Gauge,
  mining: HardHat,
  maintenance: Wrench,
  solutions: Settings,
  compliance: ShieldCheck,
  drilling: Drill,
};

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles["home__hero"]}>
        <HeroCarousel />
        <div className={styles["home__hero-overlay"]} />
        <Container className={styles["home__hero-grid"]}>
          <div>
            <p className={styles["home__eyebrow"]}>Mining, industrial and project services</p>
            <h1 className={styles["home__title"]}>Operational support for demanding sites.</h1>
            <p className={styles["home__lead"]}>
              Gliss Projects SA provides mining services, industrial supplies, maintenance,
              construction support, and project solutions from eMalahleni for industrial clients
              across South Africa.
            </p>
            <div className={styles["home__actions"]}>
              <Button href="/contact" icon={<ArrowRight aria-hidden="true" size={18} />}>
                Request a quote
              </Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles["home__section"]}>
        <Container>
          <SectionHeader
            eyebrow="Capabilities"
            title="Services built around uptime, supply and site execution"
            text="Gliss Projects combines maintenance thinking with procurement, mining support, civil works, and project delivery."
          />
          <div className={styles["home__grid"]}>
            {services.slice(0, 5).map((service) => {
              const Icon = iconMap[service.icon];

              return (
                <MotionWrapper key={service.title}>
                  <Card icon={<Icon aria-hidden="true" size={24} />} title={service.title}>
                    {service.description}
                  </Card>
                </MotionWrapper>
              );
            })}
          </div>
        </Container>
      </section>

      <section className={`${styles["home__section"]} ${styles["home__section--white"]}`}>
        <Container className={styles["home__media-grid"]}>
          <div className={styles["home__profile-panel"]}>
            <p className={styles["home__eyebrow"]}>Company profile</p>
            <h2>Services, supplies and project support from eMalahleni.</h2>
            <p>
              Gliss Projects is positioned as a practical industrial partner for clients that need
              responsive maintenance, supply and site execution support.
            </p>
          </div>
          <div className={styles["home__media-copy"]}>
            <SectionHeader
              eyebrow="Company profile"
              title="Established supplier and project partner"
              titleClassName={styles["home__media-title"]}
              text="The company profile positions Gliss Projects as a services and maintenance business established in 2013 to bridge industrial service and supply gaps."
            />
            <ul className={styles["home__list"]}>
              {companyRegistrations.slice(0, 5).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Button href="/credentials">View credentials</Button>
          </div>
        </Container>
      </section>

      <section className={styles["home__section"]}>
        <Container>
          <SectionHeader
            eyebrow="Project experience"
            title="Work across mining, municipal and industrial environments"
            text="Profile assets reference chrome recovery, coal handling, water distribution, and underground support projects."
          />
          <div className={styles["home__grid"]}>
            {projects.slice(0, 3).map((project) => (
              <article className={styles["home__project"]} key={project.title}>
                <p className={styles["home__eyebrow"]}>{project.client}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.period}</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles["home__section"]} ${styles["home__section--white"]}`}>
        <Container>
          <div className={styles["home__cta"]}>
            <div className={styles["home__cta-grid"]}>
              <div>
                <h2 className={styles["home__cta-title"]}>Need a reliable site support partner?</h2>
                <p className={styles["home__cta-text"]}>
                  Speak to {siteConfig.director}, {siteConfig.directorTitle}, about supply,
                  maintenance, construction, or project support requirements.
                </p>
              </div>
              <Button href="/contact" variant="light">
                Contact Gliss Projects
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className={styles["home__section"]}>
        <Container>
          <SectionHeader
            eyebrow="Proof points"
            title="Project areas ready for deeper case studies"
            text="The current site keeps case studies concise while leaving room for future detailed project pages."
          />
          <ul className={styles["home__list"]}>
            {projectHighlights.map((project) => (
              <li key={project}>{project}</li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
