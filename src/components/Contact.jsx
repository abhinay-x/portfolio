import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Contact = ({ darkMode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, we'd handle form submission here
    alert('Thanks for reaching out! This is a demo form.');
  };

  return (
    <div className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            I'm currently looking for Web Development Internship opportunities.
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Location
                </h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Hyderabad, India
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Connect With Me
                </h4>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://linkedin.com/in/abhinay-chary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
                  >
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/abhinay-x"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
                  >
                    <FaGithub className="text-xl" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://x.com/abhinay_1212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
                  >
                    <FaXTwitter className="text-xl" />
                    <span>X (Twitter)</span>
                  </a>
                  <a
                    href="https://instagram.com/abhinaychary_raghipani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
                  >
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${darkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
