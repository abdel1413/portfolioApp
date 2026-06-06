import { Navbar } from "./Navbar"
import calculator from '../assets/projects/calculator.png'
import drag_Drop from '../assets/projects/drag_drop.jpeg'
import enrollment from '../assets/projects/enroll3.jpeg'
import giphy from '../assets/projects/giphy.jpeg'
import tictoctoe from '../assets/projects/tictoctoe.png'
import robot from '../assets/projects/robot3.jpeg'


export const Projects = ()=>{
    return (
        <section id="projects" className="min-h-screen scroll-mt-24 flex items-center justify-center px-6 bg-gray-900 text-white">
        <Navbar/>
        <div className="max-w-7xl mx-auto py-24">
        <div className="text-center">

        <h1 className="text-4xl font-bold mb-6 ">My Projects</h1>
        <p className="text-lg text-center leading-relaxed mb-10  "> 
            The skills used to build these projects include:
             <span>React,</span>
             <span>React Router</span> and
             <span>JavaScript</span>.</p>
        </div>
         <div  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8 w-full max-w-6xl">
            <div className="bg-gray-800 p-2 rounded-lg">

                <img className="rounded-lg h-full hover:scale-105 transition-transform duration-300 "  src={calculator} alt="calculator" />
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">
                <img className="rounded-lg h-full hover:scale-105 transition-transform duration-300"  src={drag_Drop} alt="drag and drop" />

            </div>
            <div className="bg-gray-800 p-2 rounded-lg">

                <img className="rounded-lg h-full hover:scale-105 transition-transform duration-300 "  src={enrollment} alt=" enrollment" />
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">

                <img className="rounded-lg h-full hover:scale-105 transition-transform duration-300"  src={giphy} alt="ghiphy" />
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">

                <img  className="rounded-lg h-full hover:scale-105 transition-transform duration-300" src={tictoctoe} alt=" tic toc toe" /> 
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">

                <img  className="rounded-lg h-full hover:scale-105 transition-transform duration-300" src={robot} alt="robot" />
            </div>
         </div> 
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 justify-center mx-auto block">
            See More &gt
          </button>
        </div>
        </section>
    )
}