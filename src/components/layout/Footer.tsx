import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/constants/site";
import { navigationItems } from "@/data/navigation";
import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles["footer__grid"]}>
        <div>
          <p className={styles["footer__brand"]}>{siteConfig.name}</p>
          <p className={styles["footer__text"]}>
            Mining, industrial supply, maintenance, construction, and project solutions from
            eMalahleni.
          </p>
        </div>
        <nav className={styles["footer__nav"]} aria-label="Footer navigation">
          {navigationItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles["footer__contact"]}>
          <a href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>{siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <span>{siteConfig.location}</span>
        </div>
      </Container>
      <Container className={styles["footer__bottom"]}>
        <span>
          © {new Date().getFullYear()} {siteConfig.legalName}
        </span>
        <span>CSD MAAA0057950</span>
      </Container>
    </footer>
  );
}
