import { Link } from "react-router"


export const Navbar=()=>{
    return (<nav className=" fixed top-0 left-0 bg-gray-950/80 text-white z-50 w-full " id='navbar'>
         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <Link t0= "/hero" className="text-2xl font-bold text-blue-500">AT</Link>
         </div>
         <div className="hidden md:flex items-center gap-8 py-4">
            <a href="#about" className="hover: text-blue-400 transition">About</a>
            <a href="#skills" className="hover: text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover: text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover: text-blue-400 transition">Contact</a>
         </div>

    </nav>)
}