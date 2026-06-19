import clsx from "clsx";
import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

export function Button({ children, className, icon, variant = "primary", ...props }: ButtonProps) {
  return (
    <Link className={clsx(styles.button, styles[`button--${variant}`], className)} {...props}>
      <span className={styles["button__label"]}>{children}</span>
      {icon ? <span className={styles["button__icon"]}>{icon}</span> : null}
    </Link>
  );
}
