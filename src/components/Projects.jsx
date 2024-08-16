import React from 'react';
import Lottie from 'react-lottie';
import { FaGithub, FaLink, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';
import { SiGatsby, SiPython, SiLinux, SiDocker, SiMongodb, SiHtml5, SiCss3, SiJavascript } from 'react-icons/si';
import { DiNodejs, DiReact } from 'react-icons/di';

import cybersecurity from '../../public/images/pentesting.json';
import Development from '../../public/images/code.json';
import Networking from '../../public/images/network.json';
import testimony from '../../public/images/testimony.json';
import rocket from '../../public/images/rocket.json';

const lottieOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
});

const Projects = () => {
  const allProjects = [
    // Example Development Project
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
    // Example Networking Project
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
    // Example Cybersecurity Project
    {
      image: '/images/cybersecurity1.jpg',
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
  ];

  const testimonies = [
    {
      image: '/images/islem.jpg',
      name: 'OURRED Islem Charaf Eddine',
      sentence: 'I had the opportunity to collaborate with Ismail on several challenging projects, and I was consistently impressed by his unwavering dedication and exceptional problem-solving skills. His ability to navigate complex issues and deliver outstanding results under tight deadlines is truly commendable. Additionally, his strong communication and collaborative approach make him an invaluable team member who fosters a positive and productive working environment.',
      linkedin: 'https://www.linkedin.com/in/islem-ourred-02380327a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      otherLinks: [
        // { url: 'https://example.com/', title: 'Example' },
        // { url: 'https://anotherlink.com/', title: 'Another Link' },
      ],
    },
    {
      image: '/images/raouf.jpg',
      name: 'Abderraouf ATSAMNIA',
      sentence: 'I worked with Ismail on a college project developing an E-learning website, and his skills in communication, collaboration, and conflict resolution were outstanding. As a full stack developer and an excellent team leader, he consistently demonstrated strong problem-solving abilities and contributed significantly to our project\'s success.',
      linkedin: 'https://www.linkedin.com/in/abderraouf-atsamnia-702524240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      otherLinks: [
        // { url: 'https://example.com/', title: 'Example' },
        // { url: 'https://anotherlink.com/', title: 'Another Link' },
      ],
    },
    {
      image: '/images/youcef.jpg',
      name: 'OUDDANE Youcef Fahed',
      sentence: 'I had the pleasure of studying with Ismail and collaborating with him on various projects. Throughout our time together, I found him to be exceptionally hardworking, honest, and highly skilled. His dedication to his work, combined with his integrity and expertise, make him a valuable asset in any team.',
      linkedin: 'https://www.linkedin.com/in/ouddane-youcef-fahed-75842b283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      otherLinks: [
        { url: 'https://main--coruscating-starburst-5fafbb.netlify.app/', title: 'Example' },
      ],
    }
  ];

  return (
    <div className="text-white w-full py-16" id="projects">
      <h1 className=' sm: text-3xl md:text-7xl font-bold mb-8 text-center flex items-center justify-center space-x-2'>
        <Lottie options={lottieOptions(rocket)} height={120} width={120} style={{ margin: '0', padding: '0' }} />
        <span className='px-8' >My Projects</span>
        <Lottie options={lottieOptions(rocket)} height={120} width={120} style={{ margin: '0', padding: '0' }} />
      </h1>
      <div className="max-w-8xl mx-auto px-4">
        {allProjects.length === 0 ? (
          <div className="text-center text-gray-400 mb-8">No projects for the moment</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {allProjects.map((project, index) => (
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
        )}
      </div>

      {/* Testimonies Section */}
      <div className="max-w-8xl mx-auto px-4 mt-16 mb-8">
        <h1 className="text-3xl font-bold mb-8 text-center flex items-center justify-center space-x-2">
          <Lottie options={lottieOptions(testimony)} height={60} width={60} style={{ margin: '0', padding: '0' }} />
          <span className='md:px-8'>Testimonies</span>
          <Lottie options={lottieOptions(testimony)} height={60} width={60} style={{ margin: '0', padding: '0' }} />
        </h1>
        <div className="flex flex-wrap justify-center -mx-4">
          {testimonies.map((testimony, index) => (
            <div key={index} className="border-white p-6 rounded-lg shadow-md flex flex-col items-center mx-4 mb-8 w-full sm:w-1/2 lg:w-1/3">
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
