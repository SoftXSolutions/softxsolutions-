import logoImage from '../assets/images/logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Logo Section - Centered at top */}
          <div className="lg:col-span-4 flex justify-center mb-8">
            <img
              src={logoImage}
              alt="SoftXSol Logo"
              className="h-16 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback logo */}
            <div className="hidden text-4xl font-bold text-white">
              <span className="text-softx-orange">C</span>XS
            </div>
          </div>

          {/* Home Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Home</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-softx-orange transition-colors duration-300 text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-softx-orange transition-colors duration-300 text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-softx-orange transition-colors duration-300 text-left"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-softx-orange transition-colors duration-300">
                  Custom Software
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-softx-orange transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-softx-orange transition-colors duration-300">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-softx-orange transition-colors duration-300">
                  AI Development
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-softx-orange transition-colors duration-300 text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('faqs')}
                  className="text-gray-300 hover:text-softx-orange transition-colors duration-300 text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-softx-orange transition-colors duration-300">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Information Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                +44 7426 463389
              </li>
              <li className="text-gray-300">
                info@softxsol.com
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-white hover:text-softx-orange transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-softx-orange transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-softx-orange transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.219-.438-.219-1.085c0-1.016.589-1.775 1.323-1.775.623 0 .924.466.924 1.025 0 .624-.397 1.557-.603 2.422-.171.725.363 1.315 1.077 1.315 1.295 0 2.291-1.365 2.291-3.337 0-1.744-1.254-2.964-3.046-2.964-2.075 0-3.292 1.554-3.292 3.16 0 .626.242 1.295.544 1.659.059.073.068.137.05.211-.055.229-.177.719-.201.82-.031.129-.101.157-.233.095-1.318-.614-2.143-2.537-2.143-4.078 0-3.298 2.394-6.325 6.901-6.325 3.628 0 6.447 2.584 6.447 6.043 0 3.604-2.27 6.505-5.42 6.505-1.058 0-2.055-.549-2.394-1.275 0 0-.524 1.994-.651 2.48-.236.908-.873 2.047-1.301 2.743C8.834 23.721 10.376 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.017 0z" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-softx-orange transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              All rights reserved
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-softx-orange transition-colors duration-300">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-300 hover:text-softx-orange transition-colors duration-300">
                Privacy & Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;