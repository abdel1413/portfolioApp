// import { Navbar } from "./Navbar"

import { FaPhone, FaEnvelope, FaLinkedin,FaGithub, FaTwitter, FaFacebook, FaPen } from "react-icons/fa6"


export const Contact =()=>{
    return (<>
   {/* <Navbar/> */}
   <section className="min-h-screen scroll-mt-24" id='contact'>
    <div>
     <div>
        <h1 className="text-3xl font-bold text-center mb-1">Contact Me</h1>
        <p className="text-center text-gray-400 mb-5  max-w-2xl mx-auto">
          Feel free to reach out to me for any inquiries, collaborations, or
          opportunities. I’m always open to connecting with fellow developers,
          potential clients, and anyone interested in my work.
        </p>
     </div>
     <div className="flex items-center justify-center gap-10">
     </div>
        <div className="flex items-center justify-center gap-10">  
            

                <a href="tel:347-518-2522"> <span className="text-2xl font-bold text-blue-500"> <FaPhone /> Phone :</span>
                 <h1 >347-518-2522</h1>
                </a>

                <a href="mailto:ab@gmail.com"> <span className="text-2xl font-bold text-blue-500"> <FaEnvelope /> :</span>
                 <h1 >aboulayet63@gmail.com</h1>
                </a>
                <FaPen className="text-2xl font-bold text-blue-500"/>

            
            <a href="https://github.com/aboulayet63" target="_blank" rel="noopener noreferrer">
                <span className="text-2xl font-bold text-blue-500"><FaGithub/>:</span>
                <h1 >aboulayet63</h1>
            </a>
            <a href="https://www.aboulayetchakoura.com" target="_blank" rel="noopener noreferrer">
                <span className="text-2xl font-bold text-blue-500">🌐:</span>
                <h1 >www.aboulayetchakoura.com</h1>
            </a>    
            <a href="https://www.aboulayetchakoura.com/resume.pdf" target="_blank" rel="noopener noreferrer">
                <span className="text-2xl font-bold text-blue-500">📄:</span>
                <h1 >Resume</h1>
            </a>    
              <a href="https://twitter.com/aboulayet63" target="_blank" rel="noopener noreferrer">
                <span className="text-2xl font-bold text-blue-500"><FaTwitter/>:</span>
            </a>

            <a href="https://www.facebook.com/aboulayet63" target="_blank" rel="noopener noreferrer">
                <span className="text-2xl font-bold text-blue-500"><FaFacebook/>:</span>
              
            </a>
            <a href="https://www.linkedin.com/in/aboulaye-tchakoura-9b1a4b1b3/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
            </a>
        </div>
    </div>
    
   </section>
        </>)
}