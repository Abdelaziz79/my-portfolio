import React from "react";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import myImage from "../../assets/images/photo_2021-04-07_17-42-11.jpg";
import myImage2 from "../../assets/images/photo_2021-04-07_17-42-11-removebg.png";
import Image from "next/image";


const About = () => {
    return (
        <>
            <div className="text-center p-10" id="about">
                <h2 className="text-5xl py-2 text-blue-600 font-medium md:text-6xl dark:text-blue-400">Abdelaziz Elhadry</h2>
                <h3 className="text-2xl py-2 md:text-xl dark:text-white">Computer Science Student.</h3>
                <p className="text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto md:text-xl dark:text-white">CS student with a passion for coding and building innovative software solutions.</p>
            </div>
            <div className="flex justify-center text-gray-600 gap-16 text-5xl dark:text-gray-400">
                <a href="https://github.com/Abdelaziz79" target="_blank"><AiFillGithub /></a>
                <a href="https://www.linkedin.com/in/abdelaziz-elhadry-182455205/" target="_blank"><AiFillLinkedin /></a>
                <a href="https://www.facebook.com/abdelaziz.elhadry.16" target="_blank"><AiFillFacebook /></a>
            </div>
            <div className=" m-20 relative rounded-full bg-gradient-to-b from-blue-500 w-80 h-80 overflow-hidden mx-auto md:h-96 md:w-96 dark:text-white">
                <Image className="rounded-xl mx-auto" src={myImage2} alt="azeez" objectFit="cover" />
            </div>
        </>
    );
}

export default About