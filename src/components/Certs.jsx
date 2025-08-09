// import React from 'react'
// import Lottie from 'react-lottie';

// import star from '../../public/images/star.json'


// const lottieOptions = (animationData) => ({
//   loop: true,
//   autoplay: true,
//   animationData,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice'
//   }
// });

// const Certifications = () => {
//   const certifications = [
//     {
//       category: 'Networking',
//       details: [
//         {
//           name: 'CCNA',
//           description: 'Cisco Certified Network Associate',
//           image: '/images/CCNA.jpg',
//         },
//       ],
//     },
//     {
//       category: 'Cyber Red Team',
//       details: [
//         {
//           name: 'eJPT',
//           description: 'eLearnSecurity Junior Penetration Tester',
//           image: '/images/ejpt.png',
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="text-white w-full py-16" id="certifications">

//         <h1 className="text-4xl font-bold mb-8 text-center flex items-center justify-center space-x-2">
//           <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }}  />
//           <span className='md:px-8'>Certifications</span>
//           <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }}  />
//         </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {certifications.map((cert, index) => (
//               <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col items-center text-center">
//                 <img src={cert.details[0].image} alt={cert.details[0].name} className="w-36 h-36 rounded-full object-cover  mb-4" />
//                 <h3 className="text-xl font-bold mb-2">{cert.details[0].name}</h3>
//                 <p className="text-sm">{cert.details[0].description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//   );        
// }

// export default Certifications

import React from 'react'
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

const Certifications = () => {
  const certifications = [
    {
      category: 'Networking',
      details: [
        {
          name: 'CCNA',
          fullName: 'Cisco Certified Network Associate',
          description: 'Industry-standard networking certification covering network fundamentals, security, automation, and programmability.',
          image: '/images/CCNA.jpg',
          issuer: 'Cisco Systems',
          dateEarned: 'July 2025',
          validUntil: 'July 2028',
          skills: ['Network Security', 'Routing & Switching', 'Network Automation', 'IP Services'],
          // credentialId: 'CSCO12345678',
          level: 'Associate'
        },
      ],
    },
    // {
    //   category: 'Cyber Red Team',
    //   details: [
    //     {
    //       name: 'eJPT',
    //       fullName: 'eLearnSecurity Junior Penetration Tester',
    //       description: 'Hands-on penetration testing certification focusing on practical skills and real-world scenarios.',
    //       image: '/images/ejpt.png',
    //       issuer: 'INE Security',
    //       dateEarned: 'January 2024',
    //       validUntil: 'Lifetime',
    //       skills: ['Penetration Testing', 'Vulnerability Assessment', 'Web Application Security', 'Network Enumeration'],
    //       // credentialId: 'eJPT-987654321',
    //       level: 'Junior'
    //     },
    //   ],
    // },
  ];

  return (
    <div className="text-white w-full py-16 px-4 sm:px-6 lg:px-8" id="certifications">
      <h1 className="text-4xl font-bold mb-12 text-center flex items-center justify-center space-x-2">
        <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }} />
        <span className='md:px-8'>Certifications</span>
        <Lottie options={lottieOptions(star)} height={60} width={60} style={{ margin: '0', padding: '0' }} />
      </h1>
      
      <div className="max-w-7xl mx-auto space-y-8">
        {certifications.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            {/* Category Header */}
            <div className="border-l-4 border-[#7f7fff] pl-4">
              <h2 className="text-2xl font-semibold text-[#7f7fff] mb-2">{category.category}</h2>
            </div>
            
            {/* Certifications in this category */}
            {category.details.map((cert, certIndex) => (
              <div key={certIndex} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-[#7f7fff]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#7f7fff]/20">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Certificate Image */}
                  <div className="flex-shrink-0 flex justify-center lg:justify-start">
                    <img 
                      src={cert.image} 
                      alt={cert.name} 
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover border-2 border-gray-600 hover:border-[#7f7fff]/50 transition-colors duration-300" 
                    />
                  </div>
                  
                  {/* Certificate Details */}
                  <div className="flex-grow space-y-4">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{cert.name}</h3>
                        <h4 className="text-lg text-gray-300 mb-2">{cert.fullName}</h4>
                        <p className="text-gray-400 leading-relaxed">{cert.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="inline-block bg-[#7f7fff]/20 text-[#7f7fff] px-3 py-1 rounded-full text-sm font-medium">
                          {cert.level} Level
                        </span>
                      </div>
                    </div>
                    
                    {/* Certificate Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-[#7f7fff]">Issuer</p>
                        <p className="text-sm text-gray-300">{cert.issuer}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-[#7f7fff]">Date Earned</p>
                        <p className="text-sm text-gray-300">{cert.dateEarned}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-[#7f7fff]">Valid Until</p>
                        <p className="text-sm text-gray-300">{cert.validUntil}</p>
                      </div>
                    </div>
                    
                    {/* Skills */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-[#7f7fff]">Key Skills</p>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600 hover:border-[#7f7fff]/50 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Credential ID */}
                    {/*
                    <div className="pt-2 border-t border-gray-700">
                      <p className="text-xs text-gray-500">
                        <span className="font-semibold">Credential ID:</span> {cert.credentialId}
                      </p>
                    </div>
                    */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );        
}

export default Certifications