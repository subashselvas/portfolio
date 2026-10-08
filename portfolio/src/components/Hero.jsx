import { useState, useEffect, useRef } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, TwitterIcon, InstagramIcon, MailIcon } from './Icons';
import subashPortrait from '../assets/subash-portrait.jpg';

export default function Hero({ onOpenResume }) {
  const [roleText, setRoleText] = useState('Software Developer');
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(0);
  const heroRef = useRef(null);

  // Carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % 5);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  // Dynamic typing / switching roles
  useEffect(() => {
    const roles = ['Software Developer', 'Cyber Security Enthusiast', 'Full-Stack Problem Solver'];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;

    const typeRole = () => {
      const currentRole = roles[roleIdx];
      if (isDeleting) {
        setRoleText(currentRole.substring(0, charIdx - 1));
        charIdx--;
      } else {
        setRoleText(currentRole.substring(0, charIdx + 1));
        charIdx++;
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === currentRole.length) {
        speed = 2200; // pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 450;
      }

      timeoutId = setTimeout(typeRole, speed);
    };

    timeoutId = setTimeout(typeRole, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  // Subtle Mouse Parallax using requestAnimationFrame
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animId;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      targetY = (e.clientY - innerHeight / 2) / (innerHeight / 2);
    };

    const loop = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      setMouseOffset({ x: currentX, y: currentY });
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Background Curved Swoosh & Soft Ambient Rings */}
      <div className="hero-ambient-bg">
        <div className="hero-arc-shape" />
        <div className="hero-soft-glow glow-1" />
        <div className="hero-soft-glow glow-2" />
      </div>

      <div className="container hero-container">
        {/* ================= LEFT: Profile Circular Backdrop ================= */}
        <div
          className="hero-profile-column"
          style={{
            transform: `translate3d(${mouseOffset.x * -8}px, ${mouseOffset.y * -8}px, 0)`,
          }}
        >
          <div className="profile-backdrop-rings">
            {/* Concentric planetary rings matching reference */}
            <div className="orbit-ring ring-outer" />
            <div className="orbit-ring ring-mid" />
            <div className="orbit-ring ring-inner" />

            {/* Circular Blue Container */}
            <div className="profile-circle-wrapper">
              <div className="profile-circle-bg" />
              {/* User's ACTUAL photo */}
              <img
                src={subashPortrait}
                alt="Subash S - Software Developer"
                className="profile-real-image"
                loading="eager"
              />
              {/* Subtle bottom gradient blend inside circle */}
              <div className="profile-inner-gradient" />
            </div>

            {/* Floating verification / status pill */}
            <div className="profile-floating-badge">
              <span className="status-dot-pulse" />
              <span className="badge-text">Available for Opportunities</span>
            </div>
          </div>
        </div>

        {/* ================= CENTER: Typography & Intro ================= */}
        <div className="hero-content-column">
          <div className="hero-intro-label">
            <span className="wave-icon">👋</span>
            <span>Hello, I'm</span>
          </div>

          <h1 className="hero-name">Subash S</h1>

          <div className="hero-role-wrapper">
            <span className="hero-role-prefix">And I'm a </span>
            <span className="hero-role-highlight">{roleText}</span>
            <span className="role-blinking-cursor">|</span>
          </div>

          <p className="hero-description">
            Currently pursuing my 4th year in Computer Science and Cyber Security at Karpagam
            Academy of Higher Education, Coimbatore, with a CGPA of 8.1. Passionate about software
            development, problem solving, and building practical technology solutions.
          </p>

          {/* Social Links Row */}
          <div className="hero-socials-row">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Twitter Profile"
              title="Twitter"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href="mailto:contact@subash.dev"
              className="social-icon-btn"
              aria-label="Email Me"
              title="Email"
            >
              <MailIcon size={18} />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions-row">
            <button
              type="button"
              className="btn-primary hero-btn"
              onClick={onOpenResume}
            >
              <span>Download CV</span>
              <Download size={18} />
            </button>
            <a
              href="#portfolio"
              className="btn-secondary hero-btn"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* ================= RIGHT: Floating 3D Portfolio Carousel ================= */}
        <div
          className="hero-cards-column"
          style={{
            transform: `perspective(1200px) rotateY(${ -10 + mouseOffset.x * 12}deg) rotateX(${ 5 - mouseOffset.y * 12}deg) translateZ(0)`,
          }}
        >
          <div className="carousel-3d-container">
            {[
              { id: 'home', title: 'Home', subtitle: 'Software Developer' },
              { id: 'about', title: 'About Me', subtitle: '4th Yr CS & Cyber Sec' },
              { id: 'skills', title: 'Skills', subtitle: 'React, Java, Python' },
              { id: 'portfolio', title: 'Portfolio', subtitle: '3D UI, Web, IoT' },
              { id: 'contact', title: 'Contact', subtitle: 'Available for Hire' }
            ].map((card, idx) => {
              let offset = (idx - activeCard) % 5;
              if (offset < -2) offset += 5;
              if (offset > 2) offset -= 5;
              
              const isFront = offset === 0;
              const opacity = 1 - Math.abs(offset) * 0.25;
              const scale = 1 - Math.abs(offset) * 0.1;
              const translateX = offset * 55;
              const translateZ = Math.abs(offset) * -80;
              const rotateY = offset * -15;

              return (
                <div 
                  key={card.id}
                  className={`carousel-card ${isFront ? 'active-card' : ''}`}
                  style={{
                    transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: 10 - Math.abs(offset)
                  }}
                  onClick={() => setActiveCard(idx)}
                >
                  <div className="carousel-card-inner">
                     <div className="carousel-card-header">
                       <span className="card-brand">Port<strong>folio</strong></span>
                       <span className="card-badge">{card.title}</span>
                     </div>
                     <div className="carousel-card-body">
                        <div className="card-avatar-wrap">
                          <img src={subashPortrait} alt="Subash" className="card-avatar" />
                        </div>
                        <div className="card-text">
                           <h4>Subash S</h4>
                           <p>{card.subtitle}</p>
                        </div>
                     </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 92vh;
          padding-top: calc(var(--header-height) + 50px);
          padding-bottom: 70px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(180deg, #f0f7ff 0%, #f9fbff 60%, #ffffff 100%);
        }

        /* Ambient background curves matching reference */
        .hero-ambient-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .hero-arc-shape {
          position: absolute;
          top: -20%;
          left: -10%;
          width: 75vw;
          height: 110vh;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(219, 234, 254, 0.5) 0%, rgba(239, 246, 255, 0.1) 70%, transparent 100%);
          transform: rotate(-15deg);
        }

        .hero-soft-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .glow-1 {
          top: 10%;
          left: 5%;
          width: 450px;
          height: 450px;
          background: rgba(147, 197, 253, 0.25);
        }

        .glow-2 {
          top: 25%;
          right: 5%;
          width: 500px;
          height: 500px;
          background: rgba(191, 219, 254, 0.2);
        }

        .hero-container {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 320px 1.25fr 1fr;
          gap: 36px;
          align-items: center;
          width: 100%;
        }

        /* ================= LEFT PROFILE CIRCLE ================= */
        .hero-profile-column {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.15s ease-out;
          will-change: transform;
        }

        .profile-backdrop-rings {
          position: relative;
          width: 310px;
          height: 310px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Planetary Orbit Rings */
        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .ring-outer {
          width: 370px;
          height: 370px;
          border: 1.5px dashed rgba(147, 197, 253, 0.55);
          animation: rotateClockwise 60s linear infinite;
        }

        .ring-mid {
          width: 340px;
          height: 340px;
          border: 1px solid rgba(191, 219, 254, 0.7);
        }

        .ring-inner {
          width: 310px;
          height: 310px;
          border: 1.5px solid rgba(219, 234, 254, 0.85);
        }

        @keyframes rotateClockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .profile-circle-wrapper {
          position: relative;
          width: 270px;
          height: 270px;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(135deg, #bfdbfe 0%, #93c5fd 60%, #60a5fa 100%);
          box-shadow: 0 25px 45px -10px rgba(37, 99, 235, 0.28), 0 0 0 5px rgba(255, 255, 255, 0.95);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-circle-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 30%, #e0f2fe 0%, #93c5fd 100%);
          opacity: 0.9;
        }

        .profile-real-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          transition: transform 0.4s ease;
          border-radius: 50%;
          z-index: 2;
        }

        .profile-circle-wrapper:hover .profile-real-image {
          transform: scale(1.04);
        }

        .profile-inner-gradient {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(to top, rgba(37, 99, 235, 0.2) 0%, transparent 100%);
          z-index: 3;
          pointer-events: none;
        }

        .profile-floating-badge {
          position: absolute;
          bottom: -10px;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-blue);
          padding: 7px 16px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
          z-index: 5;
        }

        .status-dot-pulse {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2);
          animation: pulseGreen 2s infinite;
        }

        @keyframes pulseGreen {
          0%, 100% { box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25); }
          50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.05); }
        }

        .badge-text {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--navy-heading);
          white-space: nowrap;
        }

        /* ================= CENTER CONTENT ================= */
        .hero-content-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 10px 0;
        }

        .hero-intro-label {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 8px;
        }

        .wave-icon {
          display: inline-block;
          animation: waveHand 2.2s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes waveHand {
          0%, 100% { transform: rotate(0deg); }
          20%, 60% { transform: rotate(14deg); }
          40%, 80% { transform: rotate(-10deg); }
        }

        .hero-name {
          font-size: 3.4rem;
          font-weight: 800;
          color: var(--navy-heading);
          letter-spacing: -0.035em;
          line-height: 1.1;
          margin-bottom: 12px;
        }

        .hero-role-wrapper {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 6px;
        }

        .hero-role-prefix {
          color: var(--navy-heading);
        }

        .hero-role-highlight {
          color: var(--primary-blue);
          font-weight: 800;
        }

        .role-blinking-cursor {
          color: var(--primary-blue);
          font-weight: 300;
          animation: blinkCursor 0.9s infinite;
        }

        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-description {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-muted);
          max-width: 540px;
          margin-bottom: 28px;
        }

        /* Social Icons Row */
        .hero-socials-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .social-icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--white);
          border: 1px solid var(--border-blue);
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(15, 23, 42, 0.04);
          transition: all var(--transition-fast);
        }

        .social-icon-btn:hover {
          background: var(--primary-blue);
          color: var(--white);
          border-color: var(--primary-blue);
          transform: translateY(-3px);
          box-shadow: 0 8px 18px rgba(37, 99, 235, 0.25);
        }

        .hero-actions-row {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .hero-btn {
          padding: 13px 28px;
          font-size: 0.98rem;
        }

        /* ================= RIGHT 3D FLOATING CAROUSEL ================= */
        .hero-cards-column {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          transform-style: preserve-3d;
          transition: transform 0.15s ease-out;
          will-change: transform;
        }

        .carousel-3d-container {
          position: relative;
          width: 320px;
          height: 380px;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .carousel-card {
          position: absolute;
          width: 290px;
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          overflow: hidden;
          cursor: pointer;
          user-select: none;
        }

        .carousel-card.active-card {
          border: 1px solid rgba(191, 219, 254, 0.8);
          box-shadow: -18px 30px 50px rgba(15, 23, 42, 0.12), 0 10px 25px rgba(37, 99, 235, 0.08);
        }

        .carousel-card-inner {
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .carousel-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid #f1f5f9;
        }

        .card-brand {
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--navy-heading);
        }

        .card-brand strong {
          color: var(--primary-blue);
        }

        .card-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 4px 10px;
          background: #eff6ff;
          color: var(--primary-blue);
          border-radius: 99px;
          border: 1px solid #dbeafe;
        }

        .carousel-card-body {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .card-avatar-wrap {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(135deg, #dbeafe, #93c5fd);
          border: 2px solid #ffffff;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.15);
          flex-shrink: 0;
        }

        .card-avatar {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
        }

        .card-text h4 {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 4px;
        }

        .card-text p {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        /* Hover enhancement for active card */
        .carousel-card.active-card:hover {
          transform: scale(1.05) translateZ(20px) !important;
          box-shadow: -22px 35px 60px rgba(15, 23, 42, 0.16);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 260px 1fr;
            gap: 28px;
          }
          .hero-cards-column {
            display: none;
          }
          .profile-backdrop-rings {
            width: 250px;
            height: 250px;
          }
          .ring-outer { width: 290px; height: 290px; }
          .ring-mid { width: 270px; height: 270px; }
          .ring-inner { width: 250px; height: 250px; }
          .profile-circle-wrapper { width: 220px; height: 220px; }
        }

        @media (max-width: 820px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            justify-items: center;
          }
          .hero-content-column {
            align-items: center;
            text-align: center;
          }
          .hero-intro-label {
            justify-content: center;
          }
          .hero-role-wrapper {
            justify-content: center;
          }
          .hero-actions-row {
            justify-content: center;
          }
          .hero-socials-row {
            justify-content: center;
          }
          .hero-name {
            font-size: 2.7rem;
          }
        }

        @media (max-width: 480px) {
          .hero-name {
            font-size: 2.2rem;
          }
          .hero-role-wrapper {
            font-size: 1.25rem;
          }
          .profile-backdrop-rings {
            width: 220px;
            height: 220px;
          }
          .profile-circle-wrapper {
            width: 190px;
            height: 190px;
          }
          .ring-outer { width: 240px; height: 240px; }
        }
      `}</style>
    </section>
  );
}
