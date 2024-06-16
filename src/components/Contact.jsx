
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send('service_7w3c313', 'template_8g36q9b', formData, 'tCaUXKqFWy34aBycD')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast.success('Thank you for your message! We will get back to you soon.', {
          position: "top-center",
          autoClose: 4000,
          transition: Slide,
          className: 'custom-toast',
          bodyClassName: 'custom-toast-body',
        });
      }, (error) => {
        console.log('FAILED...', error);
        toast.error('Something went wrong. Please try again.', {
          position: "top-center",
          autoClose: 4000,
          transition: Slide,
          className: 'custom-toast',
          bodyClassName: 'custom-toast-body',
        });
      });
  
    // Clear form fields
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };
  

  return (
    <div className="text-white w-full py-16" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Me</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500 text-black"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500 text-black"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500 text-black"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full p-3 rounded-md border border-gray-600 focus:ring focus:ring-blue-500 text-black"
                  rows="5"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {/* Contact Details */}
          <div className="w-full lg:w-1/2 p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Contact Details</h1>
            <br />
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-gray-400 mr-4 text-bold text-2xl">📍</span>
                <span className="text-xl">Hai Fillaoucen El Bahia Oran, Algeria</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-4 text-bold text-2xl">📞</span>
                <a href="tel:+213542280939" className="text-blue-500 text-xl hover:underline">+213 542280939</a>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400 mr-4 text-bold text-2xl">📧</span>
                <a href="mailto:ismailcherrak481@gmail.com" className="text-blue-500 text-xl hover:underline">ismailcherrak481@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
