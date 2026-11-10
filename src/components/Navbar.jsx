
export const Navbar = () => {
  return (
    <nav
      className="fixed top-0 left-0 w-full bg-gray-950/95 backdrop-blur-md text-white z-50"
      id="navbar"
    >
      <div className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">

        <a
          href="#home"
          className="text-2xl font-bold text-blue-500 whitespace-nowrap"
        >
          Aboulaye.dev
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <a href="#about" className="text-blue-300 hover:text-orange-400">
            ABOUT
          </a>
          <a href="#projects" className="text-blue-300 hover:text-orange-400">
            PROJECTS
          </a>
          <a
            href="/AboulayeTchakoura_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-orange-400"
          >
            RESUME
          </a>
          <a href="#contact" className="text-blue-300 hover:text-orange-400">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};
