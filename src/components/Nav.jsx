import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Replace scroll behavior with hash navigation so App.jsx will switch views
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    // update the hash (this triggers App's hashchange listener)
    if (typeof window !== 'undefined') {
      window.location.hash = targetId;
    }
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full text-white p-4 flex items-center justify-between shadow-lg z-10 bg-[#0c0c1a] border-b border-gray-800">
      <div className="flex-1">
        <span className="text-2xl font-bold text-white tracking-wide">Ismail</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-2 justify-center space-x-8">
        <a className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out" href="#home" onClick={handleNavClick}>Home</a>
        <a className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out" href="#certifications" onClick={handleNavClick}>Certifications</a>
        <a className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out" href="#services" onClick={handleNavClick}>Services</a>
        <a className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out" href="#projects" onClick={handleNavClick}>Projects</a>
        <a className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out" href="#qualifications" onClick={handleNavClick}>Qualifications</a>
        <a className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out" href="https://ismail-cherrak-blog.netlify.app/blog/" target="_blank" rel="noopener noreferrer">Blog</a>
        <a className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out" href="#contact" onClick={handleNavClick}>Contact</a>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-[#0c0c1a] border-t border-gray-800 p-4`}>
        <div className="flex flex-col items-center space-y-4">
          <a className="block text-white hover:text-[#7f7fff] transition duration-300 ease-in-out py-2 text-center" href="#home" onClick={handleNavClick}>Home</a>
          <a className="block text-white hover:text-[#7f7fff] transition duration-300 ease-in-out py-2 text-center" href="#certifications" onClick={handleNavClick}>Certifications</a>
          <a className="block text-white hover:text-[#7f7fff] transition duration-300 ease-in-out py-2 text-center" href="#services" onClick={handleNavClick}>Services</a>
          <a className="block text-white hover:text-[#7f7fff] transition duration-300 ease-in-out py-2 text-center" href="#projects" onClick={handleNavClick}>Projects</a>
          <a className="block text-white hover:text-[#7f7fff] transition duration-300 ease-in-out py-2 text-center" href="#qualifications" onClick={handleNavClick}>Qualifications</a>
          <a className="block text-white hover:text-[#7f7fff] transition duration-300 ease-in-out py-2 text-center" href="https://ismail-cherrak-blog.netlify.app/blog/" target="_blank" rel="noopener noreferrer">Blog</a>
          <a className="block text-white hover:text-[#7f7fff] transition duration-300 ease-in-out py-2 text-center" href="#contact" onClick={handleNavClick}>Contact</a>
        </div>
        <div className="flex justify-center space-x-4 mt-4">
          
          <a href="https://github.com/Ismail-anis-cherrak/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out flex items-center space-x-2">
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span className="hidden md:inline">Github</span>
          </a>
          <a href="https://www.linkedin.com/in/ismail-cherrak-007a9a26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out flex items-center space-x-2">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <span className="hidden md:inline">LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/invites/contact/?igsh=7g2scbo6k93t&utm_content=uqmxt92" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out flex items-center space-x-2">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <span className="hidden md:inline">Instagram</span>
          </a>
          <a href="https://www.facebook.com/share/EkpJg4VKmV3ydgjx/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out flex items-center space-x-2">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <span className="hidden md:inline">Facebook</span>
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="hidden md:flex flex-1 justify-end space-x-6">
        <a href="https://github.com/Ismail-anis-cherrak/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out flex items-center space-x-2">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/ismail-cherrak-007a9a26a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out flex items-center space-x-2">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://www.instagram.com/invites/contact/?igsh=7g2scbo6k93t&utm_content=uqmxt92" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out flex items-center space-x-2">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://www.facebook.com/share/EkpJg4VKmV3ydgjx/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#7f7fff] transition duration-300 ease-in-out flex items-center space-x-2">
          <FontAwesomeIcon icon={faFacebook} size="lg" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
