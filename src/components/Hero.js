'use client';
import { useEffect, useRef } from 'react';
import { motion, useSpring } from 'framer-motion';
import laptopImage from '../assets/images/laptop.png';

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const spring = useSpring(0, { mass: 0.8, stiffness: 100, damping: 20 });
  useEffect(() => { spring.set(value); }, [value, spring]);
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
  return (
    <section className="relative min-h-screen overflow-hidden pt-16 lg:pt-20">
      {/* Subtle gradient overlay for Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-20 h-full">

        {/* Mobile Layout */}
        <div className="block md:hidden text-center py-8">
          <motion.h1
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            Your Vision
          </motion.h1>

          <div className="mb-6 px-4">
            <motion.img
              src={laptopImage}
              alt="SoftXSol Laptop Dashboard"
              className="w-full max-w-xs mx-auto h-auto object-contain drop-shadow-2xl"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />
          </div>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-8"
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            Our Code
          </motion.h2>

          {/* Mobile Info Cards */}
          <div className="space-y-4 px-4">
            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-4">
              <h3 className="text-softx-orange font-bold text-lg mb-2">SOFTXSOLUTIONS</h3>
              <p className="text-gray-300 text-sm">We can provide solutions for every problem in your life</p>
            </div>

            <motion.div
              className="bg-black/50 backdrop-blur-sm border border-white/20 p-4 text-center"
              style={{ clipPath: 'polygon(0% 0%, calc(100% - 16px) 0%, 100% 16px, 100% 100%, 0% 100%)' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="text-3xl font-bold text-white mb-2">
                <AnimatedNumber value={5} />
                <span>+</span>
              </div>
              <div className="text-gray-300 text-sm">Years Of Experience</div>
            </motion.div>

            <div className="bg-black/50 backdrop-blur-sm border border-white/20 rounded-lg p-4">
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

          {/* Main Heading - Top Left with better spacing */}
          <div className="absolute top-24 left-12 xl:left-20 z-20">
            <motion.h1
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              Your Vision
            </motion.h1>
          </div>

          {/* Subheading - Bottom Right with better spacing */}
          <div className="absolute bottom-24 right-12 xl:right-20 z-20">
            <motion.h2
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            >
              Our Code
            </motion.h2>
          </div>

          {/* Central Laptop Image - Perfectly Centered */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.img
              src={laptopImage}
              alt="SoftXSol Laptop Dashboard"
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain drop-shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
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
          <div className="absolute top-52 left-6 lg:left-12 xl:left-20 z-30">
            <ul className="space-y-4 text-white/70 text-sm lg:text-base tracking-wide">
              <motion.li 
                className="hover:text-orange-500 transition-colors duration-300"
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              >
                Web Development
              </motion.li>
              <motion.li 
                className="hover:text-orange-500 transition-colors duration-300"
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                AI Automations
              </motion.li>
              <motion.li 
                className="hover:text-orange-500 transition-colors duration-300"
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                App Development
              </motion.li>
            </ul>
          </div>


          {/* Top Right Info Box - SOFTXSOLUTIONS */}
          <div className="absolute top-32 right-4 lg:right-8 xl:right-16 z-30 max-w-xs">
            <motion.div
              className="bg-transparent border border-white/25 rounded-2xl px-6 py-5 shadow-[0_0_30px_rgba(255,255,255,0.06)]"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            >
              <h3 className="text-white font-semibold tracking-wide text-base lg:text-lg mb-2">SOFTXSOLUTIONS</h3>
              <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">We can provide solutions for every problem in your life</p>
            </motion.div>
          </div>

          {/* Middle Left Info Box - AI Automation */}
          <div className="hidden">
            <div className="bg-black/40 backdrop-blur-sm border border-white/20 rounded-lg p-4 shadow-lg">
              <h3 className="text-white font-semibold mb-2 text-sm lg:text-base">AI Automation</h3>
              <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">Intelligent automation solutions</p>
            </div>
          </div>

          {/* Middle Right Info Box - Experience */}
          <div className="absolute top-1/2 right-4 lg:right-8 xl:right-16 transform -translate-y-1/2 z-30">
            <motion.div
              className="bg-transparent border border-white/25 rounded-2xl px-8 py-6 text-center shadow-[0_0_30px_rgba(255,255,255,0.06)]"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.7 }}
            >
              <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2">
                <AnimatedNumber value={5} />
                <span>+</span>
              </div>
              <div className="text-gray-300 text-xs lg:text-sm">Years Of Experience</div>
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
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-transparent border-2 border-white/30 rounded-3xl p-5 shadow-[0_0_20px_rgba(255,255,255,0.08)]">
              <p className="text-gray-300 text-xs lg:text-sm mb-4 leading-relaxed">Let's create something amazing. Get started with SoftXSolutions.</p>
              <button
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-softx-orange text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-softx-orange-light hover:scale-105 transition-all duration-300 w-full shadow-lg"
              >
                Get Started
              </button>
            </div>
          </motion.div>

        </div>

      </div>


      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-32 bg-softx-orange/30 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 right-10 w-2 h-24 bg-softx-orange/20 rounded-full blur-sm"></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-20 bg-softx-orange/20 rounded-full blur-sm"></div>
    </section>
  );
};

export default Hero;