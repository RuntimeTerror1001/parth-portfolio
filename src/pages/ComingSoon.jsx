import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCog, FaCode } from 'react-icons/fa';
import { fadeIn, textVariant } from '../utils/motion';

const ComingSoon = ({ title = "Coming Soon", subtitle = "Exciting new content is on the way!" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-primary"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated icons */}
        <motion.div
          variants={fadeIn("down", "spring", 0, 0.75)}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <div className="flex justify-center gap-8 mb-8">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="text-bittersweet-500 text-4xl sm:text-5xl"
            >
              <FaCog />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                scale: [1, 1.1, 1]
              }}
              transition={{
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="text-bittersweet-500 text-4xl sm:text-5xl"
            >
              <FaRocket />
            </motion.div>
            
            <motion.div
              animate={{ 
                rotate: [-15, 15, -15],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }
              }}
              className="text-bittersweet-500 text-4xl sm:text-5xl"
            >
              <FaCode />
            </motion.div>
          </div>
        </motion.div>

        {/* Main content */}
        <motion.div
          variants={textVariant()}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-bittersweet-500 neon-text mb-6">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-cornmilk-500 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 0.75)}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          <p className="text-lg text-cornmilk-500 max-w-xl mx-auto leading-relaxed opacity-80">
            I'm working hard to bring you something amazing. Stay tuned for updates!
          </p>
        </motion.div>

        {/* Animated progress indicator */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          initial="hidden"
          animate="show"
          className="mb-8"
        >
          <div className="max-w-md mx-auto">
            <div className="flex justify-between items-center mb-2">
              <span className="text-cornmilk-500 text-sm font-medium">Progress</span>
              <span className="text-bittersweet-500 text-sm font-medium">In Development</span>
            </div>
            <div className="w-full bg-raisin-500 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-bittersweet-500 to-bittersweet-400 h-2 rounded-full"
                animate={{ width: ["0%", "75%", "60%", "85%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
                className="w-3 h-3 bg-bittersweet-500 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ComingSoon;