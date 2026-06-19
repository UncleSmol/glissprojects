import { siteConfig } from "@/constants/site";

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
