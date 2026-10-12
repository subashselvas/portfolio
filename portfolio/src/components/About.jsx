import { GraduationCap, Award, BookOpen, Shield, Code, Sparkles, CheckCircle, Briefcase, FileText } from 'lucide-react';
import subashFull from '../assets/subash.jpg';

export default function About({ onOpenResume }) {
  const highlights = [
    'Proficient in MERN Stack (React, Node.js, Express, MongoDB) & RESTful cloud APIs',
    'Applied Artificial Intelligence & Machine Learning integration using Python, Flask & Scikit-Learn',
    'Hands-on full-stack development experience from Python Full Stack Internship at Pantech',
    'Practical user interface & product design expertise from UI/UX Designer Internship at Gateway Software Solutions',
    'Solid computer science fundamentals in Object-Oriented Programming (Java, Python, SQL) & Database Design',
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Professional Overview</span>
          <h2 className="section-title">
            About <span>SUBASH S</span>
          </h2>
          <p className="section-subtitle">
            Computer Science and Engineering undergraduate passionate about full-stack web engineering,
            artificial intelligence, user experience design, and scalable software solutions.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Portrait & Academic Card */}
          <div className="about-card-left">
            <div className="about-image-wrapper">
              <img
                src={subashFull}
                alt="SUBASH S - Computer Science Engineer"
                className="about-image"
                loading="lazy"
              />
              <div className="about-image-badge">
                <span className="badge-icon">🎓</span>
                <div>
                  <strong>B.E. Computer Science & Engg</strong>
                  <span>Karpagam Academy (2023 - 2027)</span>
                </div>
              </div>
            </div>

            {/* Quick Education Snapshot */}
            <div className="academic-snapshot-card">
              <div className="snapshot-header">
                <GraduationCap className="text-blue" size={20} />
                <h3>Education Snapshot</h3>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">Institution:</span>
                <span className="snapshot-val">Karpagam Academy of Higher Education, Coimbatore</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">Degree:</span>
                <span className="snapshot-val">Bachelor of Engineering (B.E.) in Computer Science and Engineering</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">Academic Duration:</span>
                <span className="snapshot-val">2023 – 2027</span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">Cumulative GPA:</span>
                <span className="snapshot-val gpa-highlight">8.1* / 10.0</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Objective, Highlights, and Metrics */}
          <div className="about-content-right">
            {/* Career Objective Box */}
            <div className="objective-callout-card">
              <div className="objective-label-row">
                <Sparkles size={18} className="text-blue" />
                <span className="objective-tag">Career Objective</span>
              </div>
              <p className="objective-text">
                "Seeking a career opportunity where my acquired skills and experience can be put to the best use,
                allowing me to contribute to the growth of the organization while also encouraging me to grow
                professionally and reach my full potential."
              </p>
            </div>

            <p className="about-bio-text">
              I am a dedicated Computer Science and Engineering student at <strong>Karpagam Academy of Higher Education</strong> (2023–2027),
              maintaining an academic record of <strong>8.1 CGPA</strong>. My technical journey combines robust software engineering
              fundamentals with practical industry internships in <strong>Python Full Stack Development</strong> at Pantech and <strong>UI/UX Design</strong> at Gateway Software Solutions.
            </p>

            <p className="about-bio-text">
              I specialize in developing production-grade web systems such as an <strong>AI SaaS Platform (MERN Stack)</strong> with text generation and image editing capabilities, as well as an <strong>AI-Powered Student Performance Prediction System</strong> with predictive machine learning models and role-based academic analytics.
            </p>

            {/* Key Competency Bullet Points */}
            <div className="about-highlights-list">
              {highlights.map((item, idx) => (
                <div key={idx} className="highlight-row">
                  <CheckCircle size={18} className="highlight-icon text-blue" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Metric Highlights Grid */}
            <div className="about-stats-grid">
              <div className="stat-card">
                <div className="stat-num">8.1*</div>
                <div className="stat-title">Current CGPA</div>
                <span className="stat-desc">Karpagam Academy</span>
              </div>
              <div className="stat-card">
                <div className="stat-num">2</div>
                <div className="stat-title">Internships</div>
                <span className="stat-desc">Pantech & Gateway</span>
              </div>
              <div className="stat-card">
                <div className="stat-num">4</div>
                <div className="stat-title">Certifications</div>
                <span className="stat-desc">Infosys, Cisco, GCP, HR</span>
              </div>
              <div className="stat-card">
                <div className="stat-num">100%</div>
                <div className="stat-title">Commitment</div>
                <span className="stat-desc">Continuous Growth</span>
              </div>
            </div>

            {/* Resume Call-to-action */}
            <div className="about-cta-row">
              <button
                type="button"
                className="btn-primary"
                onClick={onOpenResume}
              >
                <span>View Full Resume & Credentials</span>
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
          background: rgba(255, 255, 255, 0.95);
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
          font-size: 1.15rem;
        }

        /* Right Column */
        .about-content-right {
          display: flex;
          flex-direction: column;
        }

        .objective-callout-card {
          background: #eff6ff;
          border-left: 4px solid var(--primary-blue);
          border-radius: var(--radius-md);
          padding: 20px 24px;
          margin-bottom: 24px;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.06);
        }

        .objective-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .objective-tag {
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--primary-blue);
        }

        .objective-text {
          font-size: 0.98rem;
          color: var(--navy-heading);
          font-style: italic;
          line-height: 1.65;
          font-weight: 500;
        }

        .about-bio-text {
          font-size: 1.02rem;
          color: var(--text-color);
          line-height: 1.75;
          margin-bottom: 18px;
        }

        .about-bio-text strong {
          color: var(--navy-heading);
          font-weight: 700;
        }

        .about-highlights-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin: 16px 0 32px;
          padding: 22px;
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
