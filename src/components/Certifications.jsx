import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      name: 'Programming in Java',
      issuer: 'NPTEL (IIT Kharagpur)',
      date: 'April 2024',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms'],
      description: 'Completed a 12-week course by IIT Kharagpur, mastering Java programming. Scored 61% (assignments: 22.88/25, proctored exam: 38.27/75).',
      link: '/certificates/Programming In Java.pdf' 
    },
    {
      name: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'March 2025',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Flexbox', 'Grid'],
      link: 'https://www.freecodecamp.org/certification/fccf1c3c161-96d0-4581-9453-424be61bd31a/responsive-web-design'
    },
    {
      name: 'Advanced CSS',
      issuer: 'Skillsoft',
      date: 'February 2025',
      skills: ['CSS Architecture', 'Animations', 'Sass/SCSS', 'CSS-in-JS'],
      link: 'https://skillsoft.digitalbadges.skillsoft.com/49ce84ba-5706-41fb-b406-13b02c6ba6f5#acc.lfkuZdYI'
    },
    {
      name: 'Python Certified Associate Programmer (PCAP)',
      issuer: 'Cisco',
      date: 'January 2025',
      skills: ['Python', 'OOP', 'Data Structures', 'Algorithms'],
      link: '/certificates/PCAP_-_Programming_Essentials_in_Python.pdf'
    },
    {
      name: 'Arrays & Data Structures',
      issuer: 'CodeChef',
      date: 'December 2024',
      skills: ['Arrays', 'Problem Solving', 'Algorithms', 'Time Complexity'],
      link: '/certificates/abhi22891a05b9-Arrays.pdf'
    },
    {
      name: 'Cloud Computing Essentials',
      issuer: 'IBM Coursera',
      date: 'November 2024',
      skills: ['Cloud Architecture', 'AWS', 'Azure', 'DevOps'],
      link: '/certificates/Introduction to cloud computing.pdf'
    },
    {
      name: 'DevOps Tools & Practices',
      issuer: 'Simplilearn',
      date: 'October 2024',
      skills: ['Git', 'CI/CD', 'Docker', 'Jenkins'],
      link: '/certificates/Introduction to DevOps Tools.pdf'
    },
    {
      name: 'Modern AI Fundamentals',
      issuer: 'Cisco',
      date: 'September 2024',
      skills: ['AI Concepts', 'Machine Learning', 'Neural Networks'],
      link: '/certificates/Introduction to Modern AI.pdf'
    },
    {
      name: 'Azure Cloud Fundamentals',
      issuer: 'Microsoft Learn',
      date: 'August 2024',
      skills: ['Azure Services', 'Cloud Security', 'Deployment'],
      link: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const certVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
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
            Certifications
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Professional certifications and achievements that validate my technical expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={certVariants}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {cert.name}
                  </h3>
                  <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-sm">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-indigo-600 dark:text-indigo-400 mb-4">
                  {cert.issuer}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                    Skills & Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition duration-300 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;
