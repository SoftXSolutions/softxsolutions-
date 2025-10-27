import React, { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';

const AnimatedNumber = ({ value, delay = 0, suffix = "" }) => {
  const ref = useRef(null);
  const spring = useSpring(0, { 
    mass: 1.2, 
    stiffness: 60, 
    damping: 25,
    restDelta: 0.001
  });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      spring.set(value);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [value, spring, delay]);
  
  useEffect(() => {
    const unsub = spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = String(Math.round(latest)) + suffix;
      }
    });
    return () => unsub();
  }, [spring, suffix]);
  
  return <span ref={ref}>0{suffix}</span>;
};

const About = () => {
  // Ultra-smooth animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        ease: "easeInOut"
      }
    }
  };

  const slideFromLeft = {
    hidden: { 
      x: -80, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideFromRight = {
    hidden: { 
      x: 80, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const fadeInUp = {
    hidden: { 
      y: 40, 
      opacity: 0,
      scale: 0.98
    },
    visible: { 
      y: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.4, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scaleIn = {
    hidden: { 
      scale: 0.8, 
      opacity: 0
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.15
      }
    }
  };

  const statsVariants = {
    hidden: { 
      scale: 0.5, 
      opacity: 0,
      y: 20
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.3
      }
    }
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-gradient-to-bl from-softx-orange via-softx-orange/40 to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div variants={slideFromLeft}>
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-softx-white mb-6"
              variants={fadeInUp}
            >
              About <span className="text-softx-orange">SoftXSol</span>
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-300 mb-6 leading-relaxed"
              variants={fadeInUp}
            >
              We are a leading software development company dedicated to transforming businesses through innovative technology solutions. Our team of expert developers, designers, and strategists work together to deliver exceptional digital experiences.
            </motion.p>
            <motion.p 
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              variants={fadeInUp}
            >
              With years of experience in the industry, we have successfully delivered hundreds of projects across various domains, helping businesses achieve their digital transformation goals.
            </motion.p>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
            >
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-softx-orange mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.5, 
                    duration: 0.8, 
                    type: "spring", 
                    bounce: 0.5 
                  }}
                >
                  <AnimatedNumber value={500} delay={600} suffix="+" />
                </motion.div>
                <div className="text-gray-300">Projects Completed</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-softx-orange mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.7, 
                    duration: 0.8, 
                    type: "spring", 
                    bounce: 0.5 
                  }}
                >
                  <AnimatedNumber value={50} delay={800} suffix="+" />
                </motion.div>
                <div className="text-gray-300">Happy Clients</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-softx-orange mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.9, 
                    duration: 0.8, 
                    type: "spring", 
                    bounce: 0.5 
                  }}
                >
                  <AnimatedNumber value={5} delay={1000} suffix="+" />
                </motion.div>
                <div className="text-gray-300">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                variants={statsVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                <motion.div 
                  className="text-3xl font-bold text-softx-orange mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 1.1, 
                    duration: 0.8, 
                    type: "spring", 
                    bounce: 0.5 
                  }}
                >
                  <AnimatedNumber value={24} delay={1200} suffix="/7" />
                </motion.div>
                <div className="text-gray-300">Support</div>
              </motion.div>
            </motion.div>

            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-softx-orange text-softx-white px-8 py-4 rounded-lg font-semibold text-lg"
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 25px rgba(255, 107, 0, 0.4)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div 
            className="relative"
            variants={slideFromRight}
          >
            <motion.div
              variants={scaleIn}
              whileHover={{ 
                scale: 1.02,
                y: -10,
                transition: { duration: 0.4, ease: "easeInOut" }
              }}
            >
              <ImagePlaceholder
                src="" // Add actual about image path here
                alt="About SoftXSol"
                className="w-full h-96 lg:h-[500px] rounded-2xl object-cover"
                placeholderText="About Section Image"
              />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-24 h-24 bg-softx-orange/20 rounded-full blur-xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 1.5, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-softx-orange/10 rounded-full blur-2xl"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;