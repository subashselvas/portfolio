import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [ringPosition, setRingPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device supports hover and pointer is fine (not touch)
    const hasTouch = window.matchMedia('(pointer: coarse)').matches || 
                     'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hasTouch || prefersReducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    let animationFrameId;
    let targetX = -100;
    let targetY = -100;
    let currentRingX = -100;
    let currentRingY = -100;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: targetX, y: targetY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp loop for the outer ring
    const renderLoop = () => {
      const ease = 0.18;
      currentRingX += (targetX - currentRingX) * ease;
      currentRingY += (targetY - currentRingY) * ease;
      setRingPosition({ x: currentRingX, y: currentRingY });
      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    // Track interactive element hovers
    const handleElementHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, .interactive-card, .btn-primary, .btn-secondary, [role="button"]');
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleElementHover, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  return (
    <>
      {/* Center cursor dot */}
      <div
        className="custom-cursor-dot"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 0.6 : 1})`,
        }}
      />
      {/* Delayed outer ring */}
      <div
        className={`custom-cursor-ring ${isHovered ? 'hovered' : ''}`}
        style={{
          transform: `translate3d(${ringPosition.x}px, ${ringPosition.y}px, 0) translate(-50%, -50%) scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      <style>{`
        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 7px;
          height: 7px;
          background-color: var(--primary-blue);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99999;
          transition: transform 0.1s ease-out;
          will-change: transform;
        }

        .custom-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 32px;
          height: 32px;
          border: 1.5px solid var(--primary-blue);
          border-radius: 50%;
          pointer-events: none;
          z-index: 99998;
          transition: width 0.2s ease, height 0.2s ease, background-color 0.2s ease, border-color 0.2s ease;
          background-color: rgba(37, 99, 235, 0.04);
          will-change: transform;
        }

        .custom-cursor-ring.hovered {
          border-color: var(--primary-blue);
          background-color: rgba(37, 99, 235, 0.12);
        }

        @media (pointer: coarse), (hover: none) {
          .custom-cursor-dot, .custom-cursor-ring {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
