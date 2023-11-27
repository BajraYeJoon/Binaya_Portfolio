import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import nepaFoodImg from "@/public/nepafood.png";
import hawkaiImg from "@/public/hawkai.png";
import nepalyImg from "@/public/nepaly.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer and QA Intern",
    location: "HawkAi Pvt. Ltd.",
    description:
      "I worked as a front-end developer for 6+ months in this job. I also upskilled to the full stack. Revamped company site with Next.js, managed diverse client projects emphasizing management systems. Led content creation, authored project proposals, conducted QA, implemented bug tracking, and actively contributed to team building.",
    icon: React.createElement(LuGraduationCap),
    date: "March - August, 2023",
  },
  ,
] as const;

export const projectsData = [
  {
    title: "NepaFood",
    description:
      "A minimalistic restaurant website. It has features like menu, contact form and newsletter.",
    tags: ["React", "React Best Practices", "CSS", "Hooks"],
    imageUrl: nepaFoodImg,
  },
  {
    title: "HawkAi Site- Intern Work",
    description:
      "Official website of HawkAi Pvt. Ltd. Revamped company site with Next.js and different new technologies.",
    tags: ["TypeScript", "Next.js", "Tailwind", "HygraphCMS", "Framer Motion"],
    imageUrl: hawkaiImg,
  },
  {
    title: "Nepa.ly",
    description:
      "Travel Guide Webpage for tourists to give better flexibility during visit to Nepal",
    tags: ["React", "styled-components"],
    imageUrl: nepalyImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Prisma",
  "GSAP",
  "Hygraph",
  "Framer Motion",
  "Many more... 🤓",
] as const;
