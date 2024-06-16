import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="text-white w-full py-16" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" name="name" className="mt-1 block w-full p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500 text-black" placeholder="Your Name" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" name="email" className="mt-1 block w-full p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500 text-black" placeholder="Your Email" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Subject</label>
                <input type="text" name="subject" className="mt-1 block w-full p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500 text-black" placeholder="Subject" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea name="message" className="mt-1 block w-full p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500 text-black" rows="5" placeholder="Your Message" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-500">Send Message</button>
              </div>
            </form>
          </div>
          {/* Contact Details */}
          <div className="w-full lg:w-1/2 border border-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Contact Details</h1>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-gray-400 mr-4">📍</span>
                <span>123 Street Name, City, Country</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-4">📞</span>
                <a href="tel:+1234567890" className="text-blue-500 hover:underline">+123 456 7890</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-4">📧</span>
                <a href="mailto:example@example.com" className="text-blue-500 hover:underline">example@example.com</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-4">🌐</span>
                <a href="https://www.example.com" className="text-blue-500 hover:underline">www.example.com</a>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                  <FaGithub className="text-2xl" />
                </a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-800">
                  <FaFacebook className="text-2xl" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
