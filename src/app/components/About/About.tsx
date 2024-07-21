import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import myImage2 from "../../assets/images/photo_2021-04-07_17-42-11-removebg.png";

const About = () => {
  return (
    <>
      <div className="text-center p-10" id="about">
        <h2 className="text-5xl py-2 text-blue-600 font-medium md:text-6xl dark:text-blue-400">
          Abdelaziz Elhadry
        </h2>
        <h3 className="text-2xl py-2 md:text-xl dark:text-white">
          Software Engineer.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto md:text-xl dark:text-white">
          Highly motivated and recent Computer Science graduate with a strong
          foundation in front-end and back-end development. Eager to leverage
          proficiency in various programming languages and frameworks to
          contribute to a team building innovative web applications.
        </p>
      </div>
      <div className="flex justify-center text-gray-600 gap-16 text-5xl dark:text-gray-400">
        <Link href="https://github.com/Abdelaziz79" target="_blank">
          <AiFillGithub />
        </Link>
        <Link
          href="https://www.facebook.com/abdelaziz.elhadry.16"
          target="_blank"
        >
          <AiFillFacebook />
        </Link>
      </div>
      <div className=" m-20 relative rounded-full bg-gradient-to-b from-blue-500 w-80 h-80 overflow-hidden mx-auto md:h-96 md:w-96 dark:text-white">
        <Image
          className="rounded-xl mx-auto"
          src={myImage2}
          alt="azeez"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default About;
