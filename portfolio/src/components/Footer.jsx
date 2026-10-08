import { ArrowUp } from 'lucide-react';
import { LinkedInIcon, GitHubIcon, TwitterIcon, InstagramIcon, MailIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand-block">
            <span className="footer-logo">
              Port<span className="logo-accent">folio</span>
            </span>
            <p className="footer-brand-desc">
              Personal portfolio of <strong>SUBASH S</strong>, Software Developer & Cyber Security
              Student at Karpagam Academy of Higher Education, Coimbatore.
            </p>
          </div>

          <div className="footer-links-block">
            <h4 className="footer-links-title">Quick Navigation</h4>
            <div className="footer-nav-grid">
              <a href="#home" className="footer-link">Home</a>
              <a href="#about" className="footer-link">About Me</a>
              <a href="#skills" className="footer-link">Skills</a>
              <a href="#portfolio" className="footer-link">Portfolio</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>

          <div className="footer-social-block">
            <h4 className="footer-links-title">Connect</h4>
            <div className="footer-social-icons">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn"
                aria-label="GitHub"
              >
                <GitHubIcon size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon-btn"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="mailto:contact@subash.dev"
                className="footer-icon-btn"
                aria-label="Email"
              >
                <MailIcon size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} SUBASH S. Built with React & Vite. All rights reserved.
          </p>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          background: #f8fbff;
          border-top: 1px solid rgba(226, 232, 240, 0.9);
          padding: 60px 0 30px;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .footer-top-row {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 48px;
          padding-bottom: 40px;
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
        }

        .footer-logo {
          font-size: 1.7rem;
          font-weight: 800;
          color: var(--navy-heading);
          display: inline-block;
          margin-bottom: 14px;
        }

        .logo-accent {
          color: var(--primary-blue);
        }

        .footer-brand-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
          max-width: 360px;
        }

        .footer-links-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--navy-heading);
          margin-bottom: 18px;
        }

        .footer-nav-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .footer-link {
          font-size: 0.88rem;
          color: var(--text-color);
          font-weight: 500;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: var(--primary-blue);
        }

        .footer-social-icons {
          display: flex;
          gap: 10px;
        }

        .footer-icon-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--border-blue);
          color: var(--primary-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
          transition: all 0.2s;
        }

        .footer-icon-btn:hover {
          background: var(--primary-blue);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .footer-bottom-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.88rem;
          color: var(--text-muted);
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copy {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .footer-back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--navy-heading);
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          transition: all 0.2s;
        }

        .footer-back-to-top:hover {
          color: var(--primary-blue);
          border-color: var(--primary-blue);
          background: var(--primary-light);
        }

        @media (max-width: 850px) {
          .footer-top-row {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </footer>
  );
}
