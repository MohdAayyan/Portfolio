import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full flex justify-center px-4 sm:px-8 py-4 sm:py-5 z-50 transition-all duration-300 ${
        scrolled
          ? "md:bg-gray-900/80 md:backdrop-blur-md md:shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="hidden md:flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base md:text-lg font-medium text-white">
        <a href="#home" className="hover:text-[#D2C1B6] transition-colors duration-200 px-2 py-1">HOME</a>
        <a href="#about" className="hover:text-[#D2C1B6] transition-colors duration-200 px-2 py-1">ABOUT</a>
        <a href="#skills" className="hover:text-[#D2C1B6] transition-colors duration-200 px-2 py-1">SKILLS</a>
        <a href="#projects" className="hover:text-[#D2C1B6] transition-colors duration-200 px-2 py-1">PROJECTS</a>
        <a href="#contact" className="hover:text-[#D2C1B6] transition-colors duration-200 px-2 py-1">CONTACT</a>
      </div>
    </nav>
  )
}
