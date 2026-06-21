//import { Navbar } from "./Navbar"


export const About =()=>{
    return(
    <>

    <section id="about" className="bg-[#1f1f1f] text-white py-20">
  <div className="max-w-6xl mx-auto px-4">

    <h2 className="text-5xl font-bold text-center text-orange-400 mb-12">
      About Me
    </h2>

    <div className="space-y-10">

      <div className="bg-[#3d3d3d] border-b-4 border-orange-400 p-8 text-center">
       
        <p className="mt-4 text-gray-300">
         Computer Science student with experience building full-stack applications using React, Node.js, and SQL.
          Interested in frontend and full-stack development opportunities.
        </p>
      </div>
      <div className="bg-[#3d3d3d] border-b-4 border-orange-400 p-8 text-center">
        <h3 className="text-4xl text-orange-400 mb-3">
          2023 - Present
        </h3>

        <h4 className="text-2xl font-semibold">
          Computer Science Student
        </h4>

        <p className="mt-4 text-gray-300">
          Studying Computer Science at Lehman College
          with coursework in Web Development,
          Data Structures, Operating Systems,
          Databases, Networking and Cybersecurity.
        </p>
      </div>

      <div className="bg-[#3d3d3d] border-b-4 border-orange-400 p-8 text-center">
        <h3 className="text-4xl text-orange-400 mb-3">
          2024 - 2025
        </h3>

        <h4 className="text-2xl font-semibold">
          Software Engineering Intern
        </h4>

        <p className="mt-4 text-gray-300">
          Worked on a mentorship platform using
          React Native, Node.js, Firebase and Expo,
          building authentication, user profiles,
          dashboards and payment integration.
        </p>
      </div>

      <div className="bg-[#3d3d3d] border-b-4 border-orange-400 p-8 text-center">
        <h3 className="text-4xl text-orange-400 mb-3">
          Full Stack Projects
        </h3>

        <p className="mt-4 text-gray-300">
          Built multiple projects including
          Enrollment Systems, E-Commerce Stores,
          Weather Apps, Giphy Search, Wikipedia Search
          and React-based applications.
        </p>
      </div>

    </div>
  </div>
</section>

      
    </>
    )
}