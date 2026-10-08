import os

filepath = r"c:\Users\Subash S\OneDrive\Desktop\portfolio\portfolio\src\components\Navbar.jsx"
with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Fix handleScroll logic
scroll_target = """      // Scroll spy for active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }"""

scroll_replacement = """      // Scroll spy for active section
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.getBoundingClientRect().top + window.scrollY;
          if (sectionTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }"""
content = content.replace(scroll_target, scroll_replacement)

# Fix handleNavClick
click_target = """  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);"""

click_replacement = """  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (id) setActiveSection(id);
    const targetElement = document.querySelector(href);"""
content = content.replace(click_target, click_replacement)

# Update onClick in mapping
nav_target = """                      onClick={(e) => handleNavClick(e, item.href)}"""
nav_replacement = """                      onClick={(e) => handleNavClick(e, item.href, item.id)}"""
content = content.replace(nav_target, nav_replacement)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)
print("Navbar scroll logic fixed!")
