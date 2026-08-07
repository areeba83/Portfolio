import React, { useEffect, useRef } from 'react';

export default function StarBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Check if device is likely a touch device
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (prefersReducedMotion || isTouchDevice) {
      return;
    }

    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      // Calculate normalized mouse position from -1 to 1
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      
      // We want mouse LEFT -> stars RIGHT (invert the movement)
      targetX = -x;
      targetY = -y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // The children are the 3 star layers
    const layers = container.children;

    const render = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      // Distant layer: 3px max
      // Middle layer: 6.5px max
      // Closer layer: 11.5px max
      
      if (layers[0]) layers[0].style.transform = `translate(${currentX * 3}px, ${currentY * 3}px)`;
      if (layers[1]) layers[1].style.transform = `translate(${currentX * 6.5}px, ${currentY * 6.5}px)`;
      if (layers[2]) layers[2].style.transform = `translate(${currentX * 11.5}px, ${currentY * 11.5}px)`;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen overflow-hidden"
    >
      <div className="absolute -inset-[30px] stars-bg-1 will-change-transform"></div>
      <div className="absolute -inset-[30px] stars-bg-2 will-change-transform"></div>
      <div className="absolute -inset-[30px] stars-bg-3 will-change-transform"></div>
    </div>
  );
}
