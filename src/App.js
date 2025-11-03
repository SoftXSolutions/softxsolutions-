
import Header from './components/Header';
import Hero from './components/Hero';
import WebDevelopment from './components/WebDevelopment';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import OurProjects from './components/OurProjects';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App relative min-h-screen">
      {/* Main Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-softx-orange/20 -z-50"></div>
      
      {/* Layered Gradient Overlays for Depth */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/10 to-softx-orange/10 -z-40"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-black/20 via-transparent to-softx-orange/5 -z-30"></div>
      
      <Header />
      <main className="relative z-10">
        <Hero />
        <WebDevelopment />
        <Services />
        <WhyChooseUs />
        <OurProjects />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
