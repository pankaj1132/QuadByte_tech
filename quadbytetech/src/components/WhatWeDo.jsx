import Header from "./Header";
import { FaGithub, FaExternalLinkAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export default function WhatWeDo() {
  const projects = [
   {
    name: "AI Weather Reporting",
    description: "An AI-powered weather forecasting and news platform delivering real-time updates and insights.",
    tech: "Next.js, Prisma",
    github: "https://github.com/pankaj1132/Propal_ai",
    demo: "https://propal-ai-two.vercel.app/"
  },
    {
    name: "Ecommerce Sustain Market",
    description: "A sustainable e-commerce platform featuring Paytm payment gateway integration and add-to-cart functionality.",
    tech: "MERN Stack",
    github: "https://github.com/pankaj1132/sitemap_frontend",
    demo: "https://sitemap-frontend-ruby.vercel.app/"
  }
  ];

  return (
    <section id="whatwedo" className="p-10 min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-20 left-10 w-20 h-20 text-blue-500/20 animate-pulse" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" className="animate-ping" style={{animationDuration: '3s'}} />
        </svg>
        <svg className="absolute top-40 right-20 w-16 h-16 text-purple-400/20 animate-bounce" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" style={{animationDuration: '4s'}} />
        </svg>
        <svg className="absolute bottom-40 left-20 w-24 h-24 text-cyan-300/20 animate-spin" viewBox="0 0 100 100">
          <rect x="25" y="25" width="50" height="50" fill="currentColor" style={{animationDuration: '8s'}} />
        </svg>
        <svg className="absolute bottom-20 right-10 w-18 h-18 text-pink-600/20 animate-pulse" viewBox="0 0 100 100">
          <path d="M50 10 L90 90 L10 90 Z" fill="currentColor" style={{animationDuration: '5s'}} />
        </svg>
      </div>

      <Header
        title="What We Do"
        subtitle="Delivering innovative digital solutions through cutting-edge technology and expert craftsmanship. Explore our portfolio of successful projects that drive business growth and user engagement."
      />

      {/* Contact Information Section */}
      <div className="mt-8 mb-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
        <div className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
          <FaPhone className="text-blue-400 group-hover:animate-bounce group-hover:text-blue-300" />
          <span className="text-sm font-medium">+91 8851821053</span>
        </div>
        <div className="flex items-center gap-3 bg-zinc-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
          <FaEnvelope className="text-purple-400 group-hover:animate-pulse group-hover:text-purple-300" />
          <span className="text-sm font-medium">Quadbytetechnologies@gmail.com</span>
        </div>
      </div>

      <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-900/70 backdrop-blur-sm p-6 rounded-xl border border-transparent hover:border-green-500 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group relative overflow-hidden"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* SVG Icon Animation */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
              <svg className="w-6 h-6 text-cyan-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-green-400 text-xl font-semibold mb-2 group-hover:text-green-300 transition-colors duration-300">{project.name}</h3>
              <p className="text-gray-300 text-sm mb-3 group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
              <p className="text-xs text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                <span className="font-semibold text-white group-hover:text-green-200 transition-colors duration-300">Tech Stack:</span> {project.tech}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 text-sm bg-zinc-800 hover:bg-zinc-700 border border-gray-600 hover:border-orange-500 rounded-lg transition-all duration-300 hover:scale-105 group/btn"
                >
                  <FaGithub className="text-orange-400 group-hover/btn:animate-spin group-hover/btn:text-orange-300" style={{animationDuration: '2s'}} /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 text-sm bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 group/btn"
                >
                  <FaExternalLinkAlt className="text-yellow-300 group-hover/btn:animate-bounce group-hover/btn:text-yellow-200" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

