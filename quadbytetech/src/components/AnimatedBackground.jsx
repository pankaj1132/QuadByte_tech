import { useEffect, useRef } from 'react';

const AnimatedBackground = ({ mousePosition }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const elements = svg.querySelectorAll('[data-mouse-responsive]');
    const isMobile = window.innerWidth <= 768;
    const responsiveness = isMobile ? 0.003 : 0.01;
    
    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (mousePosition.x - centerX) * responsiveness;
      const deltaY = (mousePosition.y - centerY) * responsiveness;
      
      element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });
  }, [mousePosition]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated SVG Background */}
      <svg
        ref={svgRef}
        className="w-full h-full opacity-20"
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#34d399" stopOpacity="0.4" />
          </linearGradient>
          
          <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </radialGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Animated geometric shapes */}
        <g data-mouse-responsive>
          <polygon
            points="100,100 200,50 300,100 250,200 150,200"
            fill="none"
            stroke="url(#greenGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 200 125; 360 200 125"
              dur="30s"
              repeatCount="indefinite"
            />
          </polygon>
        </g>

        <g data-mouse-responsive>
          <circle
            cx="1500"
            cy="200"
            r="50"
            fill="url(#glowGradient)"
            opacity="0.3"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 50,30; -20,60; 0,0"
              dur="25s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="50;70;50"
              dur="8s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Flowing lines */}
        <g data-mouse-responsive>
          <path
            d="M0,540 Q480,300 960,540 T1920,540"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            opacity="0.4"
            filter="url(#glow)"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,2000; 1000,1000; 2000,0"
              dur="20s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.2;0.6;0.2"
              dur="10s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <g key={i} data-mouse-responsive>
            <circle
              cx={100 + (i * 90)}
              cy={200 + (i % 3) * 200}
              r="2"
              fill="#22c55e"
              opacity="0.6"
            >
              <animateTransform
                attributeName="transform"
                type="translate"
                values={`0,0; ${10 - (i % 20)},${15 - (i % 30)}; 0,0`}
                dur={`${12 + (i % 8)}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.3;0.8;0.3"
                dur={`${3 + (i % 3)}s`}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}

        {/* Grid pattern */}
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#22c55e" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.1" />

        {/* Hexagonal pattern */}
        <g data-mouse-responsive>
          <polygon
            points="960,100 1010,125 1010,175 960,200 910,175 910,125"
            fill="none"
            stroke="#34d399"
            strokeWidth="1"
            opacity="0.5"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              values="0 960 150; 120 960 150; 240 960 150; 360 960 150"
              dur="25s"
              repeatCount="indefinite"
            />
          </polygon>
        </g>

        {/* Energy waves */}
        <g data-mouse-responsive>
          <ellipse
            cx="960"
            cy="540"
            rx="200"
            ry="50"
            fill="none"
            stroke="#10b981"
            strokeWidth="1"
            opacity="0.3"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="0.5;1.5;0.5"
              dur="12s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.5;0.1;0.5"
              dur="12s"
              repeatCount="indefinite"
            />
          </ellipse>
        </g>
      </svg>

      {/* CSS-based animated elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-green-300 rounded-full animate-bounce"></div>
      
      {/* Gradient orbs */}
      <div 
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full blur-xl animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
        }}
      ></div>
      <div 
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-emerald-400/15 to-green-400/15 rounded-full blur-lg animate-pulse"
        style={{
          transform: `translate(${mousePosition.x * -0.003}px, ${mousePosition.y * -0.003}px)`
        }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
