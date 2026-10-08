import { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy for active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="container navbar-container">
          {/* Logo matching reference */}
          <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
            <span className="logo-text">Port<span className="logo-accent">folio</span></span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id} className="nav-item">
                    <a
                      href={item.href}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      {item.label}
                      {isActive && <span className="active-pill" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Button: Download CV */}
          <div className="navbar-action">
            <button
              type="button"
              className="btn-download-cv"
              onClick={onOpenResume}
              aria-label="Download CV"
            >
              <span>Download CV</span>
              <Download size={16} strokeWidth={2.4} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}>
        <div className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <span className="logo-text">Port<span className="logo-accent">folio</span></span>
            <button
              type="button"
              className="mobile-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <button
              type="button"
              className="btn-primary w-full"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
            >
              <span>Download CV</span>
              <Download size={16} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          z-index: 1000;
          background: rgba(248, 251, 255, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          transition: background 0.3s ease, box-shadow 0.3s ease, height 0.3s ease;
          border-bottom: 1px solid rgba(226, 232, 240, 0.6);
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.06);
          border-bottom-color: rgba(219, 234, 254, 0.8);
          height: 72px;
        }

        .navbar-container {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          font-weight: 800;
          font-size: 1.7rem;
          letter-spacing: -0.03em;
        }

        .logo-text {
          color: var(--navy-heading);
          font-weight: 800;
        }

        .logo-accent {
          color: var(--primary-blue);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
        }

        .nav-list {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          position: relative;
          color: var(--text-color);
          font-weight: 500;
          font-size: 0.95rem;
          padding: 8px 4px;
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
          flex-direction: column;
        }

        .nav-link:hover {
          color: var(--primary-blue);
        }

        .nav-link.active {
          color: var(--primary-blue);
          font-weight: 600;
        }

        .active-pill {
          position: absolute;
          bottom: 0px;
          left: 4px;
          right: 4px;
          height: 2.5px;
          background: var(--primary-blue);
          border-radius: 99px;
          animation: pillFadeIn 0.25s ease-out forwards;
        }

        @keyframes pillFadeIn {
          from { transform: scaleX(0); opacity: 0; }
          to { transform: scaleX(1); opacity: 1; }
        }

        .navbar-action {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        /* Pill shaped Download CV Button matching reference */
        .btn-download-cv {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--primary-blue);
          color: var(--white);
          padding: 10px 22px;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 600;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
          transition: transform var(--transition-fast), box-shadow var(--transition-fast), background var(--transition-fast);
        }

        .btn-download-cv:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4);
        }

        .btn-download-cv:active {
          transform: translateY(1px);
        }

        .mobile-toggle-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          color: var(--navy-heading);
          background: var(--primary-light);
          border-radius: var(--radius-sm);
          border: 1px solid var(--primary-border);
        }

        /* Mobile Drawer Styles */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          z-index: 2000;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }

        .mobile-menu-overlay.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-menu-drawer {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 80%;
          max-width: 320px;
          background: var(--white);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
          padding: 24px;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu-overlay.open .mobile-menu-drawer {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .mobile-close-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--navy-muted);
          border-radius: var(--radius-sm);
        }

        .mobile-nav-list {
          list-style: none;
          padding: 24px 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .mobile-nav-link {
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--text-color);
          display: block;
          padding: 8px 0;
          transition: color 0.2s;
        }

        .mobile-nav-link.active,
        .mobile-nav-link:hover {
          color: var(--primary-blue);
        }

        .mobile-menu-footer {
          margin-top: auto;
          padding-top: 20px;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle-btn {
            display: flex;
          }
          .btn-download-cv {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
