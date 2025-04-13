const About = () => {
  const skills = [
    { name: 'React', level: 'Expert' },
    { name: 'JavaScript', level: 'Expert' },
    { name: 'HTML & CSS', level: 'Expert' },
    { name: 'Python', level: 'Proficient' },
    { name: 'Cloud Computing', level: 'Intermediate' },
    { name: 'DevOps', level: 'Intermediate' },
  ];

  const certifications = [
    { name: 'Responsive Web Design', issuer: 'freeCodeCamp' },
    { name: 'CSS', issuer: 'Skillsoft' },
    { name: 'PCAP', issuer: 'Cisco' },
    { name: 'Arrays', issuer: 'CodeChef' },
    { name: 'Cloud Computing', issuer: 'IBM Coursera' },
    { name: 'DevOps Tools', issuer: 'Simplilearn' },
    { name: 'Modern AI', issuer: 'Cisco' },
    { name: 'Azure Basics', issuer: 'Microsoft Learn' },
  ];

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            I'm a third-year B.Tech CSE student at Vignan Institute, Hyderabad,
            specializing in frontend development with a passion for creating
            responsive and user-friendly web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Skills
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400">
                    {skill.level}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-indigo-600 dark:text-indigo-400">
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
