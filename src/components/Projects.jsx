import React, { useState, useMemo } from 'react';
import Lottie from 'react-lottie';
import { FaGithub, FaLink, FaTerminal, FaMicrochip } from 'react-icons/fa';
import {
  SiTailwindcss, SiNextdotjs, SiPython, SiLinux, SiDocker, SiMongodb,
  SiHtml5, SiCss3, SiJavascript, SiMarkdown, SiVisualstudiocode, SiGithub,
  SiVercel
} from 'react-icons/si';
import { DiNodejs, DiReact } from 'react-icons/di';

import rocket from '../../public/images/rocket.json';

// Lottie options helper
const lottieOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
});

const Projects = () => {
  const allProjects = [
    {
      image: '/images/netbuilder.png',
      name: 'NetBuilder',
      description:
        'A CLI tool that automates network configurations for routers, switches, and access points.',
      github: 'https://github.com/Ismail-anis-cherrak/Net-Builder.git',
      website:
        'https://drive.google.com/drive/folders/1ZBEIdCaVqGPoh-jKidbJFZfLyxaVq8rX?usp=sharing',
      technologies: [
        <SiGithub key="github" className="text-2xl" />,
        <SiLinux key="linux" className="text-2xl" />,
        <SiPython key="python" className="text-2xl" />,
        <FaTerminal key="terminal" className="text-2xl" />,
      ],
      themes: ['network', 'automation'],
      date: { start: 'October 2023', end: 'November 2023' },
    },
    {
      image: '/images/ecom.jpeg',
      name: 'Cloth Co — Modern Apparel Store',
      description:
        'Cloth Co offers curated modern apparel for men, women and unisex accessories — sustainably sourced and affordably priced.',
      github: 'https://github.com/Ismail-anis-cherrak/ecom-sheet', // (you can change this if you have a real repo)
      website: 'https://ecom-vetements.netlify.app', // (optional — replace with your actual deployment)
      technologies: [
        <SiNextdotjs key="nextjs" className="text-2xl" />,
        <SiTailwindcss key="tailwind" className="text-2xl" />,
        <DiReact key="react" className="text-2xl" />,
      ],
      themes: ['web', 'ecommerce'],
      date: { start: 'November 10, 2025', end: 'November 11, 2025' },
    },
    {
      image: '/images/checkmate.png',
      name: 'CheckMate',
      description:
        'A full-stack attendance system combining RFID and PIN authentication.',
      github: 'https://github.com/Ismail-anis-cherrak/check-mate.git',
      website: 'https://check-mate-gamma.vercel.app/employees',
      technologies: [
        <SiNextdotjs key="next" className="text-2xl" />,
        <SiTailwindcss key="tailwind" className="text-2xl" />,
        <SiMongodb key="mongo" className="text-2xl" />,
        <FaMicrochip key="rfid" className="text-2xl" />,
      ],
      themes: ['web', 'iot'],
      date: { start: 'March 2025', end: 'May 2025' },
    },
    {
      image: '/images/portfolio.png',
      name: 'Personal Portfolio',
      description:
        'My personal portfolio built with React, Tailwind, and Lottie animations.',
      github: 'https://github.com/Ismail-anis-cherrak/My-portfolio.git',
      website: 'https://my-portfolio-navy-iota-71.vercel.app/',
      technologies: [
        <DiReact key="react" className="text-2xl" />,
        <SiHtml5 key="html" className="text-2xl" />,
        <SiCss3 key="css" className="text-2xl" />,
        <SiJavascript key="js" className="text-2xl" />,
        <SiTailwindcss key="tailwind" className="text-2xl" />,
      ],
      themes: ['web'],
      date: { start: 'March 2024', end: 'April 2024' },
    },
    {
      image: '/images/elearn.png',
      name: 'E-learning Application',
      description:
        'A MERN-based university E-learning platform with real-time interactions.',
      technologies: [
        <DiReact key="react" className="text-2xl" />,
        <SiMongodb key="mongo" className="text-2xl" />,
        <DiNodejs key="node" className="text-2xl" />,
        <SiTailwindcss key="tailwind" className="text-2xl" />,
      ],
      themes: ['web'],
      date: { start: 'March 2024', end: 'June 2024' },
    },
    {
      image: '/images/ccnp.jpeg',
      name: 'CCNP ENARSI Command Snippets',
      description:
        'Markdown collection of advanced CCNP routing commands and network labs.',
      github: 'https://github.com/Ismail-anis-cherrak/ccnp-enarsi.git',
      technologies: [
        <SiGithub key="github" className="text-2xl" />,
        <SiMarkdown key="markdown" className="text-2xl" />,
        <SiLinux key="linux" className="text-2xl" />,
        <SiVisualstudiocode key="vscode" className="text-2xl" />,
      ],
      themes: ['network'],
      date: { start: 'May 2024', end: 'July 2024' },
    },
    {
      image: '/images/blog.jpeg',
      name: 'Personal Tech Blog',
      description: 'A modern tech blog built with Next.js 14, Tailwind CSS, and Shadcn UI components. Features a clean design, dark mode, and MDX content management.',
      github: 'https://github.com/Ismail-anis-cherrak/blog-website',  // Update with actual repo
      website: 'https://ismail-cherrak-blog.netlify.app/blog/',
      technologies: [
        <SiNextdotjs key="next" className="text-2xl" />,
        <SiTailwindcss key="tailwind" className="text-2xl" />,
        <DiReact key="react" className="text-2xl" />,
        <SiJavascript key="js" className="text-2xl" />,
      ],
      themes: ['web'],
      date: { start: 'November 2025', end: 'November 2025' },
    },
  ];

  const [selectedTheme, setSelectedTheme] = useState('all');

  // Extract all unique themes dynamically
  const allThemes = useMemo(() => {
    const themes = new Set();
    allProjects.forEach((p) => p.themes.forEach((t) => themes.add(t)));
    return Array.from(themes);
  }, [allProjects]);

  // Sort projects by most recent end date
  const sortedProjects = useMemo(() => {
    return [...allProjects].sort((a, b) => {
      const months = {
        January: 1, February: 2, March: 3, April: 4,
        May: 5, June: 6, July: 7, August: 8,
        September: 9, October: 10, November: 11, December: 12,
      };
      const [monthA, yearA] = a.date.end.split(' ');
      const [monthB, yearB] = b.date.end.split(' ');
      return yearB - yearA || months[monthB] - months[monthA];
    });
  }, [allProjects]);

  // Filter by theme
  const filteredProjects =
    selectedTheme === 'all'
      ? sortedProjects
      : sortedProjects.filter((p) => p.themes.includes(selectedTheme));

  return (
    <div className="text-white w-full py-16" id="projects">
      {/* Title */}
      <h1 className="text-5xl font-bold mb-8 text-center flex items-center justify-center space-x-2">
        <Lottie options={lottieOptions(rocket)} height={100} width={100} />
        <span className="px-8">My Projects</span>
        <Lottie options={lottieOptions(rocket)} height={100} width={100} />
      </h1>

      {/* Filter Bar */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setSelectedTheme('all')}
          className={`px-4 py-2 rounded-lg border ${
            selectedTheme === 'all'
              ? 'bg-blue-600 border-blue-600'
              : 'border-gray-500 hover:bg-gray-700'
          }`}
        >
          All
        </button>
        {allThemes.map((theme) => (
          <button
            key={theme}
            onClick={() => setSelectedTheme(theme)}
            className={`px-4 py-2 rounded-lg border capitalize ${
              selectedTheme === theme
                ? 'bg-blue-600 border-blue-600'
                : 'border-gray-500 hover:bg-gray-700'
            }`}
          >
            {theme}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4">
        {filteredProjects.length === 0 ? (
          <div className="text-center text-gray-400 mb-8">
            No projects found for this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{project.name}</h2>
                <p className="text-sm mb-3 text-center">{project.description}</p>

                {/* Date */}
                <p className="text-xs text-gray-400 mb-3">
                  🗓️ {project.date.start} → {project.date.end}
                </p>

                {/* Themes */}
                <div className="flex flex-wrap justify-center mb-3">
                  {project.themes.map((theme, i) => (
                    <span
                      key={i}
                      className="bg-gray-700 text-xs px-2 py-1 rounded-full mx-1 capitalize"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 mb-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaGithub className="text-2xl" />
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-500 hover:text-green-700"
                    >
                      <FaLink className="text-2xl" />
                    </a>
                  )}
                </div>

                {/* Tech Icons */}
                <div className="flex flex-wrap justify-center">
                  {project.technologies.map((tech, i) => (
                    <div key={i} className="m-1">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
