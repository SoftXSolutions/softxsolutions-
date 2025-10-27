import { motion, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import wcuImage from '../assets/images/wcu.png';
import wcu1Image from '../assets/images/wcu1.png';
import outprojectp1Image from '../assets/images/ourprojectp1.png';
import wcumImage from '../assets/images/wcum.png';

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

const OurProjects = () => {
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

  const fadeInUp = {
    hidden: {
      y: 80,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
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
      scale: 0.8,
      opacity: 0,
      y: 40
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        bounce: 0.15
      }
    }
  };

  const slideFromLeft = {
    hidden: {
      x: -100,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideFromRight = {
    hidden: {
      x: 100,
      opacity: 0,
      scale: 0.9
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  // Interactive tabs for 'Building With the Best Tools'
  const [buildTab, setBuildTab] = useState('Web Platform');
  const [buildVisible, setBuildVisible] = useState(true);

  const buildContent = {
    'Web Platform': [
      { title: 'Front End', items: ['Graphql','React Hook','ANT Design','Material UI','TypeScript','NEXT.JS','REACT.JS','Rest API'] },
      { title: 'Back End', items: ['NODE. JS','PHP','Python','Java'] }
    ],
    'AI Platforms': [
      { title: 'Environments', items: ['Python','N8n','Make','Colab'] },
      { title: 'Services', items: ['Model Training','Calling Agents','Custom Workflows','Custom Chatbots'] }
    ],
    'Mobile Apps': [
      { title: 'Mobile Apps', items: ['Konlin','GO','Flutter','Awift'] }
    ],
    'Database': [
      { title: 'Database', items: ['Mysql','Postgresl','Mongodb','Solr'] }
    ]
  };

  useEffect(() => {
    setBuildVisible(false);
    const t = setTimeout(() => setBuildVisible(true), 40);
    return () => clearTimeout(t);
  }, [buildTab]);

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
            Our Projects
          </motion.h2>
        </motion.div>

        {/* Services Overview - Alternating Cards (below Our Approach) */}
        <motion.div
          className="space-y-6 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={containerVariants}
        >
          {/* 1. UI/UX Design */}
          <motion.div
            variants={slideFromLeft}
            className="border border-white/40 rounded-xl p-6 lg:p-8 bg-transparent"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-3">UI/UX Design</h4>
                <p className="text-gray-300 leading-relaxed">
                  SoftXSolutions begins with deep user and stakeholder insights, then turns insights into
                  wireframes and rapid prototypes. We refine flows and visual systems through sprints to the
                  final design that drives clarity and conversion.
                </p>
              </div>
              <div className="lg:border-l lg:border-white/20 lg:pl-8">
                <ul className="text-white/85 space-y-3 list-disc list-inside">
                  <li>User Centric Research</li>
                  <li>Wireframing & Prototyping</li>
                  <li>Visual Design & Branding</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 2. Web Development */}
          <motion.div
            variants={slideFromRight}
            className="border border-white/40 rounded-xl p-6 lg:p-8 bg-transparent"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-3">Web Development</h4>
                <p className="text-gray-300 leading-relaxed">
                  From pixel-perfect front ends to secure Next/Node back ends, we ship accessible, SEO-ready
                  websites with analytics, payments, and CMS integrations.
                </p>
              </div>
              <div className="lg:border-l lg:border-white/20 lg:pl-8">
                <ul className="text-white/85 space-y-3 list-disc list-inside">
                  <li>User Centric Research</li>
                  <li>Platform Selection Stack</li>
                  <li>Agile Development Process</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 3. Mobile Development */}
          <motion.div
            variants={slideFromLeft}
            className="border border-white/40 rounded-xl p-6 lg:p-8 bg-transparent"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-3">Mobile Development</h4>
                <p className="text-gray-300 leading-relaxed">
                  We craft Android and iOS apps with clean architectures, native-like UX, offline-first flows,
                  and rock-solid CI/CD pipelines.
                </p>
              </div>
              <div className="lg:border-l lg:border-white/20 lg:pl-8">
                <ul className="text-white/85 space-y-3 list-disc list-inside">
                  <li>Comprehensive Roadmaps</li>
                  <li>Scalable Infrastructure Design</li>
                  <li>Security and Compliance</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* 4. Cloud Services */}
          <motion.div
            variants={slideFromRight}
            className="border border-white/40 rounded-xl p-6 lg:p-8 bg-transparent"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-3">Cloud Services</h4>
                <p className="text-gray-300 leading-relaxed">
                  Architecture on AWS for resilience, performance, and cost control. Automation, monitoring,
                  and best-practice security keep you always-on.
                </p>
              </div>
              <div className="lg:border-l lg:border-white/20 lg:pl-8">
                <ul className="text-white/85 space-y-3 list-disc list-inside">
                  <li>Comprehensive Cloud Strategy</li>
                  <li>Observability & Monitoring</li>
                  <li>Incident Response & Reliability</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        

        {/* Projects Grid */}
        <motion.div
          className="relative flex flex-col lg:flex-row justify-center items-end gap-8 lg:gap-12 mb-12"
          variants={containerVariants}
        >

          {/* Project 1 - Left (INBV TV) */}
          <motion.div
            className="relative"
            variants={slideFromLeft}
            whileHover={{
              y: -15,
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            <motion.img
              src={wcuImage}
              alt="INBV TV Project"
              className="w-64 h-48 lg:w-80 lg:h-60 rounded-2xl object-cover shadow-2xl"
              variants={scaleIn}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <ImagePlaceholder
              src=""
              alt="INBV TV Project"
              className="hidden w-64 h-48 lg:w-80 lg:h-60 rounded-2xl object-cover shadow-2xl"
              placeholderText="wcu.png"
            />

            {/* Project Tags */}
            <div className="flex flex-wrap gap-2 mt-4 mb-3">
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                Media Website
              </span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                Custom Website
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              INBV TV
            </h3>
          </motion.div>

          {/* Project 2 - Center (Kallin AI) - Higher Position */}
          <motion.div
            className="relative lg:-mt-8"
            variants={fadeInUp}
            whileHover={{
              y: -15,
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            <img
              src={wcu1Image}
              alt="Kallin AI Project"
              className="w-72 h-56 lg:w-88 lg:h-68 rounded-2xl object-cover shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <ImagePlaceholder
              src=""
              alt="Kallin AI Project"
              className="hidden w-72 h-56 lg:w-88 lg:h-68 rounded-2xl object-cover shadow-2xl"
              placeholderText="wcu1.png"
            />

            {/* Project Tags */}
            <div className="flex flex-wrap gap-2 mt-4 mb-3 justify-center">
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                App Development
              </span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                AI Integration
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white text-center">
              Kallin AI
            </h3>
          </motion.div>

          {/* Project 3 - Right (IELTS Academics) */}
          <motion.div
            className="relative"
            variants={slideFromRight}
            whileHover={{
              y: -15,
              scale: 1.05,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            <img
              src={outprojectp1Image}
              alt="IELTS Academics Project"
              className="w-64 h-48 lg:w-80 lg:h-60 rounded-2xl object-cover shadow-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <ImagePlaceholder
              src=""
              alt="IELTS Academics Project"
              className="hidden w-64 h-48 lg:w-80 lg:h-60 rounded-2xl object-cover shadow-2xl"
              placeholderText="outprojectp1.png"
            />

            {/* Project Tags */}
            <div className="flex flex-wrap gap-2 mt-4 mb-3">
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                Custom Website
              </span>
              <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm">
                Custom LLM
              </span>
            </div>

            {/* Project Title */}
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              IELTS Academics
            </h3>
          </motion.div>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="text-center mb-20"
          variants={fadeInUp}
        >
          <motion.button
            className="bg-softx-orange text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
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
            Lets Build Your Application
          </motion.button>
        </motion.div>

        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <motion.div className="col-span-1" variants={slideFromLeft}>
              <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Building With
                <br />
                the Best Tools
              </h3>
              <div className="mt-8 space-y-4 max-w-xs">
                {['Web Platform','AI Platforms','Mobile Apps','Database'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setBuildTab(tab)}
                    className={`w-full text-left px-6 py-3 rounded-full font-semibold transition ${buildTab===tab ? 'bg-softx-orange text-white' : 'border border-white/20 text-white/80 hover:bg-white/5'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.div className="col-span-1 lg:col-span-2" variants={slideFromRight}>
              <div className={`border border-white/20 rounded-2xl p-6 lg:p-8 transition-all duration-500 ${buildVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                <motion.div
                  key={buildTab}
                  className={`grid grid-cols-1 ${buildContent[buildTab].length > 1 ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} gap-8`}
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {buildContent[buildTab].map(col => (
                    <div key={col.title}>
                      <h4 className="text-2xl font-semibold text-white mb-4">{col.title}</h4>
                      <div className="space-y-4">
                        {col.items.map((label, i) => (
                          <motion.div key={label} variants={fadeInUp} className="flex items-center gap-4 border border-white/20 rounded-xl px-4 py-3">
                            <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/90 text-sm">{String(i+1).padStart(2,'0')}</span>
                            <span className="text-white/90 font-medium">{label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Approach Section */}
        <motion.div
          className="mb-20"
          variants={scaleIn}
        >
          <motion.div
            className="border border-white/40 rounded-xl p-8 lg:p-12 bg-transparent"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.4, ease: "easeInOut" }
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <motion.div variants={slideFromLeft}>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our Approach
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Discover fast, design smart, scale secure.
                  SoftXSolutions builds, ships & grows with
                  24/7 support.
                </p>
                <motion.button
                  className="bg-softx-orange text-white px-6 py-3 rounded-full font-semibold"
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
                  Discover Now
                </motion.button>
              </motion.div>

              {/* Right Content - Mobile Image and Stats */}
              <motion.div
                className="relative flex justify-center"
                variants={slideFromRight}
              >
                <div className="relative">
                  <img
                    src={wcumImage}
                    alt="Mobile Phones"
                    className="w-80 h-auto object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <ImagePlaceholder
                    src=""
                    alt="Mobile Phones"
                    className="hidden w-80 h-60 rounded-2xl object-cover"
                    placeholderText="wcum.png"
                  />

                  {/* Stats Card Overlay */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm rounded-2xl p-6 text-center"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1.0,
                      duration: 0.8,
                      type: "spring",
                      bounce: 0.4
                    }}
                  >
                    <div className="text-4xl font-bold text-white mb-2">
                      <AnimatedNumber value={50} delay={1200} suffix="+" />
                    </div>
                    <div className="text-gray-300 text-sm">Success Projects</div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default OurProjects;