import React from 'react';
import ecom from '../assets/img/ecom.jpg'
import ai from '../assets/img/ai.jpeg'
function Projects() {
  const projects = [
    {
      title: "Project 1: E-Commerce Website",
      description: "A full-stack e-commerce platform built with MERN stack, featuring user authentication, product browsing, and secure payments.",
      imgUrl: ecom, 
      githubLink: "https://github.com/AbinayaS110505",
    },
    {
      title: "Project 2:Easy Accessible AI Tool",
      description: "An easy-to-use tool designed for seamless accessibility, offering quick interactions and a user-friendly interface.",
      imgUrl: ai,
      githubLink: "https://github.com/AbinayaS110505", 
    },
  ];
  return (
    <div className="flex flex-col items-center py-8 gap-6">
      <h1 className="text-4xl font-bold mb-8 gap-6">My Projects</h1>

      <div className="flex flex-wrap justify-center gap-10 px">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col  items-center bg-gray-100 p-7 rounded-lg h-full w-[30vw] "
          >
            <img
              src={project.imgUrl}
              alt={project.title}
              className="w-full h-22 object-cover rounded-md mb-8"
            />
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex space-x-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-black font-bold">GitHub
              </a>    
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
