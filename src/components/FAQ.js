import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState([0, 3]); // Open first FAQ in each column by default

  const faqs = [
    {
      question: "What Services Does SoftXSolutions Offer?",
      answer: "We provide custom website development, UI/UX design, mobile app development, AI solutions, and SEO services tailored to your business needs."
    },
    {
      question: "What Makes SoftXSolutions Different?",
      answer: "We combine innovation, creativity, and technology to deliver solutions that help businesses grow."
    },
    {
      question: "What Industries Do You Work With?",
      answer: "We work with various industries including healthcare, finance, e-commerce, education, and technology startups."
    },
    {
      question: "Can You Integrate AI Into My Business?",
      answer: "Yes! We specialize in AI integration, chatbots, automation tools, and machine learning solutions for businesses."
    },
    {
      question: "Do You Provide Custom AI Solutions?",
      answer: "Yes! We build AI chatbots, automation tools, and real-time analytics systems to help businesses scale efficiently."
    },
    {
      question: "How Do I Get Started With SoftXSolutions?",
      answer: "Simply reach out through our contact form or email us. We'll schedule a consultation to discuss your project and next steps."
    },
    {
      question: "Can You Integrate Third-Party APIs?",
      answer: "Absolutely! We integrate payment gateways, social media APIs, and other third-party services seamlessly."
    },
    {
      question: "How Much Does A Project Cost?",
      answer: "Project costs vary based on complexity and requirements. Contact us for a personalized quote."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Ultra-smooth animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 1.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const slideFromLeft = {
    hidden: {
      x: -60,
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

  const slideFromRight = {
    hidden: {
      x: 60,
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

  // Split FAQs into two columns
  const leftColumnFAQs = faqs.filter((_, index) => index % 2 === 0);
  const rightColumnFAQs = faqs.filter((_, index) => index % 2 === 1);

  const renderFAQColumn = (faqList, startIndex) => (
    <div className="space-y-4">
      {faqList.map((faq, index) => {
        const actualIndex = startIndex + index * 2;
        const isOpen = openFAQ.includes(actualIndex);

        return (
          <motion.div
            key={actualIndex}
            className="bg-transparent overflow-hidden border border-white/40 rounded-xl"
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            variants={fadeInUp}
          >
            {/* Question */}
            <motion.button
              onClick={() => toggleFAQ(actualIndex)}
              className="w-full text-left p-4 lg:p-6 focus:outline-none"
              whileHover={{
                backgroundColor: "rgba(255, 107, 0, 0.05)",
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-softx-orange font-semibold text-sm lg:text-base pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <motion.svg
                    className="w-5 h-5 text-softx-orange"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </div>
              </div>
            </motion.button>

            {/* Answer */}
            {isOpen && (
              <motion.div
                className="px-4 lg:px-6 pb-4 lg:pb-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="border-t border-gray-600 pt-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );

  return (
    <motion.section
      id="faqs"
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
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
            variants={fadeInUp}
          >
            FAQ's
          </motion.h2>
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
            variants={fadeInUp}
          >
            Questions & Answers
          </motion.h3>
        </motion.div>

        {/* FAQ Grid - Two Columns */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Left Column */}
            <motion.div variants={slideFromLeft}>
              {renderFAQColumn(leftColumnFAQs, 0)}
            </motion.div>

            {/* Right Column */}
            <motion.div variants={slideFromRight}>
              {renderFAQColumn(rightColumnFAQs, 1)}
            </motion.div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default FAQ;