import { FaCode, FaRocket, FaTools, FaSpinner } from "react-icons/fa";
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

const projects = [
  {
    title: "Movie Night",
    description:
      "A sleek web app for planning movie nights with friends — including scheduling, reminders, and streaming integrations.",
    icon: <FaRocket className="text-blue-600 dark:text-blue-400 text-2xl" />,
    tech: "React & Firebase",
    link: "https://movie-night-demo.web.app",
    status: "Finished",
    color: "blue",
  },
  {
    title: "SkillLink SA",
    description:
      "A full-stack multilingual platform tackling youth unemployment in South Africa by connecting skills with opportunity.",
    icon: <FaCode className="text-green-600 dark:text-green-400 text-2xl" />,
    tech: "React, Tailwind & Node.js",
    link: "https://skilllinksa.co.za",
    status: "Finished",
    color: "green",
  },
  {
    title: "Mzantsi Market Map",
    description:
      "A geospatial platform for showcasing township-based informal businesses. Search, filter and navigate easily.",
    icon: <FaTools className="text-yellow-600 dark:text-yellow-400 text-2xl" />,
    tech: "Next.js, Mapbox & Payload CMS",
    link: "https://mzantsi-map.vercel.app",
    status: "In Progress",
    color: "yellow",
  },
  {
    title: "Existence Official",
    description:
      "A multi-platform creative studio hub with CMS-driven announcement bars, blog, and project portfolio.",
    icon: <FaSpinner className="text-purple-600 dark:text-purple-400 text-2xl animate-spin-slow" />,
    tech: "Next.js, Payload CMS, Docker",
    link: "https://existenceofficial.com",
    status: "In Progress",
    color: "purple",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl shadow-xl transition duration-700"
    >
      <motion.h2
        className="text-4xl font-serif font-semibold text-center text-gray-900 dark:text-white mb-16 relative"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        My Projects
        <span className="block w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-3 rounded-full"></span>
      </motion.h2>

      <motion.div
        className="grid gap-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 w-full max-w-md p-8 hover:scale-105"
            variants={itemVariants}
          >
            {/* Icon and Title */}
            <div className="flex items-center justify-center gap-3 mb-4">
              {project.icon}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-700 dark:text-gray-300 text-center text-base px-2 mb-4 leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <span
              className={`block text-sm font-medium mb-2 text-${project.color}-600 dark:text-${project.color}-400 tracking-wide`}
            >
              {project.tech}
            </span>

            {/* Status Badge */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold bg-${project.color}-100 dark:bg-${project.color}-900 text-${project.color}-700 dark:text-${project.color}-300 mb-4`}
            >
              {project.status}
            </span>

            {/* Button */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white bg-${project.color}-600 hover:bg-${project.color}-700 dark:bg-${project.color}-500 dark:hover:bg-${project.color}-600 transition-colors px-5 py-2 rounded-full text-sm font-semibold shadow`}
            >
              Visit Site
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
