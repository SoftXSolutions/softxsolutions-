import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-bl from-softx-orange via-softx-orange/40 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-softx-white mb-6">
              About <span className="text-softx-orange">SoftXSol</span>
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              We are a leading software development company dedicated to transforming businesses through innovative technology solutions. Our team of expert developers, designers, and strategists work together to deliver exceptional digital experiences.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With years of experience in the industry, we have successfully delivered hundreds of projects across various domains, helping businesses achieve their digital transformation goals.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-softx-orange mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-softx-orange mb-2">50+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-softx-orange mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-softx-orange mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>

            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-softx-orange text-softx-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-softx-orange-light transition-all duration-300"
            >
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <ImagePlaceholder
              src="" // Add actual about image path here
              alt="About SoftXSol"
              className="w-full h-96 lg:h-[500px] rounded-2xl object-cover"
              placeholderText="About Section Image"
            />

            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-softx-orange/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-softx-orange/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;