import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import person1Image from '../assets/images/person1.png';
import p22Image from '../assets/images/p2.png';
import p3Image from '../assets/images/p3.png';

const WhyChooseUs = () => {
  // Counter animation state
  const [counters, setCounters] = useState([0, 0, 0]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  // First image: fade in with minimal movement
  const firstImageVariants = {
    hidden: {
      x: 0,
      opacity: 0,
      scale: 0.9,
      zIndex: 1
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: {
        duration: 1.0,
        ease: "easeOut"
      }
    }
  };

  // Middle image: scales in from small with bounce
  const middleImageVariants = {
    hidden: {
      scale: 0.85,
      opacity: 0,
      zIndex: 10
    },
    visible: {
      scale: 1,
      opacity: 1,
      zIndex: 10,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        type: "spring",
        bounce: 0.2
      }
    }
  };

  // Third image: fade in with minimal movement
  const thirdImageVariants = {
    hidden: {
      x: 0,
      opacity: 0,
      scale: 0.9,
      zIndex: 1
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      zIndex: 1,
      transition: {
        duration: 1.0,
        ease: "easeOut"
      }
    }
  };

  // Stats card scale-in animation with bounce
  const statsVariants = {
    hidden: {
      scale: 0.9,
      opacity: 0,
      y: 10
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        type: "spring",
        bounce: 0.2
      }
    }
  };

  // Counter animation component
  const AnimatedCounter = ({ target, index, suffix = "" }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const startAnimation = () => {
      if (!hasAnimated) {
        setHasAnimated(true);
        const controls = animate(count, target, {
          duration: 2,
          delay: 0.3 + (index * 0.2),
          ease: "easeOut",
          onUpdate: (latest) => {
            setDisplayValue(Math.round(latest));
          }
        });
        return controls.stop;
      }
    };

    return (
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        onViewportEnter={startAnimation}
        transition={{
          delay: 0.1 + (index * 0.1),
          duration: 0.6,
          type: "spring",
          bounce: 0.6
        }}
      >
        {displayValue}{suffix}
      </motion.span>
    );
  };

  const stats = [
    {
      number: 65,
      suffix: "+",
      label: "Our Employees",
      active: false
    },
    {
      number: 5,
      suffix: "+",
      label: "Years of Experience",
      active: true
    },
    {
      number: 50,
      suffix: "+",
      label: "Success Projects",
      active: false
    }
  ];

  return (
    <motion.section
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Morbi blandit ligula vel vestibulum commodo.
          </p>
        </div>

        {/* Main Content */}
        <div className="relative">

          {/* Three Team Members */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-8 lg:gap-12 mb-12">

            {/* Team Member 1 - Left */}
            <motion.div
              className="relative mx-auto lg:mx-0"
              variants={firstImageVariants}
              style={{ zIndex: 1 }}
            >
              {/* Orange rectangle behind */}
              <div className="absolute -top-4 -left-4 lg:-top-6 lg:-left-6 w-24 h-40 lg:w-32 lg:h-48 bg-softx-orange rounded-2xl -z-10"></div>
              <img
                src={person1Image}
                alt="Team Member 1"
                className="w-40 h-56 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-2xl object-cover shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <ImagePlaceholder
                src=""
                alt="Team Member 1"
                className="hidden w-40 h-56 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-2xl object-cover shadow-2xl"
                placeholderText="Person1.png"
              />
            </motion.div>

            {/* Team Member 2 - Center */}
            <motion.div
              className="relative mx-auto lg:mx-0"
              variants={middleImageVariants}
              style={{ zIndex: 10 }}
            >
              {/* Orange rectangle behind */}
              <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 w-28 h-48 lg:w-36 lg:h-56 bg-softx-orange rounded-2xl -z-10"></div>
              <img
                src={p22Image}
                alt="Team Member 2"
                className="w-44 h-64 sm:w-52 sm:h-72 lg:w-60 lg:h-80 rounded-2xl object-cover shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <ImagePlaceholder
                src=""
                alt="Team Member 2"
                className="hidden w-44 h-64 sm:w-52 sm:h-72 lg:w-60 lg:h-80 rounded-2xl object-cover shadow-2xl"
                placeholderText="P22.png"
              />
            </motion.div>

            {/* Team Member 3 - Right */}
            <motion.div
              className="relative mx-auto lg:mx-0"
              variants={thirdImageVariants}
              style={{ zIndex: 1 }}
            >
              {/* Orange rectangle behind */}
              <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-24 h-40 lg:w-32 lg:h-48 bg-softx-orange rounded-2xl -z-10"></div>
              <img
                src={p3Image}
                alt="Team Member 3"
                className="w-40 h-56 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-2xl object-cover shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <ImagePlaceholder
                src=""
                alt="Team Member 3"
                className="hidden w-40 h-56 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-2xl object-cover shadow-2xl"
                placeholderText="P3.png"
              />
            </motion.div>
          </div>

          {/* Stats Cards */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8 px-4"
            variants={containerVariants}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                className={`rounded-2xl sm:rounded-3xl border-2 p-4 sm:p-6 lg:p-8 text-left w-full sm:min-w-[240px] lg:min-w-[280px] transition-all duration-300 ${stat.active
                  ? 'border-softx-orange text-white'
                  : 'border-white/60 text-white'
                  }`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-center justify-between gap-3 sm:gap-6">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    <AnimatedCounter
                      target={stat.number}
                      index={index}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base font-medium opacity-90 text-right">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;