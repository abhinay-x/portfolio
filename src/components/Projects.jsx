import { motion } from 'framer-motion';

const Projects = () => {
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
      github: 'https://github.com/abhinay-chary/woodworks-hub',
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
      github: 'https://github.com/abhinay-chary/feed-forward',
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
      github: 'https://github.com/abhinay-chary/craft-connect',
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
      github: 'https://github.com/abhinay-chary/array-solver',
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
    <div className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Here are some of my recent projects showcasing my full-stack development skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={projectVariants}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                    {project.domain}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded hover:bg-gray-800 dark:hover:bg-gray-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
