import { Truck, Package, ShieldCheck, Clock, MapPin, Star, Award, CheckCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import deliveryPersonImage from '../assets/delivery-person.png';
import transportTruckImage from '../assets/transport-truck.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden flex items-center bg-gray-900">
        {/* Full sliding background */}
        <div className="absolute inset-0 z-0">
          <div className="flex w-full h-full animate-hero-slide">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" alt="Slide 1" className="min-w-full h-full object-cover opacity-60 flex-shrink-0" />
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80" alt="Slide 2" className="min-w-full h-full object-cover opacity-60 flex-shrink-0" />
            <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80" alt="Slide 3" className="min-w-full h-full object-cover opacity-60 flex-shrink-0" />
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80" alt="Slide 1 copy" className="min-w-full h-full object-cover opacity-60 flex-shrink-0" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-10 relative z-10">
          <div className="max-w-2xl bg-black/40 p-8 sm:p-12 border-l-4 border-t-4 border-b-4 border-white inline-block">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white mb-2">Welcome To</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Lotus Packers and Movers</h1>
            <p className="text-lg md:text-xl text-white">Trusted packers and movers for seamless relocation</p>
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

      {/* About Us Section (New) */}
      <section className="bg-[#f4f7fe] py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center gap-10 relative z-10">
          <div className="md:w-1/2 relative flex justify-center">
            <img
              src={deliveryPersonImage}
              alt="Delivery expert with packages"
              className="w-full max-w-sm lg:max-w-md object-contain relative z-10 drop-shadow-2xl"
            />
            {/* Decorative background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 -z-0"></div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-[#4295D1] font-bold text-xl mb-2">About Us</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
              Lotus Packers And Movers
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-sm lg:text-base">
              At <strong>Lotus Packers and Movers</strong>, we specialize in providing efficient, safe, and reliable relocation services. With a dedicated team and modern equipment, we ensure your belongings are handled with care and delivered on time. Whether it's household, office, or industrial shifting, our goal is to make your move seamless, stress-free, and affordable.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm lg:text-base">
              <strong>Lotus Packers and Movers</strong> is your trusted partner for smooth and secure relocation. We offer professional packing, loading, transportation, and unpacking services designed to make every move simple and worry-free. Our experienced team ensures timely delivery and complete customer satisfaction, whether it's a local or long-distance move.
            </p>
            
            <Link to="/about" className="bg-[#4295D1] hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md inline-block mb-10 transition shadow-md">
              Read More
            </Link>

            <div className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm items-center max-w-xl">
              <div className="flex items-center gap-3">
                <Truck className="text-[#4295D1] bg-blue-50 p-2 rounded-full" size={48} />
                <span className="font-bold text-gray-800 text-lg">Affordable Cost</span>
              </div>
              <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
              <div className="flex items-center gap-3">
                <Clock className="text-[#4295D1] bg-blue-50 p-2 rounded-full" size={48} />
                <span className="font-bold text-gray-800 text-lg">Short Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-[#4295D1] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive shifting solutions tailored to meet your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 lg:px-10">
            {/* Service Cards Updated */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group overflow-hidden border border-gray-100 relative top-0 hover:-top-2">
              <div className="h-56 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1775&q=80" alt="Home Shifting" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">Home Shifting</h3>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <p className="text-gray-600 mb-6">Safe and hassle-free domestic relocation services designed for complete peace of mind.</p>
                <Link to="/services/home-shifting" className="flex items-center gap-2 text-[#4295D1] font-bold hover:text-blue-800 transition uppercase tracking-wide text-sm">
                  Get Started <span className="bg-blue-50 p-1 rounded-full"><Truck size={16}/></span>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group overflow-hidden border border-gray-100 relative top-0 hover:-top-2">
              <div className="h-56 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1770&q=80" alt="Office Shifting" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">Office Shifting</h3>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <p className="text-gray-600 mb-6">Professional corporate moving ensuring zero downtime and complete data security.</p>
                <Link to="/services/office-shifting" className="flex items-center gap-2 text-[#4295D1] font-bold hover:text-blue-800 transition uppercase tracking-wide text-sm">
                  Get Started <span className="bg-blue-50 p-1 rounded-full"><Package size={16}/></span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group overflow-hidden border border-gray-100 relative top-0 hover:-top-2">
              <div className="h-56 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1770&q=80" alt="Car Transportation" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">Car Transportation</h3>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <p className="text-gray-600 mb-6">Door-to-door enclosed car carrier services to safely transport your vehicle anywhere.</p>
                <Link to="/services/car-transportation" className="flex items-center gap-2 text-[#4295D1] font-bold hover:text-blue-800 transition uppercase tracking-wide text-sm">
                  Get Started <span className="bg-blue-50 p-1 rounded-full"><Truck size={16}/></span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group overflow-hidden border border-gray-100 relative top-0 hover:-top-2">
              <div className="h-56 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1770&q=80" alt="Packing and Unpacking" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">Packing & Unpacking</h3>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <p className="text-gray-600 mb-6">Premium multi-layer packing materials to ensure your fragile items stay protected.</p>
                <Link to="/services/packing-unpacking" className="flex items-center gap-2 text-[#4295D1] font-bold hover:text-blue-800 transition uppercase tracking-wide text-sm">
                  Get Started <span className="bg-blue-50 p-1 rounded-full"><Package size={16}/></span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group overflow-hidden border border-gray-100 relative top-0 hover:-top-2">
              <div className="h-56 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1772&q=80" alt="Courier Cargo" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">Courier & Cargo</h3>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <p className="text-gray-600 mb-6">Fast, reliable, and secure cargo and courier delivery network nationwide.</p>
                <Link to="/services/courier-cargo" className="flex items-center gap-2 text-[#4295D1] font-bold hover:text-blue-800 transition uppercase tracking-wide text-sm">
                  Get Started <span className="bg-blue-50 p-1 rounded-full"><Truck size={16}/></span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group overflow-hidden border border-gray-100 relative top-0 hover:-top-2">
              <div className="h-56 overflow-hidden relative">
                 <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1770&q=80" alt="Goods Insurance" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                 <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white z-10">Goods Insurance</h3>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between bg-white">
                <p className="text-gray-600 mb-6">Comprehensive transit insurance policies to secure against any unforeseen damages.</p>
                <Link to="/services/goods-insurance" className="flex items-center gap-2 text-[#4295D1] font-bold hover:text-blue-800 transition uppercase tracking-wide text-sm">
                  Get Started <span className="bg-blue-50 p-1 rounded-full"><ShieldCheck size={16}/></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Updated to full width truck image */}
      <section id="about" className="bg-white pb-20">
        <div
          className="w-full h-[300px] md:h-[400px] overflow-hidden bg-center bg-cover bg-no-repeat mb-12 shadow-inner relative flex items-center justify-center text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${transportTruckImage})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-white text-2xl md:text-5xl font-extrabold uppercase tracking-widest drop-shadow-2xl">
              Reliable Shifting Solutions for Your Peace of Mind
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Why Choose <span className="text-primary">Lotus Packers</span> and Movers?</h2>
            <div className="w-24 h-1 bg-primary mb-6 mx-auto md:mx-0"></div>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              With over a decade of experience in the logistics and transportation sector, Lotus Packers and Movers has established itself as one of the most trusted moving companies. We have a monumental presence and provide moving services <strong>all over India.</strong>
            </p>
            <ul className="space-y-4 text-gray-700 mb-8 border-l-4 border-accent pl-4 text-left">
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

      {/* Shifting Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Shifting Process</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple, transparent, and hassle-free relocation process designed to give you complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 position-relative">
            <div className="text-center relative">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-accent relative z-10">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Share Details</h3>
              <p className="text-gray-600 text-sm">Tell us when and where you want to move.</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-accent relative z-10">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Get Estimate</h3>
              <p className="text-gray-600 text-sm">Receive a transparent and competitive quotation.</p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-accent relative z-10">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Pack & Load</h3>
              <p className="text-gray-600 text-sm">Our experts securely pack and load your belongings.</p>
            </div>

            <div className="text-center relative">
              <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-6 border-4 border-accent relative z-10">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Safe Delivery</h3>
              <p className="text-gray-600 text-sm">Timely delivery and unloading at your new location.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Request an Estimate Now Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Request an Estimate Now</h2>
              <div className="w-20 h-1 bg-primary mb-6"></div>
              <p className="text-gray-300 text-lg mb-8">
                Planning a move? Get a free, no-obligation quote today. Fill out the quick form and our relocation experts will contact you with the best customized pricing.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary text-xl" size={20} />
                  <span>No Hidden Charges</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary text-xl" size={20} />
                  <span>Instant Response</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-primary text-xl" size={20} />
                  <span>Customized Solutions</span>
                </li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input type="tel" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50" placeholder="+91 XXXXX XXXXX" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Moving From</label>
                      <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50" placeholder="Current Location" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Moving To</label>
                      <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50" placeholder="Destination" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Requirement Details</label>
                    <textarea className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary bg-gray-50 h-24 resize-none" placeholder="E.g., 2 BHK Shifting on next Monday..."></textarea>
                  </div>
                  <button type="button" className="w-full bg-primary text-white font-bold py-3.5 rounded hover:bg-red-700 transition shadow-md text-lg uppercase tracking-wide">
                    Get Free Estimate
                  </button>
                </form>
              </div>
            </div>
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
              <Phone size={20} /> 8272038697 / 7983386937
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;