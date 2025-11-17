import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Inventory Observation',
      description: 'Full-stack digitize inventory observation solution built with .NET Core and React. Features include offline-first functionality to support remote audits in low-connectivity areas and reducing manual documentation and significantly decreasing paperwork.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['.NET Core', 'React JS', 'SQL Server', 'Azure DevOps'],
      features: ['Progressive Web App (PWA)', 'Offline funtionality (Remote areas)', 'Real-time Updates'],
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Auvenir Compilation & Review App',
      description: 'Application which will allow users and clients to effectively execute the whole compilation journey, with the ability to easily communicate and collaborate with clients and colleagues. Built using .NET Core and React.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['.NET Core', 'React JS', 'SQL Server', 'Azure DevOps'],
      features: ['Client Management', 'Engagement Management', 'Audit compilation and review', 'Role Management'],
      category: 'Full Stack'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A collection of projects showcasing my technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;