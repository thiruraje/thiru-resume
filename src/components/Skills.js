import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        'React JS', 'JavaScript (ES6+)', 'HTML5', 'CSS/SCSS', 'Redux', 'Material UI'
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        'ASP.NET Core', 'C#', 'Node.js', 
        'Express.js', 'RESTful APIs', 'SignalR'
      ]
    },
    {
      title: 'Tools',
      skills: [
        'Azure DevOps', 'Visual Studio', 'VS Code', 'Postman', 'Swagger', 'GitHub'
      ]
    },
    {
      title: 'Database & Methodologies',
      skills: [
        'SQL Server', 'Agile'
      ]
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Technologies and tools I work with to build amazing applications
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;