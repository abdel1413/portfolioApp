
import { useState } from "react";
export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);


  return (
    <nav
      className="sticky top-0 left-0 w-full bg-gray-950/95 backdrop-blur-md text-white z-50"
      id="navbar"
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        <a
          href="#home"
          className="text-2xl font-bold text-blue-500 whitespace-nowrap"
        >
          Aboulaye.dev
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-blue-300 hover:text-orange-400">
            ABOUT
          </a>
          <a href="#projects" className="text-blue-300 hover:text-orange-400">
            PROJECTS
          </a>
          <a
            href="/Aboulaye_Tchakoura__.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-orange-400"
          >
            RESUME
          </a>
          <a href="#contact" className="text-blue-300 hover:text-orange-400">
            CONTACT
          </a>
        </div>
      
        <button
        type="button"
        className="lg:hidden text-3xl text-wite "
        onClick={() => setIsOpen(prev => !prev)}>
              { isOpen ? '✕' : '☰' }
          </button>
      </div>
      {isOpen &&(
         <div className="lg:hidden flex flex-col  gap-4 px-6 py-4">
         <a href="#about" onClick={() => setIsOpen(false)}>
            ABOUT
          </a>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            PROJECTS
          </a>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            CONTACT
          </a>
        </div>)}
    </nav>
  );
};
