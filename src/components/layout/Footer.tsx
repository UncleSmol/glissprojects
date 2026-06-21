import logo from "@/assets/gliss-projects-logo.png";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/constants/site";
import { navigationItems } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles["footer__grid"]}>
        <div>
          <Link className={styles["footer__brand"]} href="/" aria-label="Gliss Projects SA home">
            <Image
              alt="Gliss Projects"
              className={styles["footer__logo"]}
              src={logo}
              sizes="180px"
            />
          </Link>
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
          <a suppressHydrationWarning href={`tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`}>
            {siteConfig.phone}
          </a>
          <a suppressHydrationWarning href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
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
