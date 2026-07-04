import React, { useEffect, useRef } from 'react';

const Canvas3D = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Particle properties
    const numParticles = 120;
    const particles = [];
    const fov = 350;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 1200,
        y: (Math.random() - 0.5) * 1200,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 1.5,
        size: Math.random() * 2 + 1
      });
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      mouseX = (e.clientX - width / 2) * 0.05;
      mouseY = (e.clientY - height / 2) * 0.05;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const centerX = width / 2;
      const centerY = height / 2;

      // Sort particles by depth (Z) for proper rendering order
      particles.sort((a, b) => b.z - a.z);

      const projected = [];

      for (let i = 0; i < numParticles; i++) {
        const p = particles[i];

        // Move particles in 3D space
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Loop boundaries in 3D
        if (p.z < 1) p.z = 1000;
        if (p.z > 1000) p.z = 1;
        if (p.x < -600) p.x = 600;
        if (p.x > 600) p.x = -600;
        if (p.y < -600) p.y = 600;
        if (p.y > 600) p.y = -600;

        // Apply camera rotation based on mouse
        const cosY = Math.cos(targetX * 0.01);
        const sinY = Math.sin(targetX * 0.01);
        const rx = p.x * cosY - p.z * sinY;
        const rz = p.x * sinY + p.z * cosY;

        // 3D Perspective projection
        const scale = fov / (fov + rz);
        const x2d = centerX + rx * scale;
        const y2d = centerY + (p.y + targetY) * scale;

        projected.push({ x: x2d, y: y2d, z: rz, scale, size: p.size });

        // Draw particle node
        const alpha = Math.min(1, Math.max(0.1, (1000 - rz) / 1000));
        ctx.beginPath();
        ctx.arc(x2d, y2d, Math.max(0.5, p.size * scale), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`;
        ctx.fill();
      }

      // Connect nearby nodes in 3D space (Neural Network / Compiler AST Lattice effect)
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const p1 = projected[i];
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            const alpha = (1 - dist / 110) * Math.min(1, (1000 - p1.z) / 1000) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(203, 213, 225, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.85
      }}
    />
  );
};

export default Canvas3D;
