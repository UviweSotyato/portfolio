// src/components/Footer.jsx
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-600 dark:text-gray-400">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Uviwe Sotyato — All rights reserved.
        </p>

        <div className="flex space-x-6 text-lg">
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-700 dark:hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 dark:hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-600">
        Crafted with ❤️ by Uviwe. Built using React and Tailwind CSS.
      </p>
    </footer>
  );
}
