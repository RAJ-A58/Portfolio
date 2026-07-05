import React, { useState, useRef, useEffect } from 'react';
import { Award, Sparkles, Code2, ShieldCheck, QrCode } from 'lucide-react';
import './Lanyard.css';

const Lanyard = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Spring back to center when released
  useEffect(() => {
    if (!isDragging) {
      const timer = setTimeout(() => {
        setPosition({ x: 0, y: 0 });
        setRotate({ x: 0, y: 0 });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = e.clientX - dragStartRef.current.x;
      const newY = e.clientY - dragStartRef.current.y;
      
      // Limit drag distance
      const boundedX = Math.max(-120, Math.min(120, newX));
      const boundedY = Math.max(-60, Math.min(100, newY));
      
      setPosition({ x: boundedX, y: boundedY });
      setRotate({ x: -boundedY * 0.3, y: boundedX * 0.4 });
    } else if (cardRef.current) {
      // 3D tilt on hover when not dragging
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;
      setRotate({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setRotate({ x: 0, y: 0 });
    }
    setIsDragging(false);
  };

  // Touch support for mobile devices
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    dragStartRef.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    };
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const newX = touch.clientX - dragStartRef.current.x;
    const newY = touch.clientY - dragStartRef.current.y;
    const boundedX = Math.max(-100, Math.min(100, newX));
    const boundedY = Math.max(-50, Math.min(80, newY));
    setPosition({ x: boundedX, y: boundedY });
    setRotate({ x: -boundedY * 0.3, y: boundedX * 0.4 });
  };

  return (
    <div 
      className="lanyard-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Hanging Strap / String */}
      <div className="lanyard-strap-wrapper">
        <svg className="lanyard-strap-svg" viewBox="0 0 200 160">
          {/* Left string */}
          <line 
            x1="100" y1="0" 
            x2={100 + position.x * 0.7 - 15} y2={140 + position.y} 
            stroke="rgba(255, 255, 255, 0.4)" 
            strokeWidth="3" 
            strokeDasharray="4 2"
          />
          {/* Right string */}
          <line 
            x1="100" y1="0" 
            x2={100 + position.x * 0.7 + 15} y2={140 + position.y} 
            stroke="rgba(255, 255, 255, 0.4)" 
            strokeWidth="3" 
            strokeDasharray="4 2"
          />
          {/* Metallic Clip */}
          <circle 
            cx={100 + position.x * 0.7} 
            cy={140 + position.y} 
            r="8" 
            fill="#e2e8f0" 
            stroke="#64748b" 
            strokeWidth="2" 
          />
        </svg>
      </div>

      {/* Draggable VIP Conference ID Card */}
      <div 
        ref={cardRef}
        className={`lanyard-card ${isDragging ? 'dragging' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Card Header Hole & Metal Ring */}
        <div className="lanyard-clip-hole">
          <div className="lanyard-metal-ring" />
        </div>

        {/* Top Conference Banner */}
        <div className="lanyard-header">
          <span className="lanyard-badge-pill">VIP KEYNOTE PASS 2026</span>
          <p className="lanyard-org-text">IIT BOMBAY × VNIT NAGPUR</p>
        </div>

        {/* Center Portrait with Japanese Luxury Silver Border */}
        <div className="lanyard-photo-wrapper">
          <img 
            src="https://github.com/RAJ-A58.png" 
            alt="Raj Patil" 
            className="lanyard-photo"
            draggable="false"
          />
          <div className="lanyard-photo-ring" />
        </div>

        {/* Name & Role */}
        <div className="lanyard-info">
          <h3 className="lanyard-name">RAJ PATIL</h3>
          <p className="lanyard-role">Systems Software Engineer & Researcher</p>
        </div>

        {/* Competitive Programming Stats Bar */}
        <div className="lanyard-stats-bar">
          <div className="lanyard-stat-item">
            <span className="lanyard-stat-label">LeetCode</span>
            <span className="lanyard-stat-val">1561</span>
          </div>
          <div className="lanyard-stat-divider" />
          <div className="lanyard-stat-item">
            <span className="lanyard-stat-label">Codeforces</span>
            <span className="lanyard-stat-val">1281</span>
          </div>
        </div>

        {/* Barcode & Security Chip Footer */}
        <div className="lanyard-footer">
          <div className="lanyard-chip">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>ID: #RP-2026-AI</span>
          </div>
          <div className="lanyard-barcode">
            <span style={{ fontFamily: 'monospace', letterSpacing: '2px', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
              ||| | |||| || | || ||||
            </span>
          </div>
        </div>

        {/* Shimmering Glare Overlay */}
        <div className="lanyard-glare" />
      </div>
    </div>
  );
};

export default Lanyard;
