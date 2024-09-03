import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2024 {'onGoing...'}</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BS in Computer Science"
            subTitle="Bacha Khan University (2022 - 2026)"
            result="3.60/4"
            des="Currently pursuing a Bachelor of Science in Computer Science (BSCS) degree, honing my technical skills and knowledge in programming, software development, and computer systems. In my 5th semester, I'm delving deeper into advanced topics and applying my learning through practical projects."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Post Graguate college (2019 - 2021)"
            result="742/1100"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Govt Secondary school (2005 - 2019)"
            result="870/1100"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
