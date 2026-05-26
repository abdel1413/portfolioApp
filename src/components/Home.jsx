import { Navbar } from "./Navbar"

 export const Home =()=>{
    return(<>
     <Navbar/>
     <section className="min-h-screen bg-gray-950 text-white flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full grid md: grid-cols-2 items-center gar-12">
        
        <div className="text-blue-500 font-semibold mb-4"

        >
           <p>Full Stack software Engineer</p> 

        <div className="text-5xl md: text-7xl font-bold leading-tight mb-6"
        ><span>Hi, my name is</span><h1>Aboulaye Tchakoura</h1>
        </div>
 
        <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-8"
        >I build modern, responsive, and user-friendly
            web applications using React, Tailwind CSS,
            and JavaScript.</p>

            <div className="flex gap-4 flex-wrap">
             <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition text-white"
             >View Projects</button>
             <button className="border border-gray-600 hover: border-blue-500 hover: text-blue-400 px-6 py-3 font-medium transition"
             >Contact Me</button>
            </div>

        </div>
        <div className="flex justify-center">
            <div className="w-72 h-72 md: w-96 h-96 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shadow-2xl">
               <div className="text-7xl text-blue-400 font-bold">
                AT

               </div>
            </div>

        </div>

        </div>
       

     </section>
    </>)
 }