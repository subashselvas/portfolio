import { X, Printer, Download, GraduationCap, Code, Briefcase, Award } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-modal-backdrop" onClick={onClose}>
      <div
        className="resume-modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Header Bar */}
        <div className="resume-modal-topbar">
          <div className="topbar-actions">
            <button
              type="button"
              className="btn-primary resume-top-btn"
              onClick={handlePrint}
            >
              <Printer size={16} />
              <span>Print / Save as PDF</span>
            </button>
          </div>
          <button
            type="button"
            className="resume-close-icon"
            onClick={onClose}
            aria-label="Close CV Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Printable Resume Document Sheet */}
        <div className="resume-sheet" id="printable-resume">
          {/* Header */}
          <div className="resume-doc-header">
            <div>
              <h1 id="resume-title" className="resume-name">Subash S</h1>
              <h2 className="resume-role">Software Developer | Cyber Security Enthusiast</h2>
              <p className="resume-location">Coimbatore, Tamil Nadu, India</p>
            </div>
            <div className="resume-status-badge">
              <span>B.E. 4th Year</span>
              <strong>CGPA: 8.1</strong>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* Education */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <GraduationCap size={18} className="text-blue" />
              <span>Education</span>
            </h3>
            <div className="resume-entry">
              <div className="entry-head">
                <strong>Bachelor of Engineering (B.E.) in Computer Science and Cyber Security</strong>
                <span className="entry-date">2023 - Present (4th Year)</span>
              </div>
              <div className="entry-sub">Karpagam Academy of Higher Education, Coimbatore</div>
              <div className="entry-grade">Cumulative Grade Point Average (CGPA): <strong>8.1 / 10.0</strong></div>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <Code size={18} className="text-blue" />
              <span>Technical Skills</span>
            </h3>
            <div className="resume-skills-grid">
              <div>
                <strong>Programming Languages:</strong> Java, Python, C, C++
              </div>
              <div>
                <strong>Web Development:</strong> HTML5, CSS3, JavaScript (ES6+), React.js
              </div>
              <div>
                <strong>Databases:</strong> SQL, MySQL
              </div>
              <div>
                <strong>Cyber Security:</strong> Cyber Security Fundamentals, Network Security, Secure Coding, OWASP
              </div>
              <div>
                <strong>Developer Tools:</strong> Git, GitHub, VS Code, Linux CLI
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <Briefcase size={18} className="text-blue" />
              <span>Academic & Technical Projects</span>
            </h3>

            <div className="resume-entry">
              <div className="entry-head">
                <strong>Smart Greenhouse Automation</strong>
                <span className="entry-date">IoT & Full Stack</span>
              </div>
              <div className="entry-tech">Tech Stack: HTML, CSS, JavaScript, Python</div>
              <p className="entry-desc">
                Engineered an IoT micro-climate monitoring and automated irrigation platform tracking
                soil moisture, humidity, and temperature via real-time WebSocket telemetry.
              </p>
            </div>

            <div className="resume-entry">
              <div className="entry-head">
                <strong>AI Seasonal Crop Planner</strong>
                <span className="entry-date">ML & SQL</span>
              </div>
              <div className="entry-tech">Tech Stack: Python, Machine Learning, SQL</div>
              <p className="entry-desc">
                Developed a predictive agrarian planning application that forecasts optimum crop selection
                and planting cycles based on regional soil datasets and historical climate patterns.
              </p>
            </div>

            <div className="resume-entry">
              <div className="entry-head">
                <strong>API Security Testing Framework</strong>
                <span className="entry-date">Cyber Security</span>
              </div>
              <div className="entry-tech">Tech Stack: Python, API Security, SQL, OWASP</div>
              <p className="entry-desc">
                Built an automated vulnerability scanner targeting REST API endpoints for authentication
                bypass, broken object level authorization (BOLA), and SQL injection weaknesses.
              </p>
            </div>
          </section>

          {/* Core Strengths */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <Award size={18} className="text-blue" />
              <span>Professional Strengths</span>
            </h3>
            <p className="entry-desc">
              Strong grasp of Object-Oriented Programming, clean code architecture, defensive software
              engineering, collaborative version control with Git, and continuous technical learning.
            </p>
          </section>
        </div>
      </div>

      <style>{`
        .resume-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(8px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .resume-modal-content {
          background: #ffffff;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 860px;
          max-height: 92vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(191, 219, 254, 0.8);
        }

        .resume-modal-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          background: #f8fbff;
          border-bottom: 1px solid #e2e8f0;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .resume-top-btn {
          padding: 8px 18px;
          font-size: 0.85rem;
        }

        .resume-close-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy-muted);
          background: #ffffff;
          border: 1px solid #e2e8f0;
          transition: all 0.2s;
        }

        .resume-close-icon:hover {
          background: #eff6ff;
          color: var(--primary-blue);
        }

        .resume-sheet {
          padding: 40px;
          background: #ffffff;
          color: #1e293b;
          font-family: inherit;
        }

        .resume-doc-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .resume-name {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 4px;
        }

        .resume-role {
          font-size: 1.1rem;
          color: var(--primary-blue);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .resume-location {
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .resume-status-badge {
          text-align: right;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          padding: 8px 16px;
          border-radius: 8px;
        }

        .resume-status-badge span {
          display: block;
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .resume-status-badge strong {
          font-size: 1.15rem;
          color: var(--primary-blue);
        }

        .resume-divider {
          border: none;
          height: 2px;
          background: #f1f5f9;
          margin: 20px 0 28px;
        }

        .resume-section {
          margin-bottom: 28px;
        }

        .resume-sec-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 14px;
          padding-bottom: 6px;
          border-bottom: 1px solid #f1f5f9;
        }

        .resume-entry {
          margin-bottom: 16px;
        }

        .entry-head {
          display: flex;
          justify-content: space-between;
          font-size: 0.98rem;
          color: var(--navy-heading);
          margin-bottom: 2px;
        }

        .entry-date {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .entry-sub {
          font-size: 0.9rem;
          color: var(--primary-blue);
          font-weight: 600;
          margin-bottom: 4px;
        }

        .entry-grade {
          font-size: 0.88rem;
          color: var(--text-color);
        }

        .entry-tech {
          font-size: 0.82rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 4px;
        }

        .entry-desc {
          font-size: 0.9rem;
          color: var(--text-color);
          line-height: 1.6;
        }

        .resume-skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .text-blue {
          color: var(--primary-blue);
        }

        @media print {
          body * {
            visibility: hidden;
          }
          #printable-resume, #printable-resume * {
            visibility: visible;
          }
          #printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 20px;
          }
          .resume-modal-topbar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
