"use client";

import logo from "@/assets/gliss-projects-logo.png";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { navigationItems } from "@/data/navigation";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.scss";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className={clsx(styles["header__menu-button"], isMenuOpen && styles["is-open"])}
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </Container>
      <div
        className={clsx(styles["header__mobile-shell"], isMenuOpen && styles["is-open"])}
        id="mobile-navigation"
      >
        <Container className={styles["header__mobile-panel"]}>
          <nav className={styles["header__mobile-nav"]} aria-label="Mobile navigation">
            {navigationItems.map((item) => (
              <Link
                className={styles["header__mobile-link"]}
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            className={styles["header__mobile-cta"]}
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            variant="primary"
          >
            Request quote
          </Button>
        </Container>
      </div>
    </header>
  );
}
