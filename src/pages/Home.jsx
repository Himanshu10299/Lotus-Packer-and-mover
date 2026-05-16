import { Truck, Package, ShieldCheck, Clock, MapPin, Star, Award, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-secondary text-white py-24 object-cover overflow-hidden">
        {/* Real background image replacing gradient */}
        <div className="absolute inset-0">
           <img 
              src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Packers and Movers" 
              className="w-full h-full object-cover opacity-30"
            />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block bg-accent text-secondary font-bold px-4 py-1 rounded-full mb-4 text-sm tracking-wider uppercase">
              #1 ALL OVER INDIA SHIFTING EXPERTS
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white drop-shadow-lg">
              Safe, Fast & Reliable <br />
              <span className="text-primary text-5xl md:text-6xl">Packers and Movers</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-lg drop-shadow-md">
              Expert relocation services for home, office, and vehicle transport. We deliver your goods with 100% safety <span className="font-bold text-white border-b-2 border-primary">EVERYWHERE IN INDIA.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-md font-bold text-center hover:bg-red-700 transition shadow-lg text-lg">
                Get a Free Quote
              </Link>
              <a href="tel:8272038697" className="bg-white text-secondary px-8 py-3 rounded-md font-bold text-center hover:bg-gray-100 transition shadow-lg text-lg border-2 border-transparent">
                Call Us Now
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10 w-full" id="quote">
            <div className="bg-white p-8 rounded-lg shadow-2xl text-gray-800 border-t-4 border-primary">
              <h3 className="text-2xl font-bold mb-2 text-center text-secondary">Request a Call Back</h3>
              <p className="text-center text-gray-500 mb-6 text-sm">Fill details below and we will contact you immediately.</p>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50" />
                </div>
                <div>
                  <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50" />
                </div>
                <div className="flex gap-4">
                  <input type="text" placeholder="Moving From (e.g. Delhi)" className="w-1/2 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50" />
                  <input type="text" placeholder="Moving To (e.g. Mumbai)" className="w-1/2 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50" />
                </div>
                <div>
                  <button type="button" className="w-full bg-accent text-secondary font-bold py-3 rounded hover:bg-yellow-500 transition text-lg uppercase tracking-wide shadow-md">
                    Submit Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary text-white py-6">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-center gap-4">
          <div className="flex items-center gap-3 mx-auto">
             <ShieldCheck size={32} />
             <div className="text-left"><p className="font-bold text-lg">100% Safe</p><p className="text-xs opacity-80">Damage-free guarantee</p></div>
          </div>
          <div className="flex items-center gap-3 mx-auto">
             <MapPin size={32} />
             <div className="text-left"><p className="font-bold text-lg">All Over India</p><p className="text-xs opacity-80">Extensive branch network</p></div>
          </div>
          <div className="flex items-center gap-3 mx-auto">
             <Award size={32} />
             <div className="text-left"><p className="font-bold text-lg">Trusted Experts</p><p className="text-xs opacity-80">10+ Years Experience</p></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive shifting solutions tailored to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <Truck className="text-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Household Shifting</h3>
              <p className="text-gray-600">Secure and timely relocation of your home essentials to any city in India.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <Package className="text-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Office Relocation</h3>
              <p className="text-gray-600">Minimal downtime office moving services with utmost care for your equipment.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <ShieldCheck className="text-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Packing & Unpacking</h3>
              <p className="text-gray-600">High-quality packaging materials to ensure the safety of your valuable belongings.</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary transition-colors">
                <Clock className="text-primary group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-secondary">Local Shifting</h3>
              <p className="text-gray-600">Fast and efficient local moving services within the city at affordable rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Warehouse and Logistics" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-secondary p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-3xl font-bold">100%</p>
                <p className="font-semibold uppercase tracking-wide">Client Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Why Choose <span className="text-primary">Lotus Packers</span> and Decker?</h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              With over a decade of experience in the logistics and transportation sector, Lotus Packers and Decker has established itself as one of the most trusted moving companies. We have a monumental presence and provide moving services <strong>all over India.</strong>
            </p>
            <ul className="space-y-4 text-gray-700 mb-8 border-l-4 border-accent pl-4">
              <li className="flex items-center gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} /> <span className="font-semibold text-lg">Pan India Moving Network (Every single state covered)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} /> <span className="font-semibold text-lg">100% Secure & Damage-free Transportation</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="text-primary flex-shrink-0" size={24} /> <span className="font-semibold text-lg">Highly Trained Packing Professionals</span>
              </li>
            </ul>
            <Link to="/about" className="inline-block border-2 border-secondary text-secondary font-bold px-8 py-3 hover:bg-secondary hover:text-white transition rounded">
              Know More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="bg-secondary bg-opacity-95 py-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1543465077-db45d34b88a5?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="trucks" />
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Ready for a frictionless move?</h2>
            <p className="text-accent font-semibold text-xl">We move your goods from any place to your destination in India.</p>
          </div>
          <div className="flex gap-4">
            <a href="tel:8272038697" className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-8 rounded shadow-lg text-lg flex items-center gap-2 transition">
              <Phone size={20} /> 8272038697
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;