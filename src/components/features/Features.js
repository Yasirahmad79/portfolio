import React from "react";
import { IoLogoFirebase } from "react-icons/io5";
import { FaMobile } from "react-icons/fa";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdDeveloperBoard } from "react-icons/md";
import { SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Mobile App Development"
          des="Experienced React Native developer specializing in crafting high-performance, cross-platform mobile applications.Skilled in building intuitive user interfaces and RESTful APIs integrating with backend (Firebase)."
          icon={<FaMobile />}
        />
        <Card
          title="React web Development"
          des="Results-oriented React web developer specializing in creating scalable and high-performance web applications. Experienced in optimizing code, integrating with APIs, with a deep understanding of React's component-based architecture."
          icon={<MdDeveloperBoard />}
        />
          <Card
            title="UI/UX Design"
            des="Creative UI/UX designer with a passion for crafting intuitive and visually appealing user interfaces. Skilled in conducting user research, wireframing, prototyping, and designing responsive layouts."
            icon={<SiAntdesign />}
          />
        <Card
          title="Backend and Hosting"
          des="Experienced Backend and Hosting expert with a strong foundation in Firebase, a popular backend-as-a-service platform. Proficient in leveraging Firebase's real-time database, cloud functions, authentication, and hosting services to build scalable and efficient web applications."
          icon={<IoLogoFirebase />}
        />
        <Card
          title="Digital Marketting"
          des="Digital Marketing expert specializing in Facebook & Instagram ads. Skilled in creating engaging content, managing budgets, and optimizing ROI."
          icon={<RiAdvertisementFill />}
        />
      </div>
    </section>
  );
};

export default Features;
