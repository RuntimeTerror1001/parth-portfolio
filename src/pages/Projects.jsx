import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { github } from "../assets/icons";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import ProjectDetail from "./ProjectDetail";

const ProjectCard = ({
  index,
  name,
  points,
  tags,
  image,
  source_code_link,
  onProjectClick,
  project
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl cursor-pointer hover:opacity-90 transition-opacity duration-300'
            onClick={() => onProjectClick(project)}
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 
            className={`font-bold text-[24px] cursor-pointer transition-colors duration-300 ${
              isHovered ? 'text-cornmilk-500' : 'text-bittersweet-500'
            }`}
            onClick={() => onProjectClick(project)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {name}
          </h3>
          <p className='mt-2 text-secondary text-[14px] text-cornmilk-500'>{points}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2 text-bittersweet-500'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to convert project name to URL slug
  const nameToSlug = (name) => {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  const handleProjectClick = (project) => {
    const slug = nameToSlug(project.name);
    
    // Check if we're on the projects page (modal behavior)
    if (window.location.hash === '#/projects') {
      setSelectedProject(project);
    } else {
      // Navigate to dedicated project page with state indicating where we came from
      navigate(`/project/${slug}`, {
        state: { 
          from: location.pathname === '/' ? '/#projects' : location.pathname 
        }
      });
    }
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project}
            project={project}
            onProjectClick={handleProjectClick}
          />
        ))}
      </div>

      {/* Project Detail Modal - only show when on projects page */}
      {selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onClose={handleCloseProject}
        />
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");