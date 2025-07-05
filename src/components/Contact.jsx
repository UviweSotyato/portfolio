// src/components/Contact.jsx
import { FaFacebookF, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto p-10 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-10 text-center drop-shadow-md">
        Contact Me
      </h2>

      <div className="flex justify-center flex-wrap gap-12">
        {/* Email */}
        <a
          href="mailto:ayabongasotyato888@gmail.com"
          aria-label="Send Email"
          className="text-[#D44638] hover:text-[#e25b4a] transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#D44638] rounded"
        >
          <FaEnvelope className="w-12 h-12" />
        </a>

        {/* Phone */}
        <a
          href="tel:+27687948366"
          aria-label="Call Phone"
          className="text-[#25D366] hover:text-[#1eba5d] transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366] rounded"
        >
          <FaPhone className="w-12 h-12" />
        </a>

        {/* Facebook */}
        <a
          href="https://web.facebook.com/profile.php?id=61576964365370"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Profile"
          className="text-[#1877F2] hover:text-[#3b5998] transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#1877F2] rounded"
        >
          <FaFacebookF className="w-12 h-12" />
        </a>

        {/* Instagram */}
        <a
          href="https://instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
          className="text-[#C13584] hover:text-[#e95994] transition transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#C13584] rounded"
        >
          <FaInstagram className="w-12 h-12" />
        </a>
      </div>
    </section>
  );
}
