import Header from "./Header";
import logo from "../assets/logo.jpg";
import { FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt, FaCode, FaRocket } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="bg-black text-white px-6 md:px-16 py-20 relative overflow-hidden">
      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-10 left-5 w-16 h-16 text-green-500/10 animate-pulse" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" fill="currentColor" className="animate-ping" style={{animationDuration: '4s'}} />
        </svg>
        <svg className="absolute top-32 right-10 w-20 h-20 text-green-400/10 animate-bounce" viewBox="0 0 100 100">
          <polygon points="50,15 85,85 15,85" fill="currentColor" style={{animationDuration: '3s'}} />
        </svg>
        <svg className="absolute bottom-20 left-16 w-20 h-20 text-green-300/10 animate-bounce" viewBox="0 0 100 100">
          <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" style={{animationDuration: '3.5s'}} />
        </svg>
        <svg className="absolute bottom-40 right-20 w-14 h-14 text-green-600/10 animate-pulse" viewBox="0 0 100 100">
          <path d="M50 20 L80 80 L20 80 Z" fill="currentColor" style={{animationDuration: '5s'}} />
        </svg>
        <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-green-500/5 animate-spin" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" style={{animationDuration: '20s'}} />
        </svg>
      </div>

      <Header
        title="Who We Are"
        subtitle="Transforming Ideas Into Digital Excellence - Your Trusted Technology Partner"
      />

      <div className="mt-10 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Logo Section */}
        <div className="w-full md:w-1/3 flex justify-center group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img
              src={logo}
              alt="Quadbyte Technologies Logo"
              className="w-full max-w-[300px] h-auto relative z-10 rounded-lg shadow-lg hover:shadow-green-500/20 transition-all duration-500 transform hover:scale-105"
            />
            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
              <FaCode className="text-green-400 text-xl animate-bounce" />
            </div>
            <div className="absolute -bottom-4 -left-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-4 group-hover:translate-x-0">
              <FaRocket className="text-green-400 text-xl animate-pulse" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 text-left">
          <div className="bg-zinc-900/30 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 hover:border-green-500/40 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10 group">
            <p className="text-gray-300 mb-6 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              <span className="text-green-400 font-semibold">Quadbyte Technologies</span> stands at the forefront of digital innovation, transforming visionary concepts into robust, scalable solutions. 
              We don't just write code — we architect digital experiences that propel businesses toward unprecedented growth. Our team of expert developers, designers, and strategists 
              work as an extension of your organization, seamlessly integrating with your vision, culture, and objectives to deliver technology solutions that exceed expectations.
            </p>
            
            <p className="text-gray-400 mb-8 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
              From cutting-edge web applications to sophisticated mobile platforms, we leverage the latest technologies and industry best practices to create solutions that are not only 
              functionally superior but also aesthetically compelling and user-centric.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-all duration-300 hover:scale-105 group/item">
                  <FaPhone className="text-green-400 group-hover/item:animate-bounce" />
                  <div>
                    <span className="font-semibold text-white block">Phone:</span>
                    <span className="text-gray-300">+91 8851821053</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-all duration-300 hover:scale-105 group/item">
                  <FaEnvelope className="text-green-400 group-hover/item:animate-pulse" />
                  <div>
                    <span className="font-semibold text-white block">Email:</span>
                    <span className="text-gray-300">Quadbytetechnologies@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-all duration-300 hover:scale-105 group/item">
                  <FaGlobe className="text-green-400 group-hover/item:animate-spin" style={{animationDuration: '2s'}} />
                  <div>
                    <span className="font-semibold text-white block">Website:</span>
                    <span className="text-gray-300">www.quadbyte.com</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-700/50 transition-all duration-300 hover:scale-105 group/item">
                  <FaMapMarkerAlt className="text-green-400 group-hover:item:animate-bounce" />
                  <div>
                    <span className="font-semibold text-white block">Address:</span>
                    <span className="text-gray-300">Uttam Nagar New Delhi - 59</span>
                  </div>
                </div>
                
                {/* Stats Section */}
                <div className="mt-6 grid grid-cols-1 gap-4">
                  <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-green-400/5 rounded-lg border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 group/stat">
                    <div className="text-2xl font-bold text-green-400 group-hover/stat:animate-pulse">24/7</div>
                    <div className="text-xs text-gray-400">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
