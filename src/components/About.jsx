import { Code2, Users, Award, Coffee } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personal } = portfolioData;

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '15+', label: 'Happy Clients' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Learn more about my journey, passion, and the values that drive my work
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate Developer & Problem Solver
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a dedicated full-stack developer with a passion for creating innovative solutions 
                that make a real difference. My journey in software development began over 5 years ago, 
                and I've been constantly evolving my skills to stay at the forefront of technology.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences that are 
                not just functional, but delightful. Whether I'm working on a complex backend system 
                or a beautiful frontend interface, I approach every project with curiosity, attention 
                to detail, and a commitment to excellence.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community through 
                blog posts and mentoring.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Location:</span>
                <span className="text-gray-600 dark:text-gray-400">{personal.location}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Email:</span>
                <a href={`mailto:${personal.email}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">Phone:</span>
                <a href={`tel:${personal.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {personal.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-2xl p-8 shadow-2xl">
              <div className="w-full h-full bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <Code2 className="h-12 w-12 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Always Learning
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Committed to continuous improvement and staying current with the latest technologies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg mb-4 shadow-lg">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;