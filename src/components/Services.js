
import ImagePlaceholder from './ImagePlaceholder';
import wcuImage from '../assets/images/wcu.png';
import wcu1Image from '../assets/images/wcu1.png';
import outprojectp1Image from '../assets/images/ourprojectp1.png';
import wcumImage from '../assets/images/wcum.png';

const Services = () => {
  const industries = [
    {
      title: "Real Estate",
      description: "AI calling agents qualify leads and book showings 24/7. IDX/MLS sites, property CRM, automated SMS/WhatsApp follow-ups, and agent dashboards that convert.",
      image: wcuImage,
      imagePlaceholder: "wcu.png"
    },
    {
      title: "Logistic",
      description: "Dispatch & driver apps with live GPS and route optimization. Customer portal for quotes, tracking, ePOD, and automated status updates.",
      image: wcu1Image,
      imagePlaceholder: "wcu1.png"
    },
    {
      title: "ECommerce",
      description: "High-converting Shopify/headless stores with blazing speed. AI product search, smart upsells, inventory sync, abandoned-cart SMS, and SEO baked in.",
      image: outprojectp1Image,
      imagePlaceholder: "ourprojectp1.png"
    },
    {
      title: "Government",
      description: "Accessible citizen portals and secure case management. Multilingual chatbots, appointment booking, and analytics—cloud-first and compliance-minded.",
      image: wcumImage,
      imagePlaceholder: "wcum.png"
    }
  ];

  return (
    <section id="all-services" className="py-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Title and Description */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Solutions for<br />
              Every Industry
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              SoftXSolutions designs and ships web, mobile, and AI systems that launch fast, scale safely, and drive real revenue. Pick your industry to see what we can deploy in weeks.
            </p>
            <button className="bg-softx-orange text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-softx-orange-light hover:scale-105 transition-all duration-300">
              Book a Free Strategy Call
            </button>
          </div>

          {/* Right Side - Industry Solutions */}
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <div key={index} className="group">
                {/* Industry Item */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pb-8">
                  
                  {/* Text Content */}
                  <div className="md:col-span-2">
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                      {industry.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="md:col-span-1">
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
                  </div>
                </div>

                {/* Separator Line */}
                {index < industries.length - 1 && (
                  <div className="border-b border-gray-600 opacity-50"></div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;