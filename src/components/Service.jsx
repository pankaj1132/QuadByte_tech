import Header from "./Header";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaPaintBrush, FaRobot, FaShieldAlt, FaReact, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

export default function Service() {
  const services = [
    {
      title: "MERN Stack Development",
      icon: <FaReact className="text-3xl text-blue-400" />,
      techIcons: [
        <SiMongodb className="text-lg text-green-500" />,
        <SiExpress className="text-lg text-gray-300" />,
        <FaReact className="text-lg text-blue-400" />,
        <FaNodeJs className="text-lg text-green-600" />
      ],
      points: [
        "MongoDB, Express.js, React, Node.js",
        "Full-stack JavaScript development",
        "RESTful API development",
        "Real-time applications with Socket.io"
      ],
    },
    {
      title: "Python Stack Development",
      icon: <FaPython className="text-3xl text-yellow-400" />,
      techIcons: [
        <FaPython className="text-lg text-yellow-400" />,
        <FaDatabase className="text-lg text-blue-500" />
      ],
      points: [
        "Django & Flask frameworks",
        "FastAPI for modern APIs",
        "Data science & analytics",
        "Machine learning integration"
      ],
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode className="text-3xl text-purple-400" />,
      points: [
        "Custom websites & web apps",
        "Full-stack development",
        "SEO optimization",
        "Progressive Web Apps (PWA)"
      ],
    },
    {
      title: "Mobile App Development",
      icon: <FaMobileAlt className="text-3xl text-pink-400" />,
      points: [
        "React Native & Flutter",
        "iOS & Android native apps",
        "Cross-platform solutions",
        "App store deployment & maintenance"
      ],
    },
    {
      title: "Cloud Solutions",
      icon: <FaCloud className="text-3xl text-sky-400" />,
      points: [
        "AWS / Google Cloud / Azure",
        "CI/CD pipelines",
        "Docker & Kubernetes",
        "Scalable deployments"
      ],
    },
    {
      title: "UI/UX Design",
      icon: <FaPaintBrush className="text-3xl text-orange-400" />,
      points: [
        "Responsive designs",
        "Prototyping (Figma)",
        "Design systems",
        "User flow optimization"
      ],
    },
    {
      title: "Automation & AI",
      icon: <FaRobot className="text-3xl text-red-400" />,
      points: [
        "Chatbots & process bots",
        "APIs and webhook automation",
        "Python scripting",
        "AI integration (OpenAI, etc.)"
      ],
    },
    {
      title: "Security & Compliance",
      icon: <FaShieldAlt className="text-3xl text-emerald-400" />,
      points: [
        "Data encryption",
        "Access control",
        "Compliance (GDPR, ISO)",
        "Audit and logging tools"
      ],
    },
  ];

  return (
    <section id="service" className="p-10 min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Hexagon */}
        <svg className="absolute top-16 left-8 w-20 h-20 text-green-400/15 animate-pulse" viewBox="0 0 100 100">
          <path d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z" fill="currentColor" style={{animationDuration: '4s'}} />
        </svg>
        
        {/* Rotating Gear */}
        <svg className="absolute top-40 right-12 w-16 h-16 text-green-500/10 animate-spin" viewBox="0 0 100 100">
          <path d="M50 10 L60 20 L70 10 L80 20 L90 30 L80 40 L90 50 L80 60 L90 70 L80 80 L70 90 L60 80 L50 90 L40 80 L30 90 L20 80 L10 70 L20 60 L10 50 L20 40 L10 30 L20 20 L30 10 L40 20 Z" fill="currentColor" style={{animationDuration: '8s'}} />
        </svg>
        
       
        
        {/* Spinning Double Ring */}
        <svg className="absolute top-1/3 left-1/4 w-24 h-24 text-green-400/10 animate-spin" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" style={{animationDuration: '10s'}} />
          <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" style={{animationDuration: '5s'}} />
        </svg>
        
        {/* Morphing Wave */}
        <svg className="absolute top-2/3 right-1/4 w-14 h-14 text-green-500/15 animate-bounce" viewBox="0 0 100 100">
          <path d="M10 50 Q30 20 50 50 Q70 80 90 50" stroke="currentColor" strokeWidth="4" fill="none" style={{animationDuration: '7s'}} />
        </svg>
        
        {/* Floating Code Brackets */}
        <svg className="absolute top-1/2 left-10 w-12 h-12 text-green-400/8 animate-pulse" viewBox="0 0 100 100">
          <path d="M30 20 L10 40 L10 60 L30 80 M70 20 L90 40 L90 60 L70 80" stroke="currentColor" strokeWidth="6" fill="none" style={{animationDuration: '5s'}} />
        </svg>
        
        {/* Rotating Arrow */}
        <svg className="absolute bottom-40 right-8 w-16 h-16 text-green-300/12 animate-spin" viewBox="0 0 100 100">
          <path d="M20 50 L40 30 L40 45 L80 45 L80 55 L40 55 L40 70 Z" fill="currentColor" style={{animationDuration: '12s'}} />
        </svg>
        
        {/* Floating Circles */}
        <svg className="absolute top-20 right-1/3 w-10 h-10 text-green-400/6 animate-ping" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="20" fill="currentColor" style={{animationDuration: '4s'}} />
        </svg>
        
        {/* Tech Elements */}
        <svg className="absolute bottom-20 left-1/3 w-14 h-14 text-green-500/8 animate-pulse" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="40" rx="5" fill="none" stroke="currentColor" strokeWidth="3" style={{animationDuration: '6s'}} />
          <rect x="30" y="30" width="40" height="20" rx="2" fill="currentColor" opacity="0.5" />
        </svg>
      </div>

      <Header
        title="Our Services"
        subtitle="Complete Tech Solutions — From Code to Cloud."
      />

      <div className="grid gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-gray-600/30 hover:border-gray-400 hover:shadow-gray-500/10 hover:shadow-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group relative overflow-hidden"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-transparent to-gray-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating SVG Icon */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
              <svg className="w-5 h-5 text-gray-400 animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            
            <div className="relative z-10">
              {/* Main Icon with Animation */}
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:animate-pulse">
                {service.icon}
              </div>
              
              {/* Tech Stack Icons */}
              {service.techIcons && (
                <div className="flex gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {service.techIcons.map((techIcon, idx) => (
                    <div 
                      key={idx} 
                      className="p-1.5 bg-black/70 rounded-md hover:bg-gray-500/20 transition-all duration-300"
                      style={{animationDelay: `${idx * 100}ms`}}
                    >
                      {techIcon}
                    </div>
                  ))}
                </div>
              )}
              
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
                {service.title}
              </h3>
              
              <ul className="list-none text-gray-300 text-sm space-y-2 group-hover:text-white transition-colors duration-300">
                {service.points.map((point, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-start gap-2 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-300"
                    style={{transitionDelay: `${idx * 50}ms`}}
                  >
                    <svg className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 12 12" fill="currentColor">
                      <circle cx="6" cy="6" r="2"/>
                    </svg>
                    <span className="group-hover:font-medium transition-all duration-300">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
