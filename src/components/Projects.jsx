import { FaCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-xl transition duration-700"
    >
      <motion.h2
        className="text-4xl font-serif font-semibold text-center text-gray-900 dark:text-gray-100 mb-14 relative"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Projects
        <span className="block w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full"></span>
      </motion.h2>

      <motion.div
        className="grid gap-24 sm:grid-cols-1 md:grid-cols-2 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Project 1 */}
        <motion.div
          className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-3xl border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300
                     w-80 h-80 p-8 cursor-pointer hover:scale-105"
          variants={itemVariants}
        >
          {/* Video Bubble */}
          <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-lg mb-8">
            <video
              src="/videos/movie-night-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaRocket className="text-blue-600 dark:text-blue-400 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Movie Night
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base px-6 leading-relaxed">
              A sleek web app for planning movie nights with friends — including scheduling, reminders, and streaming integrations.
            </p>
            <span className="block mt-3 font-medium text-sm text-blue-600 dark:text-blue-400 tracking-wide">
              Built with React & Firebase
            </span>
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-3xl border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300
                     w-80 h-80 p-8 cursor-pointer hover:scale-105"
          variants={itemVariants}
        >
          {/* Video Bubble */}
          <div className="w-52 h-52 rounded-3xl overflow-hidden shadow-lg mb-8">
            <video
              src="/videos/skilllink-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <FaCode className="text-green-600 dark:text-green-400 text-2xl" />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                SkillLink SA
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base px-6 leading-relaxed">
              A full-stack multilingual platform tackling youth unemployment in South Africa by connecting skills with opportunity.
            </p>
            <span className="block mt-3 font-medium text-sm text-green-600 dark:text-green-400 tracking-wide">
              Built with React, Tailwind & Node.js
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
