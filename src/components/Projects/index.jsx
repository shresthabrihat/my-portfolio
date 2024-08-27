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
  {
    title: 'Project 4',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 5',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 6',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 7',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 8',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 9',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 10',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 11',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 12',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 13',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 14',
    description: 'This is a brief description of Project Three.',
    link: '#',
  },
  {
    title: 'Project 15',
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
