import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Award, Briefcase } from 'lucide-react';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    // {
    //   title: 'Senior Full Stack Developer',
    //   company: 'TechCorp Solutions',
    //   location: 'Mumbai, India',
    //   period: '2023 - Present',
    //   type: 'work',
    //   description: 'Leading a team of 5 developers in building scalable web applications. Implemented microservices architecture and improved system performance by 40%.',
    //   achievements: [
    //     'Led migration to React 18 and Next.js 13',
    //     'Reduced bundle size by 35% through optimization',
    //     'Mentored 3 junior developers'
    //   ],
    //   technologies: ['React', 'Node.js', 'AWS', 'Docker']
    // },
    {
      title: 'Full Stack Developer',
      company: 'Remote',
      location: 'Remote',
      period: '2023 - 2024',
      type: 'Studying',
      description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create pixel-perfect user interfaces.',
      achievements: [
        'Built 15+ responsive web applications',
        'Integrated payment gateways and APIs',
        'Improved code quality with testing frameworks'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Stripe']
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Remote',
      location: 'Remote',
      period: '2022 - 2023',
      type: 'work',
      description: 'Started my professional journey as an intern, learning industry best practices and working on real client projects.',
      achievements: [
        'Converted 10+ Figma designs to React components',
        'Learned version control and team collaboration',
        'Received full-time offer after internship'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      title: 'Bachelor of Technology',
      company: 'Maharishi Markandeshwar Demeed to be University',
      location: 'Haryana, Ambala, India',
      period: '2022 - 2026',
      type: 'education',
      description: 'Computer Science Engineering with focus on web technologies and software development.',
      achievements: [
        'CGPA: 7/10',
        'Problem Solver-HackerRank',
        'Winner of multiple hackathons'
      ],
      technologies: ['Java', 'Python', 'Data Structures', 'Algorithms']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="timeline" className="py-20 bg-gray-900/30 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Follow my professional journey and see how I've grown as a developer
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-gray-900 z-10" />
              
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="group relative">
                  {/* Glassmorphism Card */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl hover:bg-white/10 transition-all duration-500 hover:scale-105">
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          exp.type === 'work' 
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30' 
                            : 'bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30'
                        }`}>
                          {exp.type === 'work' ? (
                            <Briefcase size={20} className="text-blue-400" />
                          ) : (
                            <Award size={20} className="text-green-400" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {exp.title}
                          </h3>
                          <p className="text-blue-400 font-medium">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm text-blue-300 rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;