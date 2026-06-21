// import { Link } from "react-router-dom"


export const Navbar=()=>{
    return (
    <nav className=" fixed top-0 left-0 bg-gray-950/80 text-white z-50 w-full  flex  " id='navbar'>
         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href= "#hero" className="text-2xl font-bold text-blue-500 hover:text-orange-400 transition duration-500">AT</a>
         </div>
         <div className="hidden md:flex items-center gap-8 py-4">
            <a href="#about" className=" text-blue-300 hover:text-orange-400 transition duration-500">ABOUT</a>
            <a href="#projects" className="text-blue-300 hover:text-orange-400 transition duration-500">PROJECTS</a>
            <a href="/AboulayeTchakoura_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-orange-400 transition duration-500">RESUME</a>
            <a href="#contact" className="text-blue-300 hover:text-orange-400 transition duration-500">CONTACT</a>
         </div>

    </nav>)
}