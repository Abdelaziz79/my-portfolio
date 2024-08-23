"use client";

import { Rubik } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import MyButton from "./components/MyButton";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(false);

  const setDarkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <html lang="ar" dir="rtl">
      <body className={rubik.className}>
        <div className={darkMode ? "dark" : ""}>
          <main className="bg-white px-5 md:px-20 lg:px-40 dark:bg-gray-900 sm:px-5 ">
            <section className=" text-black">
              <nav className="py-10 mb-12 flex justify-between dark:bg-gray-900">
                <Link href="/">
                  <h1 className="text-3xl font-bold uppercase dark:text-white hover:scale-110 duration-300">
                    عبدالله
                  </h1>
                </Link>
                <ul className="flex items-center">
                  <li className="ml-3">
                    <Link href="/resume">
                      <MyButton>الشهادات</MyButton>
                    </Link>
                  </li>
                  <li className="ml-3">
                    <Link href="/blogs">
                      <MyButton>المدونة</MyButton>
                    </Link>
                  </li>
                  <li className="text-2xl cursor-pointer dark:text-white hover:scale-110 duration-300">
                    {darkMode ? (
                      <BsFillSunFill onClick={() => setDarkModeHandler()} />
                    ) : (
                      <BsFillMoonStarsFill
                        onClick={() => setDarkModeHandler()}
                      />
                    )}
                  </li>
                </ul>
              </nav>
            </section>

            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
