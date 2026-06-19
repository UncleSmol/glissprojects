export type ServiceIcon =
  | "pump"
  | "mining"
  | "maintenance"
  | "solutions"
  | "compliance"
  | "drilling";

export type ServiceCard = {
  icon: ServiceIcon;
  title: string;
  description: string;
  href?: string;
  items?: string[];
};

export type ProjectCard = {
  title: string;
  client: string;
  period: string;
  value?: string;
  description: string;
  services: string[];
};
