import { logo2, logo3, logo4, logo5, logo6, logo7 } from "../assets";
import { ftr1, ftr2 } from "../assets";

export const navlinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/",
    title: "Services",
  },
  {
    href: "/",
    title: "Portfolio",
  },
  {
    href: "/",
    title: "About Us",
  },
  {
    href: "/",
    title: "Contact",
  },
];

export const companyLogos = [logo2, logo3, logo4, logo2, logo5, logo6, logo7];

export const features = [
  {
    title: "Prisma schema",
    text: "Data model you can read",
    subtext:
      "The Prisma schema is intuitive and lets you declare your database tables in a human-readable way — making your data modeling experience a delight. You define your models by hand or introspect them from an existing database",
    button: "Learn more about Prisma Schema",
    img: ftr1,
  },
  {
    title: "Prisma client",
    text: "Type-safe database client",
    subtext:
      "Prisma Client is a query builder that’s tailored to your schema. We designed its API to be intuitive, both for SQL veterans and developers brand new to databases. The auto-completion helps you figure out your query without the need for documentation.",
    button: "Explore Prisma client",
    img: ftr2,
  },
];
