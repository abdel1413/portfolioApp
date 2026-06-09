import { Navbar } from "./Navbar"
import { useState,useRef } from "react";
import { ProjectList } from "./ProjectList"

export const Projects = ()=>{
  
    const [showAll, setShowAll] = useState(false);
    const sectionRef=useRef(null);

   const displayedProjects = showAll ? ProjectList() : ProjectList().slice(0, 8);

  const handScroll = ()=>{
        if(showAll){
            sectionRef.current?.scrollIntoView({
              behavior:"smooth",
              block:"start",
            })
        }
        setShowAll(!showAll);
      }
    return (
         <section ref={sectionRef}
      id="projects"
      className=" bg-gray-900 text-white py-8 mb-0"
    >
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-1">
          My Projects
        </h1>

        <p className="text-center text-gray-400 mb-5  max-w-2xl mx-auto">
          A collection of projects built with React, JavaScript, APIs,
          and modern web development tools.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-3 xl:grid-cols-4 gap-4 w-full px-4">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 rounded-lg object-cover mx-auto mt-4 "
              />

              <div className="p-3 ">
                <h2 className="text-lg font-bold ">
                  {project.title}
                </h2>
                 <div className="relative group">

                <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                 </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-gray-700 hover:bg-gray-600 py-2 rounded-lg transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
      onClick={handScroll}
      className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition text-center mt-5 px-5 block mx-auto ">
        {showAll ? "Show Less" : "Show All"}
      </button>
    </section>
    )
}