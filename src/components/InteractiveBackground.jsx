import React, { useRef, useEffect } from 'react';

export default function InteractiveBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let width = 0;
    let height = 0;

    // Mouse state
    let mouse = { x: -1000, y: -1000, radius: 250, targetX: -1000, targetY: -1000 };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      const isMobile = width < 768 || isTouchDevice;
      const particleCount = isMobile ? 45 : 120; // Scattered stars across full page
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        // Different sizes for depth
        const sizeCategory = Math.random();
        let size, baseAlpha;
        if (sizeCategory < 0.05) {
          // Few brighter particles
          size = Math.random() * 1.5 + 1.2;
          baseAlpha = Math.random() * 0.4 + 0.3;
        } else if (sizeCategory < 0.4) {
          size = Math.random() * 1.0 + 0.6;
          baseAlpha = Math.random() * 0.3 + 0.15;
        } else {
          size = Math.random() * 0.6 + 0.3;
          baseAlpha = Math.random() * 0.2 + 0.05;
        }

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          baseX: Math.random() * width,
          baseY: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          size: size,
          baseAlpha: baseAlpha,
          color: Math.random() > 0.3 ? '#38bdf8' : '#a855f7' // mostly cyan, some purple
        });
      }
    };

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e) => {
      if (isTouchDevice) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    init();

    // Set initial mouse position quickly
    mouse.x = mouse.targetX;
    mouse.y = mouse.targetY;

    const animate = () => {
      if (isVisible && !prefersReducedMotion) {
        ctx.clearRect(0, 0, width, height);

        // Smooth mouse following for glow
        mouse.x += (mouse.targetX - mouse.x) * 0.08;
        mouse.y += (mouse.targetY - mouse.y) * 0.08;

        // Subtle cursor glow
        if (!isTouchDevice && mouse.x > -500) {
          const glowGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 350);
          glowGrad.addColorStop(0, 'rgba(56, 189, 248, 0.05)'); // very soft cyan
          glowGrad.addColorStop(0.3, 'rgba(168, 85, 247, 0.015)'); // soft purple
          glowGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = glowGrad;
          ctx.fillRect(0, 0, width, height);
        }

        // Draw and update particles
        for (let i = 0; i < particles.length; i++) {
          let p = particles[i];

          p.x += p.vx;
          p.y += p.vy;
          p.baseX += p.vx;
          p.baseY += p.vy;

          // Wrap bounds smoothly
          if (p.baseX < -50) p.x = p.baseX = width + 50;
          if (p.baseX > width + 50) p.x = p.baseX = -50;
          if (p.baseY < -50) p.y = p.baseY = height + 50;
          if (p.baseY > height + 50) p.y = p.baseY = -50;

          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          let currentAlpha = p.baseAlpha;
          let currentSize = p.size;
          let offsetX = 0;
          let offsetY = 0;

          if (!isTouchDevice && distance < mouse.radius && mouse.x > -500) {
            const force = (mouse.radius - distance) / mouse.radius;
            
            // Push away logic (gentle movement away from cursor)
            const pushX = dx * force * 0.06;
            const pushY = dy * force * 0.06;

            offsetX = -pushX;
            offsetY = -pushY;
            
            p.x += ((p.baseX + offsetX) - p.x) * 0.1;
            p.y += ((p.baseY + offsetY) - p.y) * 0.1;

            currentAlpha = Math.min(0.9, p.baseAlpha + force * 0.4);
            currentSize = p.size + force * 1.2;
          } else {
             // Return to base smoothly
             p.x += (p.baseX - p.x) * 0.02;
             p.y += (p.baseY - p.y) * 0.02;
          }

          ctx.beginPath();
          ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = currentAlpha;
          
          if (!isTouchDevice && distance < mouse.radius * 0.6) {
            ctx.shadowBlur = 8;
            ctx.shadowColor = p.color;
          } else {
            ctx.shadowBlur = 0;
          }
          
          ctx.fill();
          ctx.globalAlpha = 1;

          // Connecting lines for nearby particles
          for (let j = i + 1; j < particles.length; j++) {
             const p2 = particles[j];
             const dx2 = p.x - p2.x;
             const dy2 = p.y - p2.y;
             const dist2 = Math.sqrt(dx2*dx2 + dy2*dy2);

             const connectThreshold = 110;
             if (dist2 < connectThreshold) {
                let isNearMouse = false;
                if (!isTouchDevice && mouse.x > -500) {
                   const mDist1 = Math.sqrt(Math.pow(mouse.x - p.x, 2) + Math.pow(mouse.y - p.y, 2));
                   const mDist2 = Math.sqrt(Math.pow(mouse.x - p2.x, 2) + Math.pow(mouse.y - p2.y, 2));
                   if (mDist1 < mouse.radius && mDist2 < mouse.radius) {
                      isNearMouse = true;
                   }
                }

                ctx.beginPath();
                const baseLineAlpha = isNearMouse ? 0.35 : 0.06;
                ctx.strokeStyle = p.color;
                ctx.globalAlpha = baseLineAlpha * (1 - dist2 / connectThreshold);
                ctx.lineWidth = isNearMouse ? 0.8 : 0.4;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
                ctx.globalAlpha = 1;
             }
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Black base */}
      <div className="absolute inset-0 bg-[#030712]"></div>
      
      {/* Global Background Aurora Lighting & Grid */}
      <div className="absolute inset-0 overflow-hidden mix-blend-screen">
        <div className="absolute -top-[30%] -left-[10%] w-[120%] h-[150%] opacity-20 blur-[140px] bg-gradient-to-tr from-cyan-600 via-indigo-700 to-purple-800"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
      </div>

      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full"
      />

      {/* Slight Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.7)_100%)] mix-blend-multiply pointer-events-none" />
      
      {/* Fine Grain Texture */}
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
    </div>
  );
}
