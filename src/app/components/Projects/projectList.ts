import img4 from "@/app/assets/img/aimTrainer.png";
import img2 from "@/app/assets/img/mediaPlayer.png";
import img3 from "@/app/assets/img/ml.png";
import img1 from "@/app/assets/img/musicPlayer.png";
import toDo from "@/app/assets/img/to-do-app.png";

import codeRoad from "@/app/assets/img/1.png";
import fun from "@/app/assets/img/fun.png";
import maze from "@/app/assets/img/maze.png";
import p from "@/app/assets/img/p.png";
import wild from "@/app/assets/img/wild.png";
const projectList = [
  {
    id: 0,
    description:
      "Welcome to Fun & Mental, an innovative project that brings data structures and algorithms to life through interactive visualizations. This project, currently under development, leverages the power of React Flow and Monaco Editor to allow users to create, visualize, and understand complex data structures and algorithms in a fun and intuitive way.",
    title: "Fun & Mental",
    source: "https://github.com/Abdelaziz79/fundamental",
    demo: "https://fundamental-iota.vercel.app",
    imageSrc: fun,
  },
  {
    id: crypto.randomUUID(),
    description:
      "CodeRoad is your ultimate destination for learning and mastering coding skills. Whether you're a beginner or an experienced programmer, we provide a platform where you can explore various topics, take quizzes to test your knowledge, engage with the community through posts and comments, and continuously improve your coding abilities.",
    title: "CodeRoad",
    source: "https://github.com/Abdelaziz79/codeRoad",
    demo: "code-road-seven.vercel.app",
    imageSrc: codeRoad,
  },
  {
    id: crypto.randomUUID(),
    description:
      "The Wild Oasis hotel management app is a full-featured React web application that allows hotel employees to manage cabins, bookings, and guests. The app uses Supabase for its backend and implements a variety of advanced React techniques, such as HOCs, the Compound Component Pattern, and React Query.",
    title: "The Wild Oasis",
    source: "https://github.com/Abdelaziz79/the-wild-oasis?tab=readme-ov-file",
    demo: "https://the-wild-oasis-azeez.netlify.app/login",
    imageSrc: wild,
  },
  {
    id: 1,
    description:
      "maze generator and solver made with react using Breadth First Search and Depth First Search to find the goal in maze",
    title: "maze solver",
    source: "https://github.com/Abdelaziz79/maze-solver",
    demo: "https://azeez-app-maze-solver.surge.sh/",
    imageSrc: maze,
  },
  {
    id: 2,
    description: "problem saving app made with react",
    title: "problem saving",
    source: "https://github.com/Abdelaziz79/azeez-app",
    demo: "https://azeez-app-0.netlify.app/",
    imageSrc: p,
  },
  {
    id: 3,
    description: "aim trainer made with javascript",
    title: "aim trainer",
    source: "https://github.com/Abdelaziz79/aim-trainer",
    demo: "https://azeez-aim-trainer.surge.sh/",
    imageSrc: img4,
  },
  {
    id: 4,
    description: "music player made with java ",
    title: "music player",
    source: "https://github.com/Abdelaziz79/music-player",
    imageSrc: img1,
  },
  {
    id: 5,
    description: "video player made with java",
    title: "video player",
    source: "https://github.com/Abdelaziz79/media-player",
    imageSrc: img2,
  },
  {
    id: 6,
    description: "machine learning made with python",
    title: "machine learning ",
    source: "https://github.com/Abdelaziz79/ml-pr",
    imageSrc: img3,
  },
  {
    id: 7,
    description: "to do app made with react",
    title: "to do app ",
    source: "https://github.com/Abdelaziz79/to-do-app",
    demo: "https://azeez-to-do-app.surge.sh",
    imageSrc: toDo,
  },
];

export default projectList;
