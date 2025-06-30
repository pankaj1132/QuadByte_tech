import { useState } from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.jpg"; // Ensure the logo path is correct

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#whatwedo", label: "What We Do" },
    { href: "#service", label: "Service" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      {/* Toggle Button (Mobile Only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 text-white text-3xl bg-black p-2 rounded-md shadow-md lg:hidden transform transition-all duration-300 hover:scale-110 hover:rotate-180 hover:bg-green-400 hover:text-black"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-black text-white z-40 p-6 flex flex-col justify-between transition-all duration-500 ease-in-out lg:translate-x-0 border-r-2 border-green-400 shadow-2xl backdrop-blur-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Brand */}
        <div>
          {/* Logo */}
          <div className="flex justify-center  animate-pulse">
            <img 
              src={logo} 
              alt="Quadbyte Technologies Logo" 
              className="w-32 h-28 object-contain"
            />
          </div>
          
          <h1 className="text-2xl font-extrabold mb-10 text-green-400 text-center transition-all duration-500 hover:scale-110 hover:text-green-300">
            Quadbyte<span className="text-white hover:text-gray-200 transition-colors duration-500"> Technologies</span>
          </h1>

          {/* Navigation Links */}
          <nav className="space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg hover:text-green-400 transition-all duration-500 hover:translate-x-4 hover:scale-105 py-3 px-4 rounded-lg hover:bg-gray-800 hover:shadow-lg transform hover:border-l-4 hover:border-green-400 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: `fadeInUp 0.6s ease-out ${index * 100}ms both`
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 pt-6 text-xl text-gray-400">
          <a href="#" className="hover:text-green-400 transition-all duration-500 hover:scale-125 hover:-rotate-12 p-3 rounded-full hover:bg-gray-800 hover:shadow-lg transform animate-pulse hover:animate-none">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-green-400 transition-all duration-500 hover:scale-125 hover:rotate-12 p-3 rounded-full hover:bg-gray-800 hover:shadow-lg transform animate-pulse hover:animate-none">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-green-400 transition-all duration-500 hover:scale-125 hover:-rotate-12 p-3 rounded-full hover:bg-gray-800 hover:shadow-lg transform animate-pulse hover:animate-none">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </>
  );
}
