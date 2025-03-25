import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from "../styles";
import { interests } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const InterestCard = ({ index, title, icon }) => (
  <Tilt className="w-[200px]">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-bittersweet-500 p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-raisin-500 rounded-[20px] py-5 px-8 min-h-[220px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text--cornmilk-500 text-lg font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-400 text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled robotics software developer with experience in C++, Python, MATLAB and frameworks
        like ROS2 along with simulation tools like Gazebo, RViz and MuJoCo. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life! <br></br>
        Some of the domains that I love to work on are:
      </motion.p>

      <div className="mt-20 flex flex-row flex-wrap justify-center md:justify-start gap-6">
        {interests.map((interest, index) => (
          <InterestCard key={interest.title} index={index} {...interest} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");