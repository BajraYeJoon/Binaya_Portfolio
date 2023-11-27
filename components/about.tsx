"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        A driven Frontend Developer with a strong foundation in software
        development, I am eager to contribute my technical skills and creative
        insights to a dynamic team. My core stack includes
        <span className="font-medium"> React, Next.js, and Node.js</span>. Not
        only the frontend part, I also take part in the deep backend on to be
        full stack developer. I am also familiar with TypeScript and Prisma. I
        am always looking to learn new technologies. I am currently looking for
        a <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I am an extrovert
        who loves connecting with people. I also enjoy learning new things and
        am currently exploring
        <span className="font-medium"> on my culture.</span>. Additionally, I'm
        passionate about music and am learning how to play the guitar.
      </p>
    </motion.section>
  );
}
