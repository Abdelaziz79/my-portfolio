"use client";

import Link from "next/link";
import Card from "../Card/Card";
import projectList from "./projectList";

const Projects = () => {
  return (
    <>
      <div className="" id="projects">
        <h3 className="capitalize text-3xl py-1 dark:text-white">
          my projects
        </h3>
        <p className="py-2 leading-8 text-gray-800 text-md dark:text-white">
          this is a list of projects I have worked on to see all the projects
          you can click{" "}
          <Link
            href="https://github.com/Abdelaziz79?tab=repositories"
            target="_blank"
            className="text-blue-400"
          >
            here
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8  ">
        {projectList &&
          projectList?.map((project) => (
            <Card
              key={project.id}
              description={project.description}
              title={project.title}
              source={project.source}
              demo={project.demo}
              imageSrc={project.imageSrc}
            />
          ))}
      </div>
    </>
  );
};

export default Projects;
