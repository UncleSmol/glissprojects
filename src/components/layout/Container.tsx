import clsx from "clsx";
import type { PropsWithChildren } from "react";
import styles from "./Container.module.scss";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return <div className={clsx(styles.container, className)}>{children}</div>;
}
