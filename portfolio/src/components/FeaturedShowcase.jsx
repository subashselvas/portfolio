import { useState, useEffect } from 'react';
import {
  Sparkles,
  Smartphone,
  Sliders,
  Layers,
  Type,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Clock,
  ThumbsUp,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import greenhouseImg from '../assets/greenhouse-preview.jpg';

export default function FeaturedShowcase({ onSelectProject }) {
  const [activeBoard, setActiveBoard] = useState(0);
  const [tiltOffset, setTiltOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      const y = (e.clientY - innerHeight / 2) / (innerHeight / 2);
      setTiltOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featureBadges = [
    { icon: <Sparkles size={18} className="badge-icon-blue" />, title: 'Modern Architecture', desc: 'Modular & Scalable' },
    { icon: <Smartphone size={18} className="badge-icon-blue" />, title: 'Fully Responsive', desc: 'Any Screen Size' },
    { icon: <Sliders size={18} className="badge-icon-blue" />, title: 'Easy to Customize', desc: 'Config-driven' },
    { icon: <Layers size={18} className="badge-icon-blue" />, title: 'Organized Components', desc: 'Clean React code' },
    { icon: <Type size={18} className="badge-icon-blue" />, title: 'Clean Typography', desc: 'Accessible & readable' },
    { icon: <ShieldCheck size={18} className="badge-icon-blue" />, title: 'Secure Data Ingestion', desc: 'Zero-Trust protocols' },
  ];

  return (
    <section className="featured-showcase-section">
      <div className="container showcase-container">
        {/* Left Column: Headline and Badges matching reference */}
        <div className="showcase-left-col">
          <div className="showcase-brand-row">
            <div className="showcase-brand-icon">
              <span className="dot dot-1" />
              <span className="dot dot-2" />
              <span className="dot dot-3" />
              <span className="dot dot-4" />
              <span className="dot dot-5" />
            </div>
            <span className="showcase-brand-title">Carex</span>
            <span className="showcase-version-pill">Version 1.1</span>
          </div>

          <h2 className="showcase-heading">
            UX Case Study <br />Template
          </h2>

          <p className="showcase-desc">
            Beautiful, clean and modern UX case study template to showcase your engineering and
            design work in a professional way. Demonstrates end-to-end telemetry, full-stack React
            architecture, and responsive design systems.
          </p>

          {/* 6 Feature Badges in 2-column grid */}
          <div className="showcase-features-grid">
            {featureBadges.map((badge, idx) => (
              <div key={idx} className="showcase-feature-item">
                <div className="feature-icon-box">{badge.icon}</div>
                <div className="feature-text-group">
                  <h4 className="feature-title">{badge.title}</h4>
                  <span className="feature-sub">{badge.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="showcase-action-row">
            <button
              type="button"
              className="btn-primary"
              onClick={() => onSelectProject && onSelectProject('greenhouse')}
            >
              <span>Explore Live Case Study</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </div>

        {/* Right Column: 4 Tilted Perspective Case Study Boards matching reference */}
        <div
          className="showcase-right-col"
          style={{
            transform: `perspective(1400px) rotateY(${ -10 + tiltOffset.x * 4}deg) rotateX(${ 6 - tiltOffset.y * 4}deg)`,
          }}
        >
          <div className="case-study-boards-fan">
            {/* Board 1: Research & Discovery */}
            <div className="case-board board-1">
              <div className="board-header">
                <span className="board-tag">Stage 01</span>
                <h4 className="board-title">Research & Discovery</h4>
              </div>
              <div className="board-mini-metrics">
                <div className="board-chip">
                  <CheckCircle2 size={13} className="text-blue" />
                  <span>User Interviews</span>
                </div>
                <div className="board-chip">
                  <CheckCircle2 size={13} className="text-blue" />
                  <span>Competitive Analysis</span>
                </div>
                <div className="board-chip">
                  <CheckCircle2 size={13} className="text-blue" />
                  <span>Sensor Telemetry</span>
                </div>
              </div>
              <div className="board-preview-box">
                <div className="board-key-insights">
                  <strong>Key Insights:</strong>
                  <p>Real-time micro-climate monitoring reduced crop dehydration risk by 68%.</p>
                </div>
              </div>
            </div>

            {/* Board 2: Design Process */}
            <div className="case-board board-2">
              <div className="board-header">
                <span className="board-tag">Stage 02</span>
                <h4 className="board-title">Design Process</h4>
              </div>
              <div className="process-step-row">
                <div className="process-step-item">
                  <span className="step-num">1</span>
                  <span className="step-name">Discover</span>
                </div>
                <div className="process-step-item">
                  <span className="step-num">2</span>
                  <span className="step-name">Define</span>
                </div>
                <div className="process-step-item">
                  <span className="step-num">3</span>
                  <span className="step-name">Design</span>
                </div>
                <div className="process-step-item">
                  <span className="step-num">4</span>
                  <span className="step-name">Deliver</span>
                </div>
              </div>
              <div className="wireframe-mock-grid">
                <div className="wireframe-box" />
                <div className="wireframe-box" />
              </div>
            </div>

            {/* Board 3: UI Design / Interface */}
            <div className="case-board board-3">
              <div className="board-header">
                <span className="board-tag">Stage 03</span>
                <h4 className="board-title">UI Design</h4>
              </div>
              <div className="board-dashboard-preview">
                <img
                  src={greenhouseImg}
                  alt="UI Dashboard Preview"
                  className="board-img"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Board 4: Final Design & Results */}
            <div className="case-board board-4">
              <div className="board-header">
                <span className="board-tag">Stage 04</span>
                <h4 className="board-title">Results & Impact</h4>
              </div>
              <div className="impact-stats-grid">
                <div className="impact-stat-card">
                  <div className="stat-top">
                    <TrendingUp size={15} className="text-blue" />
                    <span className="impact-number">+120%</span>
                  </div>
                  <span className="impact-label">Water Efficiency</span>
                </div>
                <div className="impact-stat-card">
                  <div className="stat-top">
                    <Clock size={15} className="text-blue" />
                    <span className="impact-number">-45%</span>
                  </div>
                  <span className="impact-label">Task Latency</span>
                </div>
                <div className="impact-stat-card">
                  <div className="stat-top">
                    <ThumbsUp size={15} className="text-blue" />
                    <span className="impact-number">+80%</span>
                  </div>
                  <span className="impact-label">Yield Accuracy</span>
                </div>
              </div>
              <div className="board-cta-mini">
                <span>Production Verified</span>
                <ChevronRight size={14} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .featured-showcase-section {
          position: relative;
          padding: 80px 0 110px;
          background: #ffffff;
          border-top: 1px solid rgba(226, 232, 240, 0.7);
          border-bottom: 1px solid rgba(226, 232, 240, 0.7);
          overflow: hidden;
        }

        .showcase-container {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 60px;
          align-items: center;
        }

        /* Left Column */
        .showcase-left-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .showcase-brand-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .showcase-brand-icon {
          display: grid;
          grid-template-columns: repeat(3, 4px);
          gap: 3px;
          align-items: center;
        }

        .showcase-brand-icon .dot {
          width: 5px;
          height: 5px;
          background: var(--primary-blue);
          border-radius: 50%;
        }

        .showcase-brand-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--navy-heading);
          letter-spacing: -0.02em;
        }

        .showcase-version-pill {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-blue);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 3px 12px;
          border-radius: 99px;
        }

        .showcase-heading {
          font-size: 2.9rem;
          font-weight: 800;
          color: var(--navy-heading);
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
        }

        .showcase-desc {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 36px;
          max-width: 480px;
        }

        .showcase-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px 24px;
          width: 100%;
          margin-bottom: 36px;
        }

        .showcase-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .feature-icon-box {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: #f0f7ff;
          border: 1px solid #dbeafe;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--primary-blue);
        }

        .feature-text-group {
          display: flex;
          flex-direction: column;
        }

        .feature-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 2px;
        }

        .feature-sub {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .showcase-action-row {
          margin-top: 10px;
        }

        /* Right Column: 4 Tilted Boards Fan matching reference */
        .showcase-right-col {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.2s ease-out;
          will-change: transform;
        }

        .case-study-boards-fan {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
        }

        .case-board {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 15px 30px -5px rgba(15, 23, 42, 0.08), 0 5px 15px rgba(37, 99, 235, 0.04);
          padding: 16px;
          display: flex;
          flex-direction: column;
          min-height: 380px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .case-board:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 45px -8px rgba(15, 23, 42, 0.14), 0 8px 20px rgba(37, 99, 235, 0.08);
          border-color: var(--border-blue);
        }

        .board-header {
          margin-bottom: 14px;
        }

        .board-tag {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--primary-blue);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 4px;
        }

        .board-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--navy-heading);
          line-height: 1.25;
        }

        .board-mini-metrics {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;
        }

        .board-chip {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--navy-heading);
          background: #f8fafc;
          padding: 6px 8px;
          border-radius: 6px;
          border: 1px solid #f1f5f9;
        }

        .board-preview-box {
          margin-top: auto;
          background: #f0f7ff;
          border: 1px solid #dbeafe;
          border-radius: 8px;
          padding: 10px;
        }

        .board-key-insights strong {
          display: block;
          font-size: 0.72rem;
          color: var(--primary-blue);
          margin-bottom: 4px;
        }

        .board-key-insights p {
          font-size: 0.75rem;
          line-height: 1.4;
          color: var(--text-color);
        }

        /* Board 2 Process Steps */
        .process-step-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 4px;
          text-align: center;
          margin-bottom: 16px;
        }

        .process-step-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-num {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #eff6ff;
          color: var(--primary-blue);
          font-size: 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
          border: 1px solid #bfdbfe;
        }

        .step-name {
          font-size: 0.65rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .wireframe-mock-grid {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .wireframe-box {
          height: 70px;
          background: #f8fafc;
          border: 1px dashed #cbd5e1;
          border-radius: 6px;
        }

        /* Board 3 UI preview */
        .board-dashboard-preview {
          margin-top: auto;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .board-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        /* Board 4 Results */
        .impact-stats-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 18px;
        }

        .impact-stat-card {
          background: #f8fbff;
          border: 1px solid #dbeafe;
          border-radius: 8px;
          padding: 10px;
        }

        .stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2px;
        }

        .impact-number {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--primary-blue);
        }

        .impact-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .board-cta-mini {
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 10px;
          background: #eff6ff;
          border-radius: 6px;
          color: var(--primary-blue);
          font-size: 0.75rem;
          font-weight: 700;
        }

        .text-blue {
          color: var(--primary-blue);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .showcase-container {
            grid-template-columns: 1fr;
          }
          .case-study-boards-fan {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .case-study-boards-fan {
            grid-template-columns: 1fr;
          }
          .showcase-features-grid {
            grid-template-columns: 1fr;
          }
          .showcase-heading {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
}
