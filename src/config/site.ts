export const siteConfig = {
  name: "ISK",
  title: "ISK - Portfolio",
  description: "Personal portfolio showcasing my work and experience",
  url: "https://example.com", // Replace with your actual domain
  ogImage: "https://example.com/og-image.jpg", // Replace with your actual OG image
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    telegram: "https://t.me/yourusername",
    instagram: "https://instagram.com/yourusername",
    email: "your.email@example.com"
  },
}

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export type SiteConfig = typeof siteConfig