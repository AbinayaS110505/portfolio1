import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-7 rounded-lg h-full w-[30vw]">
      <img
        src={project.imgUrl}
        alt={project.title}
        className="w-full h-22 object-cover rounded-md mb-8" // Make sure the class names are valid
      />
      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
      <p className="text-gray-700 mb-4">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
