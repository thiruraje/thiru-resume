import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'thiruvengadamloga@gmail.com',
      link: 'mailto:thiruvengadamloga@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+91 6379167980',
      link: 'tel:6379167980'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Namakkal, Tamil Nadu',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/thiruraje',
      username: 'thiruraje'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thiruvengadam-loganathan-41427416b/',
      username: 'Thiruvengadam L'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's discuss how we can work together on your next project
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-text">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in hearing about new opportunities, 
                interesting projects, or just having a chat about technology. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    {item.link ? (
                      <a href={item.link} className="contact-value">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {social.icon}
                    <span>{social.username}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          <div className="contact-visual">
            <div className="contact-image">
              <img 
                src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop" 
                alt="Contact"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;