import React, { useRef, useEffect } from 'react';

export default function InteractiveParticleField() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = 0;
    let height = 0;
    
    // Mouse state relative to canvas
    let mouse = { x: -1000, y: -1000, radius: 150 };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const init = () => {
      // Handle High DPI displays
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();
      
      width = rect.width;
      height = rect.height;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      const isMobile = width < 768;
      const particleCount = isMobile ? 30 : 70;
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: Math.random() * width,
          baseY: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          size: Math.random() * 1.2 + 0.4,
          baseAlpha: Math.random() * 0.3 + 0.1,
        });
      }
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      // Gently reset mouse so particles float back
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    // Attach event listeners to the canvas itself
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    
    // Intersection Observer for pausing animation when off-screen
    let isVisible = true;
    const observer = new IntersectionObserver((entries) => {
      isVisible = entries[0].isIntersecting;
    });
    observer.observe(canvas);

    init();

    let time = 0;

    const animate = () => {
      if (isVisible && !prefersReducedMotion) {
        time += 0.002;
        ctx.clearRect(0, 0, width, height);

        // 1. Draw central slow-rotating constellation (orbiting particles)
        const centerX = width / 2;
        const centerY = height / 2;
        
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(time);
        
        // Very faint orbital rings
        ctx.beginPath();
        ctx.arc(0, 0, Math.min(width, height) * 0.25, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.04)';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, Math.min(width, height) * 0.15, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(168, 85, 247, 0.04)';
        ctx.stroke();

        // Few central orbiting stars
        for(let i = 0; i < 6; i++) {
          const angle = (Math.PI * 2 / 6) * i;
          const dist = Math.min(width, height) * 0.25;
          const px = Math.cos(angle) * dist;
          const py = Math.sin(angle) * dist;
          
          ctx.beginPath();
          ctx.arc(px, py, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
          ctx.fill();
          
          // Connect to center softly
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(0, 0);
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.05)';
          ctx.stroke();
        }
        
        // Center core
        ctx.beginPath();
        ctx.arc(0, 0, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(168, 85, 247, 0.6)';
        ctx.fill();

        ctx.restore();

        // 2. Update and draw drifting background particles
        for (let i = 0; i < particles.length; i++) {
          let p = particles[i];
          
          p.x += p.vx;
          p.y += p.vy;

          // Gentle bounds wrapping
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Mouse interaction logic
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          let currentAlpha = p.baseAlpha;
          let currentSize = p.size;

          if (distance < mouse.radius) {
             const force = (mouse.radius - distance) / mouse.radius;
             // Gently push away from mouse
             p.x -= dx * force * 0.03;
             p.y -= dy * force * 0.03;
             // Bloom effect
             currentAlpha = Math.min(0.9, p.baseAlpha + force * 0.6);
             currentSize = p.size + force * 1.5;
          }

          // Return to base position softly if not near mouse
          if (distance >= mouse.radius) {
            // Drift slowly back towards their natural moving baseline
            p.x += (p.baseX - p.x) * 0.005;
            p.y += (p.baseY - p.y) * 0.005;
          }
          
          // Continuously update the baseline so they keep drifting naturally
          p.baseX += p.vx;
          p.baseY += p.vy;
          if (p.baseX < 0) p.baseX = width;
          if (p.baseX > width) p.baseX = 0;
          if (p.baseY < 0) p.baseY = height;
          if (p.baseY > height) p.baseY = 0;

          // Draw the particle
          ctx.beginPath();
          ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(56, 189, 248, ${currentAlpha})`;
          
          if (distance < mouse.radius) {
             ctx.shadowBlur = 12;
             ctx.shadowColor = '#38bdf8';
          } else {
             ctx.shadowBlur = 0;
          }
          ctx.fill();
          
          // Connect nearby particles for neural net effect
          for (let j = i + 1; j < particles.length; j++) {
            let p2 = particles[j];
            let dx2 = p.x - p2.x;
            let dy2 = p.y - p2.y;
            let dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

            const connectionThreshold = 90;
            if (dist2 < connectionThreshold) {
              ctx.beginPath();
              
              // Default subtle connection
              let lineAlpha = 0.1 * (1 - dist2 / connectionThreshold);
              ctx.strokeStyle = `rgba(168, 85, 247, ${lineAlpha})`;
              
              // If both particles are near the mouse, glow the connection
              if (distance < mouse.radius && Math.sqrt(Math.pow(mouse.x - p2.x, 2) + Math.pow(mouse.y - p2.y, 2)) < mouse.radius) {
                 lineAlpha = 0.4 * (1 - dist2 / connectionThreshold);
                 ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
                 ctx.lineWidth = 0.8;
              } else {
                 ctx.lineWidth = 0.4;
              }
              
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute bottom-0 left-0 w-full h-[25vh] sm:h-[30vh] pointer-events-auto z-0"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)'
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block" 
      />
    </div>
  );
}
