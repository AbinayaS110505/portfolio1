import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
function Contact() {
  return (
    <div className="flex flex-col  justify-between items-center h-screen bg-gray-100 p-8 ">
      <h1 className="text-3xl font-bold mb-8">Contact...</h1>
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mb-8">
        <form className="flex flex-col space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="your Email"
            />
          </div>
         <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Text here..."
            />
          </div><button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-400 hover:rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div><div className="flex space-x-5">
        <a href="mailto:your.email@example.com" className="rounded-3xl bg-blue-400 p-4 text-white hover:rounded-full  flex justify-between">
         mail me... <FontAwesomeIcon icon={faEnvelope} className="text-2xl " />
        </a>
        <a href="https://github.com/AbinayaS110505" target="_blank" rel="noopener noreferrer" className="rounded-3xl bg-gray-900 p-4 text-white hover:rounded-full flex justify-between ">
        Github...
          <FontAwesomeIcon icon={faGithub} className="text-2xl" />
        </a>
      </div>
    </div>
  );
}
export default Contact;
