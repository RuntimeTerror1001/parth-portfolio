import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { projects } from '../constants';
import ProjectDetail from './ProjectDetail';

const ProjectDetailPage = () => {
  const { projectSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [referrerPath, setReferrerPath] = useState('/projects');

  useEffect(() => {
    // Check if user came from home page
    const checkReferrer = () => {
      // Check location state first
      if (location.state?.from) {
        setReferrerPath(location.state.from);
        return;
      }
      
      // Check if referrer contains the home page with projects section
      if (document.referrer.includes('/#projects') || 
          document.referrer.includes('/#/') || 
          document.referrer.endsWith('/') ||
          !document.referrer) {
        setReferrerPath('/#projects');
      }
    };

    checkReferrer();
  }, [location]);

  // Function to convert project name to slug
  const nameToSlug = (name) => {
    return name.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
      .trim();
  };

  // Find project by slug
  const project = projects.find(p => nameToSlug(p.name) === projectSlug);

  const handleClose = () => {
    // Navigate based on where user came from
    if (referrerPath === '/#projects') {
      // Go back to home page and scroll to projects section
      navigate('/');
      // Small delay to ensure navigation completes before scrolling
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Default behavior - go to projects page
      navigate('/projects');
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-bittersweet-500 mb-4">Project Not Found</h1>
          <p className="text-cornmilk-500 mb-6">The project you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/projects')}
            className="bg-bittersweet-500 text-cornmilk-500 px-6 py-3 rounded-lg hover:bg-raisin-500 transition-colors"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return <ProjectDetail project={project} onClose={handleClose} />;
};

export default ProjectDetailPage;