import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'Java', level: 85, color: 'bg-red-500' },
    { name: 'React', level: 80, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 75, color: 'bg-yellow-500' },
    { name: 'HTML/CSS', level: 85, color: 'bg-orange-500' },
    { name: 'Python', level: 70, color: 'bg-green-500' },
    { name: 'Git', level: 75, color: 'bg-purple-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800 dark:text-white">
                  {skill.name}
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className={`h-full ${skill.color}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
