import React from 'react';
import './styles.css';

const projects = [
  {
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
];

export default () => {
  return (
    <div className="projects-container">
      <h1 className="homePageTitle">My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};
