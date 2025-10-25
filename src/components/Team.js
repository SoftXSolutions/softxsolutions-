import ImagePlaceholder from './ImagePlaceholder';
import person1Image from '../assets/images/person1.png';
import person2Image from '../assets/images/p2.png';
import person3Image from '../assets/images/p3.png';
import mosImage from '../assets/images/mos.png';

const Team = () => {
  return (
    <section className="py-16 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-softx-orange/15 via-transparent to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-12">
            What Our Clients Say
          </h2>
        </div>

        {/* Stats and Testimonials Container */}
        <div className="border border-gray-600 rounded-3xl p-8 lg:p-12 bg-black/30 backdrop-blur-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            
            {/* Left Side - Stats */}
            <div className="space-y-6">
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
                <div className="text-6xl font-bold text-white">5</div>
              </div>
            </div>

            {/* Right Side - Happy Customers */}
            <div className="text-right">
              <div className="text-gray-400 text-sm mb-2">Happy Customers</div>
              <div className="text-6xl font-bold text-white mb-4">100%</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                At SoftXSolutions, 100% happy customers isn't just a goal—it's our promise. We ship fast, communicate clearly, and support you 24/7 until everything feels flawless.
              </p>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Professional Card */}
            <div className="border border-gray-600 rounded-2xl p-6 bg-black/50 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">"Professional"</h3>
              <div className="text-gray-400 text-sm mb-4">Edward JR.</div>
              <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden">
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
            </div>

            {/* Impressive Card - Center */}
            <div className="bg-gradient-to-b from-softx-orange to-orange-600 rounded-2xl p-6 text-center">
              <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden mb-4">
                <img
                  src={person2Image}
                  alt="Robert Lewis"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <ImagePlaceholder
                  src=""
                  alt="Robert Lewis"
                  className="hidden w-full h-full object-cover"
                  placeholderText="p2.png"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">"Impressive"</h3>
              <div className="text-white/80 text-sm">Robert Lewis</div>
            </div>

            {/* Good Quality Card */}
            <div className="border border-gray-600 rounded-2xl p-6 bg-black/50 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">"Good Quality"</h3>
              <div className="text-gray-400 text-sm mb-4">Alexander L.</div>
              <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden">
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
            </div>
          </div>
        </div>

        {/* Ready to Start Section */}
        <div className="border border-gray-600 rounded-3xl p-8 lg:p-12 bg-black/30 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Form */}
            <div>
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

                <button
                  type="submit"
                  className="bg-softx-orange text-white px-8 py-3 rounded-full font-semibold hover:bg-softx-orange-light transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center">
              <img
                src={mosImage}
                alt="Ready to Start"
                className="w-80 h-auto object-contain"
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
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;