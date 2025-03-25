import React, { useState } from "react";
import { motion } from "framer-motion";

const TechCard = ({ icon, name }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <motion.div
      className="w-28 h-28 rounded-xl flex flex-col items-center justify-center bg-white/10 border border-white/20 relative"
      whileHover={{ 
        scale: 1.2,
        zIndex: 10
      }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3
      }}
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
    >
      {icon ? (
        <motion.img 
          src={icon} 
          alt={name || "tech"}
          className="w-16 h-16 object-contain"
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "mirror"
          }}
        />
      ) : (
        <div className="text-white text-sm">Missing Icon</div>
      )}
      
      {isHovering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 rounded-xl">
          <p className="text-white text-center font-medium px-2">{name || "Tech"}</p>
        </div>
      )}
    </motion.div>
  );
};

const TechGrid = ({ technologies }) => {
  // Convert single item to array if needed
  const techArray = technologies ? 
    (Array.isArray(technologies) ? technologies : [{ icon: technologies }]) : 
    [];
  
  // Add console log to help debug
  console.log("TechGrid rendering with:", techArray);
  
  if (techArray.length === 0) {
    return (
      <div className="flex justify-center items-center p-10 border border-red-500 bg-red-500/10 rounded-lg">
        <p className="text-white">No technologies to display. Please check your data.</p>
      </div>
    );
  }
  
  return (
    <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto py-10 border border-white/10 rounded-lg">
      {techArray.map((tech, index) => {
        // Handle both object format and simple string format
        const iconSrc = typeof tech === 'object' ? tech.icon : tech;
        const name = typeof tech === 'object' && tech.name ? tech.name : `Tech ${index + 1}`;
        
        return (
          <TechCard 
            key={index}
            icon={iconSrc}
            name={name} 
          />
        );
      })}
    </div>
  );
};

export {TechGrid};