import React from 'react';
import { FaGithub, FaLink, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiGatsby, SiPython, SiLinux, SiDocker, SiMongodb, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { DiNodejs, DiReact } from 'react-icons/di';

const Projects = () => {
  const projects = [
    // Development Projects
    {
      category: 'Development',
      items: [
        {
          image: '/images/project1.jpg',
          name: 'Project One',
          description: 'A full-stack web application with React and Node.js.',
          github: 'https://github.com/username/project-one',
          website: 'https://project-one.com',
          technologies: [
            <DiReact key="react" className="text-2xl" />,
            <DiNodejs key="node" className="text-2xl" />,
            <SiMongodb key="mongodb" className="text-2xl" />,
            <SiGatsby key="gatsby" className="text-2xl" />,
            <SiCss3 key="css" className="text-2xl" />,
          ],
        },
        {
          image: '/images/project2.jpg',
          name: 'Project Two',
          description: 'A mobile app built with React Native.',
          github: 'https://github.com/username/project-two',
          website: 'https://project-two.com',
          technologies: [
            <DiReact key="react-native" className="text-2xl" />,
            <SiJavascript key="javascript" className="text-2xl" />,
          ],
        },
        {
          image: '/images/project3.jpg',
          name: 'Project Three',
          description: 'A static website using GatsbyJS.',
          github: 'https://github.com/username/project-three',
          website: 'https://project-three.com',
          technologies: [
            <SiGatsby key="gatsby" className="text-2xl" />,
            <SiHtml5 key="html" className="text-2xl" />,
            <SiCss3 key="css" className="text-2xl" />,
          ],
        },
      ],
    },

    // Networking Projects
    {
      category: 'Networking',
      items: [
        {
          image: '/images/networking1.jpg',
          name: 'Network Analyzer',
          description: 'A tool to analyze and monitor network traffic.',
          github: 'https://github.com/username/network-analyzer',
          website: 'https://network-analyzer.com',
          technologies: [
            <SiLinux key="linux" className="text-2xl" />,
            <SiPython key="python" className="text-2xl" />,
          ],
        },
        {
          image: '/images/networking2.jpg',
          name: 'Network Dashboard',
          description: 'A real-time dashboard for network status monitoring.',
          github: 'https://github.com/username/network-dashboard',
          website: 'https://network-dashboard.com',
          technologies: [
            <DiReact key="react" className="text-2xl" />,
            <DiNodejs key="node" className="text-2xl" />,
            <SiMongodb key="mongodb" className="text-2xl" />,
          ],
        },
      ],
    },

    // Red Team Projects
    {
      category: 'Red Team Cyber Security',
      items: [
        {
          image: '/images/redteam1.jpg',
          name: 'Vulnerability Scanner',
          description: 'A scanner to detect vulnerabilities in web applications.',
          github: 'https://github.com/username/vulnerability-scanner',
          website: 'https://vulnerability-scanner.com',
          technologies: [
            <SiPython key="python" className="text-2xl" />,
            <SiJavascript key="javascript" className="text-2xl" />,
            <SiDocker key="docker" className="text-2xl" />,
          ],
        },
        {
          image: '/images/redteam2.jpg',
          name: 'Pen Test Report Generator',
          description: 'A tool to generate penetration test reports.',
          github: 'https://github.com/username/pentest-report-generator',
          website: 'https://pentest-report-generator.com',
          technologies: [
            <SiPython key="python" className="text-2xl" />,
            <SiJavascript key="nmap" className="text-2xl" />,
            <SiDocker key="grafana" className="text-2xl" />,
          ],
        },
      ],
    },
  ];

  const testimonies = [
    {
      image: '/images/person1.jpg',
      name: 'John Doe',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkedin: 'https://www.linkedin.com/',
      otherLinks: [
        { url: 'https://example.com/', title: 'Example' },
        { url: 'https://anotherlink.com/', title: 'Another Link' },
      ],
    },
    {
      image: '/images/person2.jpg',
      name: 'Jane Smith',
      sentence: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      linkedin: 'https://www.linkedin.com/',
      otherLinks: [
        { url: 'https://example.com/', title: 'Example' },
        { url: 'https://anotherlink.com/', title: 'Another Link' },
      ],
    },
    {
      image: '/images/person1.jpg',
      name: 'John Doe',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkedin: 'https://www.linkedin.com/',
      otherLinks: [
        { url: 'https://example.com/', title: 'Example' },
        { url: 'https://anotherlink.com/', title: 'Another Link' },
      ],
    },{
      image: '/images/person1.jpg',
      name: 'John Doe',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkedin: 'https://www.linkedin.com/',
      otherLinks: [
        { url: 'https://example.com/', title: 'Example' },
        { url: 'https://anotherlink.com/', title: 'Another Link' },
      ],
    },{
      image: '/images/person1.jpg',
      name: 'John Doe',
      sentence: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      linkedin: 'https://www.linkedin.com/',
      otherLinks: [
        { url: 'https://example.com/', title: 'Example' },
        { url: 'https://anotherlink.com/', title: 'Another Link' },
      ],
    },
  ];

  return (
    <div className="text-white w-full py-16" id="projects">
      <div className="max-w-8xl mx-auto px-4">
        {projects.map((category, index) => (
          <div key={index}>
            <h1 className="text-3xl font-bold mb-8 text-center">{category.category}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {category.items.map((project, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 ease-in-out hover:scale-105">
                  <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded mb-4" />
                  <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex space-x-4 mb-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                        <FaGithub className="text-2xl" />
                      </a>
                    )}
                    {project.website && (
                      <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
                        <FaLink className="text-2xl" />
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap justify-center">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="m-1">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/* Separator */}
            {index < projects.length - 1 && <><br /><br /></>}
          </div>
        ))}
      </div>

      {/* Testimonies Section */}
      <div className="max-w-8xl mx-auto px-4 mt-16 mb-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Testimonies</h1>
        <div className="flex flex-wrap justify-center -mx-4">
          {testimonies.map((testimony, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center mx-4 mb-8 w-full sm:w-1/2 lg:w-1/3">
              <img src={testimony.image} alt={testimony.name} className="w-32 h-32 object-cover rounded-full mb-4" />
              <h2 className="text-xl font-bold mb-2">{testimony.name}</h2>
              <p className="text-sm mb-4 text-center">{testimony.sentence}</p>
              <div className="flex items-center space-x-4 mt-auto">
                <a href={testimony.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                  <FaLinkedin className="text-2xl" />
                </a>
                {testimony.otherLinks.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <FaExternalLinkAlt className="text-2xl" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
