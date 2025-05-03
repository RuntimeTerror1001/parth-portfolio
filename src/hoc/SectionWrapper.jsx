import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

const StarWrapper = (Component, idName) =>
  function HOC() {
    const isMobile = useMediaQuery("(max-width: 639px)");
    const threshold = isMobile ? 0 : 0.25;
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: threshold }}
        id={idName}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;