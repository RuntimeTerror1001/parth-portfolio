import { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import Loader from '../components/Loader'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Robot from '../models/Robot'
import { About, Projects, Work_Experience, Tech, Contact} from './index'
import { div } from 'framer-motion/client'

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [robotScale, setRobotScale] = useState(null);
  const [robotPos, setRobotPos] = useState(null);
  
  const adjustRobot = () => {
    let screenScale = null;
    let screenPos = null;
    
    if (window.innerWidth < 480) {
      // Extra small screens - very small robot on right
      screenScale = [1.8, 1.8, 1.8];
      screenPos = [1.5, -2.8, 0]; 
    } 
    else if (window.innerWidth < 768) {
      // Small screens - small robot on right
      screenScale = [2.2, 2.2, 2.2];
      screenPos = [1.8, -2.8, 0]; 
    } 
    else if (window.innerWidth < 1024) {
      // Medium screens
      screenScale = [4.5, 4.5, 4.5];
      screenPos = [2.5, -3, 0]; 
    }
    else {
      // Large screens
      screenScale = [7, 7, 7];
      screenPos = [3, -3.5, 0]; 
    }
    
    return [screenScale, screenPos]
  }
  
  // Initialize robot scale and position
  useEffect(() => {
    const [initialScale, initialPos] = adjustRobot();
    setRobotScale(initialScale);
    setRobotPos(initialPos);
    
    // Show content more quickly
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Add window resize event listener
  useEffect(() => {
    const handleResize = () => {
      const [newScale, newPos] = adjustRobot();
      setRobotScale(newScale);
      setRobotPos(newPos);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div id='home'>
      {/* Grid layout with different column proportions based on screen size */}
      <div className="relative w-full h-screen grid grid-cols-[65%_35%] md:grid-cols-[60%_40%] lg:grid-cols-[55%_45%]">
        {/* Content section - takes more space on small screens */}
        <div className={`${showContent ? 'opacity-100' : 'opacity-0'} 
          transition-opacity duration-500 ease-in-out
          px-3 sm:px-6 md:px-12 lg:px-24 
          flex flex-col justify-center
          md:ml-12 lg:ml-24
          z-10`}>
          
          {/* Main heading - bigger on small screens */}
          <div>
            <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-bittersweet-500 neon-text">
              Hi! I am <br /> 
              <span className="text-bittersweet-500 neon-text">Parth Desai</span>
            </h1>
          </div>
          
          {/* Subheading - maintain good size on small screens */}
        <div className="mt-5 md:mt-8"> {/* Increased from mt-3 md:mt-4 */}
          <h2 className="text-lg sm:text-lg md:text-xl lg:text-2xl text-cornmilk-500">
            Bridging Robotics, AI, and Software Innovation: <br />
            where intelligent automation meets creative problem-solving
          </h2>
        </div>

        {/* Social links - good size on small screens */}
        <div className="mt-10 md:mt-16 flex gap-6"> {/* Increased from mt-4 md:mt-6 and gap-4 */}
          <a href="https://github.com/RuntimeTerror1001" target="_blank" rel="noopener noreferrer" 
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bittersweet-500 flex items-center justify-center
            hover:bg-raisin-500 hover:text-white transition-colors">
            <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://www.linkedin.com/in/parth-desai-021027/" target="_blank" rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-bittersweet-500 flex items-center justify-center
            hover:bg-raisin-500 hover:text-white transition-colors">
            <FaLinkedin className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>

        {/* Download CV button - good size on small screens */}
        <div className="mt-14 md:mt-20"> {/* Increased from mt-6 md:mt-8 */}
          <a href="./cv.pdf" download="Parth_Desai_CV.pdf" 
            className="bg-bittersweet-500 text-cornmilk-500 px-6 md:px-8 py-3 md:py-4 rounded-lg
            hover:bg-raisin-500 transition-colors text-base md:text-lg lg:text-xl font-medium">
            Download CV
          </a>
        </div>
      </div>  
        
        {/* Robot section - takes less space on small screens */}
        <div className={`${showContent ? 'opacity-100' : 'opacity-0'} 
          transition-opacity duration-500 ease-in-out delay-200
          flex items-center justify-center h-screen`}>
          {robotScale && robotPos && (
            <Canvas 
              camera={{ position: [0, 0, 5], fov: 75 }}
              className="w-full h-full">
              <ambientLight intensity={1.2} />
              <pointLight position={[10, 10, 10]} intensity={1.2} />
              <Suspense fallback={<Loader />}>
                <Robot 
                  scale={robotScale}
                  position={robotPos}
                  rotation={[0, -0.5, 0]}
                />
              </Suspense>
            </Canvas>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 w-full flex justify-center items-center z-20">
        <a href="#about">
          <div className="w-[24px] h-[40px] md:w-[28px] md:h-[48px] rounded-3xl border-2 border-cornmilk-500 flex justify-center items-center">
            <motion.div 
              animate={{y: [-8, 8, -8]}} 
              transition={{
                duration: 1.5, 
                repeat: Infinity, 
                repeatType: 'loop'
              }} 
              className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cornmilk-500" 
            />
          </div>
        </a>
      </div>

      <div id="about">
        <About/>
      </div>
      <div id="work_ex">
        <Work_Experience/>
      </div>
      <div id="tech">
        <Tech />
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
    </div>
  )
}

export default Home