import { useState } from 'react';
import {
  Code2,
  Globe,
  Database,
  Wrench,
  CheckCircle2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Clock,
  Shuffle,
  MessageSquare
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Competencies' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'web', label: 'Web & MERN Stack' },
    { id: 'database', label: 'Databases' },
    { id: 'tools', label: 'Developer Tools' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  const skillGroups = [
    {
      categoryId: 'languages',
      title: 'Programming Languages',
      icon: <Terminal size={22} className="group-icon-blue" />,
      description: 'Core logic, object-oriented software engineering, and analytical problem solving.',
      skills: [
        { name: 'Python', level: 92, focus: 'Full-Stack Apps, Flask, ML & Automation' },
        { name: 'Java', level: 86, focus: 'Object-Oriented Programming, Data Structures' },
        { name: 'SQL', level: 88, focus: 'Structured Queries, Schema Design, Data Analytics' },
      ],
    },
    {
      categoryId: 'web',
      title: 'Web Development & MERN Stack',
      icon: <Globe size={22} className="group-icon-blue" />,
      description: 'End-to-end web architectures, reactive client frontends, and RESTful microservices.',
      skills: [
        { name: 'MERN Stack (React, Node, Express, MongoDB)', level: 90, focus: 'Full-Stack AI SaaS, RESTful APIs, Auth' },
        { name: 'JavaScript (ES6+)', level: 88, focus: 'Async/Await, DOM, Event-Driven Patterns' },
        { name: 'HTML5', level: 95, focus: 'Semantic Structure, SEO & Web Accessibility' },
        { name: 'CSS3', level: 92, focus: 'Responsive Layouts, 3D Transforms, Modern UI' },
      ],
    },
    {
      categoryId: 'database',
      title: 'Database Management Systems',
      icon: <Database size={22} className="group-icon-blue" />,
      description: 'Relational and NoSQL document storage, indexing, and cloud database optimization.',
      skills: [
        { name: 'MySQL', level: 88, focus: 'Relational Schemas, Constraints, Optimization' },
        { name: 'MongoDB', level: 86, focus: 'NoSQL Document Store, Aggregations, Mongoose' },
      ],
    },
    {
      categoryId: 'tools',
      title: 'Developer Tools & Workflows',
      icon: <Wrench size={22} className="group-icon-blue" />,
      description: 'Source control versioning, continuous integration, and modern development environments.',
      skills: [
        { name: 'Git', level: 90, focus: 'Version Control, Branching & Merge Workflows' },
        { name: 'GitHub', level: 92, focus: 'Repositories, Collaborative CI/CD & Deployments' },
        { name: 'VS Code', level: 94, focus: 'Modern Extensions, Debugging & Linting' },
      ],
    },
  ];

  const softSkills = [
    {
      title: 'Time Management',
      icon: <Clock size={24} className="text-blue" />,
      desc: 'Proven capability to prioritize multiple academic and project deliverables, ensuring punctual execution across deadlines.',
      metrics: 'Delivered multiple full-stack projects ahead of schedule'
    },
    {
      title: 'Adaptability',
      icon: <Shuffle size={24} className="text-blue" />,
      desc: 'Quickly mastering new software architectures, evolving libraries, and cross-functional design-to-engineering handoffs.',
      metrics: 'Seamless transition between Python backends & MERN architectures'
    },
    {
      title: 'Communication',
      icon: <MessageSquare size={24} className="text-blue" />,
      desc: 'Articulating complex technical concepts, collaborating with cross-disciplinary teams, and presenting user-centric UI designs.',
      metrics: 'Effective team coordination across internships & academic projects'
    }
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.categoryId === activeCategory);

  const showSoftSkills = activeCategory === 'all' || activeCategory === 'soft';
  const showTechnical = activeCategory !== 'soft';

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Competencies & Strengths</span>
          <h2 className="section-title">
            Skills & <span>Technologies</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive profile spanning programming languages, modern MERN web stacks,
            database engines, developer workflows, and professional soft skills.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-nav">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technical Skill Groups Grid */}
        {showTechnical && (
          <div className="skills-groups-grid">
            {filteredGroups.map((group, gIdx) => (
              <div key={gIdx} className="skill-card-group interactive-card">
                <div className="group-card-header">
                  <div className="group-icon-wrapper">{group.icon}</div>
                  <div>
                    <h3 className="group-card-title">{group.title}</h3>
                    <p className="group-card-desc">{group.description}</p>
                  </div>
                </div>

                <div className="skills-items-list">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-bar-item">
                      <div className="skill-meta-row">
                        <div className="skill-name-badge">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-focus-tag">{skill.focus}</span>
                        </div>
                        <span className="skill-pct">{skill.level}%</span>
                      </div>

                      <div className="skill-track">
                        <div
                          className="skill-fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills Section */}
        {showSoftSkills && (
          <div className="soft-skills-container">
            <div className="soft-skills-header">
              <Sparkles size={20} className="text-blue" />
              <h3 className="soft-skills-title">Professional Soft Skills</h3>
            </div>
            <div className="soft-skills-grid">
              {softSkills.map((item, idx) => (
                <div key={idx} className="soft-skill-card interactive-card">
                  <div className="soft-card-top">
                    <div className="soft-icon-wrap">{item.icon}</div>
                    <h4 className="soft-card-title">{item.title}</h4>
                  </div>
                  <p className="soft-card-desc">{item.desc}</p>
                  <div className="soft-card-metric">
                    <CheckCircle2 size={15} className="text-green flex-shrink-0" />
                    <span>{item.metrics}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .skills-section {
          background: #f8fbff;
        }

        .skills-filter-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 50px;
        }

        .filter-btn {
          padding: 9px 20px;
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-color);
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          box-shadow: var(--shadow-xs);
          transition: all var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--primary-blue);
          border-color: var(--primary-border);
          background: var(--primary-light);
        }

        .filter-btn.active {
          background: var(--primary-blue);
          color: #ffffff;
          border-color: var(--primary-blue);
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
        }

        .skills-groups-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .skill-card-group {
          background: #ffffff;
          padding: 28px;
          display: flex;
          flex-direction: column;
        }

        .group-card-header {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
        }

        .group-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: var(--primary-blue);
        }

        .group-card-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 4px;
        }

        .group-card-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .skills-items-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .skill-bar-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .skill-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .skill-name-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .skill-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--navy-heading);
        }

        .skill-focus-tag {
          font-size: 0.72rem;
          color: var(--text-muted);
          background: #f1f5f9;
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .skill-pct {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--primary-blue);
        }

        .skill-track {
          width: 100%;
          height: 7px;
          background: #f1f5f9;
          border-radius: 99px;
          overflow: hidden;
        }

        .skill-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          border-radius: 99px;
          transition: width 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Soft Skills Section */
        .soft-skills-container {
          margin-top: 48px;
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-blue);
          padding: 32px;
          box-shadow: 0 10px 30px -5px rgba(15, 23, 42, 0.04);
        }

        .soft-skills-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 24px;
          padding-bottom: 14px;
          border-bottom: 1px solid #f1f5f9;
        }

        .soft-skills-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--navy-heading);
        }

        .soft-skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .soft-skill-card {
          background: #f8fbff;
          border: 1px solid var(--border-blue);
          border-radius: var(--radius-lg);
          padding: 22px;
          display: flex;
          flex-direction: column;
        }

        .soft-card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .soft-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
        }

        .soft-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy-heading);
        }

        .soft-card-desc {
          font-size: 0.88rem;
          color: var(--text-color);
          line-height: 1.6;
          margin-bottom: 16px;
          flex-grow: 1;
        }

        .soft-card-metric {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.78rem;
          font-weight: 600;
          color: #059669;
          background: #ecfdf5;
          padding: 6px 12px;
          border-radius: 99px;
        }

        .text-green {
          color: #10b981;
        }

        .text-blue {
          color: var(--primary-blue);
        }

        @media (max-width: 900px) {
          .skills-groups-grid {
            grid-template-columns: 1fr;
          }
          .soft-skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
