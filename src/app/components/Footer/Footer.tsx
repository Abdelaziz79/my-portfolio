import Link from "next/link";
import { AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className=" py-10 mt-7 dark:text-white">
        <h3 className="text-3xl py-1">تواصل معنا</h3>
        <p className="py-2 leading-8 text-gray-800 text-md dark:text-white font-xl">
          تواصل معنا اليوم لتحسين جودة حياتك.
        </p>
        <div className="contact-methods">
          <ul className="space-y-6">
            <li className="transform transition-all  duration-300 hover:scale-[1.02]">
              <Link
                href="https://wa.me/201019488165"
                target="_blank"
                className="flex items-center justify-between p-4 rounded-lg bg-white shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <span className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  راسلنا عن طريق الواتساب
                </span>
                <div className="flex items-center gap-1">
                  <span className="mr-2 text-green-600 dark:text-green-400">
                    01019488165
                  </span>
                  <AiOutlineWhatsApp
                    className="text-green-600 dark:text-green-400"
                    size={28}
                  />
                </div>
              </Link>
            </li>
            <li className="transform transition-all duration-300 hover:scale-[1.02]">
              <Link
                href="https://www.facebook.com/profile.php?id=100009935468631&mibextid=ZbWKwL"
                target="_blank"
                className="flex items-center justify-between p-4 rounded-lg bg-white shadow-md hover:shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <span className="text-xl font-medium text-gray-800 dark:text-gray-200">
                  تواصل معنا عن طريق الفيسبوك
                </span>
                <AiFillFacebook
                  className="text-blue-600 dark:text-blue-400"
                  size={28}
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="location mt-10">
          <h3 className="text-3xl py-1">موقعنا</h3>
          <p className="py-2 leading-8 text-gray-800 text-md dark:text-white font-xl">
            سنباط - زفتا - الغربية
          </p>
          <div className="w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3426.841966356656!2d31.210033410661257!3d30.807065805754437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDQ4JzIzLjciTiAzMcKwMTInMzQuNiJF!5e0!3m2!1sar!2seg!4v1724163133434!5m2!1sar!2seg"
              loading="lazy"
              className="w-[90%] max-w-[1000px] h-[300px] rounded-lg mx-auto"
            />
          </div>
        </div>
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
            href="https://wa.me/+201019488165"
            target="_blank"
            className="hover:scale-110 duration-300"
          >
            <span className="flex flex-col items-center">
              <AiOutlineWhatsApp />
              <p className="text-sm">الواتساب</p>
            </span>
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=100009935468631&mibextid=ZbWKwL"
            target="_blank"
            className="hover:scale-110 duration-300"
          >
            <span className="flex flex-col items-center">
              <AiFillFacebook />
              <p className="text-sm">الفيسبوك</p>
            </span>
          </Link>
        </div>
        <div className="mt-10 flex justify-center text-gray-600 gap-8 text-md dark:text-gray-400">
          <Link href="/#about" className="hover:scale-110 duration-300">
            لمحة عني
          </Link>
          <Link href="/#projects" className="hover:scale-110 duration-300">
            الحالات
          </Link>
          <Link href="/resume" className="hover:scale-110 duration-300">
            الشهادات
          </Link>
        </div>
        <p className="mt-10 text-center dark:text-gray-500">
          made with ❤️ by{" "}
          <Link
            href={"https://www.linkedin.com/in/abdelaziz-elhadry-02858631a/"}
            target="_blank"
            className="hover:text-blue-500 hover:text-[1.1rem] duration-300 text-blue-400 font-bold"
          >
            Abdelaziz
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
