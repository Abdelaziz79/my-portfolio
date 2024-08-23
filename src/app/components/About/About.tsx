import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai";

const About = () => {
  return (
    <>
      <div className="text-center p-10" id="about">
        <h2 className="text-5xl py-2 text-blue-600 font-medium md:text-6xl dark:text-blue-400">
          دكتور عبدالله زردق
        </h2>
        <h3 className="text-2xl py-2 md:text-xl dark:text-white">
          دكتور علاج طبيعي.
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto md:text-xl dark:text-white">
          دكتور علاج طبيعي و تغذية علاجية و حجامة طبية حاصل على دورة التغذية
          العلاجية بمدينة زويل للعلوم و التكنولوجيا, حاصل على دورة التغذية
          العلاجية بمؤسسة بهية, حاصل على دورة حجامة.
        </p>
      </div>
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
      <div className=" m-20 relative rounded-full bg-gradient-to-b from-blue-500 w-80 h-80 overflow-hidden mx-auto md:h-96 md:w-96 dark:text-white ">
        <Image
          className="mx-auto"
          src="https://aryvoyijualfmzchcnjx.supabase.co/storage/v1/object/public/myImages/abdalla.png"
          alt="abdalla"
          width={450}
          height={450}
        />
      </div>
    </>
  );
};

export default About;
