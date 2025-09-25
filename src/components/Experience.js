import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Developer',
      company: 'Orion Innovation',
      location: 'Coimbatore',
      period: '2021 - Present',
      type: 'Full-time',
      description: 'Developed responsive web applications using React and .NET technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      responsibilities: [
        'Collaborated on project design, feature enhancements, and cross-device UI implementation',
        'Designed and implemented RESTful APIs using .NET Core',
        'Resolved 90% of defects and performance issues through effective troubleshooting',
        'Participated in agile development processes and sprint planning',
      ],
      technologies: ['JavaScript', 'React', '.Net Core', 'SQL'],
      upSkills: ['Node Js', 'Express.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Associate Software Developer',
      company: 'Orion Innovation',
      location: 'Coimbatore',
      period: '2021 - Present',
      type: 'Full-time',
      description: 'Started career developing web applications and learning full-stack development. Gained experience in multiple technologies and development methodologies.',
      responsibilities: [
        "Developed frontend components & User story's using React Js",
        'Created backend APIs using .Net Core',
        'Worked on database design and optimization',
        'Participated in daily standups and code reviews'
      ],
      technologies: ['JavaScript', 'React', '.Net Core', 'SQL']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and key accomplishments in software development
          </p>
        </div>

        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="experience-card">
              <div className="experience-content">
                <div className="experience-header">
                  <div className="job-title">
                    <h3>{exp.title}</h3>
                    <div className="company-info">
                      <span className="company">{exp.company}</span>
                      <span className="job-type">{exp.type}</span>
                    </div>
                  </div>
                  <div className="job-meta">
                    <div className="job-period">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="job-location">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="job-description">{exp.description}</p>

                <div className="job-responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {
                 exp.upSkills &&
                 <>
                  <div className="job-upskills">
                    <h4>Secondary Skills:</h4>
                    <div className="tech-tags">
                      {exp.upSkills.map((skill, idx) => (
                        <span key={idx} className="tech-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                 </> 
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;