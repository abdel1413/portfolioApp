import { Navbar } from "./Navbar"


export const Projects = ()=>{
    return (
        <section id="projects" className="min-h-screen scroll-mt-24 flex items-center justify-center px-6 bg-gray-900 text-white">
        <Navbar/>
        <h1 className="text-4xl font-bold mb-6 ">My Projects</h1>
        <p className="bg-gray-300 text-lg leading-relaxed "> The skills used to build these projects include: <span>React,</span>React Router<span></span>javaScript<span></span>.</p>
         <div  >
            <div >cart1</div>
            <div>cart </div>
            <div>cart </div>
            <div>cart </div>
            <div>cart </div>
            <div>cart </div>
         </div>
           <button >See More &gt</button>
        </section>
    )
}