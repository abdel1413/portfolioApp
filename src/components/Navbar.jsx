
import { Link } from "react-router-dom"

export const Navbar=()=>{
    return (<nav className=" fixed top-0 left-0 bg-gray-950/80 text-white z-50 ">
         <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

            <Link to="/" className="text-2xl font-bold text-blue-500">AT</Link>
         </div>
         <div className="hidden md:flex items-center gap-8">

            <Link to="/about" className="hover: text-blue-400 transition">About</Link>
            <Link to="/skills" className="hover: text-blue-400 transition">Skills</Link>
            <Link to="/projects" className="hover: text-blue-400 transition">Projects</Link>
            <Link to="/contact" className="hover: text-blue-400 transition">Contact</Link>
         </div>

    </nav>)
}