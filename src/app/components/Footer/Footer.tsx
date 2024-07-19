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
            className="p-2 bg-gray-100 rounded-md h-16 dark:bg-gray-800 dark:text-white"
            name="message"
            placeholder="Your Message"
          ></textarea>

          <input
            className="bg-gradient-to-r from-cyan-500 to-blue-500  text-white font-bold px-4 py-2 rounded-md my-5 w-28"
            type="submit"
            value="Send"
          />
        </form>
      </div>

      <div>
        <div className="py-10 dark:bg-gray-900">
          <div className="flex justify-center text-gray-600 gap-16 text-5xl dark:text-gray-400">
            <a href="https://github.com/Abdelaziz79" target="_blank">
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdelaziz-elhadry-182455205/"
              target="_blank"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://www.facebook.com/abdelaziz.elhadry.16"
              target="_blank"
            >
              <AiFillFacebook />
            </a>
          </div>
          <div className="mt-10 flex justify-center text-gray-600 gap-8 text-md dark:text-gray-400">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#resume">resume</a>
          </div>
          <p className="mt-10 text-center dark:text-gray-500">
            © Abdelaziz Elhadry 2023
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
