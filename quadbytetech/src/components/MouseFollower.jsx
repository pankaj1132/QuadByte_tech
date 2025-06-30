import { useMousePosition } from "../hooks/useMousePosition";

export default function MouseFollower() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="relative">
        {/* Main Dot */}
        <div 
          className="w-3 h-3 bg-green-400 rounded-full animate-pulse"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.6))',
          }}
        />
        
        {/* Glowing effect */}
        <div className="absolute inset-0 w-6 h-6 bg-green-400 rounded-full opacity-20 animate-ping -translate-x-1.5 -translate-y-1.5"></div>
      </div>
    </div>
  );
}
