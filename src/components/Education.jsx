import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-accent-700 to-accent-500 bg-clip-text text-transparent">Education & Certifications</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My academic journey and certifications that strengthened my foundation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 hover:scale-105"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent-700 to-accent-500 rounded-lg flex items-center justify-center shadow-lg mr-4">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-accent-700 dark:text-accent-400 font-semibold">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="inline-flex items-center px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-800 dark:text-accent-300 text-sm rounded-full font-medium">
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {edu.location}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  {edu.period}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-3">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="font-semibold text-gray-900 dark:text-white">Key Highlights</span>
                </div>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start text-gray-600 dark:text-gray-400"
                    >
                      <div className="w-2 h-2 bg-accent-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
