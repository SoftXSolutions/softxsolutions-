'use client';
import { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import laptopImage from '../assets/images/laptop.png';

const AnimatedNumber = ({ value, delay = 0 }) => {
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
        ref.current.textContent = String(Math.round(latest));
      }
    });
    return () => unsub();
  }, [spring]);
  
  return <span ref={ref}>0</span>;
};

const Hero = () => {
  // Ultra-smooth animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: "easeInOut"
      }
    }
  };

  const slideFromLeft = {
    hidden: { 
      x: -120, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.5, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom bezier for ultra-smooth motion
      }
    }
  };

  const slideFromRight = {
    hidden: { 
      x: 120, 
      opacity: 0,
      scale: 0.95
    },
    visible: { 
      x: 0, 
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 1.5, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const scaleIn = {
    hidden: { 
      scale: 0.7, 
      opacity: 0,
      y: 20
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 1.8, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.2
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

  return (
    <motion.section 
      className="relative min-h-screen overflow-hidden pt-16 lg:pt-20 font-primary"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 h-full">

        {/* Mobile Layout */}
        <div className="block md:hidden text-center py-8">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            variants={slideFromLeft}
          >
            Your Vision
          </motion.h1>

          <div className="mb-6 px-4">
            <motion.img
              src={laptopImage}
              alt="SoftXSol Laptop Dashboard"
              className="w-full max-w-xs mx-auto h-auto object-contain drop-shadow-2xl"
              variants={scaleIn}
            />
          </div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-8"
            variants={slideFromRight}
          >
            Our Code
          </motion.h2>

          {/* Mobile Info Cards */}
          <div className="space-y-4 px-4">
            <div className="bg-transparent p-4">
              <h3 className="text-softx-orange font-bold text-lg mb-2">SOFTXSOLUTIONS</h3>
              <p className="text-gray-300 text-sm">We can provide solutions for every problem in your life</p>
            </div>

            <motion.div
              className="bg-transparent p-4 text-center"
              style={{ clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, 0% 100%)' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedNumber value={5} delay={800} />
                <span>+</span>
              </div>
              <div className="text-gray-300 text-sm">Years Of Experience</div>
            </motion.div>

            <div className="bg-transparent p-4">
              <p className="text-gray-300 text-sm mb-4">Let's create something amazing together with SoftXSolutions</p>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-softx-orange text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-softx-orange-light transition-all duration-300 w-full"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative w-full min-h-screen">

          {/* Main Heading - Top Left, very large and behind laptop */}
          <div className="absolute top-10 left-6 xl:left-12 z-10 pointer-events-none select-none">
            <motion.h1
              className="text-[12vw] lg:text-[10vw] font-extrabold text-white/90 leading-none tracking-tight"
              variants={slideFromLeft}
            >
              Your Vision
            </motion.h1>
          </div>

          {/* Subheading - Bottom Center, very large and behind laptop (no wrap) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none">
            <motion.h2
              className="text-[10vw] lg:text-[8vw] font-extrabold text-white/90 leading-none tracking-tight whitespace-nowrap ml-12"
              variants={slideFromRight}
            >
              Our Code
            </motion.h2>
          </div>

          {/* Central Laptop Image - Above headings for overlap */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <motion.img
              src={laptopImage}
              alt="SoftXSol Laptop Dashboard"
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
              variants={scaleIn}
            />
            {/* Fallback placeholder */}
            <div className="hidden w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-80 bg-gradient-to-br from-softx-orange/20 to-softx-orange/5 border-2 border-dashed border-softx-orange/30 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-softx-orange text-4xl mb-4">💻</div>
                <p className="text-white text-xl font-medium">Laptop Image</p>
                <p className="text-gray-400 text-sm mt-2">Place laptop.png in /assets/images/</p>
              </div>
            </div>
          </div>

          {/* Transparent Info Boxes - Better positioned with more space */}

          {/* Top Left Info Box - Web Development */}
          <motion.div 
            className="absolute top-52 left-6 lg:left-12 xl:left-20 z-30"
            variants={containerVariants}
          >
            <ul className="space-y-4 text-white/70 text-sm lg:text-base tracking-wide">
              <motion.li 
                className="hover:text-orange-500 transition-colors duration-500"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  x: 10,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                Web Development
              </motion.li>
              <motion.li 
                className="hover:text-orange-500 transition-colors duration-500"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  x: 10,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                AI Automations
              </motion.li>
              <motion.li 
                className="hover:text-orange-500 transition-colors duration-500"
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05, 
                  x: 10,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
              >
                App Development
              </motion.li>
            </ul>
          </motion.div>


          {/* Top Right Info Box - SOFTXSOLUTIONS */}
          <div className="absolute top-32 right-4 lg:right-8 xl:right-16 z-30 max-w-xs">
            <motion.div
              className="bg-transparent px-6 py-5 border border-white/20 rounded-2xl"
              variants={slideFromRight}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.4, ease: "easeInOut" }
              }}
            >
              <motion.h3 
                className="text-white font-semibold tracking-wide text-base lg:text-lg mb-2"
                variants={fadeInUp}
              >
                SOFTXSOLUTIONS
              </motion.h3>
              <motion.p 
                className="text-gray-300 text-xs lg:text-sm leading-relaxed"
                variants={fadeInUp}
              >
                We can provide solutions for every problem in your life
              </motion.p>
            </motion.div>
          </div>

          {/* Middle Right Info Box - Experience */}
          <div className="absolute top-1/2 right-4 lg:right-8 xl:right-16 transform -translate-y-1/2 z-30">
            <motion.div
              className="bg-transparent px-8 py-6 text-center border border-white/20 rounded-2xl"
              variants={scaleIn}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                transition: { duration: 0.4, ease: "easeInOut" }
              }}
            >
              <motion.div 
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 1.2, 
                  duration: 1.0, 
                  type: "spring", 
                  bounce: 0.4,
                  ease: "easeInOut"
                }}
              >
                <AnimatedNumber value={5} delay={1200} />
                <span>+</span>
              </motion.div>
              <motion.div 
                className="text-gray-300 text-xs lg:text-sm"
                variants={fadeInUp}
              >
                Years Of Experience
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Left Info Box - App Development (moved up to avoid overlap) */}
          <div className="hidden">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
              <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">App Development</h3>
              <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">Cross-platform mobile applications</p>
            </div>
          </div>

          {/* Bottom Left CTA Button - Better positioned */}
          <motion.div 
            className="absolute bottom-12 left-6 lg:left-12 xl:left-20 z-30 max-w-[280px]"
            variants={slideFromLeft}
          >
            <motion.div 
              className="bg-transparent p-5 border border-white/20 rounded-2xl rounded-tr-[36px]"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.4, ease: "easeInOut" }
              }}
            >
              <motion.p 
                className="text-gray-300 text-xs lg:text-sm mb-4 leading-relaxed"
                variants={fadeInUp}
              >
                Let's create something amazing. Get started with SoftXSolutions.
              </motion.p>
              <motion.button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-softx-orange text-white px-6 py-3 rounded-full font-semibold text-sm w-full shadow-lg"
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
                Get Started
              </motion.button>
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* Background decorative elements */}
      <motion.div 
        className="absolute top-1/4 left-10 w-2 h-32 bg-softx-orange/30 rounded-full blur-sm"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-10 w-2 h-24 bg-softx-orange/20 rounded-full blur-sm"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.3, duration: 1.5, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/4 w-1 h-20 bg-softx-orange/20 rounded-full blur-sm"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.6, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.section>
  );
};

export default Hero;