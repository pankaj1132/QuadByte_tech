import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import logo from "../assets/logo.jpg";
import AnimatedBackground from "./AnimatedBackground";

export default function Home() {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Enhanced Particle system
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 0.5;
        const isMobile = window.innerWidth <= 768;
        const speedMultiplier = isMobile ? 0.02 : 0.05;
        this.speedX = (Math.random() - 0.5) * speedMultiplier;
        this.speedY = (Math.random() - 0.5) * speedMultiplier;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.hue = 120 + Math.random() * 60; // Green spectrum
        this.life = Math.random() * 100 + 100;
        this.decay = Math.random() * 0.02 + 0.005;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;

        if (this.life <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.life = Math.random() * 100 + 100;
        }

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        const alpha = this.opacity * (this.life / 100);
        ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${alpha})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${this.hue}, 70%, 60%, 0.5)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    // Create particles
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      // Create fade effect instead of complete clear
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        // Draw connections to nearby particles
        for (let i = index + 1; i < particles.length; i++) {
          const dx = particle.x - particles[i].x;
          const dy = particle.y - particles[i].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const alpha = 0.15 * (1 - distance / 120);
            ctx.strokeStyle = `rgba(34, 197, 94, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[i].x, particles[i].y);
            ctx.stroke();
          }
        }

        // Enhanced mouse interaction
        const mouseDistance = Math.sqrt(
          (particle.x - mousePosition.x) ** 2 + (particle.y - mousePosition.y) ** 2
        );
        if (mouseDistance < 200) {
          const force = (200 - mouseDistance) / 200;
          const alpha = 0.4 * force;
          ctx.strokeStyle = `rgba(34, 197, 94, ${alpha})`;
          ctx.lineWidth = 2 * force;
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(34, 197, 94, 0.5)';
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mousePosition.x, mousePosition.y);
          ctx.stroke();
          ctx.shadowBlur = 0;

          // Particle attraction to mouse - slower on mobile
          const isMobile = window.innerWidth <= 768;
          const attractionMultiplier = isMobile ? 0.0001 : 0.0002;
          const attractionX = (mousePosition.x - particle.x) * attractionMultiplier * force;
          const attractionY = (mousePosition.y - particle.y) * attractionMultiplier * force;
          particle.speedX += attractionX;
          particle.speedY += attractionY;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition]);

  const handleMouseMove = (e) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      {/* Animated SVG Background */}
      <AnimatedBackground mousePosition={mousePosition} />

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-4xl -mt-10 pb-12 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Logo with enhanced hover effect */}
        <div className="group mb-8 mt-28 md:mt-15 transition-all duration-700 hover:scale-110 animate-float">
          <img
            src={logo}
            alt="Quadbyte Technologies Logo"
            className="w-full max-w-[500px] h-auto mx-auto transition-all duration-500 group-hover:drop-shadow-[0_0_40px_rgba(34,197,94,0.7)] group-hover:brightness-110"
          />
        </div>

        {/* Hero Title with enhanced animation */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 relative group cursor-default">
          <span className="bg-gradient-to-r from-green-400 via-green-500 to-emerald-400 bg-clip-text text-transparent font-extrabold transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(34,197,94,0.8)] group-hover:scale-105">
            Your Tech Partner.
          </span>
        </h1>

        {/* Animated subtitle with stagger effect */}
        <p className="text-gray-300 text-lg md:text-xl mb-6 animate-fadeInUp opacity-90 leading-relaxed" style={{ animationDelay: '0.3s' }}>
          We build <span className="text-green-400 font-semibold hover:text-green-300 transition-colors">scalable</span>, 
          <span className="text-green-400 font-semibold hover:text-green-300 transition-colors"> secure</span>, and 
          <span className="text-green-400 font-semibold hover:text-green-300 transition-colors"> performance-driven</span> software solutions 
          tailored for startups and enterprises.
        </p>

        {/* Company Brief with enhanced styling */}
        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          At <span className="text-green-400 font-semibold">Quadbyte Technologies</span>, we specialize in 
          <span className="text-emerald-300 hover:text-emerald-200 transition-colors cursor-default"> full-stack web development</span>, 
          <span className="text-emerald-300 hover:text-emerald-200 transition-colors cursor-default"> mobile apps</span>, 
          <span className="text-emerald-300 hover:text-emerald-200 transition-colors cursor-default"> Telegram/Discord Bot Integration</span>, 
          <span className="text-emerald-300 hover:text-emerald-200 transition-colors cursor-default"> cloud architecture</span>, and 
          <span className="text-emerald-300 hover:text-emerald-200 transition-colors cursor-default"> product automation</span>. 
          From idea to deployment — we help your business scale with smart technology.
        </p>

        {/* Enhanced CTA Buttons with particle effects */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
          <a
            href="#service"
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-black font-bold rounded-lg text-lg transition-all duration-300 hover:scale-110 hover:shadow-green-glow-lg overflow-hidden particle-button transform hover:rotate-1"
          >
            <span className="relative z-10 transition-all duration-300 group-hover:text-white">Our Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg"></div>
          </a>
          <a
            href="#contact"
            className="group relative px-8 py-4 border-2 border-green-500 text-green-400 font-bold rounded-lg text-lg transition-all duration-300 hover:scale-110 hover:bg-green-500 hover:text-black hover:shadow-green-glow overflow-hidden particle-button transform hover:-rotate-1"
          >
            <span className="relative z-10 transition-all duration-300">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
          </a>
        </div>

        {/* Floating elements with enhanced animations */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-400 rounded-full opacity-40 animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-green-300 rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-green-200 rounded-full opacity-30 animate-bounce-slow" style={{ animationDelay: '2.5s' }}></div>
      </div>

      {/* Ambient lighting effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
