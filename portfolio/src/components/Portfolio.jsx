import { useState } from 'react';
import { ExternalLink, ArrowRight, Layers, ShieldCheck, Terminal, Database } from 'lucide-react';
import greenhouseImg from '../assets/greenhouse-preview.jpg';
import cropplannerImg from '../assets/cropplanner-preview.jpg';

export default function Portfolio({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Software & Web' },
    { id: 'cyber', label: 'Cyber Security' },
    { id: 'ai', label: 'AI & Data' },
  ];

  const projects = [
    {
      id: 'greenhouse',
      categoryType: 'web',
      category: 'IoT & Web Systems',
      title: 'Smart Greenhouse Automation',
      desc: 'An automated IoT greenhouse climate control ecosystem with continuous sensor monitoring, automated watering rules, and responsive web telemetry.',
      detailedDesc: 'Engineered an end-to-end telemetry system combining microcontrollers and Python edge services with a responsive web dashboard. The platform tracks ambient temperature, humidity, soil moisture, and CO2 in real time, triggering automated ventilation and irrigation relays while providing farmers with diagnostic trends.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python'],
      image: greenhouseImg,
      demoUrl: '#',
      highlights: [
        'Real-time WebSocket & REST telemetry synchronization',
        'Automated actuator threshold triggers for pumps & fans',
        'Responsive dashboard engineered in modern HTML/CSS/JavaScript',
        'Python background workers for sensor validation and logging',
      ],
      architecture: 'IoT Telemetry + Python Daemon + Responsive Web UI',
    },
    {
      id: 'cropplanner',
      categoryType: 'ai',
      category: 'Machine Learning & SQL',
      title: 'AI Seasonal Crop Planner',
      desc: 'Predictive agricultural software leveraging historical climate datasets, soil profiles, and machine learning models to maximize seasonal crop yield.',
      detailedDesc: 'Developed an intelligent decision-support platform designed to forecast optimal planting cycles, crop suitability indices, and weather contingency risks. Integrates MySQL for relational climate storage and Python ML pipelines to deliver predictive recommendations to agrarian planners.',
      technologies: ['Python', 'Machine Learning', 'SQL'],
      image: cropplannerImg,
      demoUrl: '#',
      highlights: [
        'Predictive yield regression models trained on multi-decade climate data',
        'Relational MySQL schema for soil health metrics and regional weather profiles',
        'Automated reporting pipeline generating PDF and dashboard insights',
        'Interactive data visualizer highlighting optimum sowing windows',
      ],
      architecture: 'Python Scikit-Learn + Flask API + MySQL Database',
    },
    {
      id: 'apisecurity',
      categoryType: 'cyber',
      category: 'Cyber Security & Audit',
      title: 'API Security Testing Framework',
      desc: 'Automated vulnerability scanner and endpoint fuzzing utility evaluating REST APIs against OWASP Top 10 vulnerabilities, broken object-level authorization, and injection.',
      detailedDesc: 'Architected a CLI and web-assisted security framework to audit REST API contracts. The engine executes targeted payload fuzzing for SQL injection, cross-site scripting, authentication token tampering, and IDOR vulnerabilities, logging structured vulnerability reports to a relational database.',
      technologies: ['Python', 'API Security', 'SQL'],
      image: greenhouseImg, // Clean UI preview
      demoUrl: '#',
      highlights: [
        'Automated OWASP Top 10 API vulnerability test suites',
        'JWT tampering, replay attacks, and rate-limit stress tests',
        'Structured SQL logging of endpoint audit histories and severity scores',
        'Clean executive reporting format with remediation recommendations',
      ],
      architecture: 'Python Security Engine + OWASP Testing Suites + SQLite/MySQL',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.categoryType === activeFilter);

  return (
    <section id="portfolio" className="section-wrapper portfolio-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Featured Work</span>
          <h2 className="section-title">
            Project <span>Portfolio</span>
          </h2>
          <p className="section-subtitle">
            A curated collection of practical technology solutions spanning IoT automation,
            machine learning analytics, full-stack web applications, and cyber security engineering.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="portfolio-filter-nav">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`portfolio-filter-btn ${activeFilter === tab.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Floating 3D Cards Grid */}
        <div className="portfolio-cards-grid">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="portfolio-project-card interactive-card"
              onClick={() => onOpenProject(proj)}
            >
              {/* Card Image Wrap with Realistic Float */}
              <div className="proj-thumb-wrap">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="proj-thumb-img"
                  loading="lazy"
                />
                <div className="proj-thumb-badge">
                  <span>{proj.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="proj-card-content">
                <h3 className="proj-card-title">{proj.title}</h3>
                <p className="proj-card-desc">{proj.desc}</p>

                {/* Tech Chips */}
                <div className="proj-tech-list">
                  {proj.technologies.map((tech, idx) => (
                    <span key={idx} className="proj-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Link */}
                <div className="proj-card-action">
                  <span className="view-project-label">View Project Details</span>
                  <div className="view-arrow-btn">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio-section {
          background: #f8fbff;
        }

        .portfolio-filter-nav {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .portfolio-filter-btn {
          padding: 10px 22px;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-color);
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-xs);
          transition: all var(--transition-fast);
        }

        .portfolio-filter-btn:hover {
          color: var(--primary-blue);
          border-color: var(--primary-border);
          background: var(--primary-light);
        }

        .portfolio-filter-btn.active {
          background: var(--primary-blue);
          color: #ffffff;
          border-color: var(--primary-blue);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
        }

        .portfolio-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        .portfolio-project-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-subtle);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
          position: relative;
        }

        .portfolio-project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 22px 45px -10px rgba(37, 99, 235, 0.14), 0 4px 12px rgba(15, 23, 42, 0.04);
          border-color: var(--border-blue);
        }

        .proj-thumb-wrap {
          position: relative;
          height: 220px;
          width: 100%;
          background: #f1f5f9;
          overflow: hidden;
        }

        .proj-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .portfolio-project-card:hover .proj-thumb-img {
          transform: scale(1.05);
        }

        .proj-thumb-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(6px);
          border: 1px solid rgba(191, 219, 254, 0.8);
          padding: 5px 12px;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-blue);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        .proj-card-content {
          padding: 26px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .proj-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 10px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }

        .proj-card-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 20px;
          flex-grow: 1;
        }

        .proj-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 22px;
        }

        .proj-tech-pill {
          font-size: 0.74rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 99px;
          background: #eff6ff;
          border: 1px solid #dbeafe;
          color: var(--primary-blue);
        }

        .proj-card-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }

        .view-project-label {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--navy-heading);
          transition: color 0.2s;
        }

        .portfolio-project-card:hover .view-project-label {
          color: var(--primary-blue);
        }

        .view-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy-muted);
          transition: all 0.25s ease;
        }

        .portfolio-project-card:hover .view-arrow-btn {
          background: var(--primary-blue);
          color: #ffffff;
          transform: translateX(4px);
        }

        @media (max-width: 1080px) {
          .portfolio-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .portfolio-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
