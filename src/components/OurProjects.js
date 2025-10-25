import ImagePlaceholder from './ImagePlaceholder';
import wcuImage from '../assets/images/wcu.png';
import wcu1Image from '../assets/images/wcu1.png';
import outprojectp1Image from '../assets/images/ourprojectp1.png';
import wcumImage from '../assets/images/wcum.png';

const OurProjects = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12">
            Our Projects
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="relative flex flex-col lg:flex-row justify-center items-end gap-8 lg:gap-12 mb-12">

          {/* Project 1 - Left (INBV TV) */}
          <div className="relative">
            <img
              src={wcuImage}
              alt="INBV TV Project"
              className="w-64 h-48 lg:w-80 lg:h-60 rounded-2xl object-cover shadow-2xl"
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
          </div>

          {/* Project 2 - Center (Kallin AI) - Higher Position */}
          <div className="relative lg:-mt-8">
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
          </div>

          {/* Project 3 - Right (IELTS Academics) */}
          <div className="relative">
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
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mb-20">
          <button className="bg-softx-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-softx-orange-light hover:scale-105 transition-all duration-300 shadow-lg">
            Lets Build Your Application
          </button>
        </div>

        {/* Our Approach Section */}
        <div className="mb-20">
          <div className="border border-gray-600 rounded-3xl p-8 lg:p-12 bg-black/30 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Left Content */}
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our Approach
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Discover fast, design smart, scale secure.
                  SoftXSolutions builds, ships & grows with
                  24/7 support.
                </p>
                <button className="bg-softx-orange text-white px-6 py-3 rounded-full font-semibold hover:bg-softx-orange-light transition-all duration-300">
                  Discover Now
                </button>
              </div>

              {/* Right Content - Mobile Image and Stats */}
              <div className="relative flex justify-center">
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
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/70 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-bold text-white mb-2">50+</div>
                    <div className="text-gray-300 text-sm">Success Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Building With the Best Tools Section */}
        <div className="mb-16">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-12">
            Building With<br />the Best Tools
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

            {/* Left Column - Categories */}
            <div className="space-y-4">
              <button className="w-full bg-softx-orange text-white px-6 py-3 rounded-full font-semibold text-left">
                Web Platform
              </button>
              <button className="w-full bg-transparent border border-gray-600 text-white px-6 py-3 rounded-full font-semibold text-left hover:border-softx-orange transition-colors">
                AI Platforms
              </button>
              <button className="w-full bg-transparent border border-gray-600 text-white px-6 py-3 rounded-full font-semibold text-left hover:border-softx-orange transition-colors">
                Mobile Apps
              </button>
              <button className="w-full bg-transparent border border-gray-600 text-white px-6 py-3 rounded-full font-semibold text-left hover:border-softx-orange transition-colors">
                Database
              </button>
            </div>

            {/* Right Columns - Technologies */}
            <div className="lg:col-span-3">
              <div className="border border-gray-600 rounded-2xl p-8 bg-black/30 backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* Front End */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6">Front End</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">01</span>
                        <div className="text-white font-semibold">Graphql</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">05</span>
                        <div className="text-white font-semibold">TypeScript</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">02</span>
                        <div className="text-white font-semibold">React Hook</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">06</span>
                        <div className="text-white font-semibold">NEXT.JS</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">03</span>
                        <div className="text-white font-semibold">ANT Design</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">07</span>
                        <div className="text-white font-semibold">REACT.JS</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">04</span>
                        <div className="text-white font-semibold">Material UI</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">08</span>
                        <div className="text-white font-semibold">Rest API</div>
                      </div>
                    </div>
                  </div>

                  {/* Back End */}
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-6">Back End</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">01</span>
                        <div className="text-white font-semibold">NODE.JS</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">02</span>
                        <div className="text-white font-semibold">PHP</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">03</span>
                        <div className="text-white font-semibold">Python</div>
                      </div>
                      <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 text-center">
                        <span className="text-gray-400 text-sm">04</span>
                        <div className="text-white font-semibold">Java</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mt-20 max-w-6xl mx-auto space-y-8">

          {/* UI/UX Design Card */}
          <div className="border border-gray-600 rounded-3xl p-8 lg:p-12 bg-black/30 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  UI/UX Design
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  SoftXSolutions begins with deep user and stakeholder research, then turns insights into wireframes and rapid prototypes. We refine flows and visual systems through testing, so the final design looks on-brand, feels effortless, and converts from day one.
                </p>
              </div>
              {/* Vertical Divider Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">User Centric Research</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">Wireframing & Prototyping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">Visual Design & Branding</span>
                </div>
              </div>
            </div>
          </div>

          {/* Web Development Card */}
          <div className="border border-gray-600 rounded-3xl p-8 lg:p-12 bg-black/30 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">Understanding Client Objectives</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">Strategic Planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">User-Centric Design</span>
                </div>
              </div>
              {/* Vertical Divider Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2"></div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Web Development
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  From pixel-perfect front ends to secure Python/Node back ends, we ship blazing-fast, SEO-ready websites that scale. Accessibility, analytics, and CI/CD are baked in plus smooth integrations with Stripe, Twilio, CRMs, and your existing tools.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Development Card */}
          <div className="border border-gray-600 rounded-3xl p-8 lg:p-12 bg-black/30 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Mobile Development
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  We craft Android and iOS apps with clean architecture and addictive UX. Offline-first, push notifications, and real-time APIs come standard while analytics, A/B testing, and store submissions ensure your app launches fast and keeps improving.
                </p>
              </div>
              {/* Vertical Divider Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2"></div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">User Centric Research</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">Platform Selection Stack</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">Agile Development Process</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cloud Services Card */}
          <div className="border border-gray-600 rounded-3xl p-8 lg:p-12 bg-black/30 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">Comprehensive Cloud Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">Scalable Infrastructure Design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-softx-orange rounded-full"></div>
                  <span className="text-gray-300 text-sm">Security and Compliance</span>
                </div>
              </div>
              {/* Vertical Divider Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-600 transform -translate-x-1/2"></div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Cloud Services
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  Architected on AWS for resilience, performance, and cost control. We define a cloud strategy, design scalable infrastructure, and enforce security/compliance then operate it with monitoring, backups, and incident response so you stay always-on.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OurProjects;