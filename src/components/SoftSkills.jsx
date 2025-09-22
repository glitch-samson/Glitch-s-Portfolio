import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const icons = ['💬','🤝','🧩','🧠','🧑‍🏫','🔁','⏱️','😊','🤣'];

const SoftSkills = () => {
  const { softSkills = [] } = portfolioData;

  return (
    <section id="soft-skills" className="py-20 bg-gradient-to-b from-accent-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Soft <span className="bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The people-powered superpowers that keep projects fun and on track
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {softSkills.map((skill, i) => (
            <motion.div
              key={skill}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.05, rotate: (i % 2 ? -2 : 2) }}
              transition={{ type: 'spring', stiffness: 250, damping: 18 }}
              className="flex items-center p-5 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-glow"
            >
              <span className="text-2xl mr-4 select-none">{icons[i % icons.length]}</span>
              <span className="font-semibold text-gray-900 dark:text-white">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SoftSkills;
