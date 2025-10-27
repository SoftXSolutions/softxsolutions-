import { useEffect, useRef, useState } from 'react';
import logo1Image from '../assets/images/logo1.png';

const WebDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState('Web Development');
  const [contentVisible, setContentVisible] = useState(true);
  const [boxEnter, setBoxEnter] = useState(true);
  const sectionRef = useRef(null);

  const services = [
    'Web Development',
    'A.I Development',
    'App Development',
    'Custom Software',
    'Maintenance & Support'
  ];

  const serviceContent = {
    'Web Development': {
      title: 'Web Development',
      tags: ['Front End', 'Python Backend', 'Node.JS'],
      desc:
        "Your website shouldn't be a brochure; it should be your best salesperson. We build lightning-fast, SEO-first sites that load in milliseconds, rank quickly, and turn visitors into customers. From pixel-perfect front ends to rock-solid Python/Node back ends, every page is secure, accessible, and built to scale, so you can launch faster, sell more, and grow without limits. Ready to ship results, not just pages?",
    },
    'A.I Development': {
      title: 'A.I. Development',
      tags: ['Calling Agents', 'Automations', 'Chatbots', 'ML, CV & NLP'],
      desc:
        'Give your business a brain. We build production-ready AI voice calling agents, chatbots that convert, and automations that erase repetitive work. Our custom ML/CV/NLP models learn from your data and plug into your stack (Twilio, Vapi, WhatsApp, Shopify, CRMs) with analytics and human-in-the-loop controls for safe scaling.',
    },
    'App Development': {
      title: 'App Development',
      tags: ['Android App', 'IOS App'],
      desc:
        "Turn your idea into an app people keep on their home screen. We design and ship blazing-fast Android & iOS apps with clean architecture, offline-first flows, push notifications, and real-time APIs built to scale from 100 to 1M users. Product strategy, UX/UI, QA, analytics, store launch—end to end.",
    },
    'Custom Software': {
      title: 'Custom Software',
      tags: ['Product Development', 'Cloud App', 'Branding'],
      desc:
        "When off‑the‑shelf won't cut it, we design and build software precisely around your workflow. Cloud‑native apps, internal tools, CRMs, dashboards, and deep integrations engineered for speed, security, and scale. Prototype fast, iterate with CI/CD, and own the code and the IP.",
    },
    'Maintenance & Support': {
      title: 'Maintenance & Support',
      tags: ['AWS & Cloud', 'Market Launch', 'UI Design'],
      desc:
        "Launch day isn't the finish line—it's where we take over. Monitoring, patching, performance tuning, backups, and 24/7 incident response keep you always‑on. On the growth side, we handle SEO, content updates, and roadmaps with clear reporting.",
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate content on tab change
  useEffect(() => {
    setContentVisible(false);
    setBoxEnter(false);
    const t1 = setTimeout(() => setContentVisible(true), 30);
    const t2 = setTimeout(() => setBoxEnter(true), 30);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [activeService]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-16 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Service Navigation Tabs */}
        <div className={`flex flex-wrap justify-center gap-3 lg:gap-4 mb-16 transition-all duration-1000 ease-out transform ${isVisible
          ? 'translate-y-0 opacity-100'
          : '-translate-y-8 opacity-0'
          }`}
          style={{
            transitionDelay: isVisible ? '100ms' : '0ms'
          }}>
          {services.map((name, index) => (
            <button
              key={index}
              onClick={() => setActiveService(name)}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full border transition-all duration-300 text-xs lg:text-sm font-medium hover:scale-105 ${activeService === name
                ? 'bg-softx-orange text-white border-softx-orange shadow-lg shadow-softx-orange/25'
                : 'bg-transparent text-gray-300 border-gray-600 hover:border-softx-orange hover:text-softx-orange hover:bg-softx-orange/10'
                }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Main Content Container */}
        <div className="max-w-5xl mx-auto relative">
          {/* Logo positioned outside container */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-20 -translate-y-20 z-10 hidden lg:block">
            <img
              src={logo1Image}
              alt="Web Development Logo"
              className={`w-96 h-96 object-contain transition-all duration-1200 ease-out transform ${isVisible
                ? 'scale-100 opacity-100'
                : 'scale-50 opacity-0'
                }`}
              style={{
                transitionDelay: isVisible ? '300ms' : '0ms'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            {/* Fallback logo */}
            <div className={`hidden w-96 h-96 bg-gradient-to-br from-softx-orange/30 to-softx-orange/10 rounded-full flex items-center justify-center border-2 border-dashed border-softx-orange/50 transition-all duration-1200 ease-out transform ${isVisible
              ? 'scale-100 opacity-100'
              : 'scale-50 opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? '300ms' : '0ms'
              }}>
              <div className="text-center">
                <div className="text-softx-orange text-6xl mb-4">🌐</div>
                <p className="text-white text-lg font-medium">Logo1 Image</p>
                <p className="text-gray-400 text-sm mt-2">Place logo1.png in /assets/images/</p>
              </div>
            </div>
          </div>

          <div key={activeService} className={`border-2 border-gray-400/80 rounded-3xl p-8 lg:p-16 lg:pl-32 bg-black/30 backdrop-blur-sm shadow-2xl transition-all duration-700 ease-out transform ${isVisible && boxEnter
            ? 'translate-x-0 opacity-100'
            : '-translate-x-full opacity-0'
            }`}>

            <div className="grid grid-cols-1 gap-8">

              {/* Mobile Logo - Only visible on mobile */}
              <div className="flex justify-center lg:hidden mb-8">
                <img
                  src={logo1Image}
                  alt="Web Development Logo"
                  className={`w-64 h-64 object-contain transition-all duration-1200 ease-out transform ${isVisible
                    ? 'scale-100 opacity-100'
                    : 'scale-50 opacity-0'
                    }`}
                  style={{
                    transitionDelay: isVisible ? '300ms' : '0ms'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback logo for mobile */}
                <div className={`hidden w-64 h-64 bg-gradient-to-br from-softx-orange/30 to-softx-orange/10 rounded-full flex items-center justify-center border-2 border-dashed border-softx-orange/50 transition-all duration-1200 ease-out transform ${isVisible
                  ? 'scale-100 opacity-100'
                  : 'scale-50 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isVisible ? '300ms' : '0ms'
                  }}>
                  <div className="text-center">
                    <div className="text-softx-orange text-6xl mb-4">🌐</div>
                    <p className="text-white text-lg font-medium">Logo1 Image</p>
                    <p className="text-gray-400 text-sm mt-2">Place logo1.png in /assets/images/</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`text-center lg:text-left lg:max-w-2xl lg:ml-auto transition-all duration-500 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

                {/* Title */}
                <h2
                  className={`text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-6`}
                >
                  {serviceContent[activeService].title}
                </h2>

                {/* Tech Stack Buttons */}
                <div className={`flex flex-wrap justify-center lg:justify-start gap-5 mb-6`}>
                  {serviceContent[activeService].tags.map((tag, index) => (
                    <button
                      key={tag}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${index === 0
                        ? 'bg-softx-orange text-white border-softx-orange'
                        : 'bg-transparent text-gray-300 border-gray-600 hover:border-softx-orange hover:text-softx-orange'
                        }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Description */}
                <p className={`text-gray-300 text-base lg:text-sm leading-relaxed`}>
                  {serviceContent[activeService].desc}
                </p>

              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebDevelopment;