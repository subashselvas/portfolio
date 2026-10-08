import { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import ScrollReveal from './components/ScrollReveal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenResume = () => setIsResumeOpen(true);
  const handleCloseResume = () => setIsResumeOpen(false);

  const handleOpenProject = (project) => setSelectedProject(project);
  const handleCloseProject = () => setSelectedProject(null);

  return (
    <div className="portfolio-app-root">
      {/* Premium Desktop Custom Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Header */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* Hero Section matching reference composition */}
        <Hero onOpenResume={handleOpenResume} />

        {/* About Section */}
        <ScrollReveal>
          <About onOpenResume={handleOpenResume} />
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        {/* Services Section */}
        <ScrollReveal>
          <Services />
        </ScrollReveal>

        {/* Portfolio Section */}
        <ScrollReveal>
          <Portfolio onOpenProject={handleOpenProject} />
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
      />

      {/* Curriculum Vitae / Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={handleCloseResume}
      />
    </div>
  );
}
