import logo from "@/assets/gliss-projects-logo.png";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { navigationItems } from "@/data/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles["header__inner"]}>
        <Link className={styles["header__brand"]} href="/" aria-label="Gliss Projects SA home">
          <Image
            alt="Gliss Projects"
            className={styles["header__logo"]}
            priority
            src={logo}
            sizes="180px"
          />
        </Link>
        <nav className={styles["header__nav"]} aria-label="Primary navigation">
          {navigationItems.map((item) => (
            <Link className={styles["header__link"]} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles["header__actions"]}>
          <Button href="/contact" variant="primary">
            Request quote
          </Button>
        </div>
      </Container>
    </header>
  );
}
