import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const About = () => {
  const { personal } = portfolioData;

  const quotes = [
    "I debug with snacks – PRs get approved faster that way.",
    "Pixel-perfect? More like pixel-patient. I’ve got time.",
    "If it works on my machine, it works on your machine. Probably.",
    "Making the web faster, one div at a time."
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setQuoteIndex((i) => (i + 1) % quotes.length), 3500);
    return () => clearInterval(id);
  }, []);

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
            <motion.div key={quoteIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="p-4 rounded-xl bg-accent-50 dark:bg-gray-800 border border-accent-100 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 italic">“{quotes[quoteIndex]}”</p>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="aspect-square bg-gradient-to-br from-accent-100 to-accent-200 dark:from-accent-900/30 dark:to-accent-900/20 rounded-2xl p-2 shadow-2xl">
              <div className="w-full h-full rounded-xl overflow-hidden relative group">
                {personal.photo ? (
                  <img src={personal.photo} alt={personal.name} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1" />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-300">No photo provided</div>
                )}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background:"radial-gradient(600px circle at 30% 20%, rgba(255,255,255,0.2), transparent 60%)"}}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
