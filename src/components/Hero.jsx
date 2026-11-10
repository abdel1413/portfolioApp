 import profile from '../assets/profiles/profile.png'
export const Hero = () => {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center" id="hero">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        w-full
        grid
        md:grid-cols-2
        gap-12
        items-center
      ">

        {/* LEFT SIDE */}
        <div>

          <p className="text-blue-500 font-semibold mb-4">
          Full-Stack Developer
          </p>

          <h1 className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            mb-6
          ">
            Hi, I’m
            <span className="text-blue-500">
              {" "}Aboulaye
            </span>
          </h1>

          <p className="
            text-gray-300
            text-lg
            leading-relaxed
            max-w-xl
            mb-8
          ">
           I'm a Computer Science graduate and full-stack developer who enjoys building responsive, user-friendly applications with React, Node.js, and PostgreSQL. I love solving real-world problems and turning ideas into working products.
           
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">
             <a href="#projects" className="
              bg-blue-500
              text-white
              hover:bg-blue-600 text-orange-400  transition duration-500
              px-6
              py-3 
              rounded-lg
              font-medium
             
            ">
              View Projects
            </a>

            <a href="#contact" className="
              border
              border-gray-600
              hover:border-blue-500
              hover:text-orange-400  transition duration-500
              px-6
              py-3
              rounded-lg
              font-medium
             
            ">
              Contact Me
            </a>
           

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="
            w-64
            h-64
            md:w-[350px]
            md:h-[350px]
            rounded-full
            bg-blue-500/20
            flex
            items-center
            justify-center
            shadow-2xl
          ">

            <div className="
              text-7xl
              font-bold
              text-blue-400
            ">
              <img src={profile} alt="avatar" className="object-cover rounded-full bg-blue-500/20" />
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}