import React from "react";
import ProfilePic from "./ProfilePic";
import { FaDownload, FaFilePdf, FaIdBadge, FaCertificate } from "react-icons/fa";

export default function Profile() {
  const certificates = [
    {
      title: "React Certificate",
      file: "/documents/react-cert.pdf",
    },
    {
      title: "Python Certificate",
      file: "/documents/python-cert.jpg",
    },
    // Add more certificates here
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-12 mt-20 bg-white dark:bg-gray-900 rounded-xl shadow-lg transition duration-500">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
        My Profile
        <span className="block w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-2 rounded-full"></span>
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Picture */}
        <div className="flex-shrink-0">
          <ProfilePic alt="Uviwe Sotyato" />
          <p className="text-center mt-2 text-gray-700 dark:text-gray-300 font-semibold">Uviwe Sotyato</p>
        </div>

        {/* Documents */}
        <div className="flex-1 space-y-6">
          {/* Resume */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaFilePdf className="text-red-600 text-xl" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Resume</span>
            </div>
            <a
              href="/documents/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              download
            >
              <FaDownload /> Download
            </a>
          </div>

          {/* ID Document */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FaIdBadge className="text-yellow-500 text-xl" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">South African ID</span>
            </div>
            <a
              href="/documents/id.jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
              download
            >
              <FaDownload /> View / Download
            </a>
          </div>

          {/* Certificates */}
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <FaCertificate className="text-green-500 text-xl" />
              <span className="text-gray-800 dark:text-gray-200 font-medium">Certificates</span>
            </div>
            <ul className="space-y-2 ml-8 list-disc">
              {certificates.map((cert, index) => (
                <li key={index}>
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    download
                  >
                    {cert.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
