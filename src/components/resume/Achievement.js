import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Flutter development course"
            subTitle="Nexus Berry"
            result="Success"
            des="I have succesfully completed Dart & Flutter course from Nexus Barry Training and It solutions!"
          />
          <ResumeCard
            title="Mobile Application Developer Internship"
            subTitle="InternnCraft - (2 months)"
            result="Success"
            des="Gained 2 months of hands-on experience as a Mobile Application developer at InternnCraft, contributing to the development of a large-scale web and mobile applications using state management like Getx, and Restful API integration with Firebase. Demonstrated ability to optimize application performance by implementing code optimizations."
          />
          <ResumeCard
            title="Wordpress development course"
            subTitle="DigiSkills.pk"
            result="Success"
            des="I have succesfully completed wordpress course from DigiSkill plateform!"
          />
          <ResumeCard
            title="FreeLancing course"
            subTitle="DigiSkills.pk"
            result="Success"
            des="I have succesfully completed wordpress course from DigiSkill plateform!"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Mobile Application Developer (Internship)"
            subTitle="InternnCraft - (2 months)"
            result="Pakistan"
            des="Gained 2 months of hands-on experience as a Mobile Application developer at InternnCraft, contributing to the development of a large-scale web and mobile applications using state management like Getx, and Restful API integration with Firebase. Demonstrated ability to optimize application performance by implementing code optimizations."
          />
          <ResumeCard
            title="React Developer"
            subTitle="Expert Solutionx - (8 months)"
            result="Pakistan"
            des="Gained 8 months of hands-on experience as a React developer at Expert Solutionx, contributing to the development of a large-scale e-commerce platform. Proficient in React's component-based architecture, state management using Redux, and API integration with Firebase. Demonstrated ability to optimize application performance by implementing code optimizations and leveraging React's virtual DOM, resulting in a significant improvement in load times."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
