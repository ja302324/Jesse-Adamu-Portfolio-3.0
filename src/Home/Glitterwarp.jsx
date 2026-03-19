import React, { useEffect, useRef, useState } from 'react';

const GlitterWarp = ({
  width = "100%",
  height = "100%",
  speed = 1.8,              // SPEED CONTROL: Higher = faster (try 0.5 to 3.0)
  color = "#00ffff",
  density = 10,
  brightness = 1.2,
  starSize = 0.15,          // STAR SIZE CONTROL: Higher = bigger stars (try 0.05 to 0.3)
  focalDepth = 0.04,
  turbulence = 0.0,
  autoPlay = true,
  className = "",
  children
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    const numStars = Math.floor((canvas.width * canvas.height) / (density * 1000));
    const stars = [];
    
    const hexToRgb = (hex) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : { r: 255, g: 255, b: 255 };
    };
    
    const starColor = hexToRgb(color);
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * canvas.width,
        ox: 0,
        oy: 0
      });
    }
    
    let time = 0;
    
    const animate = () => {
      if (!isPlaying) return;
      
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const centerX = w / 2;
      const centerY = h / 2;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, w, h);
      
      time += 0.016 * speed;
      
      stars.forEach((star) => {
        // ⚡ SPEED: This controls how fast stars move toward you
        star.z -= speed * 2;  // Multiply speed by a larger number for faster movement
        
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
          star.ox = 0;
          star.oy = 0;
        }
        
        const turbX = turbulence > 0 ? Math.sin(time + star.y * 0.01) * turbulence * 20 : 0;
        const turbY = turbulence > 0 ? Math.cos(time + star.x * 0.01) * turbulence * 20 : 0;
        
        const k = (focalDepth * canvas.width) / star.z;
        const px = (star.x + turbX) * k + centerX;
        const py = (star.y + turbY) * k + centerY;
        
        // ⭐ STAR SIZE: This determines the visual size of each star
        const size = (1 - star.z / canvas.width) * starSize * 3;  // starSize multiplied by 3
        
        const opacity = Math.min((1 - star.z / canvas.width) * brightness, 1);
        
        if (px >= 0 && px <= w && py >= 0 && py <= h && size > 0) {
          const dx = star.ox !== 0 ? px - star.ox : px - centerX;
          const dy = star.oy !== 0 ? py - star.oy : py - centerY;
          const angle = Math.atan2(dy, dx);
          const radiusMajor = Math.max(size * 3.6, 1.1);
          const radiusMinor = Math.max(size * 0.28, 0.35);
          const tailX = px - Math.cos(angle) * radiusMajor;
          const tailY = py - Math.sin(angle) * radiusMajor;
          const headX = px + Math.cos(angle) * radiusMajor;
          const headY = py + Math.sin(angle) * radiusMajor;
          const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
          gradient.addColorStop(0, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, 0)`);
          gradient.addColorStop(0.35, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${opacity * 0.35})`);
          gradient.addColorStop(1, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${opacity})`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.ellipse(px, py, radiusMajor, radiusMinor, angle, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${Math.min(opacity * 1.2, 1)})`;
          ctx.beginPath();
          ctx.arc(px, py, Math.max(size * 0.55, 0.5), 0, Math.PI * 2);
          ctx.fill();
          
          if (star.ox !== 0 && star.oy !== 0) {
            const gradient2 = ctx.createLinearGradient(star.ox, star.oy, px, py);
            gradient2.addColorStop(0, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, 0)`);
            gradient2.addColorStop(1, `rgba(${starColor.r}, ${starColor.g}, ${starColor.b}, ${opacity * 0.3})`);
            
            ctx.strokeStyle = gradient2;
            ctx.lineWidth = Math.max(size * 0.2, 0.25);
            ctx.beginPath();
            ctx.moveTo(star.ox, star.oy);
            ctx.lineTo(px, py);
            ctx.stroke();
          }
          
          star.ox = px;
          star.oy = py;
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    if (isPlaying) {
      animate();
    }
    
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [speed, color, density, brightness, starSize, focalDepth, turbulence, isPlaying]);
  
  useEffect(() => {
    setIsPlaying(autoPlay);
  }, [autoPlay]);
  
  return (
    <div 
      className={`glitter-warp-container ${className}`}
      style={{ 
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#000000',
        width, 
        height 
      }}
    >
      <canvas 
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
      {children && (
        <div style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          height: '100%',
          pointerEvents: 'none'
        }}>
          <div style={{ pointerEvents: 'auto' }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default GlitterWarp;
