import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" py-10 mt-7 dark:text-white">
        <h3 className="text-3xl py-1">Contact</h3>
        <form
          className="flex flex-col py-10"
          action="mailto:abdelazizelhadry1@gmail.com"
          method="post"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center  ">
            <input
              className="p-2 bg-gray-100 rounded-md h-14 dark:bg-gray-800 dark:text-white"
              name="name"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="my-3  p-2 bg-gray-100 rounded-md h-14 dark:bg-gray-800 dark:text-white"
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="p-2 bg-gray-100 rounded-md h-40 dark:bg-gray-800 dark:text-white"
            name="message"
            placeholder="Your Message"
          />
          <input
            className="mt-3 bg-gradient-to-r from-cyan-500 to-blue-500  px-4 py-1 rounded-md text-white hover:scale-110 duration-300 hover:from-blue-500 hover:to-cyan-500 cursor-pointer  w-28"
            type="submit"
            value="Send"
          />
        </form>
      </div>

      <MiniFooter />
    </>
  );
};

export function MiniFooter() {
  return (
    <div>
      <div className="py-10 dark:bg-gray-900">
        <div className="flex justify-center text-gray-600 gap-16 text-5xl dark:text-gray-400">
          <Link
            href="https://github.com/Abdelaziz79"
            target="_blank"
            className="hover:scale-110 duration-300"
          >
            <span className="flex flex-col items-center">
              <AiFillGithub />
              <p className="text-sm">Github</p>
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/abdelaziz-elhadry-02858631a/"
            target="_blank"
            className="hover:scale-110 duration-300"
          >
            <span className="flex flex-col items-center">
              <AiFillLinkedin />
              <p className="text-sm">Linkedin</p>
            </span>
          </Link>
          <Link
            href="https://www.facebook.com/abdelaziz.elhadry.16"
            target="_blank"
            className="hover:scale-110 duration-300"
          >
            <span className="flex flex-col items-center">
              <AiFillFacebook />
              <p className="text-sm">Facebook</p>
            </span>
          </Link>
        </div>
        <div className="mt-10 flex justify-center text-gray-600 gap-8 text-md dark:text-gray-400">
          <Link href="/#about" className="hover:scale-110 duration-300">
            About
          </Link>
          <Link href="/#projects" className="hover:scale-110 duration-300">
            Projects
          </Link>
          <Link href="/resume" className="hover:scale-110 duration-300">
            Resume
          </Link>
        </div>
        <p className="mt-10 text-center dark:text-gray-500">
          © Abdelaziz Elhadry 2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
