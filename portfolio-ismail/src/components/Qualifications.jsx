import React from 'react';
import { FaGithub, FaDocker } from 'react-icons/fa';
import { DiReact, DiNodejs, DiMongodb } from 'react-icons/di';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap,SiGo, SiMysql, SiPostgresql } from 'react-icons/si';
import { AiOutlineDatabase } from 'react-icons/ai';

const Qualifications = () => {
  const technologies = [
    { icon: <DiReact className="text-4xl" />, name: 'React' },
    { icon: <DiNodejs className="text-4xl" />, name: 'Node.js' },
    { icon: <FaDocker className="text-4xl" />, name: 'Docker' },
    { icon: <DiMongodb className="text-4xl" />, name: 'MongoDB' },
    { icon: <SiGo className="text-4xl" />, name: 'GoLang' },
    { icon: <SiHtml5 className="text-4xl" />, name: 'HTML' },
    { icon: <SiCss3 className="text-4xl" />, name: 'CSS' },
    { icon: <SiJavascript className="text-4xl" />, name: 'JavaScript' },
    { icon: <SiTailwindcss className="text-4xl" />, name: 'Tailwind CSS' },
    { icon: <SiBootstrap className="text-4xl" />, name: 'Bootstrap' },
    { icon: <SiMysql className="text-4xl" />, name: 'MySQL' },
    { icon: <AiOutlineDatabase className="text-4xl" />, name: 'SQL' },
    { icon: <SiPostgresql className="text-4xl" />, name: 'PostgreSQL' },
  ];

  const certifications = [
    {
      category: 'Networking',
      details: [
        {
          name: 'CCNA',
          description: 'Cisco Certified Network Associate',
          image: '/images/ccna.jpg',
        },
      ],
    },
    {
      category: 'Cyber Red Team',
      details: [
        {
          name: 'eJPT',
          description: 'eLearnSecurity Junior Penetration Tester',
          image: '/images/ejpt.jpg',
        },
      ],
    },
  ];

  return (
    <div className="text-white w-full py-16" id="qualifs">
      <div className="max-w-8xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Qualifications</h1>

        {/* Technologies Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="border border-white rounded p-6 shadow-md flex flex-col items-center text-center">
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <img src={cert.details[0].image} alt={cert.details[0].name} className="w-32 h-32 object-cover rounded-full mb-4" />
                <h3 className="text-xl font-bold mb-2">{cert.details[0].name}</h3>
                <p className="text-sm">{cert.details[0].description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
