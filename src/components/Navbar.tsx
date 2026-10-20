const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <>
      <header className="fixed left-1/2 top-3 z-50 w-[calc(100%-24px)] max-w-7xl -translate-x-1/2 rounded-2xl border border-purple-500/25 bg-[#0B0915]/90 px-4 py-4 shadow-lg shadow-purple-950/20 backdrop-blur-xl sm:top-4 sm:w-[calc(100%-40px)] sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_auto] items-center gap-x-3 gap-y-4 md:grid-cols-[1fr_auto_1fr]">
          {/* Logo */}
          <a
            href="#home"
            className="justify-self-start text-lg font-extrabold tracking-wider text-white sm:text-xl"
          >
            MARUP<span className="text-purple-400">.</span>
          </a>

          {/* Navigation links */}
          <nav
            aria-label="Main navigation"
            className="col-span-2 row-start-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:col-span-1 md:col-start-2 md:row-start-1 md:gap-x-5 lg:gap-x-7"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-gray-300 transition-colors duration-300 hover:text-purple-400 sm:text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Resume button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="col-start-2 row-start-1 inline-flex items-center justify-self-end gap-2 rounded-xl border border-purple-400/30 bg-gradient-to-r from-purple-600 to-violet-700 px-3 py-2.5 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-500/25 sm:px-5 sm:text-sm md:col-start-3"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>
        </div>
      </header>

      {/* Space reserved for the fixed navbar */}
      <div aria-hidden="true" className="h-32 md:h-24" />
    </>
  );
}

export default Navbar;