import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "info@softxsol.com",
      link: "mailto:info@softxsol.com"
    },
    {
      icon: "📞",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Address",
      value: "123 Tech Street, Digital City, DC 12345",
      link: "#"
    },
    {
      icon: "🕒",
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-softx-orange/20 pointer-events-none"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-softx-white mb-6">
            Get In <span className="text-softx-orange">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your ideas into reality? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-softx-white mb-8">
              Let's Start a Conversation
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We're here to help bring your vision to life. Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-2xl">{info.icon}</div>
                  <div>
                    <h4 className="text-softx-white font-semibold mb-1">{info.title}</h4>
                    {info.link.startsWith('#') ? (
                      <p className="text-gray-300">{info.value}</p>
                    ) : (
                      <a 
                        href={info.link}
                        className="text-softx-orange hover:text-softx-orange-light transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-softx-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-softx-orange hover:text-softx-orange-light transition-colors duration-300">
                  <span className="text-2xl">📘</span>
                </a>
                <a href="#" className="text-softx-orange hover:text-softx-orange-light transition-colors duration-300">
                  <span className="text-2xl">🐦</span>
                </a>
                <a href="#" className="text-softx-orange hover:text-softx-orange-light transition-colors duration-300">
                  <span className="text-2xl">💼</span>
                </a>
                <a href="#" className="text-softx-orange hover:text-softx-orange-light transition-colors duration-300">
                  <span className="text-2xl">📷</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-softx-gray-light rounded-xl p-8 border border-softx-orange/10">
            <h3 className="text-2xl font-bold text-softx-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-softx-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-softx-black border border-softx-orange/20 rounded-lg text-softx-white placeholder-gray-400 focus:outline-none focus:border-softx-orange focus:ring-1 focus:ring-softx-orange"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-softx-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-softx-black border border-softx-orange/20 rounded-lg text-softx-white placeholder-gray-400 focus:outline-none focus:border-softx-orange focus:ring-1 focus:ring-softx-orange"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-softx-white font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-softx-black border border-softx-orange/20 rounded-lg text-softx-white placeholder-gray-400 focus:outline-none focus:border-softx-orange focus:ring-1 focus:ring-softx-orange"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-softx-white font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-softx-black border border-softx-orange/20 rounded-lg text-softx-white placeholder-gray-400 focus:outline-none focus:border-softx-orange focus:ring-1 focus:ring-softx-orange"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-softx-white font-medium mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-softx-black border border-softx-orange/20 rounded-lg text-softx-white focus:outline-none focus:border-softx-orange focus:ring-1 focus:ring-softx-orange"
                >
                  <option value="">Select a service</option>
                  <option value="web-development">Web Development</option>
                  <option value="mobile-app">Mobile App Development</option>
                  <option value="ui-ux-design">UI/UX Design</option>
                  <option value="cloud-solutions">Cloud Solutions</option>
                  <option value="ecommerce">E-commerce Solutions</option>
                  <option value="digital-marketing">Digital Marketing</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-softx-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-softx-black border border-softx-orange/20 rounded-lg text-softx-white placeholder-gray-400 focus:outline-none focus:border-softx-orange focus:ring-1 focus:ring-softx-orange resize-vertical"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-gradient text-softx-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-softx-orange/25 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;