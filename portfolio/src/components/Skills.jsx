import { useState } from 'react';
import {
  Code2,
  Globe,
  Database,
  ShieldAlert,
  Wrench,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'programming', label: 'Programming' },
    { id: 'web', label: 'Web Development' },
    { id: 'database', label: 'Database' },
    { id: 'cyber', label: 'Cyber Security' },
    { id: 'tools', label: 'Tools & Technologies' },
  ];

  const skillGroups = [
    {
      categoryId: 'programming',
      title: 'Core Programming',
      icon: <Terminal size={22} className="group-icon-blue" />,
      description: 'Algorithm design, data structures, and object-oriented architecture.',
      skills: [
        { name: 'Java', level: 85, focus: 'OOP, Collections, Multi-threading' },
        { name: 'Python', level: 90, focus: 'Scripting, Automation, ML Pipelines' },
        { name: 'C', level: 80, focus: 'Pointers, Memory Mgmt, Low-Level Systems' },
        { name: 'C++', level: 82, focus: 'STL, Algorithms, Problem Solving' },
      ],
    },
    {
      categoryId: 'web',
      title: 'Web & Frontend Development',
      icon: <Globe size={22} className="group-icon-blue" />,
      description: 'Modern component-driven web interfaces, responsiveness, and state management.',
      skills: [
        { name: 'HTML5', level: 95, focus: 'Semantic markup, SEO, Accessibility' },
        { name: 'CSS3', level: 92, focus: '3D Transforms, Flexbox, Grid, Animations' },
        { name: 'JavaScript (ES6+)', level: 88, focus: 'Async/Await, DOM, Event-Driven' },
        { name: 'React.js', level: 85, focus: 'Hooks, Component Lifecycle, Vite' },
      ],
    },
    {
      categoryId: 'database',
      title: 'Database Architecture',
      icon: <Database size={22} className="group-icon-blue" />,
      description: 'Relational data modeling, query optimization, and structured storage.',
      skills: [
        { name: 'SQL', level: 85, focus: 'Complex Joins, Aggregations, Indexing' },
        { name: 'MySQL', level: 84, focus: 'Schema Design, Triggers, Normalization' },
      ],
    },
    {
      categoryId: 'cyber',
      title: 'Cyber Security Fundamentals',
      icon: <ShieldAlert size={22} className="group-icon-blue" />,
      description: 'Defensive engineering, threat modeling, and secure code implementation.',
      skills: [
        { name: 'Cyber Security Fundamentals', level: 86, focus: 'CIA Triad, Threat Vectors' },
        { name: 'Network Security', level: 82, focus: 'Packet Analysis, Protocols, Firewalls' },
        { name: 'Secure Coding', level: 85, focus: 'OWASP Top 10, Input Sanitation, Cryptography' },
      ],
    },
    {
      categoryId: 'tools',
      title: 'Developer Tools & Ecosystem',
      icon: <Wrench size={22} className="group-icon-blue" />,
      description: 'Version control, developer workflows, and debugging environments.',
      skills: [
        { name: 'Git', level: 88, focus: 'Branching, Rebasing, Conflict Resolution' },
        { name: 'GitHub', level: 90, focus: 'CI/CD workflows, Collaboration, PRs' },
        { name: 'VS Code & Linux CLI', level: 86, focus: 'Shell scripting, Debugging tools' },
      ],
    },
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.categoryId === activeCategory);

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">
            Skills & <span>Technologies</span>
          </h2>
          <p className="section-subtitle">
            A balanced skill set across core programming, web applications, database systems,
            and cyber security engineering principles.
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

        {/* Skill Groups Grid */}
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

        @media (max-width: 900px) {
          .skills-groups-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
