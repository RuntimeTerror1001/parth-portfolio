import React from "react";
import { motion } from "framer-motion";

import { TechGrid } from "../components/TechGrid";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { techs } from "../constants";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Tech Stack.
        </h2>
      </motion.div>

      <div>
        <TechGrid technologies={techs} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");