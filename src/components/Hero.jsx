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
            Frontend Developer
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
            I build modern, responsive, and user-friendly
            web applications using React, Tailwind CSS,
            and JavaScript.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap">

            <button className="
              bg-blue-500
              hover:bg-blue-600
              px-6
              py-3
              rounded-lg
              font-medium
              transition
            ">
              View Projects
            </button>

            <button className="
              border
              border-gray-600
              hover:border-blue-500
              hover:text-blue-400
              px-6
              py-3
              rounded-lg
              font-medium
              transition
            ">
              Contact Me
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center">

          <div className="
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            bg-blue-500/20
            border
            border-blue-500/30
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
              AT
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}