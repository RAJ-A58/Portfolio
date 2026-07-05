import React, { useState, useRef, useEffect } from 'react';
import { Award, Sparkles, Code2, ShieldCheck, Terminal, Atom } from 'lucide-react';
import './Lanyard.css';

const Lanyard = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [rotate, setRotate] = useState({ x: 0, y: 0, z: 0 });
  const cardRef = useRef(null);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Spring back to center when released
  useEffect(() => {
    if (!isDragging) {
      const timer = setTimeout(() => {
        setPosition({ x: 0, y: 0 });
        setRotate({ x: 0, y: 0, z: 0 });
      }, 30);
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
      const boundedX = Math.max(-140, Math.min(140, newX));
      const boundedY = Math.max(-60, Math.min(120, newY));
      
      setPosition({ x: boundedX, y: boundedY });
      // Realistic 3D swivel & twist during drag
      setRotate({ 
        x: -boundedY * 0.35, 
        y: boundedX * 0.45,
        z: boundedX * 0.15 
      });
    } else if (cardRef.current) {
      // 3D tilt on hover when not dragging
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -18;
      const rotateY = ((x - centerX) / centerX) * 18;
      setRotate({ x: rotateX, y: rotateY, z: rotateY * 0.2 });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setRotate({ x: 0, y: 0, z: 0 });
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
    const boundedX = Math.max(-120, Math.min(120, newX));
    const boundedY = Math.max(-50, Math.min(100, newY));
    setPosition({ x: boundedX, y: boundedY });
    setRotate({ x: -boundedY * 0.35, y: boundedX * 0.45, z: boundedX * 0.15 });
  };

  // Calculate strap angle and stretch based on card position
  const strapAngle = Math.atan2(position.x, 220 + position.y) * (180 / Math.PI);
  const strapStretch = Math.sqrt(Math.pow(position.x, 2) + Math.pow(220 + position.y, 2)) / 220;

  return (
    <div 
      className="lanyard-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Thick Fabric Lanyard Strap with Printed White Logos (Like React Bits) */}
      <div 
        className="lanyard-fabric-strap"
        style={{
          transform: `rotate(${strapAngle * 0.6}deg) scaleY(${strapStretch})`,
          transformOrigin: 'top center'
        }}
      >
        <div className="lanyard-strap-logo"><Atom size={16} /></div>
        <div className="lanyard-strap-logo"><Code2 size={16} /></div>
        <div className="lanyard-strap-logo"><Terminal size={16} /></div>
        <div className="lanyard-strap-logo"><Atom size={16} /></div>

        {/* Metal Swivel Clasp / Lobster Hook at the bottom of the band */}
        <div className="lanyard-metal-clasp">
          <div className="lanyard-clasp-ring" />
          <div className="lanyard-clasp-hook" />
        </div>
      </div>

      {/* Realistic 3D Conference Tag Card (Like Screenshot 2) */}
      <div 
        ref={cardRef}
        className={`lanyard-card ${isDragging ? 'dragging' : ''}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) perspective(1200px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotateZ(${rotate.z}deg)`,
          cursor: isDragging ? 'grabbing' : 'grab'
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* Top Punch Hole where the Clasp Connects */}
        <div className="lanyard-card-hole">
          <div className="lanyard-hole-inner" />
        </div>

        {/* Center Photo with Clean White/Silver Styling */}
        <div className="lanyard-photo-wrapper">
          <img 
            src="https://github.com/RAJ-A58.png" 
            alt="Raj Patil" 
            className="lanyard-photo"
            draggable="false"
          />
          <div className="lanyard-photo-border" />
        </div>

        {/* Name */}
        <div className="lanyard-info">
          <h3 className="lanyard-name">RAJ PATIL</h3>
        </div>

        {/* Competitive Programming Scores Pill Box */}
        <div className="lanyard-stats-bar">
          <div className="lanyard-stat-item">
            <span className="lanyard-stat-label">LEETCODE</span>
            <span className="lanyard-stat-val">1561</span>
          </div>
          <div className="lanyard-stat-divider" />
          <div className="lanyard-stat-item">
            <span className="lanyard-stat-label">CODEFORCES</span>
            <span className="lanyard-stat-val">1281</span>
          </div>
        </div>

        {/* Realistic Paper Texture & Lighting Glare Overlay */}
        <div className="lanyard-paper-texture" />
        <div className="lanyard-glare" />
      </div>
    </div>
  );
};

export default Lanyard;
