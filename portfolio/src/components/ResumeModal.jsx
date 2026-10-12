import { X, Printer, Download, GraduationCap, Code, Briefcase, Award, CheckCircle2, UserCheck, Layers, FileDown } from 'lucide-react';
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadFile = () => {
    const resumeText = `SUBASH S
GitHub: https://github.com/Subashgithub06 | LinkedIn: https://www.linkedin.com/in/Subashselva06
Email: subashselva2006@gmail.com | Phone: +91 9345887855
Location: Coimbatore, Tamil Nadu, India

================================================================================
CAREER OBJECTIVE
================================================================================
Seeking a career opportunity where my acquired skills and experience can be put
to the best use, allowing me to contribute to the growth of the organization
while also encouraging me to grow professionally and reach my full potential.

================================================================================
EDUCATION
================================================================================
Karpagam Academy of Higher Education                                 2023 - 2027
Bachelor of Engineering in Computer Science and Engineering          CGPA - 8.1*

================================================================================
INTERNSHIPS
================================================================================
Python Full Stack Development Internship - Pantech            Apr 2024 - Jun 2024
• Developed web applications using Python and gained experience in building dynamic,
  user-focused application features.
• Worked with backend logic, database connectivity, and frontend integration while
  applying Python programming concepts to practical development tasks.

UI/UX Designer Internship - Gateway Software Solutions        May 2025 - Jun 2025
• Designed simple and user-friendly website interfaces by working on page layouts,
  colours, fonts, and visual design elements to improve user experience.
• Applied UI/UX design principles to create clean, attractive, and easy-to-use
  interfaces while gaining practical knowledge of real-world design practices.

================================================================================
PROJECTS
================================================================================
AI SaaS Platform (MERN Stack Project)
• Developed a scalable AI-powered SaaS application using the MERN stack,
  integrating features like text generation and image editing with seamless
  frontend-backend communication via RESTful APIs.
• Implemented secure authentication and role-based access control, enabling
  differentiated features for free and premium users while ensuring data protection
  and efficient request handling.
• Optimized performance and user experience with a responsive UI, and deployed
  the application on cloud infrastructure with reliable database integration for
  scalability and availability.
• Tech Stack: MongoDB, Express.js, React, Node.js, RESTful APIs, JWT Auth, Cloud

AI-Powered Student Performance Prediction System (LLM / AI Project)
• Developed an AI-powered student performance management system using Python and
  Flask, integrating intelligent features for academic analysis, grade prediction,
  and attendance monitoring.
• Implemented AI-driven grade prediction, dropout risk detection, and personalized
  study recommendations to identify at-risk students and support data-driven
  academic decision-making.
• Designed role-based dashboards for students, faculty, and administrators,
  enabling efficient student data management, attendance tracking, and
  visualization of AI-generated academic insights.
• Tech Stack: Python, Flask, Machine Learning, LLM, MySQL, Data Visualization

================================================================================
TECHNICAL SKILLS
================================================================================
Languages: Python, Java, SQL
Database: MySQL, MongoDB
Web Development: HTML, CSS, JavaScript, MERN Stack
Tools: Git, GitHub, VS Code
Soft Skills: Time management, Adaptability, Communication

================================================================================
CERTIFICATIONS
================================================================================
• Python Web Development: Infosys
• CyberSecurity: Cisco Networking Academy
• CSS HTML Certification: HackerRank
• Google Cloud Launchpad: Google Cloud
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Subash_S_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
            <button
              type="button"
              className="btn-secondary resume-top-btn"
              onClick={handleDownloadFile}
            >
              <FileDown size={16} />
              <span>Download Text Resume</span>
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
            <div className="header-info-main">
              <h1 id="resume-title" className="resume-name">SUBASH S</h1>
              <div className="resume-contact-bar">
                <a href="https://github.com/Subashgithub06" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon size={14} />
                  <span>Subashgithub06</span>
                </a>
                <span className="contact-sep">|</span>
                <a href="https://www.linkedin.com/in/Subashselva06" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon size={14} />
                  <span>Subashselva06</span>
                </a>
                <span className="contact-sep">|</span>
                <a href="mailto:subashselva2006@gmail.com">
                  <MailIcon size={14} />
                  <span>subashselva2006@gmail.com</span>
                </a>
                <span className="contact-sep">|</span>
                <a href="tel:+919345887855">
                  <PhoneIcon size={14} />
                  <span>+91 9345887855</span>
                </a>
              </div>
            </div>
            <div className="resume-status-badge">
              <span>B.E. 2023 - 2027</span>
              <strong>CGPA - 8.1*</strong>
            </div>
          </div>

          <hr className="resume-divider" />

          {/* CAREER OBJECTIVE */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <UserCheck size={18} className="text-blue" />
              <span>CAREER OBJECTIVE</span>
            </h3>
            <p className="entry-desc italic-objective">
              Seeking a career opportunity where my acquired skills and experience can be put to the best use,
              allowing me to contribute to the growth of the organization while also encouraging me to grow
              professionally and reach my full potential.
            </p>
          </section>

          {/* EDUCATION */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <GraduationCap size={18} className="text-blue" />
              <span>EDUCATION</span>
            </h3>
            <div className="resume-entry">
              <div className="entry-head">
                <strong>Karpagam Academy of Higher Education</strong>
                <span className="entry-date">2023 - 2027</span>
              </div>
              <div className="entry-sub">Bachelor of Engineering in Computer Science and Engineering</div>
              <div className="entry-grade">Cumulative Grade Point Average: <strong>CGPA - 8.1*</strong></div>
            </div>
          </section>

          {/* INTERNSHIP */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <Briefcase size={18} className="text-blue" />
              <span>INTERNSHIP</span>
            </h3>

            {/* Pantech Internship */}
            <div className="resume-entry">
              <div className="entry-head">
                <strong>Python Full Stack Development Internship − Pantech</strong>
                <span className="entry-date">Apr 2024 – Jun 2024</span>
              </div>
              <ul className="resume-bullet-list">
                <li>
                  Developed web applications using Python and gained experience in building dynamic, user-focused application features.
                </li>
                <li>
                  Worked with backend logic, database connectivity, and frontend integration while applying Python programming concepts to practical development tasks.
                </li>
              </ul>
            </div>

            {/* Gateway Software Solutions Internship */}
            <div className="resume-entry">
              <div className="entry-head">
                <strong>UI/UX Designer Internship − Gateway Software Solutions</strong>
                <span className="entry-date">May 2025 – Jun 2025</span>
              </div>
              <ul className="resume-bullet-list">
                <li>
                  Designed simple and user-friendly website interfaces by working on page layouts, colours, fonts, and visual design elements to improve user experience.
                </li>
                <li>
                  Applied UI/UX design principles to create clean, attractive, and easy-to-use interfaces while gaining practical knowledge of real-world design practices.
                </li>
              </ul>
            </div>
          </section>

          {/* PROJECTS */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <Layers size={18} className="text-blue" />
              <span>PROJECTS</span>
            </h3>

            {/* AI SaaS Platform */}
            <div className="resume-entry">
              <div className="entry-head">
                <strong>AI SaaS Platform (MERN Stack Project)</strong>
                <span className="entry-date">MERN & Cloud</span>
              </div>
              <ul className="resume-bullet-list">
                <li>
                  Developed a scalable AI-powered SaaS application using the MERN stack, integrating features like text generation and image editing with seamless frontend–backend communication via RESTful APIs.
                </li>
                <li>
                  Implemented secure authentication and role-based access control, enabling differentiated features for free and premium users while ensuring data protection and efficient request handling.
                </li>
                <li>
                  Optimized performance and user experience with a responsive UI, and deployed the application on cloud infrastructure with reliable database integration for scalability and availability.
                </li>
              </ul>
            </div>

            {/* AI-Powered Student Performance Prediction System */}
            <div className="resume-entry">
              <div className="entry-head">
                <strong>AI-Powered Student Performance Prediction System (LLM / AI Project)</strong>
                <span className="entry-date">Python, Flask & ML</span>
              </div>
              <ul className="resume-bullet-list">
                <li>
                  Developed an AI-powered student performance management system using Python and Flask, integrating intelligent features for academic analysis, grade prediction, and attendance monitoring.
                </li>
                <li>
                  Implemented AI-driven grade prediction, dropout risk detection, and personalized study recommendations to identify at-risk students and support data-driven academic decision-making.
                </li>
                <li>
                  Designed role-based dashboards for students, faculty, and administrators, enabling efficient student data management, attendance tracking, and visualization of AI-generated academic insights.
                </li>
              </ul>
            </div>
          </section>

          {/* TECHNICAL SKILLS */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <Code size={18} className="text-blue" />
              <span>TECHNICAL SKILLS</span>
            </h3>
            <div className="resume-skills-block">
              <div className="skill-line">
                <strong>Languages:</strong> Python, Java, SQL.
              </div>
              <div className="skill-line">
                <strong>Database:</strong> MySQL, MongoDB.
              </div>
              <div className="skill-line">
                <strong>Web Development:</strong> HTML, CSS, JavaScript, MERN Stack.
              </div>
              <div className="skill-line">
                <strong>Tools:</strong> Git, GitHub, VS Code.
              </div>
              <div className="skill-line">
                <strong>Soft Skills:</strong> Time management, Adaptability, Communication.
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section className="resume-section">
            <h3 className="resume-sec-title">
              <Award size={18} className="text-blue" />
              <span>CERTIFICATIONS</span>
            </h3>
            <ul className="resume-cert-list">
              <li>
                <strong>Python Web Development:</strong> Infosys
              </li>
              <li>
                <strong>CyberSecurity:</strong> Cisco Networking Academy
              </li>
              <li>
                <strong>CSS HTML Certification:</strong> HackerRank
              </li>
              <li>
                <strong>Google Cloud Launchpad:</strong> Google Cloud
              </li>
            </ul>
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
          max-width: 900px;
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

        .topbar-actions {
          display: flex;
          gap: 12px;
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

        .header-info-main {
          display: flex;
          flex-direction: column;
        }

        .resume-name {
          font-size: 2.3rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .resume-contact-bar {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 0.85rem;
          color: var(--text-color);
        }

        .resume-contact-bar a {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--primary-blue);
          font-weight: 600;
        }

        .contact-sep {
          color: #cbd5e1;
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
          background: #e2e8f0;
          margin: 18px 0 24px;
        }

        .resume-section {
          margin-bottom: 24px;
        }

        .resume-sec-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--navy-heading);
          margin-bottom: 12px;
          padding-bottom: 4px;
          border-bottom: 1px solid #f1f5f9;
          letter-spacing: 0.02em;
        }

        .italic-objective {
          font-style: italic;
          color: var(--text-color);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .resume-entry {
          margin-bottom: 16px;
        }

        .entry-head {
          display: flex;
          justify-content: space-between;
          font-size: 0.98rem;
          color: var(--navy-heading);
          margin-bottom: 3px;
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
          margin-bottom: 3px;
        }

        .entry-grade {
          font-size: 0.88rem;
          color: var(--text-color);
        }

        .resume-bullet-list {
          list-style-type: disc;
          padding-left: 20px;
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .resume-bullet-list li {
          font-size: 0.9rem;
          color: var(--text-color);
          line-height: 1.55;
        }

        .resume-skills-block {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.92rem;
          color: var(--text-color);
        }

        .skill-line strong {
          color: var(--navy-heading);
          font-weight: 700;
          margin-right: 6px;
        }

        .resume-cert-list {
          list-style: none;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .resume-cert-list li {
          font-size: 0.9rem;
          color: var(--text-color);
        }

        .resume-cert-list li strong {
          color: var(--navy-heading);
          font-weight: 700;
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
