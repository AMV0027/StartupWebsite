import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ["Home", "About", "Services", "Projects", "Contact Us"];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed w-full z-[70] top-0 text-white backdrop-blur-md shadow-lg">
            {/* Top bar */}
            <div className="p-5 flex justify-between items-center">
                <h1 className="text-lg font-logo">NEXORIS</h1>
                <div className="sm:hidden">
                    {isOpen ? (
                        <FiX
                            onClick={toggleMenu}
                            className="text-2xl cursor-pointer"
                        />
                    ) : (
                        <FiMenu
                            onClick={toggleMenu}
                            className="text-2xl cursor-pointer"
                        />
                    )}
                </div>
                {/* Desktop nav */}
                <nav className="hidden sm:flex gap-8">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.replace(" ", "").toLowerCase()}`}
                            className="hover:border-blue-400 border-transparent border-b-2 pb-1 transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Mobile menu */}
            <div
                className={`absolute top-0 right-0 w-full h-screen sm:hidden flex flex-col items-center p-5 bg-[#00031D] transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                {/* Close Button Inside */}
                <button
                    onClick={toggleMenu}
                    className="self-end text-3xl mb-5 bg-white hover:bg-red-600 hover:text-white text-black p-1 rounded-full transition-all duration-100 ease-in-out"
                >
                    <FiX />
                </button>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-4 text-left pl-12 pr-12 mt-10 w-full">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            onClick={() => setIsOpen(false)}
                            href={`#${item.replace(" ", "").toLowerCase()}`}
                            className=" hover:scale-110 border-b-2 pb-5 pt-5 p-4 text-3xl hover:text-4xl border-gray-600 hover:border-white hover:bg-blue-500/20 font-raleway transition-all ease-in-out "
                        >
                            {item.toUpperCase()}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
