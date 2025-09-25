import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <h3>Thiruvengadam Loganathan</h3>
              <p>Full Stack Developer specializing in .NET Core & React</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Navigation</h4>
                <ul>
                  <li><button onClick={() => document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                  <li><button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                  <li><button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
                  <li><button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Technologies</h4>
                <ul>
                  <li>.NET Core</li>
                  <li>React.js</li>
                  <li>Node.js</li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Connect</h4>
                <div className="footer-social">
                  <a href="https://github.com/thiruraje" target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/thiruvengadam-loganathan-41427416b/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={20} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="mailto:thiruvengadamloga@gmail.com">
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <p>
                © {currentYear} Thiruvengadam Loganathan. Made with <Heart size={16} className="heart" /> 
                and lots of coffee.
              </p>
            </div>
            <button onClick={scrollToTop} className="back-to-top">
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;