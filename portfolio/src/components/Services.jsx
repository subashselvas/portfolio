import { useState } from 'react';
import {
  Code,
  Globe,
  Layout,
  Server,
  Database,
  ShieldCheck,
  ArrowUpRight
} from 'lucide-react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Software Development',
      icon: <Code size={26} />,
      desc: 'Developing dependable, performant software applications with robust algorithmic foundations using Java, Python, and C/C++.',
      tags: ['Java', 'Python', 'C++', 'Object-Oriented'],
    },
    {
      id: 2,
      title: 'Web Development',
      icon: <Globe size={26} />,
      desc: 'Creating end-to-end responsive web applications with modern architectures, seamless navigation, and clean production code.',
      tags: ['Full Stack', 'Vite', 'RESTful APIs', 'Modern Web'],
    },
    {
      id: 3,
      title: 'Frontend Development',
      icon: <Layout size={26} />,
      desc: 'Crafting pixel-perfect, accessible, and high-performance interfaces in React.js with CSS 3D transforms and smooth animations.',
      tags: ['React.js', 'CSS3 3D', 'Responsive UI', 'Accessibility'],
    },
    {
      id: 4,
      title: 'Backend Development',
      icon: <Server size={26} />,
      desc: 'Architecting scalable server-side logic, secure REST APIs, authentication services, and modular computational pipelines.',
      tags: ['API Design', 'Microservices', 'Authentication', 'Logic'],
    },
    {
      id: 5,
      title: 'Database Solutions',
      icon: <Database size={26} />,
      desc: 'Designing relational data schemas, writing optimized SQL queries, ensuring data consistency, and maintaining MySQL databases.',
      tags: ['MySQL', 'SQL Schema', 'Query Optimization', 'ACID'],
    },
    {
      id: 6,
      title: 'Cyber Security Solutions',
      icon: <ShieldCheck size={26} />,
      desc: 'Implementing secure coding practices, conducting OWASP vulnerability analysis, network audits, and cryptographic protection.',
      tags: ['OWASP Top 10', 'Secure Coding', 'Network Audit', 'Encryption'],
    },
  ];

  return (
    <section id="services" className="section-wrapper services-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Services & Capabilities</span>
          <h2 className="section-title">
            What I <span>Deliver</span>
          </h2>
          <p className="section-subtitle">
            Providing structured technical solutions across software engineering, modern web
            development, database architecture, and defensive cybersecurity.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={service.id}
                className="service-card interactive-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="service-card-top">
                  <div className="service-icon-box">{service.icon}</div>
                  <span className="service-number">0{service.id}</span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>

                <div className="service-tags-wrap">
                  {service.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="service-card-footer">
                  <span className="service-learn-more">Inquire Service</span>
                  <div className="service-arrow-circle">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          background: #ffffff;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .service-card {
          padding: 32px 28px;
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px -10px rgba(37, 99, 235, 0.12), 0 4px 12px rgba(15, 23, 42, 0.04);
          border-color: var(--border-blue);
        }

        .service-card:hover::before {
          opacity: 1;
        }

        .service-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 22px;
        }

        .service-icon-box {
          width: 54px;
          height: 54px;
          border-radius: var(--radius-md);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .service-card:hover .service-icon-box {
          transform: scale(1.08);
          background: var(--primary-blue);
          color: #ffffff;
        }

        .service-number {
          font-size: 1.15rem;
          font-weight: 800;
          color: #cbd5e1;
          letter-spacing: -0.02em;
        }

        .service-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }

        .service-card-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 22px;
          flex-grow: 1;
        }

        .service-tags-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }

        .service-tag {
          font-size: 0.72rem;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 99px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: var(--text-color);
        }

        .service-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          border-top: 1px solid #f1f5f9;
        }

        .service-learn-more {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--navy-heading);
          transition: color 0.2s ease;
        }

        .service-card:hover .service-learn-more {
          color: var(--primary-blue);
        }

        .service-arrow-circle {
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

        .service-card:hover .service-arrow-circle {
          background: var(--primary-blue);
          color: #ffffff;
          transform: rotate(45deg);
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
