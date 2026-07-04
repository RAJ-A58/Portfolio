import React, { useState, useRef } from 'react';

const TiltCard = ({ children, className = '', style = {}, maxAngle = 10, glareOpacity = 0.15, ...props }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glareStyle, setGlareStyle] = useState({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
    pointerEvents: 'none',
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0), transparent 80%)',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 10
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate percentage from center (-0.5 to 0.5)
    const centerX = width / 2;
    const centerY = height / 2;
    const percentX = (mouseX - centerX) / centerX;
    const percentY = (mouseY - centerY) / centerY;

    // Calculate rotation angles
    const rotateX = (percentY * -maxAngle).toFixed(2);
    const rotateY = (percentX * maxAngle).toFixed(2);

    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);

    // Glare position
    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlareStyle((prev) => ({
      ...prev,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, ${glareOpacity}), transparent 70%)`,
      opacity: 1
    }));
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        ...style,
        transform: transformStyle,
        transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
        position: 'relative',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
      {...props}
    >
      <div style={glareStyle} />
      <div style={{ position: 'relative', zIndex: 1, transform: 'translateZ(20px)' }}>
        {children}
      </div>
    </div>
  );
};

export default TiltCard;
