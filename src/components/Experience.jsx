import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { useParallaxTilt } from '../hooks/useParallaxTilt';

const ExperienceItem = ({ job, index }) => {
  const tilt = useParallaxTilt({ maxTilt: 10, scale: 1.02 });
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-accent-700 to-accent-500 rounded-full transform md:-translate-x-1/2 shadow-lg z-10">
        <div className="absolute inset-1 bg-white dark:bg-gray-800 rounded-full"></div>
      </div>

      {/* Content */}
      <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
        <div
          ref={tilt.ref}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          style={tilt.style}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700 preserve-3d"
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <Calendar className="h-4 w-4 mr-1" />
              {job.period}
            </div>
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <MapPin className="h-4 w-4 mr-1" />
              {job.location}
            </div>
          </div>

          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {job.title}
          </h3>

          <div className="flex items-center mb-4">
            <span className="text-lg font-semibold bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">
              {job.company}
            </span>
            <ChevronRight className="h-4 w-4 text-gray-400 ml-2" />
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {job.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-800 dark:text-accent-300 text-sm rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A journey through my professional career and the impact I've made
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-700 via-accent-600 to-accent-500 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <ExperienceItem key={index} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
