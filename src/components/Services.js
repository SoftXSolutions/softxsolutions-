
import { motion } from 'framer-motion';
import ImagePlaceholder from './ImagePlaceholder';
import wcuImage from '../assets/images/rs.jpeg';
import wcu1Image from '../assets/images/logi.jpeg';
import outprojectp1Image from '../assets/images/ec.jpeg';
import wcumImage from '../assets/images/cb.jpeg';

const Services = () => {
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

  const leftContentVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const industryItemVariants = {
    hidden: {
      opacity: 0,
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.3
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        type: "spring",
        bounce: 0.3
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const industries = [
    {
      title: "Real Estate",
      description: "AI calling agents qualify leads and book showings 24/7. IDX/MLS sites, property CRM, automated SMS/WhatsApp follow-ups, and agent dashboards that convert.",
      image: wcuImage,
      imagePlaceholder: "rs.jpeg"
    },
    {
      title: "Logistic",
      description: "Dispatch & driver apps with live GPS and route optimization. Customer portal for quotes, tracking, ePOD, and automated status updates.",
      image: wcu1Image,
      imagePlaceholder: "logi.jpeg"
    },
    {
      title: "ECommerce",
      description: "High-converting Shopify/headless stores with blazing speed. AI product search, smart upsells, inventory sync, abandoned-cart SMS, and SEO baked in.",
      image: outprojectp1Image,
      imagePlaceholder: "ec.jpeg"
    },
    {
      title: "Government",
      description: "Accessible citizen portals and secure case management. Multilingual chatbots, appointment booking, and analytics—cloud-first and compliance-minded.",
      image: wcumImage,
      imagePlaceholder: "cb.jpeg"
    }
  ];

  return (
    <motion.section
      id="all-services"
      className="py-16 relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side - Title and Description */}
          <motion.div
            className="lg:sticky lg:top-32"
            variants={leftContentVariants}
          >
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight"
              variants={leftContentVariants}
            >
              Solutions for<br />
              Every Industry
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg leading-relaxed mb-8"
              variants={leftContentVariants}
            >
              SoftXSolutions designs and ships web, mobile, and AI systems that launch fast, scale safely, and drive real revenue. Pick your industry to see what we can deploy in weeks.
            </motion.p>
            <motion.button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-softx-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-softx-orange-light hover:scale-105 transition-all duration-300"
              variants={leftContentVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Free Strategy Call
            </motion.button>
          </motion.div>

          {/* Right Side - Industry Solutions */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="group"
                variants={industryItemVariants}
                custom={index}
              >
                {/* Industry Item */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-8">

                  {/* Text Content */}
                  <motion.div
                    className="md:col-span-2"
                    variants={textVariants}
                  >
                    <motion.h3
                      className="text-3xl lg:text-4xl font-bold text-white mb-4"
                      variants={textVariants}
                    >
                      {industry.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-300 text-sm leading-relaxed"
                      variants={textVariants}
                    >
                      {industry.description}
                    </motion.p>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    className="md:col-span-1"
                    variants={imageVariants}
                  >
                    <div className="w-full h-32 rounded-2xl overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <ImagePlaceholder
                        src=""
                        alt={industry.title}
                        className="hidden w-full h-full object-cover"
                        placeholderText={industry.imagePlaceholder}
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Separator Line */}
                {index < industries.length - 1 && (
                  <motion.div
                    className="border-b border-gray-600 opacity-50"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
};

export default Services;