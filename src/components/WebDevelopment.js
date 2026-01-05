import { useEffect, useRef, useState } from 'react';
import logo1Image from '../assets/images/logo1.png';

const WebDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState('Web Development');
  const [activeTag, setActiveTag] = useState({});
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
      tagData: {
        'Front End': "Your website shouldn't be a brochure; it should be your best salesperson. We build lightning-fast, SEO-first sites that load in milliseconds, rank quickly, and turn visitors into customers. From pixel-perfect front ends to rock-solid Python/Node back ends, every page is secure, accessible, and built to scale, so you can launch faster, sell more, and grow without limits.",
        'Python Backend': "Build robust, scalable backends with Python. From Django and Flask APIs to data processing pipelines, we create secure server architectures that handle millions of requests. Database optimization, authentication systems, and seamless third-party integrations—all production-ready and battle-tested.",
        'Node.JS': "Lightning-fast Node.js backends for real-time applications. We build RESTful and GraphQL APIs, WebSocket servers, and microservices that scale effortlessly. From Express to NestJS, every endpoint is optimized for speed, security, and reliability with comprehensive error handling and monitoring."
      }
    },
    'A.I Development': {
      title: 'A.I. Development',
      tagData: {
        'Calling Agents': "AI-powered voice agents that handle customer calls 24/7. From qualification to booking, our intelligent systems understand context, handle objections, and close deals while you sleep. Seamless CRM integration with full conversation analytics and quality scoring.",
        'Automations': "Erase repetitive work with intelligent automation. From data entry to complex workflows, our AI systems learn your processes and execute them flawlessly. Zapier on steroids—custom triggers, multi-step logic, and error handling that thinks for itself.",
        'Chatbots': "Chatbots that actually convert. Natural language understanding, context retention, and personality that matches your brand. Deploy across web, WhatsApp, and messaging platforms with lead capture, appointment booking, and instant support built in.",
        'ML, CV & NLP': "Custom machine learning models trained on your data. Computer vision for image recognition, NLP for text analysis, and predictive models that drive decisions. From prototype to production with monitoring, retraining pipelines, and explainable AI."
      }
    },
    'App Development': {
      title: 'App Development',
      tagData: {
        'Android App': "Native Android apps that feel premium. Material Design UI, smooth animations, and optimized performance from low-end to flagship devices. Kotlin-first development with offline sync, push notifications, and seamless Google services integration. Store optimization and launch included.",
        'IOS App': "Swift-built iOS apps that delight users. Pixel-perfect UI matching Apple's Human Interface Guidelines, smooth animations, and native performance. CoreData persistence, CloudKit sync, and App Store optimization. TestFlight beta testing and App Store submission handled end-to-end."
      }
    },
    'Custom Software': {
      title: 'Custom Software',
      tagData: {
        'Product Development': "From idea to launched product. We handle the full lifecycle—user research, technical architecture, MVP development, and iterative releases. Agile sprints with weekly demos, user testing, and data-driven pivots. Code ownership and IP transfer included.",
        'Cloud App': "Cloud-native applications that scale automatically. AWS, Azure, or GCP architecture optimized for cost and performance. Containerized deployments, auto-scaling, multi-region redundancy, and zero-downtime updates. DevOps and monitoring baked in from day one.",
        'Branding': "Brand identity that resonates. From logo design to full brand guidelines, we create cohesive visual systems that tell your story. Color palettes, typography, iconography, and brand voice—everything teams need to stay consistent across all touchpoints."
      }
    },
    'Maintenance & Support': {
      title: 'Maintenance & Support',
      tagData: {
        'AWS & Cloud': "24/7 cloud infrastructure management. Monitoring, security patches, cost optimization, and disaster recovery. We keep your AWS, Azure, or GCP environment healthy, secure, and cost-effective with proactive alerts and monthly optimization reports.",
        'Market Launch': "Go-to-market strategy and execution. Beta testing, App Store/Play Store submission, landing pages, email campaigns, and growth analytics. We handle the launch checklist so you can focus on building traction and user feedback.",
        'UI Design': "Continuous UX/UI improvements based on real user data. A/B testing, heatmaps, and conversion optimization. Design systems that evolve with your product, maintaining consistency while adapting to new features and user needs."
      }
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

  // Animate content on tab change and set first tag as active
  useEffect(() => {
    setContentVisible(false);
    setBoxEnter(false);
    const firstTag = Object.keys(serviceContent[activeService].tagData)[0];
    setActiveTag(prev => ({ ...prev, [activeService]: firstTag }));
    const t1 = setTimeout(() => setContentVisible(true), 30);
    const t2 = setTimeout(() => setBoxEnter(true), 30);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [activeService]);

  // Initialize active tag for the first service
  useEffect(() => {
    const firstTag = Object.keys(serviceContent['Web Development'].tagData)[0];
    setActiveTag({ 'Web Development': firstTag });
  }, []);

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

          <div key={activeService} className={`border-2 border-gray-400/80 rounded-3xl p-8 lg:p-16 lg:pl-32 bg-black/50 backdrop-blur-sm shadow-2xl transition-all duration-700 ease-out transform ${isVisible && boxEnter
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
                  {Object.keys(serviceContent[activeService].tagData).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setActiveTag(prev => ({ ...prev, [activeService]: tag }))}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${activeTag[activeService] === tag
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
                  {activeTag[activeService] && serviceContent[activeService].tagData[activeTag[activeService]]}
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