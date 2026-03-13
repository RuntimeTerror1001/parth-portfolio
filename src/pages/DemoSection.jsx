import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause, FaExpand, FaChevronLeft, FaChevronRight, FaDownload } from 'react-icons/fa';
import { fadeIn } from '../utils/motion';
import { createPortal } from 'react-dom';

// Video Demo Component
const VideoDemo = ({ demo, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      animate="show"
      className="mb-8"
    >
      <h4 className="text-xl font-semibold text-cornmilk-500 mb-2">{demo.title}</h4>
      <p className="text-cornmilk-500 opacity-80 mb-4">{demo.description}</p>
      
      <div className="relative bg-raisin-500 rounded-lg overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-64 sm:h-80 object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          controls
        >
          <source src={demo.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Custom play overlay */}
        <div 
          className={`absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity duration-300 ${
            isPlaying ? 'opacity-0 pointer-events-none' : 'opacity-100 bg-black bg-opacity-30'
          }`}
          onClick={togglePlay}
        >
          <div className="w-16 h-16 bg-bittersweet-500 rounded-full flex items-center justify-center hover:bg-cornmilk-500 transition-colors duration-300">
            <FaPlay className="text-white text-xl ml-1" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Audio Demo Component with Waveform
const AudioDemo = ({ demo, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [waveformData, setWaveformData] = useState([]);
  const audioRef = useRef(null);

  // Generate mock waveform data (in real implementation, you'd analyze the audio)
  useEffect(() => {
    const generateWaveform = () => {
      const data = [];
      for (let i = 0; i < 100; i++) {
        data.push(Math.random() * 100);
      }
      setWaveformData(data);
    };
    generateWaveform();
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      animate="show"
      className="mb-8"
    >
      <h4 className="text-xl font-semibold text-cornmilk-500 mb-2">{demo.title}</h4>
      <p className="text-cornmilk-500 opacity-80 mb-4">{demo.description}</p>
      
      <div className="bg-raisin-500 rounded-lg p-6">
        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={demo.url} type="audio/wav" />
          <source src={demo.url} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {/* Waveform Visualization */}
        <div className="mb-4">
          <div className="flex items-end justify-between h-16 bg-raisin-900 rounded p-2">
            {waveformData.map((height, i) => {
              const isActive = progress > (i / waveformData.length) * 100;
              return (
                <div
                  key={i}
                  className={`w-1 rounded-t transition-colors duration-150 ${
                    isActive ? 'bg-bittersweet-500' : 'bg-cornmilk-500 opacity-30'
                  }`}
                  style={{ height: `${height}%` }}
                />
              );
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-bittersweet-500 rounded-full flex items-center justify-center hover:bg-cornmilk-500 transition-colors duration-300"
          >
            {isPlaying ? (
              <FaPause className="text-white" />
            ) : (
              <FaPlay className="text-white ml-1" />
            )}
          </button>
          
          <div className="flex-1">
            <div className="flex justify-between text-sm text-cornmilk-500 mb-1">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
            <div className="w-full bg-raisin-900 rounded-full h-2">
              <div
                className="bg-bittersweet-500 h-2 rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Image Gallery Component
const ImageDemo = ({ demo, index }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Lock body scroll when fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0); // Scroll to top
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFullscreen]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % demo.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + demo.images.length) % demo.images.length);
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      animate="show"
      className="mb-8"
    >
      <h4 className="text-xl font-semibold text-cornmilk-500 mb-2">{demo.title}</h4>
      <p className="text-cornmilk-500 opacity-80 mb-4">{demo.description}</p>
      
      <div className="relative bg-raisin-500 rounded-lg overflow-hidden">
        <img
          src={demo.images[currentImage].url}
          alt={demo.images[currentImage].caption || demo.title}
          className="w-full h-64 sm:h-80 object-contain cursor-pointer"
          onClick={() => setIsFullscreen(true)}
        />
        
        {/* Navigation arrows */}
        {demo.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-bittersweet-500 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
            >
              <FaChevronLeft className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-bittersweet-500 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
            >
              <FaChevronRight className="text-white" />
            </button>
          </>
        )}

        {/* Expand button */}
        <button
          onClick={() => setIsFullscreen(true)}
          className="absolute top-4 right-4 w-10 h-10 bg-bittersweet-500 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
        >
          <FaExpand className="text-white" />
        </button>

        {/* Image counter */}
        {demo.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full text-sm">
            {currentImage + 1} / {demo.images.length}
          </div>
        )}
      </div>

      {/* Image caption */}
      {demo.images[currentImage].caption && (
        <p className="text-cornmilk-500 opacity-70 text-sm mt-2 text-center">
          {demo.images[currentImage].caption}
        </p>
      )}

      {/* Fullscreen modal */}
      {isFullscreen && createPortal(
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-[9999] flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-bittersweet-500 transition-colors duration-300 z-[10000]"
          >
            ×
          </button>
          
          <img
            src={demo.images[currentImage].url}
            alt={demo.images[currentImage].caption || demo.title}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          
          {/* Navigation in fullscreen */}
          {demo.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-bittersweet-500 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
              >
                <FaChevronLeft className="text-white text-xl" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-bittersweet-500 bg-opacity-80 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300"
              >
                <FaChevronRight className="text-white text-xl" />
              </button>
            </>
          )}
        </div>,
        document.body  // Render directly in body, not in component tree
      )}
    </motion.div>
  );
};

// Iframe Demo Component
const IframeDemo = ({ demo, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      animate="show"
      className="mb-8"
    >
      <h4 className="text-xl font-semibold text-cornmilk-500 mb-2">{demo.title}</h4>
      <p className="text-cornmilk-500 opacity-80 mb-4">{demo.description}</p>
      
      <div className="bg-raisin-500 rounded-lg overflow-hidden">
        <iframe
          src={demo.url}
          className="w-full h-96"
          frameBorder="0"
          allowFullScreen
          title={demo.title}
        />
      </div>
      
      {demo.external_link && (
        <div className="mt-4">
          <a
            href={demo.external_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-bittersweet-500 hover:text-cornmilk-500 transition-colors duration-300"
          >
            <span>Open in new tab</span>
            <FaExpand className="w-4 h-4" />
          </a>
        </div>
      )}
    </motion.div>
  );
};

// Main Demo Section Component
const DemoSection = ({ project }) => {
  if (!project.demos || project.demos.length === 0) {
    return (
      <motion.div
        variants={fadeIn("up", "spring", 0.6, 0.75)}
        initial="hidden"
        animate="show"
        className="mb-8"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-cornmilk-500 mb-4">
          Demo
        </h2>
        <div className="bg-raisin-500 rounded-lg p-8 text-center">
          <p className="text-cornmilk-500 text-lg mb-4">Demo Coming Soon</p>
          <p className="text-cornmilk-500 opacity-70">
            Interactive demonstrations are being prepared for this project.
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.6, 0.75)}
      initial="hidden"
      animate="show"
      className="mb-8"
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-cornmilk-500 mb-6">
        Demo{project.demos.length > 1 ? 's' : ''}
      </h2>
      
      {project.demos.map((demo, index) => {
        switch (demo.type) {
          case 'video':
            return <VideoDemo key={index} demo={demo} index={index} />;
          case 'audio':
            return <AudioDemo key={index} demo={demo} index={index} />;
          case 'images':
            return <ImageDemo key={index} demo={demo} index={index} />;
          case 'iframe':
            return <IframeDemo key={index} demo={demo} index={index} />;
          default:
            return (
              <div key={index} className="mb-8">
                <p className="text-cornmilk-500">Unsupported demo type: {demo.type}</p>
              </div>
            );
        }
      })}
    </motion.div>
  );
};

export default DemoSection;