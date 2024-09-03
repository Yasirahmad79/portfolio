import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            2023 - 2024 OnGoing...
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Mobile Application (React Native Developer Internship)"
            subTitle="InternnCraft - (2 months)"
            result="Pakistan"
            des="Gained 2 months of hands-on experience as a React Native developer at InternnCraft, contributing to the development of a large-scale e-commerce platform. Proficient in React Native component-based architecture, state management using Redux, and Restful API integration with Firebase. Demonstrated ability to optimize application performance by implementing code optimizations."
          />
          <ResumeCard
            title="React Developer"
            subTitle="Expert Solutionx - (8 months)"
            result="Pakistan"
            des="Gained 8 months of hands-on experience as a React developer at Expert Solutionx, contributing to the development of a large-scale e-commerce platform. Proficient in React's component-based architecture, state management using Redux, and API integration with Firebase. Demonstrated ability to optimize application performance by implementing code optimizations and leveraging React's virtual DOM, resulting in a significant improvement in load times."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Web Developer Trainer"
            subTitle="(completed One Batch)"
            result="Pakistan"
            des="Aspiring web developer seeking to gain practical experience and develop technical skills. Eager to learn and contribute to dynamic projects, while continuously expanding knowledge in web development technologies."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
