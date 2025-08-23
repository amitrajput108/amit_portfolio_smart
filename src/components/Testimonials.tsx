import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechCorp Solutions',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Amit is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding. He transformed our legacy system into a modern, scalable application.',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      hasVideo: true
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Working with Amit was a game-changer for our startup. He not only delivered excellent code but also provided valuable insights on architecture and best practices. Highly recommended!',
      hasVideo: false
    },
    {
      name: 'Emily Rodriguez',
      role: 'Design Lead',
      company: 'Creative Agency',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'Amit has an incredible ability to translate complex designs into pixel-perfect, responsive interfaces. His collaboration with our design team was seamless and professional.',
      hasVideo: false
    },
    {
      name: 'David Park',
      role: 'Senior Developer',
      company: 'WebDev Agency',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      text: 'As Amit\'s mentor during his internship, I watched him grow into an exceptional developer. His eagerness to learn and dedication to quality code made him stand out from day one.',
      hasVideo: false
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

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

  return (
    <section id="testimonials" className="py-20 bg-gray-800/30 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What People{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it - hear from the amazing people I've worked with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Main Testimonial Card */}
          <motion.div variants={itemVariants} className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl opacity-50 -z-10" />
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                    <Quote size={20} className="text-blue-400" />
                  </div>

                  {/* Video Section (if available) */}
                  {currentTestimonial.hasVideo && (
                    <div className="mb-8">
                      <div className="relative rounded-2xl overflow-hidden bg-gray-900/50 aspect-video">
                        <video
                          className="w-full h-full object-cover"
                          poster={currentTestimonial.image}
                          controls={isVideoPlaying}
                        >
                          <source src={currentTestimonial.videoUrl} type="video/mp4" />
                        </video>
                        
                        {!isVideoPlaying && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <button
                              onClick={() => setIsVideoPlaying(true)}
                              className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                            >
                              <Play size={24} className="text-white ml-1" />
                            </button>
                          </div>
                        )}
                      </div>
                      <p className="text-center text-sm text-gray-400 mt-2">
                        Video testimonial from {currentTestimonial.name}
                      </p>
                    </div>
                  )}

                  {/* Testimonial Text */}
                  <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 mt-16">
                    "{currentTestimonial.text}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center justify-center mb-6">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-blue-400/30"
                      />
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur opacity-30" />
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-semibold text-lg">{currentTestimonial.name}</h4>
                      <p className="text-blue-400 text-sm">{currentTestimonial.role}</p>
                      <p className="text-gray-400 text-sm">{currentTestimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>
              
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-400 scale-125'
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>

          {/* Intro Video Section */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Get to Know Me Better
              </h3>
              <p className="text-gray-400">
                Watch my introduction video to learn more about my journey and passion for development
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden bg-gray-900/50 aspect-video max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-110 cursor-pointer mb-4 mx-auto">
                    <Play size={32} className="text-white ml-1" />
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">Introduction Video</h4>
                  <p className="text-gray-400 text-sm">Learn about my journey, skills, and passion for web development</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;