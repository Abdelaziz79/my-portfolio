import React from "react";
import { BiLogoReact, BiLogoCPlusPlus, BiLogoJavascript, BiLogoJava, BiLogoCss3, BiLogoBootstrap, BiLogoHtml5, BiLogoTailwindCss, BiLogoPython, BiLogoGit, BiLogoGithub, BiLogoTypescript } from "react-icons/bi";
import { TbBrandCSharp } from "react-icons/tb"

const Skills = () => {

    return (
        <>
            <div className=" py-10 mt-7 dark:text-white">
                <h3 className="text-3xl py-1">Skills</h3>
            </div>
            <div className=" grid justify-center grid-cols-2  md:grid-cols-6 lg:grid-cols-8 ">

                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400 "><div className="flex flex-col items-center "><BiLogoReact /><p className="text-sm">React</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoJavascript /><p className="text-sm">Javascript</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoJava /><p className="text-sm">Java</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoCPlusPlus /><p className="text-sm">C++</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><TbBrandCSharp /><p className="text-sm">C#</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoPython /><p className="text-sm">Python</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoTypescript /><p className="text-sm">Typescript</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoHtml5 /><p className="text-sm">Html</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoCss3 /><p className="text-sm">Css</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoBootstrap /><p className="text-sm">Bootstrap</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoTailwindCss /><p className="text-sm">TailwindCss</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400" ><div className="flex flex-col items-center "><BiLogoGit /><p className="text-sm">Git</p></div></div>
                <div className="p-5  flex items-center justify-center text-6xl m-2 bg-gray-100 rounded-full w-32 h-32 text-blue-500 shadow-md hover:shadow-lg dark:bg-gray-800 dark:text-blue-400"><div className="flex flex-col items-center "><BiLogoGithub /><p className="text-sm">Github</p></div></div>

            </div >
        </>
    );
}

export default Skills;