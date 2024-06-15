import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import nepaFoodImg from "@/public/nepafood.png";
import hawkaiImg from "@/public/hawkai.png";
import nepalyImg from "@/public/nepaly.png";
import portfolioImg from "@/public/portfolio.png";
import zenImg from "@/public/zen.png";
import adminImg from "@/public/admin.png";
import reserveImg from "@/public/homepage.png";

const URL = "https://github.com/bajrayejoon";

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
    date: "March - September, 2023",
  },
  {
    title: "Assosciate Frontend Developer",
    location: "Sunai Technologies",
    description:
      "I worked as a front-end developer for 2+ months in this job. I worked on the project of AI drink recommendation UI design and implemented a fully fledged application. Managed and developed components for Damaru- A honey like website for deals and coupons. Guided Intern on various next js factors, clean code, authentication",
    icon: React.createElement(LuGraduationCap),
    date: "April - June, 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Reserve",
    description:
      "A Hotel Reservation System. It has features like booking multiple rooms, details, Booked dates, Availability check.",
    tags: ["ReactJs", "REST API", "NodeJs", "TypeScript"],
    imageUrl: reserveImg,
    githubUrl: `https://reserve-phi.vercel.app/`,
  },
  {
    title: "ZenVibe",
    description: "A minimalistic yoga landing website. Animation and Design",
    tags: ["NextJs", "Tailwind", "Framer Motion", "TypeScript"],
    imageUrl: zenImg,
    githubUrl: `${URL}/ZenVibe`,
  },
  {
    title: "NepaFood",
    description:
      "A minimalistic restaurant website. It has features like menu, contact form and newsletter.",
    tags: ["React", "React Best Practices", "CSS", "Hooks"],
    imageUrl: nepaFoodImg,
    githubUrl: `${URL}/NepaFood`,
  },
  {
    title: "HawkAi Site- Intern Work",
    description:
      "Official website of HawkAi Pvt. Ltd. Revamped company site with Next.js and different new technologies.",
    tags: ["TypeScript", "Next.js", "Tailwind", "HygraphCMS", "Framer Motion"],
    imageUrl: hawkaiImg,
    githubUrl: "https://hawkai.online",
  },

  {
    title: "Personal Portfolio",
    description:
      "Personal Portfolio Website to showcase my skills and projects.",
    tags: ["Next.js", "React Icons", "Tailwind", "Framer Motion", "Resend"],
    imageUrl: portfolioImg,
    githubUrl: `${URL}/Binaya_Portfolio`,
  },
  {
    title: "Admin Dashboard - AdminSync",
    description: "Admin Dashboard Template for CRUD operations.",
    tags: ["React", "Flowbite", "Tailwind"],
    imageUrl: adminImg,
    githubUrl: `${URL}/AdminSync`,
  },
  {
    title: "Nepa.ly",
    description:
      "Travel Guide Webpage for tourists to give better flexibility during visit to Nepal",
    tags: ["React", "styled-components"],
    imageUrl: nepalyImg,
    githubUrl: `${URL}/nepa.ly`,
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
