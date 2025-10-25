import logo1Image from '../assets/images/logo1.png';

const WebDevelopment = () => {
  const services = [
    { name: 'Web Development', active: true },
    { name: 'A.I Development', active: false },
    { name: 'App Development', active: false },
    { name: 'Custom Software', active: false },
    { name: 'Maintenance & Support', active: false }
  ];

  const techStack = [
    { name: 'Front End', active: true },
    { name: 'Python Backend', active: false },
    { name: 'Node.JS', active: false }
  ];

  return (
    <section id="services" className="py-16 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-softx-orange/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Service Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 lg:gap-4 mb-16">
          {services.map((service, index) => (
            <button
              key={index}
              className={`px-4 lg:px-6 py-2 lg:py-3 rounded-full border transition-all duration-300 text-xs lg:text-sm font-medium hover:scale-105 ${service.active
                ? 'bg-softx-orange text-white border-softx-orange shadow-lg shadow-softx-orange/25'
                : 'bg-transparent text-gray-300 border-gray-600 hover:border-softx-orange hover:text-softx-orange hover:bg-softx-orange/10'
                }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Main Content Container */}
        <div className="max-w-6xl mx-auto">
          <div className="border border-gray-800/50 rounded-2xl p-6 lg:p-12 bg-black/20 backdrop-blur-sm shadow-xl hover:border-gray-700/50 transition-all duration-300">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Side - Logo */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img
                    src={logo1Image}
                    alt="Web Development Logo"
                    className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback logo */}
                  <div className="hidden w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-softx-orange/30 to-softx-orange/10 rounded-full flex items-center justify-center border-2 border-dashed border-softx-orange/50">
                    <div className="text-center">
                      <div className="text-softx-orange text-6xl mb-4">🌐</div>
                      <p className="text-white text-lg font-medium">Logo1 Image</p>
                      <p className="text-gray-400 text-sm mt-2">Place logo1.png in /assets/images/</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="text-center lg:text-left">

                {/* Title */}
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8">
                  Web Development
                </h2>

                {/* Tech Stack Buttons */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                  {techStack.map((tech, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${tech.active
                        ? 'bg-softx-orange text-white border-softx-orange'
                        : 'bg-transparent text-gray-300 border-gray-600 hover:border-softx-orange hover:text-softx-orange'
                        }`}
                    >
                      {tech.name}
                    </button>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl">
                  Your website shouldn't be a brochure; it should be your best salesperson. We
                  build lightning-fast, SEO-first sites that load in milliseconds, rank quickly, and
                  turn visitors into customers. From pixel-perfect front ends to rock-solid
                  Python/Node back ends, every page is secure, accessible, and built to scale,
                  so you can launch faster, sell more, and grow without limits. Ready to ship
                  leads, not just code?
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