import ImagePlaceholder from './ImagePlaceholder';
import person1Image from '../assets/images/person1.png';
import p22Image from '../assets/images/p2.png';
import p3Image from '../assets/images/p3.png';

const WhyChooseUs = () => {
  const stats = [
    {
      number: "65+",
      label: "Our Employees",
      active: false
    },
    {
      number: "5+",
      label: "Years of Experience",
      active: true
    },
    {
      number: "50+",
      label: "Success Projects",
      active: false
    }
  ];

  return (
    <section className="py-16 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-softx-orange/10 via-transparent to-black/20 pointer-events-none"></div>
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
          <div className="flex flex-col lg:flex-row justify-center items-end gap-8 lg:gap-12 mb-12">

            {/* Team Member 1 - Left */}
            <div className="relative">
              {/* Orange rectangle behind */}
              <div className="absolute -top-6 -left-6 w-32 h-48 bg-softx-orange rounded-2xl -z-10"></div>
              <img
                src={person1Image}
                alt="Team Member 1"
                className="w-48 h-64 lg:w-56 lg:h-72 rounded-2xl object-cover shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <ImagePlaceholder
                src=""
                alt="Team Member 1"
                className="hidden w-48 h-64 lg:w-56 lg:h-72 rounded-2xl object-cover shadow-2xl"
                placeholderText="Person1.png"
              />
            </div>

            {/* Team Member 2 - Center (Taller) */}
            <div className="relative">
              {/* Orange rectangle behind */}
              <div className="absolute -top-8 -right-8 w-36 h-56 bg-softx-orange rounded-2xl -z-10"></div>
              <img
                src={p22Image}
                alt="Team Member 2"
                className="w-52 h-72 lg:w-60 lg:h-80 rounded-2xl object-cover shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <ImagePlaceholder
                src=""
                alt="Team Member 2"
                className="hidden w-52 h-72 lg:w-60 lg:h-80 rounded-2xl object-cover shadow-2xl"
                placeholderText="P22.png"
              />
            </div>

            {/* Team Member 3 - Right */}
            <div className="relative">
              {/* Orange rectangle behind */}
              <div className="absolute -bottom-6 -right-6 w-32 h-48 bg-softx-orange rounded-2xl -z-10"></div>
              <img
                src={p3Image}
                alt="Team Member 3"
                className="w-48 h-64 lg:w-56 lg:h-72 rounded-2xl object-cover shadow-2xl"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <ImagePlaceholder
                src=""
                alt="Team Member 3"
                className="hidden w-48 h-64 lg:w-56 lg:h-72 rounded-2xl object-cover shadow-2xl"
                placeholderText="P3.png"
              />
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`rounded-2xl p-6 lg:p-8 text-left min-w-[250px] transition-all duration-300 ${stat.active
                  ? 'bg-softx-orange border-2 border-softx-orange text-white'
                  : 'bg-transparent border-2 border-gray-600 text-white hover:border-softx-orange/50'
                  }`}
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base font-medium opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;