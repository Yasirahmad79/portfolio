import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix, projectSeven } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="FOOD DELIVERY APP"
          des="This React Native food delivery app allows users to easily browse menus, place orders, and track their delivery!"
          src={projectOne}
          projectView="https://drive.google.com/file/d/19NF3gGKrSRAH1gd74wsCfZ2pQ9V1x6HC/view?usp=drive_link"
          githubLink="https://github.com/Yasirahmad79/RN-food-App"
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Experience real-time updates to your expense data and gain a details overview of your spending habits with our user-friendly react native expense tracker app!"
          src={projectTwo}
          projectView="https://drive.google.com/file/d/16me_lNp4p3g6NmLVot75ZDwOyiHq_2Qh/view?usp=drive_link"
          githubLink="https://github.com/Yasirahmad79/expense-tracker-app"
        />
        <ProjectsCard
          title="guess Number Game"
          des=" Challenge your luck and test your guessing skills in our addictive number guessing game, where every guess brings you closer to victory!"
          src={projectThree}
          projectView="https://drive.google.com/file/d/15Q737HZlyDH_rumfnXiprJ4PzJgBnehM/view?usp=drive_link"
          githubLink="https://github.com/Yasirahmad79/Guess-Number-Game"
        />
          <ProjectsCard
            title="Hospital website"
            des="A medical website designed to provide patients with essential information about hospital services, doctors, and appointments. Built with HTML, CSS, and JavaScript for a user-friendly interface and interactive features!"
            src={projectSix}
            projectView="https://yasirahmad79.github.io/Hospital-website/index.html"
            githubLink="https://github.com/Yasirahmad79/Hospital-website"
          />
        <ProjectsCard
          title="E-commerce Website"
          des="An innovative e-commerce website developed using React, featuring a responsive design, advanced search functionality, and amazing animation effects!!"
          src={projectFour}
          projectView="https://lucent-lily-297516.netlify.app/"
          githubLink="https://github.com/Yasirahmad79/Ecommerce"
        />
        <ProjectsCard
          title="Myntra website clone"
          des="A fashion-focused e-commerce platform inspired by Myntra, offering a vast collection of clothing, accessories, and footwear!"
          src={projectFive}
          projectView="https://yasirahmad79.github.io/Myntra-store/"
          githubLink="https://github.com/Yasirahmad79/Myntra-store"
        />
        <ProjectsCard
          title="YouTube clone"
          des="A video-sharing platform inspired by YouTube, allowing users to upload, watch, and share videos. Built with HTML, CSS, and JavaScript for a seamless user experience and interactive features.!"
          src={projectSeven}
          projectView="https://yasirahmad79.github.io/Youtube-clone/"
          githubLink="https://github.com/Yasirahmad79/Youtube-clone"
        />
      </div>
    </section>
  );
}

export default Projects