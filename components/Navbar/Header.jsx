// components/Header.js
"use client";
import { useState, useEffect }  from "react";
import Image from "next/image";
import Logo from "../../public/US.png"; //
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; 

export default function Header() {
  const navItem = [
    { name: "Home", href: "/" },
    { name: "Indian Tender", href: "/indian_tender" },
    { name: "GEM Tender", href: "/gem-tender" },
    { name: "Contact Us", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Close mobile menu if resized to desktop
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-md" : "bg-transparent md:bg-gray-50" // Reduced shadow to 'md'
        }`}
      >
        <div className="flex items-center justify-between p-4 md:p-5 max-w-7xl mx-auto"> {/* Adjusted desktop padding */}
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" aria-label="Home">
              <Image
                src={Logo}
                alt="Company Logo"
                width={60} // Reduced base width
                height={60} // Reduced base height
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain" // Adjusted responsive sizing to be smaller
                priority
              />
            </Link>
          </div>

          {/* Hamburger Menu Icon (Mobile/Tablet) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#90cfe2] rounded-md p-1.5 transition-transform duration-300 ease-in-out" // Adjusted padding
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <FiX className="h-7 w-7 text-gray-700 hover:text-red-500" /> 
              ) : (
                <FiMenu className="h-7 w-7 text-gray-700 hover:text-[#90cfe2]" />
              )}
            </button>
          </div>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8"> {/* Reduced spacing */}
              {navItem.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`text-gray-700 hover:text-[#90cfe2] font-semibold text-base lg:text-lg transition-colors duration-200 relative group
                      ${isScrolled ? "text-gray-800" : "text-gray-700"}
                    `} // Reduced text size
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#90cfe2] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Login Button (Desktop) */}
          <div className="hidden md:block flex-shrink-0">
            <Link
              href="/login"
              className="px-4 py-2 rounded-full bg-[#90cfe2] text-white font-bold hover:bg-[#7fb8c7] transition-all duration-300 shadow-md hover:shadow-lg text-base lg:text-lg transform hover:scale-105" // Reduced button size and shadow
            >
              Login 👋
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu (Off-canvas) */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 transform md:hidden z-40 transition-transform duration-350 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4"> {/* Adjusted padding */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white focus:outline-none focus:ring-2 focus:ring-[#90cfe2] rounded-md p-1.5" // Adjusted padding
            aria-label="Close menu"
          >
            <FiX className="h-8 w-8 text-white hover:text-red-400" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 space-y-6"> {/* Adjusted margin and spacing */}
          {navItem.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#90cfe2] text-2xl font-bold transition-colors duration-200 transform hover:scale-105" // Reduced text size
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-6 py-3 rounded-full bg-[#90cfe2] text-white font-bold hover:bg-[#7fb8c7] transition-all duration-300 shadow-md text-xl transform hover:scale-105" // Reduced button size and shadow
          >
            Login
          </Link>
        </nav>
      </div>
    </>
  );
}