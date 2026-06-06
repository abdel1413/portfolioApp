import { Navbar } from "./Navbar"

import { ProjectList } from "./ProjectList"

export const Projects = ()=>{
    

    console.log(ProjectList())
    return (
         <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          My Projects
        </h1>

        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          A collection of projects built with React, JavaScript, APIs,
          and modern web development tools.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {ProjectList().map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h2 className="text-xl font-bold mb-3">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

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
    </section>
    )
}