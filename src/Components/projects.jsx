import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project }) => (
  <div className="bg-white shadow-lg rounded-lg overflow-hidden w-customcard flex flex-col">
    <div className="group block flex-grow">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity"
        style={{ aspectRatio: "300/200", objectFit: "cover" }}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
    <div className="p-4 flex justify-end">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        View
      </a>
    </div>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

const Projects = ({ projects }) => (
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap justify-center gap-6">
      {projects && projects.length > 0 ? (
        projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))
      ) : (
        <p>No projects to display</p>
      )}
    </div>
  </div>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projects;
