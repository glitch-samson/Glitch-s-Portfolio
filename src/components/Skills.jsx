import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { skillsGrid } = portfolioData;
  const items = Object.entries(skillsGrid);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills <span className="bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">Grid</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The technologies and tools I use to deliver great user experiences
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map(([category, list], idx) => (
            <motion.div
              key={category}
              variants={{ hidden: { opacity: 0, scale: 0.95 }, show: { opacity: 1, scale: 1 } }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-3">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-800 dark:text-accent-300 font-medium hover:scale-105 hover:shadow-glow transition-transform"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
