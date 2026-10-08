import os

filepath = r"c:\Users\Subash S\OneDrive\Desktop\portfolio\portfolio\src\components\Navbar.jsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update imports
content = content.replace("import { useState, useEffect } from 'react';", "import { useState, useEffect, useRef } from 'react';")

# 2. Add state and effect
state_target = """  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ["""

state_replacement = """  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navListRef = useRef(null);

  const navItems = ["""
content = content.replace(state_target, state_replacement)

effect_target = """    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);"""

effect_replacement = """    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      if (navListRef.current) {
        const activeElement = navListRef.current.querySelector('.nav-link.active');
        if (activeElement) {
          // Calculate offset relative to the nav list
          setIndicatorStyle({
            left: activeElement.offsetLeft + 4, // to account for 4px padding in nav-link
            width: activeElement.offsetWidth - 8,
            opacity: 1,
          });
        }
      }
    };

    // Small delay to ensure layout is computed
    setTimeout(updateIndicator, 50);
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection, isScrolled]);"""
content = content.replace(effect_target, effect_replacement)

# 3. Update markup
markup_target = """          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">"""

markup_replacement = """          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list" ref={navListRef}>
              <div className="sliding-pill" style={{ left: indicatorStyle.left, width: indicatorStyle.width, opacity: indicatorStyle.opacity }} />"""
content = content.replace(markup_target, markup_replacement)

pill_target = """                      {item.label}
                      {isActive && <span className="active-pill" />}
                    </a>"""
pill_replacement = """                      {item.label}
                    </a>"""
content = content.replace(pill_target, pill_replacement)

# 4. Update CSS
css_target = """.active-pill {
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
        }"""
css_replacement = """.sliding-pill {
          position: absolute;
          bottom: 0px;
          height: 2.5px;
          background: var(--primary-blue);
          border-radius: 99px;
          transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
          pointer-events: none;
          z-index: 10;
        }"""
content = content.replace(css_target, css_replacement)

list_css_target = """.nav-list {
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }"""
list_css_replacement = """.nav-list {
          position: relative;
          display: flex;
          align-items: center;
          gap: 32px;
          list-style: none;
        }"""
content = content.replace(list_css_target, list_css_replacement)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Navbar updated successfully!")
