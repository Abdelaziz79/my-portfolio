import {
  BiLogoBootstrap,
  BiLogoCPlusPlus,
  BiLogoCss3,
  BiLogoGit,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";
import { RiSupabaseFill } from "react-icons/ri";
import { TbBrandCSharp, TbBrandNextjs } from "react-icons/tb";

type Skill = {
  id: number;
  name: string;
  icon: React.ComponentType;
};
const skillsList: Skill[] = [
  {
    id: 1,
    name: "React",
    icon: BiLogoReact,
  },

  {
    id: 2,
    name: "Javascript",
    icon: BiLogoJavascript,
  },
  {
    id: 3,
    name: "Java",
    icon: BiLogoJava,
  },
  {
    id: 4,
    name: "C++",
    icon: BiLogoCPlusPlus,
  },
  {
    id: 5,
    name: "C#",
    icon: TbBrandCSharp,
  },
  {
    id: 6,
    name: "Python",
    icon: BiLogoPython,
  },
  {
    id: 7,
    name: "Typescript",
    icon: BiLogoTypescript,
  },
  {
    id: 8,
    name: "Html",
    icon: BiLogoHtml5,
  },
  {
    id: 9,
    name: "Css",
    icon: BiLogoCss3,
  },
  {
    id: 14,
    name: "Supabase",
    icon: RiSupabaseFill,
  },
  {
    id: 15,
    name: "Next.js",
    icon: TbBrandNextjs,
  },
  {
    id: 10,
    name: "Bootstrap",
    icon: BiLogoBootstrap,
  },
  {
    id: 11,
    name: "TailwindCss",
    icon: BiLogoTailwindCss,
  },
  {
    id: 12,
    name: "Git",
    icon: BiLogoGit,
  },
  {
    id: 13,
    name: "Github",
    icon: BiLogoGithub,
  },
];

export default skillsList;
