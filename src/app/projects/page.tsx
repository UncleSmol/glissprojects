import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeader } from "@/components/sections/SectionHeader";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";
import styles from "../marketing.module.scss";

export const metadata = {
  title: "Projects",
  description:
    "Selected Gliss Projects SA mining, material handling, water distribution and underground support project experience.",
};

export default function ProjectsPage() {
  return (
    <main className={styles.page}>
      <PageHero
        eyebrow="Projects"
        title="Experience in demanding operating environments."
        text="Profile material references work across chrome recovery, coal handling, municipal water distribution and underground roof support services."
      />
      <section className={styles["page__section"]}>
        <Container>
          <SectionHeader
            eyebrow="Selected experience"
            title="Project highlights"
            text="These cards provide a concise public-facing structure for future case studies, galleries and supporting documentation."
          />
          <div className={`${styles["page__grid"]} ${styles["page__grid--two"]}`}>
            {projects.map((project) => (
              <article className={styles["page__panel"]} key={project.title}>
                <h2 className={styles["page__panel-title"]}>{project.title}</h2>
                <p className={styles["page__text"]}>{project.description}</p>
                <div className={styles["page__meta"]}>
                  <span className={styles["page__tag"]}>{project.client}</span>
                  <span className={styles["page__tag"]}>{project.period}</span>
                  {project.value ? (
                    <span className={styles["page__tag"]}>{project.value}</span>
                  ) : null}
                </div>
                <ul className={styles["page__list"]}>
                  {project.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <section className={`${styles["page__section"]} ${styles["page__section--white"]}`}>
        <Container>
          <div className={styles["page__cta"]}>
            <div>
              <h2 className={styles["page__cta-title"]}>Planning a similar project?</h2>
              <p className={styles["page__cta-text"]}>
                Share the operating context and required deliverables so Gliss Projects can align
                the right supply, support and service approach.
              </p>
            </div>
            <Button href="/contact" variant="light">
              Discuss a project
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
