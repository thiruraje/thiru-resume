import React from 'react';
import { Code, Server, Database, Smartphone } from 'lucide-react';

const About = () => {
  const startDate = new Date("2021-10-13");
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'React, Javascript'
    },
    {
      icon: <Server size={32} />,
      title: 'Backend Development',
      description: '.NET Core, RESTful APIs'
    },
    {
      icon: <Database size={32} />,
      title: 'Database Design',
      description: 'SQL Server'
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Responsive Design',
      description: 'Material UI lib, Mobile-first, cross-platform compatibility'
    }
  ];

  return (
    <section id="about" className="about-awards">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating innovative solutions that make a difference
          </p>
        </div>

        <div className="about-awards-content">
          <div className="about-awards-text">
            <div className="text-block">
              <h3>My Journey</h3>
              <p>
                With over {years} years {months > 0 ? `${months} months ` : ""}experience in full-stack development, I specialize in 
                .NET Core and React technologies. My passion lies in creating scalable, 
                maintainable applications that solve real-world problems.
              </p>
            </div>
            
            <div className="text-block">
              <h3>What I Do</h3>
              <p>
                I build end-to-end web applications, from database design to user interface 
                implementation. My secondary expertise in MERN stack allows me to adapt to 
                various project requirements and technology preferences.
              </p>
            </div>

            <div className="text-block">
              <h3>My Approach</h3>
              <p>
                I believe in clean code, thorough testing, and continuous learning. 
                I stay updated with the latest industry trends and best practices to 
                deliver high-quality solutions.
              </p>
            </div>
          </div>

          <div className="about-awards-highlights">
            <div className="highlights-grid">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">
                    {item.icon}
                  </div>
                  <h4 className="highlight-title">{item.title}</h4>
                  <p className="highlight-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;