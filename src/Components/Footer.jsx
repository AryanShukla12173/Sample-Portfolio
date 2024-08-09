import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='w-full bg-black py-6'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='flex space-x-6 mb-4'>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-600 transition duration-300'>
            <FaGithub size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-600 transition duration-300'>
            <FaLinkedin size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-white hover:text-blue-600 transition duration-300'>
            <FaTwitter size={30} />
          </a>
        </div>
        <p className='text-gray-400 text-sm'>
          &copy; 2024 Aryan Shukla. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
