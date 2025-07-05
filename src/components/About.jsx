import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-20 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’m <span className="font-semibold text-blue-600 dark:text-blue-400">Uviwe Sotyato</span>, a passionate Computer Science student and aspiring full-stack developer from South Africa. 
          I build intuitive web apps, solve real problems, and enjoy blending creativity with logic to deliver great user experiences.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
            href="/projects"
            className="inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md transition"
          >
            See My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
