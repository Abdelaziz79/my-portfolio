"use client"

import Image from 'next/image'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'


import { useState } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import Skills from './components/Skills/Skills'
export default function Home() {
  const getDarkMode = window.localStorage.getItem('darkMode');
  const [darkMode, setDarkMode] = useState(getDarkMode ? JSON.parse(getDarkMode) : false);

  const setDarkModeHandler = () => {
    window.localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className='min-h-screen text-black'>
          <nav className="py-10 mb-12 flex justify-between dark:bg-gray-900">
            <h1 className="text-xl font-bold uppercase dark:text-white">azeez</h1>
            <ul className="flex items-center">
              <li className="text-2xl cursor-pointer dark:text-white">{darkMode ? <BsFillSunFill onClick={() => setDarkModeHandler()} /> : <BsFillMoonStarsFill onClick={() => setDarkModeHandler()} />}</li>
              <li className="bg-gradient-to-r from-cyan-500 to-blue-500 ml-8 px-4 py-1 rounded-md text-white"><a href="#">resume</a></li>
            </ul>
          </nav>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Footer />
        </section>
      </main>

    </div>
  )
}
