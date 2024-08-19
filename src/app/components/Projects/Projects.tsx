"use client";

import Card from "../Card/Card";
import projectList from "./projectList";

const Projects = () => {
  return (
    <>
      <div className="" id="projects">
        <h3 className="capitalize text-3xl py-1 dark:text-white">
          جلسات العلاج الطبيعي و الحجامة
        </h3>
        <p className="py-2 leading-8 text-gray-800 text-md dark:text-white font-xl">
          مجموعة متكاملة من خدمات العلاج الطبيعي المتخصصة، مصممة خصيصًا لتحسين
          جودة حياتك واستعادة صحتك بشكل طبيعي وآمن.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8  ">
        {projectList &&
          projectList?.map((project) => (
            <Card
              key={project.id}
              description={project?.description}
              title={project?.title}
              imageSrc={project.imageSrc}
            />
          ))}
      </div>
    </>
  );
};

export default Projects;
