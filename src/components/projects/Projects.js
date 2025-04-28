import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive,  projectSix } from "../../assets/index";
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
          title="BERRIES ECOMMERCE APP"
          des="This Ecommerce app allows users to easily browse menus, place orders, and track their delivery! with Stripe payment method"
          src={projectFour}
          projectView="https://drive.google.com/file/d/1KhCao1NpcfNwbrCg2g7CL6RspmcWorfj/view?usp=drivesdk"
          githubLink="https://github.com/Yasirahmad79/berries_ecom_app"
        />
        <ProjectsCard
          title="AI STORY CRETOR APP"
          des="This Ai story generator app will get two Character and Moral from User and create a story accourding to its moral and store it on database."
          src={projectFive}
          projectView="https://drive.google.com/file/d/1pqGMSfkzRIuTDIF8Eq9H9c9uwaWEzNlY/view?usp=drive_link"
          githubLink="https://github.com/Yasirahmad79/ai_story_creator_app"
        />
        <ProjectsCard
          title="FOOD DELIVERY APP"
          des="This food delivery app allows users to easily browse menus, place orders, and track their delivery!"
          src={projectOne}
          projectView="https://drive.google.com/file/d/19NF3gGKrSRAH1gd74wsCfZ2pQ9V1x6HC/view?usp=drive_link"
          githubLink="https://github.com/Yasirahmad79/RN-food-App"
        />
        <ProjectsCard
          title="Expanse tracker App"
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
      </div>
    </section>
  );
}

export default Projects