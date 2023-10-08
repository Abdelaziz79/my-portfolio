
import React from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
const NavBar = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <nav className="py-10 mb-12 flex justify-between dark:bg-gray-900">
                <h1 className="text-xl font-mono uppercase ">developedbyazeez</h1>
                <ul className="flex items-center">
                    <li className="text-2xl cursor-pointer"><BsFillMoonStarsFill  onClick={() => setDarkMode(!darkMode)}/></li>
                    <li className="bg-gradient-to-r from-cyan-500 to-blue-500 ml-8 px-4 py-1 rounded-md text-white"><a href="#">resume</a></li>
                </ul>
            </nav>

        </div>
    );
}

export default NavBar