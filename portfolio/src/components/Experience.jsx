import { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Palette, ArrowUpRight, Award, Sparkles } from 'lucide-react';

export default function Experience() {
  const [activeTab, setActiveTab] = useState('all');

  const internships = [
    {
      id: 'pantech',
      category: 'fullstack',
      role: 'Python Full Stack Development Internship',
      company: 'Pantech',
      period: 'Apr 2024 – Jun 2024',
      badge: 'Software Engineering',
      icon: <Terminal size={24} className="text-blue" />,
      color: '#2563eb',
      summary: 'Engineered web applications leveraging Python backend architectures, dynamic database connectivity, and full-stack integration.',
      bullets: [
        'Developed web applications using Python and gained experience in building dynamic, user-focused application features.',
        'Worked with backend logic, database connectivity, and frontend integration while applying Python programming concepts to practical development tasks.',
        'Engineered structured REST APIs and streamlined data flow between relational database layers and frontend user interfaces.',
        'Conducted rigorous debugging, code refactoring, and performance optimizations for reliable runtime execution.'
      ],
      skills: ['Python', 'Backend Logic', 'Database Connectivity', 'RESTful APIs', 'Frontend Integration', 'SQL']
    },
    {
      id: 'gateway',
      category: 'uiux',
      role: 'UI/UX Designer Internship',
      company: 'Gateway Software Solutions',
      period: 'May 2025 – Jun 2025',
      badge: 'Product Design',
      icon: <Palette size={24} className="text-blue" />,
      color: '#0284c7',
      summary: 'Crafted simple, clean, and user-friendly digital interfaces through visual hierarchy, responsive layouts, and design system workflows.',
      bullets: [
        'Designed simple and user-friendly website interfaces by working on page layouts, colours, fonts, and visual design elements to improve user experience.',
        'Applied UI/UX design principles to create clean, attractive, and easy-to-use interfaces while gaining practical knowledge of real-world design practices.',
        'Engineered responsive wireframes, interactive prototypes, and modular design components for modern web workflows.',
        'Collaborated on usability testing, design audits, and design-to-development handoffs ensuring pixel-perfect fidelity.'
      ],
      skills: ['UI/UX Design', 'Visual Design', 'Wireframing', 'Color Theory', 'Typography', 'Prototyping', 'User Research']
    }
  ];

  const filteredInternships = activeTab === 'all'
    ? internships
    : internships.filter(item => item.category === activeTab);

  return (
    <section id="experience" className="section-wrapper experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Career Milestones</span>
          <h2 className="section-title">
            Internship <span>Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on professional engineering and design experience bridging modern software development
            with intuitive user-centric product interfaces.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="exp-filter-tabs">
          <button
            type="button"
            className={`exp-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            All Experiences ({internships.length})
          </button>
          <button
            type="button"
            className={`exp-tab-btn ${activeTab === 'fullstack' ? 'active' : ''}`}
            onClick={() => setActiveTab('fullstack')}
          >
            Python Full Stack
          </button>
          <button
            type="button"
            className={`exp-tab-btn ${activeTab === 'uiux' ? 'active' : ''}`}
            onClick={() => setActiveTab('uiux')}
          >
            UI/UX Design
          </button>
        </div>

        {/* Timeline Grid */}
        <div className="experience-timeline">
          {filteredInternships.map((exp, index) => (
            <div key={exp.id} className="timeline-card-wrapper">
              {/* Connecting line milestone node */}
              <div className="timeline-marker">
                <div className="timeline-dot">
                  <span className="timeline-index">0{index + 1}</span>
                </div>
                <div className="timeline-line" />
              </div>

              {/* Card Container */}
              <div className="exp-card interactive-card">
                <div className="exp-card-header">
                  <div className="exp-header-left">
                    <div className="exp-icon-pill">
                      {exp.icon}
                    </div>
                    <div>
                      <div className="exp-badge-row">
                        <span className="exp-pill-badge">{exp.badge}</span>
                        <span className="exp-company-tag">Verified Internship</span>
                      </div>
                      <h3 className="exp-role-title">{exp.role}</h3>
                      <h4 className="exp-company-name">{exp.company}</h4>
                    </div>
                  </div>

                  <div className="exp-header-right">
                    <div className="exp-period-pill">
                      <Calendar size={14} className="text-blue" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                <p className="exp-summary-text">{exp.summary}</p>

                {/* Key Achievements Bullet Points */}
                <div className="exp-responsibilities">
                  <h5 className="responsibilities-heading">Key Contributions & Learning Outcomes:</h5>
                  <ul className="exp-bullet-list">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="exp-bullet-item">
                        <CheckCircle2 size={16} className="bullet-check text-blue" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applied Technologies / Skills Chips */}
                <div className="exp-skills-row">
                  <span className="exp-skills-label">Technologies & Skills:</span>
                  <div className="exp-skills-list">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="exp-skill-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          background: #ffffff;
        }

        .exp-filter-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
          flex-wrap: wrap;
        }

        .exp-tab-btn {
          padding: 10px 22px;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-color);
          background: #f8fbff;
          border: 1px solid var(--border-blue);
          box-shadow: var(--shadow-xs);
          transition: all var(--transition-fast);
        }

        .exp-tab-btn:hover {
          color: var(--primary-blue);
          border-color: var(--primary-border);
          background: #eff6ff;
        }

        .exp-tab-btn.active {
          background: var(--primary-blue);
          color: #ffffff;
          border-color: var(--primary-blue);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
        }

        .experience-timeline {
          display: flex;
          flex-direction: column;
          gap: 36px;
          max-width: 980px;
          margin: 0 auto;
          position: relative;
        }

        .timeline-card-wrapper {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 24px;
          align-items: stretch;
        }

        .timeline-marker {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .timeline-dot {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #eff6ff;
          border: 2px solid var(--primary-blue);
          color: var(--primary-blue);
          font-weight: 800;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 0 5px rgba(37, 99, 235, 0.1);
          z-index: 2;
        }

        .timeline-line {
          width: 2px;
          background: linear-gradient(180deg, var(--primary-border) 0%, rgba(191, 219, 254, 0.2) 100%);
          flex-grow: 1;
          margin-top: 12px;
        }

        .exp-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-blue);
          padding: 32px;
          box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.05);
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .exp-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -8px rgba(37, 99, 235, 0.12);
          border-color: var(--primary-blue);
        }

        .exp-card-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 18px;
          padding-bottom: 18px;
          border-bottom: 1px solid #f1f5f9;
        }

        .exp-header-left {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .exp-icon-pill {
          width: 52px;
          height: 52px;
          border-radius: var(--radius-md);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .exp-badge-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .exp-pill-badge {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--primary-blue);
          background: #eff6ff;
          border: 1px solid #dbeafe;
          padding: 2px 8px;
          border-radius: 99px;
        }

        .exp-company-tag {
          font-size: 0.72rem;
          color: #059669;
          font-weight: 600;
          background: #ecfdf5;
          padding: 2px 8px;
          border-radius: 99px;
        }

        .exp-role-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 2px;
        }

        .exp-company-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--primary-blue);
        }

        .exp-period-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 6px 14px;
          border-radius: 99px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--navy-heading);
          white-space: nowrap;
        }

        .exp-summary-text {
          font-size: 0.98rem;
          color: var(--text-color);
          line-height: 1.65;
          margin-bottom: 20px;
        }

        .exp-responsibilities {
          background: #f8fbff;
          border: 1px solid #eff6ff;
          border-radius: var(--radius-md);
          padding: 18px 20px;
          margin-bottom: 22px;
        }

        .responsibilities-heading {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .exp-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .exp-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-color);
          line-height: 1.55;
        }

        .bullet-check {
          flex-shrink: 0;
          margin-top: 3px;
        }

        .exp-skills-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .exp-skills-label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--navy-heading);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .exp-skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .exp-skill-chip {
          background: #eff6ff;
          color: var(--primary-blue);
          border: 1px solid #bfdbfe;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 99px;
          transition: background 0.2s;
        }

        .exp-skill-chip:hover {
          background: #dbeafe;
        }

        .text-blue {
          color: var(--primary-blue);
        }

        @media (max-width: 768px) {
          .timeline-card-wrapper {
            grid-template-columns: 1fr;
          }
          .timeline-marker {
            display: none;
          }
          .exp-card-header {
            flex-direction: column;
          }
          .exp-card {
            padding: 22px;
          }
        }
      `}</style>
    </section>
  );
}
