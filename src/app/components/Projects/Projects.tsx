import React from "react";

import myImage from "../../assets/images/photo_2021-04-07_17-42-11.jpg";

import Image from "next/image";
import Card from "../Card/Card";
import img1 from "../../assets/img/musicPlayer.png";
import img2 from "../../assets/img/mediaPlayer.png";
import img3 from "../../assets/img/ml.png";
import img4 from "../../assets/img/aimTrainer.png";

import maze from "../../assets/img/maze.png";
import p from "../../assets/img/p.png";

const Projects = () => {
    return (
        <>
            <div className="" id="projects">
                <h3 className="capitalize text-3xl py-1 dark:text-white">my projects</h3>
                <p className="py-2 leading-8 text-gray-800 text-md dark:text-white">this is a list of <span className="text-blue-400">projects</span> I have worked on</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-8  ">
                
                <Card description="maze generator and solver made with react using Breadth First Search and Depth First Search to find the goal in maze" title="maze solver" source="https://github.com/Abdelaziz79/maze-solver" demo="https://azeez-app-maze-solver.surge.sh/" imageSrc={maze}></Card>
                <Card description="problem saving app made with react" title="problem saving" source="https://github.com/Abdelaziz79/azeez-app" demo="https://azeez-app-0.netlify.app/" imageSrc={p}></Card>
                <Card description="aim trainer made with javascript" title="aim trainer" source="https://github.com/Abdelaziz79/aim-trainer" demo="https://azeez-aim-trainer.surge.sh/" imageSrc={img4}></Card>

                <Card description="music player made with java " title="music player" source="https://github.com/Abdelaziz79/music-player" imageSrc={img1}></Card>
                <Card description="video player made with java" title="video player" source="https://github.com/Abdelaziz79/media-player" imageSrc={img2}></Card>
                <Card description="machine learning made with python" title="machine learning " source="https://github.com/Abdelaziz79/ml-pr" imageSrc={img3}></Card>

            </div>
        </>
    );
}

export default Projects;