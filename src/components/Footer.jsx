import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Footer = ({ darkMode, toggleDarkMode }) => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className={`w-full py-8 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              Quick Links
            </h3>
            <ul className="flex flex-wrap gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`hover:text-blue-500 transition-colors ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/abhinay-x"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:text-blue-500 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/abhinay-chary"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:text-blue-500 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/abhinay_1212"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:text-blue-500 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              aria-label="X (Twitter) Profile"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com/abhinaychary_raghipani"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-2xl hover:text-blue-500 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              aria-label="Instagram Profile"
            >
              <FaInstagram />
            </a>
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full hover:bg-opacity-10 hover:bg-blue-500 transition-colors ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <MdLightMode className="text-2xl" /> : <MdDarkMode className="text-2xl" />}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className={`text-center mt-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <p>&copy; 2025 Abhinay Chary. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
