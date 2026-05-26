
import { Link } from "react-router-dom"

export const Navbar=()=>{
    return (<nav className="text-xl text-green-500 flex justify-end gap-6 p-4 bg-blue-200 ">
  
        <Link to="/">Home</Link>
        
        <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
         <Link to="/projects">Projects</Link>

    </nav>)
}