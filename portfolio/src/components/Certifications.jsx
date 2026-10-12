import { useState } from 'react';
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Cloud, Code, Terminal, Sparkles, FileText, X } from 'lucide-react';

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 'infosys',
      title: 'Python Web Development',
      issuer: 'Infosys',
      category: 'Web & Programming',
      icon: <Terminal size={26} className="cert-brand-icon" />,
      color: '#0284c7',
      badgeColor: '#e0f2fe',
      skills: ['Python Web Frameworks', 'REST APIs', 'Server Architecture', 'Database Connectivity'],
      description: 'Comprehensive industry program certifying proficiency in building dynamic web applications, backend services, and database-connected web systems using Python.',
      credentialId: 'INFOSYS-PYWEB-2024',
      status: 'Verified Credential'
    },
    {
      id: 'cisco',
      title: 'CyberSecurity',
      issuer: 'Cisco Networking Academy',
      category: 'Defensive Security',
      icon: <ShieldCheck size={26} className="cert-brand-icon" />,
      color: '#2563eb',
      badgeColor: '#dbeafe',
      skills: ['Network Security', 'Threat Analysis', 'CIA Triad', 'Defensive Protocols', 'Security Hygiene'],
      description: 'Foundational and intermediate cybersecurity certification covering network defense mechanisms, threat intelligence, encryption standards, and risk mitigation methodologies.',
      credentialId: 'CISCO-SEC-NET-2024',
      status: 'Verified Credential'
    },
    {
      id: 'hackerrank',
      title: 'CSS HTML Certification',
      issuer: 'HackerRank',
      category: 'Frontend Engineering',
      icon: <Code size={26} className="cert-brand-icon" />,
      color: '#10b981',
      badgeColor: '#d1fae5',
      skills: ['HTML5 Semantic Structure', 'CSS3 Modern Layouts', 'Flexbox & Grid', 'Responsive Design'],
      description: 'Standardized skill evaluation validating proficiency in modern CSS3 layout paradigms, semantic HTML5 structure, responsive web design patterns, and cross-browser compatibility.',
      credentialId: 'HR-CSS-HTML-VERIFIED',
      status: 'Skill Certified'
    },
    {
      id: 'gcp',
      title: 'Google Cloud Launchpad',
      issuer: 'Google Cloud',
      category: 'Cloud Infrastructure',
      icon: <Cloud size={26} className="cert-brand-icon" />,
      color: '#4285f4',
      badgeColor: '#eff6ff',
      skills: ['Cloud Computing', 'Compute Engine', 'Cloud Storage', 'Scalability & IAM'],
      description: 'Google Cloud ecosystem certification covering cloud fundamentals, virtual machine deployment, managed storage solutions, resource scalability, and IAM security controls.',
      credentialId: 'GCP-LAUNCHPAD-ACTIVE',
      status: 'Official Program'
    }
  ];

  return (
    <section id="certifications" className="section-wrapper cert-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Industry Recognition</span>
          <h2 className="section-title">
            Certifications & <span>Credentials</span>
          </h2>
          <p className="section-subtitle">
            Formal technical credentials awarded by leading enterprise technology and cloud organizations,
            validating practical domain competencies.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="cert-card interactive-card"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="cert-card-header">
                <div className="cert-icon-box">
                  {cert.icon}
                </div>
                <div className="cert-issuer-badge">
                  <CheckCircle2 size={13} className="text-green" />
                  <span>{cert.status}</span>
                </div>
              </div>

              <div className="cert-body">
                <span className="cert-category-label">{cert.category}</span>
                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer-name">{cert.issuer}</h4>
                <p className="cert-desc">{cert.description}</p>
              </div>

              <div className="cert-skills-wrap">
                {cert.skills.slice(0, 3).map((skill, idx) => (
                  <span key={idx} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 3 && (
                  <span className="cert-skill-tag-more">+{cert.skills.length - 3}</span>
                )}
              </div>

              <div className="cert-card-footer">
                <span className="cert-id-tag">ID: {cert.credentialId}</span>
                <button
                  type="button"
                  className="cert-verify-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert);
                  }}
                >
                  <span>View Details</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certification Details Modal */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="cert-modal-close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>

            <div className="cert-modal-header">
              <div className="cert-modal-icon-wrap">
                {selectedCert.icon}
              </div>
              <div>
                <span className="cert-modal-issuer">{selectedCert.issuer}</span>
                <h3 className="cert-modal-title">{selectedCert.title}</h3>
                <span className="cert-modal-badge">{selectedCert.status}</span>
              </div>
            </div>

            <div className="cert-modal-body">
              <h4 className="modal-sec-head">Credential Summary</h4>
              <p className="modal-sec-text">{selectedCert.description}</p>

              <h4 className="modal-sec-head">Verified Competencies</h4>
              <div className="modal-skills-grid">
                {selectedCert.skills.map((s, idx) => (
                  <div key={idx} className="modal-skill-item">
                    <CheckCircle2 size={16} className="text-blue" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>

              <div className="modal-meta-row">
                <div>
                  <span className="modal-meta-label">Issuing Authority</span>
                  <strong className="modal-meta-val">{selectedCert.issuer}</strong>
                </div>
                <div>
                  <span className="modal-meta-label">Credential ID</span>
                  <strong className="modal-meta-val">{selectedCert.credentialId}</strong>
                </div>
                <div>
                  <span className="modal-meta-label">Recipient</span>
                  <strong className="modal-meta-val">SUBASH S</strong>
                </div>
              </div>
            </div>

            <div className="cert-modal-actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setSelectedCert(null)}
              >
                Close Certificate
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .cert-section {
          background: #f8fbff;
        }

        .cert-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .cert-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-blue);
          padding: 26px;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .cert-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 18px 36px -8px rgba(37, 99, 235, 0.15);
          border-color: var(--primary-blue);
        }

        .cert-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .cert-icon-box {
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
        }

        .cert-issuer-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 4px 10px;
          border-radius: 99px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #166534;
        }

        .text-green {
          color: #16a34a;
        }

        .cert-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .cert-category-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--primary-blue);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .cert-title {
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 3px;
          line-height: 1.3;
        }

        .cert-issuer-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-color);
          margin-bottom: 12px;
        }

        .cert-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .cert-skills-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 18px;
        }

        .cert-skill-tag {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--navy-heading);
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .cert-skill-tag-more {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--primary-blue);
          background: #eff6ff;
          padding: 3px 8px;
          border-radius: 6px;
        }

        .cert-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 14px;
          border-top: 1px solid #f1f5f9;
        }

        .cert-id-tag {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--text-muted);
        }

        .cert-verify-btn {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-blue);
          transition: color 0.2s;
        }

        .cert-card:hover .cert-verify-btn {
          color: var(--primary-hover);
        }

        /* Modal Styles */
        .cert-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          backdrop-filter: blur(6px);
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .cert-modal-dialog {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--border-blue);
          width: 100%;
          max-width: 600px;
          padding: 32px;
          box-shadow: 0 25px 60px rgba(15, 23, 42, 0.25);
          position: relative;
        }

        .cert-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy-heading);
          transition: background 0.2s;
        }

        .cert-modal-close:hover {
          background: #e2e8f0;
        }

        .cert-modal-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding-bottom: 20px;
          border-bottom: 1px solid #f1f5f9;
        }

        .cert-modal-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: var(--radius-md);
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-blue);
          flex-shrink: 0;
        }

        .cert-modal-issuer {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary-blue);
          display: block;
        }

        .cert-modal-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 4px;
        }

        .cert-modal-badge {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          color: #166534;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          padding: 2px 8px;
          border-radius: 99px;
        }

        .modal-sec-head {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-top: 16px;
          margin-bottom: 8px;
        }

        .modal-sec-head:first-child {
          margin-top: 0;
        }

        .modal-sec-text {
          font-size: 0.92rem;
          color: var(--text-color);
          line-height: 1.6;
        }

        .modal-skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 20px;
        }

        .modal-skill-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.88rem;
          color: var(--navy-heading);
          font-weight: 600;
        }

        .modal-meta-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          background: #f8fafc;
          padding: 16px;
          border-radius: var(--radius-md);
          border: 1px solid #e2e8f0;
          margin-top: 20px;
        }

        .modal-meta-label {
          display: block;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: var(--text-muted);
          font-weight: 600;
        }

        .modal-meta-val {
          font-size: 0.88rem;
          color: var(--navy-heading);
          font-weight: 700;
        }

        .cert-modal-actions {
          margin-top: 24px;
          display: flex;
          justify-content: flex-end;
        }

        @media (max-width: 1100px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
          .modal-meta-row {
            grid-template-columns: 1fr;
          }
          .modal-skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
