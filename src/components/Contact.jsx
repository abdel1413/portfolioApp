// import { Navbar } from "./Navbar"

import { FaPhone, FaEnvelope, FaLinkedin,FaGithub, FaTwitter, FaFacebook, FaPen, FaInstagram} from "react-icons/fa6"


export const Contact =()=>{
    return (<>
   {/* <Navbar/> */}
   <section className="min-h-screen scroll-mt-24 flex flex-col items-center justify-center" id='contact'>
   
     <div>
        <h1 className="text-3xl font-bold text-center mb-1">Contact Me</h1>
        <p className="text-center text-gray-400 mb-5  max-w-2xl mx-auto">
          Feel free to reach out to me for any inquiries, collaborations, or
          opportunities. I’m always open to connecting with fellow developers,
          potential clients, and anyone interested in my work.
        </p>
     </div>
     
       
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-start  mb-0">

              <span className="text-lg font-bold text-blue-500 flex"> 
                <FaPhone   className="text-lg font-bold text-blue-500 mr-2" /> Phone :
                </span>
                 <h1 className="text-xl  hover:text-blue-500 transition duration-500">347-518-2522</h1>
              </div>
              <div className="flex flex-col items-start mb-0">

                <span className="text-2xl font-bold text-blue-500 flex"> 
                <FaEnvelope className="text-lg font-bold text-blue-500 mr-2"/>Email :
                </span>
                 <h1 className="text-xl  hover:text-blue-500 transition duration-500">aboulayet63@gmail.com</h1>
              </div>
           
                 <div className="flex flex-col items-start ">
                <span className="text-lg font-bold text-blue-500 flex"> 
                    <FaPen className="text-2xl font-bold text-blue-500 "/>Address :</span>
                <h1 className="text-xl  hover:text-blue-500 transition duration-500">New York, USA</h1>

                 </div>
            </div>
             <div className="flex items-center gap-4 justify-center mt-8">
                <a href="https://github.com/aboulayet63" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-3xl hover:text-blue-500 transition duration-500 "/>
                    
                </a>
                <a href="https://twitter.com/aboulayet63" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-3xl hover:text-blue-500 transition duration-500"/>
                </a>
                <a href="https://www.facebook.com/aboulayet63" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:text-blue-500 transition duration-500"/>  
                </a>
                <a href="https://www.linkedin.com/in/aboulaye-tchakoura-9b1a4b1b3/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl hover:text-blue-500 transition duration-500"/>
                </a>
                    <a href="https://www.instagram.com/aboulayet63/" target="_blank" rel="noopener noreferrer"> 
                <FaInstagram className="text-3xl hover:text-blue-500 transition duration-500"/>
                </a>
             </div>
    
  
    
   </section>
        </>)
}