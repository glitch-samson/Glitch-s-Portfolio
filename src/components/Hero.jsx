import { ArrowDown } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { useParallaxTilt } from '../hooks/useParallaxTilt';

const Hero = () => {
  const { personal } = portfolioData;

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const tilt = useParallaxTilt({ maxTilt: 10, scale: 1.02, shine: false });
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-gray-900 perspective-1000">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-10 -left-10 w-72 h-72 bg-accent-200/50 dark:bg-accent-900/20 rounded-full blur-3xl"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-10 -right-10 w-96 h-96 bg-accent-300/40 dark:bg-accent-900/20 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-24 h-24 bg-accent-400/30 rounded-xl blur-[10px]"
          animate={{ x: [0, 30, -10, 0], y: [0, -10, 10, 0], rotate: [0, 15, -10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          ref={tilt.ref}
          onMouseMove={tilt.onMouseMove}
          onMouseLeave={tilt.onMouseLeave}
          style={tilt.style}
          whileHover={{ z: 30 }}
          className="space-y-8 preserve-3d"
        >
          {/* Profile Initials */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="relative inline-block">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-accent-700 to-accent-500 p-1 shadow-2xl">
              {personal.photo ? (
                <img src={personal.photo} alt={personal.name} className="w-full h-full rounded-full object-cover" />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-4xl md:text-5xl font-bold text-gray-700 dark:text-gray-200">
                  {personal.name.split(' ').map(n => n[0]).join('')}
                </div>
              )}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 ring-3d-a rounded-full"></div>
                <div className="absolute inset-0 ring-3d-b rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <div className="space-y-4">
            <motion.h1 variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white">
              <span className="bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              {personal.title}
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {personal.tagline}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }} className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 bg-accent-700 hover:bg-accent-800 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View Portfolio
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700 hover:text-accent-700 dark:hover:text-accent-400"
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollTo('about')}
          className="animate-bounce p-2 text-gray-700 dark:text-gray-300 hover:text-accent-700 dark:hover:text-accent-400 transition-colors duration-200"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
