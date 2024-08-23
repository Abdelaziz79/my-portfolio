"use client";
import { getAllWorks } from "@/app/services/works";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import Card from "../Card/Card";

type project = {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
};

const Projects = () => {
  const [projectList, setProjectList] = useState<project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const data = await getAllWorks();
      setProjectList(data);
      setIsLoading(false);
    };

    getData();
  }, []);
  return isLoading ? (
    <div className="flex items-center justify-center">
      <Loader />
    </div>
  ) : (
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
              imageSrc={project.imgSrc}
            />
          ))}
      </div>
    </>
  );
};

export default Projects;
