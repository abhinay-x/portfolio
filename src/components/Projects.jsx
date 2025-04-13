import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = ({ darkMode }) => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'WoodWorks Hub',
      description: 'A digital platform empowering local carpenters to showcase portfolios and connect with customers.',
      tech: ['MERN Stack', 'Firebase', 'CSS Animations'],
      features: [
        'Carpenter profile portfolios with badges & reviews',
        'Cost estimator & tool marketplace',
        'Tool rental system & doorstep service',
        'AI-generated animation for services',
        'Targeted at skilled carpenters'
      ],
      domain: 'Sustainable Development / Digital Empowerment',
      github: 'https://github.com/abhinay-x/woodworks-hub',
      live: '#'
    },
    {
      title: 'Feed Forward',
      description: 'A web-based solution connecting food donors to NGOs and people in need, reducing food waste.',
      tech: ['MERN Stack', 'MongoDB Atlas', 'Chart.js'],
      features: [
        'Map-based donor-receiver system',
        'Real-time food availability dashboard',
        'Analytics for food donations',
        'NGO verification & distribution logic',
        'Login/signup with history tracking'
      ],
      domain: 'Sustainability & Food Waste Management',
      github: 'https://github.com/abhinay-x/feed-forward',
      live: '#'
    },
    {
      title: 'Craft Connect',
      description: 'A marketplace for home craft services including carpenters, electricians, plumbers, and repair experts.',
      tech: ['MERN Stack', 'Bootstrap', 'Cloudinary'],
      features: [
        'Job marketplace & verified badges',
        'Service provider portfolios',
        'Online tools store',
        'Quote calculators',
        'Real-time booking system'
      ],
      domain: 'Service-based startup prototype',
      github: 'https://github.com/abhinay-x/craft-connect',
      live: '#'
    },
    {
      title: 'Array Solver',
      description: 'Java implementation of advanced array algorithms and data structures.',
      tech: ['Java', 'Data Structures', 'Algorithms'],
      features: [
        'Optimized sorting algorithms',
        'Search implementations',
        'Array manipulations',
        'Performance analysis'
      ],
      domain: 'Data Structures & Algorithms',
      github: 'https://github.com/abhinay-x/array-solver',
      live: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Projects
          </h2>
          <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore my latest work
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'React', 'Java', 'MERN', 'Data Structures'].map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === tech
                  ? 'bg-blue-500 text-white'
                  : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => 
              filter === 'all' ? true : project.tech.some(t => 
                t.toLowerCase().includes(filter.toLowerCase())
              )
            )
            .map((project, index) => (
              <motion.div
                key={project.title}
                variants={projectVariants}
                className={`p-6 rounded-lg shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full ${
                        darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    GitHub
                  </a>
                  {project.live !== '#' && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
