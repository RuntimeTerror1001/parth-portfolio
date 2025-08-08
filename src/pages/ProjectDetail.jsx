import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { fadeIn, textVariant } from '../utils/motion';
import DemoSection from './DemoSection';

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-raisin-900 bg-opacity-98 backdrop-blur-xl z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
          {/* Header with close button */}
          <motion.div
            variants={fadeIn("down", "spring", 0, 0.75)}
            initial="hidden"
            animate="show"
            className="flex items-center justify-between mb-8"
          >
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-bittersweet-500 hover:text-cornmilk-500 transition-colors duration-300"
            >
              <FaArrowLeft className="w-5 h-5" />
              <span className="text-lg font-medium">Back to Projects</span>
            </button>
          </motion.div>

          {/* Project content */}
          <motion.div
            variants={fadeIn("up", "spring", 0.1, 0.75)}
            initial="hidden"
            animate="show"
            className="bg-tertiary rounded-2xl p-6 sm:p-8 lg:p-12"
          >
            {/* Project title and tags */}
            <div className="mb-8">
              <motion.h1
                variants={textVariant()}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-bittersweet-500 neon-text mb-4"
              >
                {project.name}
              </motion.h1>
            </div>

            {/* Project image */}
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              initial="hidden"
              animate="show"
              className="mb-8"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>

            {/* Project description */}
            <motion.div
              variants={fadeIn("up", "spring", 0.3, 0.75)}
              initial="hidden"
              animate="show"
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-cornmilk-500 mb-4">
                Project Overview
              </h2>
              <div className="space-y-3">
                {project.description?.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-bittersweet-500 mt-2 flex-shrink-0"></div>
                    <p className="text-cornmilk-500 text-lg leading-relaxed">{point.trim()}</p>
                  </div>
                )) || (
                  <p className="text-cornmilk-500 text-lg leading-relaxed">
                    {project.points}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Key Features section */}
            <motion.div
              variants={fadeIn("up", "spring", 0.4, 0.75)}
              initial="hidden"
              animate="show"
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-cornmilk-500 mb-4">
                Key Features
              </h2>
              <div className="space-y-3">
                {project.key_features?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-bittersweet-500 mt-1 flex-shrink-0">
                      {feature.startsWith('✅') ? '✅' : '•'}
                    </div>
                    <p className="text-cornmilk-500 text-lg leading-relaxed">
                      {feature.startsWith('✅') ? feature.substring(2).trim() : feature.trim()}
                    </p>
                  </div>
                )) || (
                  <p className="text-cornmilk-500">
                    This project demonstrates advanced technical skills and innovative problem-solving approaches.
                  </p>
                )}
              </div>
            </motion.div>

            {/* Demo Section - only show if demos exist */}
            {project.demos && project.demos.length > 0 && (
              <DemoSection project={project} />
            )}

            {/* Technical Stack */}
            <motion.div
              variants={fadeIn("up", "spring", 0.5, 0.75)}
              initial="hidden"
              animate="show"
              className="mb-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-cornmilk-500 mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <div
                    key={`tech-${tech.name}`}
                    className="px-4 py-2 rounded-lg bg-raisin-500 border border-bittersweet-500"
                  >
                    <span className={`bittersweet-500 font-medium`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action buttons */}
            <motion.div
              variants={fadeIn("up", "spring", 0.6, 0.75)}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={project.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3 bg-bittersweet-500 text-cornmilk-500 rounded-lg hover:bg-raisin-500 transition-colors duration-300 font-medium"
              >
                <FaGithub className="w-5 h-5" />
                View Source Code
              </a>
              
              {project.demo_link && (
                <a
                  href={project.demo_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-6 py-3 bg-transparent border-2 border-bittersweet-500 text-bittersweet-500 rounded-lg hover:bg-bittersweet-500 hover:text-cornmilk-500 transition-colors duration-300 font-medium"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Live Demo
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;