import React from 'react';
import { FaGithub, FaDocker } from 'react-icons/fa';
import { DiReact, DiNodejs, DiMongodb } from 'react-icons/di';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiBootstrap, SiGo, SiMysql, SiPostgresql, SiNextdotjs, SiOracle, SiPython, SiDjango, SiFlask, SiFastapi, SiExpo } from 'react-icons/si';
import { AiOutlineDatabase } from 'react-icons/ai';



import Lottie from 'react-lottie';

import star from '../../public/images/star.json'


const lottieOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
});

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
    { icon: <SiNextdotjs className="text-4xl" />, name: 'Next.js' },
    { icon: <SiOracle className="text-4xl" />, name: 'Oracle' },
    { icon: <SiPython className="text-4xl" />, name: 'Python' },
    { icon: <SiDjango className="text-4xl" />, name: 'Django' },
    { icon: <SiFlask className="text-4xl" />, name: 'Flask' },
    { icon: <SiFastapi className="text-4xl" />, name: 'FastAPI' },
    { icon: <DiReact className="text-4xl" />, name: 'React Native' },
    { icon: <SiTailwindcss className="text-4xl" />, name: 'NativeWind' },
    { icon: <SiExpo className="text-4xl" />, name: 'Expo' },
  ];



  return (
    <div className="text-white w-full py-16" id="qualifs">
      <div className="max-w-8xl mx-auto px-4">
      <h1 className="text-5xl font-bold mb-8 text-center flex items-center justify-center space-x-2">
          <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }}  />
          <span className='md:px-8'>Qualifications</span>
          <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }}  />
      </h1>

        {/* Technologies Section */}
        <div className="mb-16">
        <h1 className="text-2xl font-bold mb-8 text-center flex items-center justify-center space-x-2">
          <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }}  />
          <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }}  />
          <span className='md:px-8'>Technologies</span>
          <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }}  />
          <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }}  />
        </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="border border-white rounded p-6 shadow-md flex flex-col items-center text-center">
                <div className="mb-4">{tech.icon}</div>
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Qualifications;

