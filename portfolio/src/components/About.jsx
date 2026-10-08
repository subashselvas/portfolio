import { GraduationCap, Award, BookOpen, Shield, Code, Sparkles, CheckCircle } from 'lucide-react';
import subashFull from '../assets/subash.jpg';

export default function About({ onOpenResume }) {
  const highlights = [
    'Strong foundation in Object-Oriented Programming (Java, Python, C/C++)',
    'Applied understanding of Cyber Security, Network Security, and OWASP best practices',
    'Hands-on full-stack development experience with modern JavaScript & React',
    'Proactive problem-solver committed to clean architecture and continuous learning',
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Passionate About <span>Code, Security & Solutions</span>
          </h2>
          <p className="section-subtitle">
            A focused Computer Science and Cyber Security student dedicated to crafting
            high-integrity software and solving complex technical challenges.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Portrait & Academic Card */}
          <div className="about-card-left">
            <div className="about-image-wrapper">
              <img
                src={subashFull}
                alt="Subash S - Software Developer"
                className="about-image"
                loading="lazy"
              />
              <div className="about-image-badge">
                <span className="badge-icon">🎓</span>
                <div>
                  <strong>B.E. CS & Cyber Security</strong>
                  <span>4th Year Student</span>
                </div>
              </div>
            </div>

            {/* Quick Education Snapshot */}
            <div className="academic-snapshot-card">
              <div className="snapshot-header">
                <GraduationCap className="text-blue" size={20} />
                <h3>Academic Snapshot</h3>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">Institution:</span>
                <span className="snapshot-val">Karpagam Academy of Higher Education, Coimbatore</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">Degree:</span>
                <span className="snapshot-val">B.E. Computer Science and Cyber Security</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">Current Status:</span>
                <span className="snapshot-val">Pursuing 4th Year</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">Cumulative GPA:</span>
                <span className="snapshot-val gpa-highlight">8.1 / 10.0</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Highlights, and Metrics */}
          <div className="about-content-right">
            <h3 className="about-heading-sub">
              Engineering with precision, security, and curiosity.
            </h3>

            <p className="about-bio-text">
              I am currently pursuing my 4th year in <strong>Computer Science and Cyber Security</strong> at{' '}
              <strong>Karpagam Academy of Higher Education, Coimbatore</strong>, maintaining a consistent{' '}
              <strong>CGPA of 8.1</strong>. My academic journey has instilled a rigorous discipline for analytical
              problem solving, system internals, and modern software engineering.
            </p>

            <p className="about-bio-text">
              My core interests center on building practical technology solutions that are not only performant and
              user-friendly, but also secure by design. From creating automated IoT environments to analyzing API
              vulnerabilities and designing responsive React interfaces, I enjoy bridging the gap between innovative
              ideas and production-ready code.
            </p>

            {/* Key Competency Bullet Points */}
            <div className="about-highlights-list">
              {highlights.map((item, idx) => (
                <div key={idx} className="highlight-row">
                  <CheckCircle size={18} className="highlight-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Metric Highlights Grid */}
            <div className="about-stats-grid">
              <div className="stat-card">
                <div className="stat-num">8.1</div>
                <div className="stat-title">Current CGPA</div>
                <span className="stat-desc">Karpagam Academy</span>
              </div>
              <div className="stat-card">
                <div className="stat-num">4th</div>
                <div className="stat-title">Year Pursuing</div>
                <span className="stat-desc">B.E. CS & Cyber Security</span>
              </div>
              <div className="stat-card">
                <div className="stat-num">12+</div>
                <div className="stat-title">Projects Built</div>
                <span className="stat-desc">Web, IoT & Security</span>
              </div>
              <div className="stat-card">
                <div className="stat-num">100%</div>
                <div className="stat-title">Dedication</div>
                <span className="stat-desc">Continuous Learning</span>
              </div>
            </div>

            {/* Resume Call-to-action */}
            <div className="about-cta-row">
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenResume}
              >
                <span>View Full Curriculum Vitae</span>
                <Award size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          background: #ffffff;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 56px;
          align-items: start;
        }

        /* Left Column */
        .about-card-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-image-wrapper {
          position: relative;
          border-radius: var(--radius-xl);
          overflow: hidden;
          background: #f1f5f9;
          border: 1px solid var(--border-blue);
          box-shadow: var(--shadow-lg);
          max-height: 480px;
        }

        .about-image {
          width: 100%;
          height: 460px;
          object-fit: cover;
          object-position: center 15%;
          transition: transform 0.4s ease;
        }

        .about-image-wrapper:hover .about-image {
          transform: scale(1.03);
        }

        .about-image-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(10px);
          padding: 12px 18px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 14px;
          border: 1px solid rgba(191, 219, 254, 0.8);
          box-shadow: 0 10px 25px rgba(15, 23, 42, 0.1);
        }

        .badge-icon {
          font-size: 1.6rem;
        }

        .about-image-badge strong {
          display: block;
          font-size: 0.9rem;
          color: var(--navy-heading);
        }

        .about-image-badge span {
          font-size: 0.78rem;
          color: var(--primary-blue);
          font-weight: 600;
        }

        /* Academic Snapshot Card */
        .academic-snapshot-card {
          background: var(--bg-main);
          border: 1px solid var(--border-blue);
          border-radius: var(--radius-lg);
          padding: 24px;
          box-shadow: var(--shadow-sm);
        }

        .snapshot-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid rgba(219, 234, 254, 0.8);
        }

        .snapshot-header h3 {
          font-size: 1.05rem;
          font-weight: 700;
        }

        .snapshot-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 12px;
        }

        .snapshot-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 2px;
        }

        .snapshot-val {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--navy-heading);
        }

        .gpa-highlight {
          color: var(--primary-blue);
          font-weight: 800;
          font-size: 1.1rem;
        }

        /* Right Column */
        .about-content-right {
          display: flex;
          flex-direction: column;
        }

        .about-heading-sub {
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 20px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .about-bio-text {
          font-size: 1.02rem;
          color: var(--text-color);
          line-height: 1.75;
          margin-bottom: 18px;
        }

        .about-bio-text strong {
          color: var(--navy-heading);
          font-weight: 600;
        }

        .about-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 20px 0 32px;
          padding: 20px;
          background: #f8fbff;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-blue);
        }

        .highlight-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--text-color);
          font-weight: 500;
        }

        .highlight-icon {
          color: var(--primary-blue);
          flex-shrink: 0;
          margin-top: 3px;
        }

        /* Stats Grid */
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }

        .stat-card {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-md);
          padding: 18px 14px;
          text-align: center;
          box-shadow: var(--shadow-xs);
          transition: transform var(--transition-fast), border-color var(--transition-fast);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          border-color: var(--primary-blue);
          box-shadow: var(--shadow-sm);
        }

        .stat-num {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--primary-blue);
          line-height: 1.1;
          margin-bottom: 4px;
        }

        .stat-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 2px;
        }

        .stat-desc {
          font-size: 0.72rem;
          color: var(--text-muted);
          display: block;
        }

        .about-cta-row {
          display: flex;
        }

        .text-blue {
          color: var(--primary-blue);
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .about-card-left {
            max-width: 500px;
            margin: 0 auto;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .about-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
