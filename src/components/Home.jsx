import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const roles = [
  'Full stack web developer ..',
  'Network Engineer ..',
  'Penetration tester ..',
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let typeTimeout;
    if (isDeleting) {
      typeTimeout = setTimeout(() => {
        setDisplayedText(roles[loopNum].substring(0, displayedText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else {
      typeTimeout = setTimeout(() => {
        setDisplayedText(roles[loopNum].substring(0, displayedText.length + 1));
        setTypingSpeed(150);
      }, typingSpeed);
    }

    if (!isDeleting && displayedText === roles[loopNum]) {
      setIsDeleting(true);
      setTypingSpeed(70);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setLoopNum((loopNum + 1) % roles.length);
      setTypingSpeed(150);
    }

    return () => clearTimeout(typeTimeout);
  }, [displayedText, isDeleting, loopNum, typingSpeed]);

  const experienceProps = useSpring({ number: 2, from: { number: 0 }, config: { duration: 2000, easing: (t) => t } });
  const projectsProps = useSpring({ number: 0, from: { number: 0 }, config: { duration: 2000, easing: (t) => t } });
  const techsProps = useSpring({ number: 10, from: { number: 0 }, config: { duration: 2000, easing: (t) => t } });
  const fieldsProps = useSpring({ number: 3, from: { number: 0 }, config: { duration: 2000, easing: (t) => t } });

  const formatNumber = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="text-white mt-24 md:mt-16 w-full flex flex-col justify-center items-center min-h-screen" id="home">
      <div className="flex flex-col md:flex-row max-w-8xl w-full px-4 md:px-8 mx-auto">
        <div className="w-full md:w-1/2 p-4 md:pl-8 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl md:text-6xl font-bold mb-4">Hello, my name is</h1>
          <h2 className="text-4xl md:text-4xl font-bold mb-4">Ismail Anis CHERRAK</h2>
          <div className="text-xl md:text-3xl font-bold mb-4">
            I'm a <span className="md:text-4xl md:font-bold">{displayedText}</span>
          </div>
          <p className="mb-4 text-sm md:text-base">I am a skilled web developer, a cyber security enthusiast, and an aspiring network engineer, passionately seeking mastery in each field I enter.</p>
          <a href="/Ismail_Anis_CHERRAK_CV.pdf" download>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">Download CV</button>
          </a>
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          <img src="/images/Profile.png" alt="Profile" className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-dashed border-gray-400 shadow-lg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-around w-full mt-16 px-4 md:px-8 mb-16">
        <div className="w-full md:w-1/4 text-center mb-8 md:mb-0">
          <animated.div className="text-3xl md:text-5xl font-bold inline-block mr-2">
            {experienceProps.number.to((n) => formatNumber(n.toFixed(0)))}
          </animated.div>
          <div className="text-center ">
            <p className="text-sm md:text-lg">years of experience</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center mb-8 md:mb-0">
          <animated.div className="text-3xl md:text-5xl font-bold inline-block mr-2">
            {projectsProps.number.to((n) => formatNumber(n.toFixed(0)))}
          </animated.div>
          <div className="text-center ">
            <p className="text-sm md:text-lg">projects done</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center mb-8 md:mb-0">
          <animated.div className="text-3xl md:text-5xl font-bold inline-block mr-2">
            {techsProps.number.to((n) => formatNumber(n.toFixed(0)))}
          </animated.div>
          <div className="text-center ">
            <p className="text-sm md:text-lg">techs mastered</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 text-center">
          <animated.div className="text-3xl md:text-5xl font-bold inline-block mr-2">
            {fieldsProps.number.to((n) => formatNumber(n.toFixed(0)))}
          </animated.div>
          <div className="text-center ">
            <p className="text-sm md:text-lg">fields studied</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
