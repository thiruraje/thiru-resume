import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = async () => {
    const response = await fetch("/assets/resume.pdf");
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Thiruvengadam-Resume.pdf";
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            <h1 className="hero-title">
              <span className="name">Thiruvengadam Loganathan</span>
              <span className="title-line">Full Stack Developer | Problem Solver | Tech Enthusiast</span>
            </h1>
            <p className="hero-description">
              Passionate React & .NET Core developer with expertise in building 
              scalable web applications. Secondary experience in MERN stack development, 
              focused on creating exceptional user experiences and robust backend solutions.
            </p>
            <div className="hero-actions">
              <button 
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn btn-outline"
              >
                Get In Touch
              </button>
            </div>
            <div className="social-links">
              <a href="https://github.com/thiruraje" className="social-link" target="_blank" rel="noopener noreferrer">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/thiruvengadam-loganathan-41427416b/" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              <a href="mailto:thiruvengadamloga@gmail.com" className="social-link">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-tech-visual">
              <div className="tech-circle circle-1"></div>
              <div className="tech-circle circle-2"></div>
              <div className="tech-circle circle-3"></div>
              <div className="code-symbols">
                <span className="symbol">&lt;/&gt;</span>
                <span className="symbol">{ }</span>
                <span className="symbol">[ ]</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-resume">
          <button onClick={handleDownload} className="btn btn-gradient">
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;