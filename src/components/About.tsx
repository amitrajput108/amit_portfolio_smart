import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const services = [
    {
      icon: Code,
      title: 'Full Stack Development',
      description: 'Building robust web applications using modern frameworks and technologies.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces and experiences.',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, scalability, and user experience.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively with cross-functional teams to deliver quality products.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8 group">
              <div className="relative">
                {/* Glassmorphism Frame */}
                <div className="relative w-32 h-32 rounded-2xl p-0.5 transform rotate-3 group-hover:rotate-0 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 to-purple-400/50 rounded-2xl" />
                  <div className="absolute inset-0.5 bg-gray-900/80 backdrop-blur-xl rounded-2xl" />
                  
                  <img
                    src="src/components/amit.jpg"
                    alt="Amit at work"
                    className="relative w-full h-full object-cover rounded-2xl border border-white/10"
                  />
                  
                  {/* Glassmorphism Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent rounded-2xl" />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              I'm a passionate Full Stack Web Developer with 3+ years of experience in creating 
              digital solutions that make a difference. I specialize in React, Node.js, and modern 
              web technologies, with a keen eye for design and user experience.
            </p>
            
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open 
              source projects, or sharing knowledge with the developer community. I believe in 
              continuous learning and staying updated with the latest industry trends.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;