import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ["Home", "About", "Services", "Projects", "Contact Us"];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed w-full z-50 top-0 text-white backdrop-blur-md shadow-lg">
            {/* Top bar */}
            <div className="p-5 flex justify-between items-center">
                <h1 className="text-lg font-logo">Lexora Labs</h1>
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
                className={`absolute top-0 right-0 w-3/4 h-screen sm:hidden flex flex-col items-center p-5 backdrop-blur-lg bg-black/50 transform ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                {/* Close Button Inside */}
                <button
                    onClick={toggleMenu}
                    className="self-end text-xl mb-5 hover:text-blue-400"
                >
                    <FiX />
                </button>

                {/* Navigation Links */}
                <nav className="flex flex-col gap-5 text-center mt-10">
                    {navItems.map((item, index) => (
                        <a
                            key={index}
                            onClick={() => setIsOpen(false)}
                            href={`#${item.replace(" ", "").toLowerCase()}`}
                            className="hover:border-blue-400 hover:scale-110 transition-all ease-in-out border-transparent border-b-2 text-lg"
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
