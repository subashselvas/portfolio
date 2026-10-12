import { useState } from 'react';
import { ExternalLink, ArrowRight, Layers, ShieldCheck, Terminal, Database, Sparkles, Brain, Cpu, Globe } from 'lucide-react';
import { GitHubIcon } from './Icons';
import webBanner from '../assets/web_project_banner_1791437265836.jpg';
import mlBanner from '../assets/ml_project_banner_1791437279313.jpg';
import greenhouseImg from '../assets/greenhouse-preview.jpg';

export default function Portfolio({ onOpenProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'mern', label: 'MERN Stack & Web' },
    { id: 'ai', label: 'AI & Machine Learning' },
    { id: 'iot', label: 'IoT & Systems' },
  ];

  const projects = [
    {
      id: 'ai-saas',
      categoryType: 'mern',
      category: 'MERN Stack & AI',
      badge: 'Featured MERN SaaS',
      title: 'AI SaaS Platform',
      subtitle: 'Scalable MERN AI Application with Text Generation & Image Editing',
      desc: 'A scalable AI-powered SaaS application built using the MERN stack, integrating real-time text generation and image editing with seamless RESTful API communication and role-based access control.',
      detailedDesc: 'Developed a scalable AI-powered SaaS application using the MERN stack, integrating features like text generation and image editing with seamless frontend-backend communication via RESTful APIs. Implemented secure authentication and role-based access control, enabling differentiated features for free and premium users while ensuring data protection and efficient request handling. Optimized performance and user experience with a responsive UI, and deployed the application on cloud infrastructure with reliable database integration for scalability and availability.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'RESTful APIs', 'JWT Auth', 'Cloud Deployment'],
      image: webBanner,
      githubUrl: 'https://github.com/Subashgithub06/ai-saas-platform',
      demoUrl: 'https://ai-saas-platform.demo',
      demoType: 'ai-studio', // Interactive simulation inside modal
      highlights: [
        'Developed scalable AI text generation & intelligent image editing pipelines',
        'Implemented secure JWT authentication and differentiated free vs. premium role-based tiers',
        'Seamless frontend-backend RESTful API communication with robust data protection',
        'Responsive, modern UI optimized for low latency and high availability on cloud infrastructure'
      ],
      architecture: 'MERN Stack (MongoDB, Express, React, Node) + AI APIs + Cloud Infrastructure',
      metrics: {
        'Users': 'Free & Premium Roles',
        'Auth': 'JWT & Role-Based RBAC',
        'Database': 'MongoDB Atlas Cloud',
        'APIs': 'RESTful Endpoints'
      }
    },
    {
      id: 'student-prediction',
      categoryType: 'ai',
      category: 'LLM & Machine Learning',
      badge: 'Academic LLM / AI',
      title: 'AI-Powered Student Performance Prediction System',
      subtitle: 'Predictive Academic Analysis, Grade Forecasting & Dropout Risk Detection',
      desc: 'An AI-powered student performance management system built using Python and Flask, featuring AI-driven grade prediction, dropout risk detection, and personalized study recommendations.',
      detailedDesc: 'Developed an AI-powered student performance management system using Python and Flask, integrating intelligent features for academic analysis, grade prediction, and attendance monitoring. Implemented AI-driven grade prediction, dropout risk detection, and personalized study recommendations to identify at-risk students and support data-driven academic decision-making. Designed role-based dashboards for students, faculty, and administrators, enabling efficient student data management, attendance tracking, and visualization of AI-generated academic insights.',
      technologies: ['Python', 'Flask', 'Machine Learning', 'LLM', 'MySQL', 'Scikit-Learn', 'Data Analytics'],
      image: mlBanner,
      githubUrl: 'https://github.com/Subashgithub06/student-performance-prediction',
      demoUrl: 'https://student-performance-ai.demo',
      demoType: 'student-predictor', // Interactive simulation inside modal
      highlights: [
        'AI-driven grade forecasting & early identification of students at academic risk',
        'Personalized AI study recommendations and remediation strategies for at-risk students',
        'Role-based dashboards tailored for students, faculty, and administrative leadership',
        'Attendance tracking, analytics visualization, and automated data-driven decision making'
      ],
      architecture: 'Python Flask Backend + Scikit-Learn ML Models + MySQL Database + Interactive Dashboards',
      metrics: {
        'Accuracy': '94.2% Prediction Accuracy',
        'Models': 'Classification & Regression',
        'Dashboards': 'Student, Faculty & Admin',
        'Database': 'MySQL Relational Store'
      }
    },
    {
      id: 'greenhouse',
      categoryType: 'iot',
      category: 'IoT & Full Stack',
      badge: 'Smart Automation',
      title: 'Smart Greenhouse Automation',
      subtitle: 'IoT Micro-climate Telemetry, Automated Irrigation & Web Dashboard',
      desc: 'An automated IoT greenhouse climate control ecosystem with continuous sensor monitoring, automated watering rules, and responsive web telemetry powered by Python and modern web technologies.',
      detailedDesc: 'Engineered an end-to-end telemetry system combining microcontrollers and Python edge services with a responsive web dashboard. The platform tracks ambient temperature, humidity, soil moisture, and CO2 in real time, triggering automated ventilation and irrigation relays while providing farmers with diagnostic trends and historical insights.',
      technologies: ['Python', 'HTML5', 'CSS3', 'JavaScript', 'IoT Sensors', 'REST APIs'],
      image: greenhouseImg,
      githubUrl: 'https://github.com/Subashgithub06/smart-greenhouse-automation',
      demoUrl: 'https://greenhouse-automation.demo',
      demoType: 'iot-gauges', // Interactive simulation inside modal
      highlights: [
        'Real-time WebSocket & REST telemetry synchronization from edge microcontrollers',
        'Automated actuator threshold triggers for pumps, fans, and misting systems',
        'Responsive interactive dashboard engineered in modern HTML, CSS, and JavaScript',
        'Python background workers for sensor validation, outlier filtering, and database logging'
      ],
      architecture: 'IoT Telemetry + Python Daemon + Responsive Web UI + Relational Logging',
      metrics: {
        'Latency': '< 100ms Telemetry',
        'Control': 'Automatic & Manual Relays',
        'Sensors': 'Temp, Humidity, Soil, CO2',
        'Uptime': '99.9% Autonomous Ops'
      }
    }
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
            Interactive <span>Projects</span>
          </h2>
          <p className="section-subtitle">
            Explore functional software engineering projects featuring working interactive demos,
            complete source code links, full technology stacks, and real-time simulations.
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
              {/* Card Image Wrap */}
              <div className="proj-thumb-wrap">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="proj-thumb-img"
                  loading="lazy"
                />
                <div className="proj-thumb-badge">
                  <Sparkles size={13} className="text-blue" />
                  <span>{proj.badge}</span>
                </div>
                <div className="proj-category-pill">
                  <span>{proj.category}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="proj-card-content">
                <h3 className="proj-card-title">{proj.title}</h3>
                <p className="proj-card-desc">{proj.desc}</p>

                {/* Tech Chips */}
                <div className="proj-tech-list">
                  {proj.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="proj-tech-pill">
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="proj-tech-pill-more">
                      +{proj.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Link */}
                <div className="proj-card-action">
                  <div className="action-buttons-group">
                    <span className="view-project-label">Open Interactive Demo</span>
                    <span className="action-tag-demo">Live Demo & Code</span>
                  </div>
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
          background: #ffffff;
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
          background: #f8fbff;
          border: 1px solid var(--border-blue);
          box-shadow: var(--shadow-xs);
          transition: all var(--transition-fast);
        }

        .portfolio-filter-btn:hover {
          color: var(--primary-blue);
          border-color: var(--primary-border);
          background: #eff6ff;
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
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-blue);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
          position: relative;
          box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.05);
        }

        .portfolio-project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 50px -10px rgba(37, 99, 235, 0.16), 0 4px 12px rgba(15, 23, 42, 0.04);
          border-color: var(--primary-blue);
        }

        .proj-thumb-wrap {
          position: relative;
          height: 230px;
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
          transform: scale(1.06);
        }

        .proj-thumb-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(191, 219, 254, 0.9);
          padding: 5px 12px;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary-blue);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .proj-category-pill {
          position: absolute;
          bottom: 14px;
          right: 14px;
          background: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(6px);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 600;
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
          line-height: 1.35;
          letter-spacing: -0.02em;
        }

        .proj-card-desc {
          font-size: 0.88rem;
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

        .proj-tech-pill-more {
          font-size: 0.74rem;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 99px;
          background: #f1f5f9;
          color: var(--navy-muted);
        }

        .proj-card-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }

        .action-buttons-group {
          display: flex;
          flex-direction: column;
        }

        .view-project-label {
          font-size: 0.88rem;
          font-weight: 800;
          color: var(--navy-heading);
          transition: color 0.2s;
        }

        .portfolio-project-card:hover .view-project-label {
          color: var(--primary-blue);
        }

        .action-tag-demo {
          font-size: 0.72rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .view-arrow-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
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

        @media (max-width: 680px) {
          .portfolio-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
