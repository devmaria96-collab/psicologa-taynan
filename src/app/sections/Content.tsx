import { siteConfig } from "../../config/site";

export const psychologist = {
  name: siteConfig.name,
  crp: siteConfig.crp,
  tagline: siteConfig.tagline,
  title: siteConfig.heroTitle,
  subtitle: siteConfig.subtitle,
  description: siteConfig.description,

  social: {
    whatsapp: siteConfig.whatsapp.fullNumber,
    instagram: siteConfig.instagram.url,
    linkedin: siteConfig.linkedin.url,
  },
};