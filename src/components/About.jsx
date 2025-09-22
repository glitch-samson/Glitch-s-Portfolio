import { Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const About = () => {
  const { personal } = portfolioData;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {personal.bio}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-accent-700 dark:text-accent-400 font-semibold">Location:</span>
                <span className="text-gray-700 dark:text-gray-300">{personal.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent-700 dark:text-accent-400 font-semibold">Email:</span>
                <a href={`mailto:${personal.email}`} className="text-gray-700 dark:text-gray-300 hover:text-accent-700 dark:hover:text-accent-400 transition-colors">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent-700 dark:text-accent-400 font-semibold">Phone:</span>
                <a href={`tel:${personal.phone}`} className="text-gray-700 dark:text-gray-300 hover:text-accent-700 dark:hover:text-accent-400 transition-colors">
                  {personal.phone}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-900/20 rounded-2xl p-8 shadow-2xl">
              <div className="w-full h-full bg-white/60 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm flex items-center justify-center group">
                <div className="text-center transform transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-105">
                  <div className="w-24 h-24 bg-gradient-to-br from-accent-700 to-accent-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Code2 className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Profile Photo
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Replace with a professional headshot when available.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
