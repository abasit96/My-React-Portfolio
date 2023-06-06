import React from 'react';

function Project({ project }) {
  return (
    <div className="card">
      <a href={project.deployed} target="_blank" rel="noopener noreferrer">
        <img className="card-img-top project-image" src={project.image} alt="Card image cap" />
      </a>
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <a href={project.deployed} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Deployed Application</a>
          <a href={project.github} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub Repository</a>
        </div>
      </div>
    </div>
  );
}

export default Project;
