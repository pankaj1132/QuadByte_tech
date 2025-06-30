import React, { useState, useEffect } from 'react';
import Header from "./Header";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "CEO, TechInnovate Solutions",
      company: "Mumbai",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      text: "QuadByte Tech delivered an exceptional MERN stack application that exceeded our expectations. Their attention to detail and innovative approach transformed our business operations completely.",
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "CTO, Digital Horizons",
      company: "Bangalore",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      text: "The team's expertise in Python and AI integration helped us automate our entire workflow. The results were remarkable - 70% increase in efficiency and significant cost reduction.",
      project: "AI Automation System"
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Founder, StartupVenture",
      company: "Pune",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      text: "From concept to deployment, QuadByte Tech guided us through every step. Their mobile app development skills and cloud solutions expertise made our startup dreams a reality.",
      project: "Mobile App & Cloud Infrastructure"
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Product Manager, InnovateCorp",
      company: "Delhi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      text: "Outstanding UI/UX design and seamless user experience. The team understood our vision perfectly and delivered a product that our users absolutely love.",
      project: "SaaS Dashboard"
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Director, SecureNet Systems",
      company: "Hyderabad",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      text: "Their cybersecurity expertise and compliance knowledge helped us achieve ISO certification. The security implementation was flawless and gave us complete peace of mind.",
      project: "Security & Compliance System"
    },
    {
      id: 6,
      name: "Kavya Reddy",
      position: "Tech Lead, FutureScale",
      company: "Chennai",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
      text: "The cloud migration and DevOps implementation was seamless. Our deployment time reduced from hours to minutes, and system reliability improved dramatically.",
      project: "Cloud Migration & DevOps"
    }
  ];

  // Responsive visible testimonials
  const [visibleTestimonials, setVisibleTestimonials] = useState(3);
  
  useEffect(() => {
    const updateVisibleTestimonials = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1); // Mobile: 1 testimonial
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2); // Tablet: 2 testimonials
      } else {
        setVisibleTestimonials(3); // Desktop: 3 testimonials
      }
    };

    updateVisibleTestimonials();
    window.addEventListener('resize', updateVisibleTestimonials);
    
    return () => window.removeEventListener('resize', updateVisibleTestimonials);
  }, []);

  const maxIndex = testimonials.length - visibleTestimonials;

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex, visibleTestimonials]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section id="testimonials" className="pt-4 px-4 pb-0 md:p-10 min-h-0 md:min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated SVG Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Quote Bubbles */}
        <svg className="absolute top-16 left-8 w-16 h-16 text-green-400/10 animate-pulse" viewBox="0 0 100 100">
          <path d="M20 40 Q10 20 30 20 Q50 20 40 40 Q30 60 20 40 Z M60 40 Q50 20 70 20 Q90 20 80 40 Q70 60 60 40 Z" fill="currentColor" style={{animationDuration: '3s'}} />
        </svg>
        
        {/* Rotating Stars */}
        <svg className="absolute top-32 right-12 w-12 h-12 text-green-500/8 animate-spin" viewBox="0 0 100 100">
          <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" fill="currentColor" style={{animationDuration: '15s'}} />
        </svg>
        
        {/* Floating Hearts */}
        <svg className="absolute top-1/4 left-1/4 w-14 h-14 text-green-400/12 animate-bounce" viewBox="0 0 100 100">
          <path d="M50 85 C20 60, 5 35, 25 25 C35 20, 45 25, 50 35 C55 25, 65 20, 75 25 C95 35, 80 60, 50 85 Z" fill="currentColor" style={{animationDuration: '4s'}} />
        </svg>
        
        {/* Morphing Circles */}
        <svg className="absolute top-2/3 right-1/4 w-18 h-18 text-green-500/10 animate-pulse" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="3" fill="none" style={{animationDuration: '6s'}} />
          <circle cx="35" cy="35" r="5" fill="currentColor" opacity="0.6" />
          <circle cx="65" cy="35" r="5" fill="currentColor" opacity="0.6" />
          <path d="M35 65 Q50 75 65 65" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
        
        {/* Floating Thumbs Up */}
        <svg className="absolute bottom-32 left-12 w-12 h-12 text-green-400/8 animate-pulse" viewBox="0 0 100 100">
          <path d="M30 60 L30 85 L70 85 L70 60 L65 45 Q65 35 55 35 Q45 35 45 45 L45 50 L40 50 Q35 50 35 55 L35 60 Z M25 60 L25 85 L35 85 L35 60 Z" fill="currentColor" style={{animationDuration: '5s'}} />
        </svg>
        
        {/* Communication Waves */}
        <svg className="absolute top-1/2 right-8 w-16 h-16 text-green-300/6 animate-ping" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2" style={{animationDuration: '3s'}} />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2" style={{animationDuration: '3s', animationDelay: '0.5s'}} />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="2" style={{animationDuration: '3s', animationDelay: '1s'}} />
        </svg>
      </div>

      <Header
        title="Client Testimonials"
        subtitle="Trusted by businesses across India — Real stories, Real results."
      />

      <div className="relative mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Arrows */}
        <button 
          onClick={goToPrevious}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 z-20 bg-green-500/20 hover:bg-green-500/40 backdrop-blur-sm rounded-full p-2 md:p-3 border border-green-400/30 hover:border-green-400 transition-all duration-300 group"
        >
          <FaChevronLeft className="text-green-400 group-hover:text-white transition-colors duration-300 text-sm md:text-base" />
        </button>
        
        <button 
          onClick={goToNext}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-4 z-20 bg-green-500/20 hover:bg-green-500/40 backdrop-blur-sm rounded-full p-2 md:p-3 border border-green-400/30 hover:border-green-400 transition-all duration-300 group"
        >
          <FaChevronRight className="text-green-400 group-hover:text-white transition-colors duration-300 text-sm md:text-base" />
        </button>

        {/* Testimonials Container */}
        <div className="overflow-hidden mx-8 md:mx-0">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleTestimonials)}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 px-2 md:px-4"
                style={{ width: `${100 / visibleTestimonials}%` }}
              >
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-green-400/20 hover:border-green-400 hover:shadow-green-500/20 hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group relative overflow-hidden h-full">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <FaQuoteLeft className="text-green-400 text-sm md:text-lg animate-pulse" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Client Image and Info */}
                    <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <div className="relative group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-green-400/30 group-hover:border-green-400 transition-colors duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      <div>
                        <h4 className="text-base md:text-lg font-semibold text-green-400 group-hover:text-green-300 transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs md:text-sm text-green-300/80 group-hover:text-white/90 transition-colors duration-300">
                          {testimonial.position}
                        </p>
                        <p className="text-xs text-green-300/60 group-hover:text-white/70 transition-colors duration-300">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    
                    {/* Star Rating */}
                    <div className="flex gap-1 mb-3 md:mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <FaStar 
                          key={idx} 
                          className="text-yellow-400 text-xs md:text-sm animate-pulse"
                          style={{animationDelay: `${idx * 100}ms`}}
                        />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <blockquote className="text-green-300 text-xs md:text-sm leading-relaxed mb-3 md:mb-4 group-hover:text-white transition-colors duration-300 italic">
                      "{testimonial.text}"
                    </blockquote>
                    
                    {/* Project Tag */}
                    <div className="inline-block px-2 md:px-3 py-1 bg-green-500/20 rounded-full border border-green-400/30 group-hover:border-green-400 group-hover:bg-green-500/30 transition-all duration-300">
                      <span className="text-xs text-green-400 group-hover:text-green-300 font-medium transition-colors duration-300">
                        {testimonial.project}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-4 md:mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-green-400 scale-125 shadow-green-400/50 shadow-lg' 
                  : 'bg-green-400/30 hover:bg-green-400/60 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-2 md:mt-4 mb-0 md:mb-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-xs px-3 py-1 rounded-full border transition-all duration-300 ${
              isAutoPlaying 
                ? 'text-green-400 border-green-400/50 bg-green-400/10 hover:bg-green-400/20' 
                : 'text-green-300/60 border-green-400/30 bg-green-400/5 hover:bg-green-400/10'
            }`}
          >
            {isAutoPlaying ? '⏸ Pause Auto-scroll' : '▶ Resume Auto-scroll'}
          </button>
        </div>
      </div>
    </section>
  );
}
