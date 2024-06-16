


// import React, { useState, useEffect, useRef } from 'react';
// import { FaCode, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';

// const Services = () => {
//   const [services] = useState([
//     {
//       icon: <FaCode className="text-4xl mb-4" />,
//       name: 'Developing Full Websites',
//       description: 'Building responsive and scalable websites using modern technologies.',
//       details: 'We specialize in creating full-featured websites using the latest technologies such as React, Node.js, and more. Our goal is to ensure your website is not only visually appealing but also highly functional and optimized for performance.',
//     },
//     {
//       icon: <FaNetworkWired className="text-4xl mb-4" />,
//       name: 'Network Administration',
//       description: 'Managing and maintaining computer networks to ensure smooth operation.',
//       details: 'Our network administration services include setting up, configuring, and managing network infrastructure, ensuring security, and troubleshooting issues. We make sure your network runs smoothly and efficiently.',
//     },
//     {
//       icon: <FaShieldAlt className="text-4xl mb-4" />,
//       name: 'Penetration Testing',
//       description: 'Conducting security tests to identify and address vulnerabilities.',
//       details: 'We offer comprehensive penetration testing services to identify security weaknesses in your systems. Our tests include web application testing, network testing, and more, ensuring that your systems are secure from potential threats.',
//     },
//   ]);

//   const [modalOpen, setModalOpen] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);

//   const modalRef = useRef();

//   const openModal = (service) => {
//     setSelectedService(service);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setSelectedService(null);
//   };

//   const handleClickOutside = (event) => {
//     if (modalRef.current && !modalRef.current.contains(event.target)) {
//       closeModal();
//     }
//   };

//   useEffect(() => {
//     if (modalOpen) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [modalOpen]);

//   return (
//     <div className="text-white w-full py-16" id="services">
//       <div className="max-w-6xl mx-auto px-4">
//         <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Services</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div key={index} className="bg-gray-700 p-8 m-6 rounded-lg shadow-md text-center flex flex-col items-center">
//               {service.icon}
//               <h2 className="text-xl font-bold mb-2">{service.name}</h2>
//               <p className="text-sm mb-4">{service.description}</p>
//               <button
//                 className="px-4 py-2 bg-blue-500 text-white rounded"
//                 onClick={() => openModal(service)}
//               >
//                 Learn More
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {modalOpen && selectedService && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
//           <div ref={modalRef} className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl w-full">
//             <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>
//               &times;
//             </button>
//             <h2 className="text-2xl font-bold mb-4">{selectedService.name}</h2>
//             <p className="mb-4">{selectedService.details}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;

import React, { useState, useEffect, useRef } from 'react';
import { FaCode, FaNetworkWired, FaShieldAlt } from 'react-icons/fa';
import Lottie from 'lottie-react';
import planetAnimation from '../../public/images/planet.json'; // Update the path to your planet animation JSON
import starAnimation from '../../public/images/star.json'; // Update the path to your star animation JSON

const Services = () => {
  const [services] = useState([
    {
      icon: <FaCode className="text-4xl mb-4" />,
      name: 'Developing Full Websites',
      description: 'Building responsive and scalable websites using modern technologies.',
      details: 'I create a variety of websites, from simple landing pages and portfolios to e-commerce sites and complex front-end and back-end projects. Whether you need a sleek portfolio to showcase your work, a dynamic landing page to promote your services, or a full-featured website with advanced features, I can bring your ideas to life. Examples of my work include modern landing pages, stylish portfolios, and scalable e-commerce sites, all customized to fit your needs.',
    },
    {
      icon: <FaNetworkWired className="text-4xl mb-4" />,
      name: 'Network Administration',
      description: 'Managing and maintaining computer networks to ensure smooth operation.',
      details: 'Our network administration services include setting up, configuring, and managing network infrastructure, ensuring security, and troubleshooting issues. We make sure your network runs smoothly and efficiently.',
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4" />,
      name: 'Penetration Testing',
      description: 'Conducting security tests to identify and address vulnerabilities.',
      details: 'We offer comprehensive penetration testing services to identify security weaknesses in your systems. Our tests include web application testing, network testing, and more, ensuring that your systems are secure from potential threats.',
    },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const modalRef = useRef();

  const openModal = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalOpen]);

  return (
    <div className="text-white w-full py-16" id="services">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-center mb-12 relative">
        <h1 className="text-3xl md:text-5xl font-bold flex items-center justify-center mx-4 relative z-10">
        <Lottie animationData={planetAnimation} loop={true} style={{ width: 80, height: 80, position: 'absolute', left: '-50px', top: '50%', transform: 'translateY(-50%)' }} />
          <span className="mr-16 ml-16">Services</span>
        <Lottie animationData={planetAnimation} loop={true} style={{ width: 80, height: 80, position: 'absolute', right: '-50px', top: '50%', transform: 'translateY(-50%)' }} />
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-700 p-8 m-6 rounded-lg shadow-md text-center flex flex-col items-center">
            {service.icon}
            <h2 className="text-xl font-bold mb-2">{service.name}</h2>
            <p className="text-sm mb-4">{service.description}</p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => openModal(service)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {modalOpen && selectedService && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-4xl w-full">
            <button className="absolute top-4 right-4 text-white text-2xl" onClick={closeModal}>
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedService.name}</h2>
            <p className="mb-4">{selectedService.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
