import { motion, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import person1Image from '../assets/images/person1.png';
import person2Image from '../assets/images/p2.png';
import person3Image from '../assets/images/p3.png';
import mosImage from '../assets/images/mos.png';

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

const Team = () => {
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

  const fadeInUp = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94]
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

  const scaleIn = {
    hidden: {
      scale: 0.7,
      opacity: 0,
      y: 30
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      y: 40,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.section
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12"
            variants={fadeInUp}
          >
            What Our Clients Say
          </motion.h2>
        </motion.div>

        {/* Stats and Testimonials Container */}
        <motion.div
          className="p-8 lg:p-12 bg-transparent mb-12 border border-white/40 rounded-xl"
          variants={scaleIn}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">

            {/* Left Side - Stats */}
            <motion.div
              className="space-y-6"
              variants={slideFromLeft}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">100% Happy Customers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">100% Quality Work</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">Always Delivered On Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-gray-300 text-sm">100% Success Score</span>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-gray-400 text-sm mb-2">Fiverr Rating</div>
                <motion.div
                  className="text-6xl font-bold text-white"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.8,
                    duration: 1.0,
                    type: "spring",
                    bounce: 0.4
                  }}
                >
                  <AnimatedNumber value={5} delay={1000} />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Happy Customers */}
            <motion.div
              className="text-right"
              variants={slideFromRight}
            >
              <div className="text-gray-400 text-sm mb-2">Happy Customers</div>
              <motion.div
                className="text-6xl font-bold text-white mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 1.0,
                  type: "spring",
                  bounce: 0.4
                }}
              >
                <AnimatedNumber value={100} delay={800} suffix="%" />
              </motion.div>
              <p className="text-gray-300 text-sm leading-relaxed">
                At SoftXSolutions, 100% happy customers isn't just a goal—it's our promise. We ship fast, communicate clearly, and support you 24/7 until everything feels flawless.
              </p>
            </motion.div>
          </div>

          {/* Testimonial Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
          >

            {/* Professional Card */}
            <motion.div
              className="border border-white/40 rounded-xl p-6 bg-transparent text-center"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">"Professional"</h3>
              <div className="text-gray-400 text-sm mb-4">Edward JR.</div>
              <div className="w-40 h-40 mx-auto rounded-xl overflow-hidden">
                <img
                  src={person1Image}
                  alt="Edward JR"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <ImagePlaceholder
                  src=""
                  alt="Edward JR"
                  className="hidden w-full h-full object-cover"
                  placeholderText="person1.png"
                />
              </div>
            </motion.div>

            {/* Impressive Card - Center */}
            <motion.div
              className="relative -mt-14 bg-gradient-to-b from-softx-orange to-orange-600 rounded-xl p-6 text-center border border-orange-400/20 overflow-visible"
              variants={cardVariants}
              whileHover={{
                scale: 1.08,
                y: -15,
                boxShadow: "0 20px 40px rgba(255, 107, 0, 0.3)",
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <div className="w-48 h-48 mx-auto -mt-16 mb-2 relative z-10">
                <img
                  src={person2Image}
                  alt="Robert Lewis"
                  className="w-full h-full object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <ImagePlaceholder
                  src=""
                  alt="Robert Lewis"
                  className="hidden w-full h-full object-contain"
                  placeholderText="p2.png"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">"Impressive"</h3>
              <div className="text-white/80 text-sm">Robert Lewis</div>
            </motion.div>

            {/* Good Quality Card */}
            <motion.div
              className="border border-white/40 rounded-xl p-6 bg-transparent text-center"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">"Good Quality"</h3>
              <div className="text-gray-400 text-sm mb-4">Alexander L.</div>
              <div className="w-40 h-40 mx-auto rounded-xl overflow-hidden">
                <img
                  src={person3Image}
                  alt="Alexander L"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <ImagePlaceholder
                  src=""
                  alt="Alexander L"
                  className="hidden w-full h-full object-cover"
                  placeholderText="p3.png"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Ready to Start Section */}
        <motion.div
          className="p-8 lg:p-12 bg-transparent border border-white/40 rounded-xl"
          variants={scaleIn}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Form */}
            <motion.div variants={slideFromLeft}>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Ready to Start<br />Your Project?
              </h3>
              <p className="text-gray-300 text-sm mb-8">
                We can give you the best solutions for your query.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Add Name"
                      className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-2 focus:border-softx-orange outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="Add Subject"
                      className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-2 focus:border-softx-orange outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="Add email"
                      className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-2 focus:border-softx-orange outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm mb-2">Contact Number</label>
                    <input
                      type="tel"
                      placeholder="Add Number"
                      className="w-full bg-transparent border-b border-gray-600 text-white placeholder-gray-500 py-2 focus:border-softx-orange outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm mb-2">How can we help?</label>
                  <textarea
                    placeholder="Feel free to ask for a solution!"
                    rows="4"
                    className="w-full bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 p-4 focus:border-softx-orange outline-none resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="bg-softx-orange text-white px-8 py-3 rounded-full font-semibold"
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
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              className="flex justify-center"
              variants={slideFromRight}
            >
              <motion.img
                src={mosImage}
                alt="Ready to Start"
                className="w-80 h-auto object-contain"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <ImagePlaceholder
                src=""
                alt="Ready to Start"
                className="hidden w-80 h-60 rounded-2xl object-cover"
                placeholderText="mos.png"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Team;