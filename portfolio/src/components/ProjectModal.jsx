import { X, ExternalLink, CheckCircle2, Shield, Layers, Calendar, User } from 'lucide-react';
import { GitHubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="project-modal-backdrop" onClick={onClose}>
      <div
        className="project-modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close project modal"
        >
          <X size={20} />
        </button>

        {/* Modal Top Banner / Image */}
        <div className="modal-banner-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="modal-banner-img"
          />
          <div className="modal-banner-overlay">
            <span className="modal-category-tag">{project.category}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="modal-content-body">
          <div className="modal-header-row">
            <div>
              <h2 id="modal-project-title" className="modal-title">{project.title}</h2>
              <p className="modal-subtitle">{project.subtitle || project.desc}</p>
            </div>
            <div className="modal-actions-top">
              <a
                href={project.demoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary modal-action-btn"
                onClick={(e) => {
                  if (project.demoUrl === '#') {
                    e.preventDefault();
                    alert(`Demo preview for ${project.title} is running locally on test environment.`);
                  }
                }}
              >
                <span>Live Demo</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          <div className="modal-tech-stack-row">
            <span className="tech-stack-label">Technologies:</span>
            <div className="modal-tech-chips">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-grid-details">
            <div className="modal-details-left">
              <h4 className="details-section-title">Project Overview</h4>
              <p className="details-p">{project.detailedDesc || project.desc}</p>

              <h4 className="details-section-title">Key Engineering Highlights</h4>
              <ul className="details-bullet-list">
                {(project.highlights || [
                  'Designed modular and maintainable component structure',
                  'Ensured clean input validation and defensive error handling',
                  'Engineered responsive layouts tested across modern devices',
                  'Optimized execution performance and database retrieval times',
                ]).map((hl, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="text-blue flex-shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-details-right">
              <div className="modal-meta-box">
                <h4 className="meta-box-title">System Metrics</h4>
                <div className="meta-metric-item">
                  <span className="metric-lbl">Role</span>
                  <span className="metric-val">Lead Developer</span>
                </div>
                <div className="meta-metric-item">
                  <span className="metric-lbl">Architecture</span>
                  <span className="metric-val">{project.architecture || 'Full-Stack MVC'}</span>
                </div>
                <div className="meta-metric-item">
                  <span className="metric-lbl">Security Rating</span>
                  <span className="metric-val text-blue font-bold">OWASP Compliant</span>
                </div>
                <div className="meta-metric-item">
                  <span className="metric-lbl">Performance</span>
                  <span className="metric-val text-blue font-bold">98/100 Lighthouse</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .project-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: modalFadeIn 0.25s ease-out;
        }

        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .project-modal-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          width: 100%;
          max-width: 820px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: 0 25px 60px -10px rgba(15, 23, 42, 0.25);
          border: 1px solid rgba(191, 219, 254, 0.6);
          animation: modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalSlideUp {
          from { transform: translateY(30px) scale(0.96); opacity: 0; }
          to { transform: translateY(0) scale(1); opacity: 1; }
        }

        .modal-close-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy-heading);
          z-index: 10;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          transition: background 0.2s, transform 0.2s;
        }

        .modal-close-btn:hover {
          background: #ffffff;
          transform: scale(1.08);
          color: var(--primary-blue);
        }

        .modal-banner-wrap {
          position: relative;
          height: 320px;
          width: 100%;
          background: #eff6ff;
          overflow: hidden;
        }

        .modal-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-banner-overlay {
          position: absolute;
          bottom: 16px;
          left: 20px;
        }

        .modal-category-tag {
          background: var(--primary-blue);
          color: #ffffff;
          padding: 6px 16px;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .modal-content-body {
          padding: 32px;
        }

        .modal-header-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 20px;
        }

        .modal-title {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .modal-subtitle {
          font-size: 0.98rem;
          color: var(--text-muted);
        }

        .modal-action-btn {
          padding: 10px 22px;
          font-size: 0.88rem;
          white-space: nowrap;
        }

        .modal-tech-stack-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #f8fbff;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-blue);
          margin-bottom: 28px;
        }

        .tech-stack-label {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--navy-heading);
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }

        .modal-tech-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-chip {
          background: #ffffff;
          color: var(--primary-blue);
          border: 1px solid #bfdbfe;
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .modal-grid-details {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 32px;
        }

        .details-section-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 12px;
          margin-top: 18px;
        }

        .details-section-title:first-child {
          margin-top: 0;
        }

        .details-p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-color);
        }

        .details-bullet-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .details-bullet-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: var(--text-color);
        }

        .modal-meta-box {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: var(--radius-md);
          padding: 20px;
        }

        .meta-box-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 14px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e2e8f0;
        }

        .meta-metric-item {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          font-size: 0.85rem;
          border-bottom: 1px dashed #e2e8f0;
        }

        .meta-metric-item:last-child {
          border-bottom: none;
        }

        .metric-lbl {
          color: var(--text-muted);
          font-weight: 500;
        }

        .metric-val {
          color: var(--navy-heading);
          font-weight: 600;
        }

        .text-blue {
          color: var(--primary-blue);
        }

        .flex-shrink-0 {
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .modal-grid-details {
            grid-template-columns: 1fr;
          }
          .modal-header-row {
            flex-direction: column;
          }
          .modal-banner-wrap {
            height: 220px;
          }
          .modal-content-body {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
}
