import { Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Menu as MenuIcon, X as XIcon, ChevronDown as ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/packers and mover logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { title: "HOME SHIFTING SERVICES", path: "/services/home-shifting" },
    { title: "OFFICE SHIFTING SERVICES", path: "/services/office-shifting" },
    { title: "CAR TRANSPORTATION SERVICES", path: "/services/car-transportation" },
    { title: "COURIER & CARGO SERVICES", path: "/services/courier-cargo" },
    { title: "LUGGAGE DELIVERY", path: "/services/luggage-delivery" },
    { title: "GOODS INSURANCE", path: "/services/goods-insurance" },
    { title: "LOADING AND UNLOADING", path: "/services/loading-unloading" },
    { title: "PACKING AND UNPACKING", path: "/services/packing-unpacking" },
    { title: "TRANSPORTATION", path: "/services/transportation" },
    { title: "ALL INDIA SERVICES", path: "/services/all-india" }
  ];

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><PhoneIcon size={16} /> +91 82720 38697 / +91 82720 38697</span>
            <span className="flex items-center gap-2"><MailIcon size={16} /> info@lotuspackersandmovers.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon size={16} />
            <span>Sector 5, Harola, Noida</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="Lotus Packers and Movers" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1 uppercase">
                Services <ChevronDownIcon size={16} />
              </Link>
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-72 bg-white shadow-lg border border-gray-100 rounded-b-md z-50">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary border-b border-gray-50 last:border-b-0 uppercase transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/about" className="hover:text-primary transition-colors uppercase py-2">About Us</Link>
            <Link to="/contact" className="hover:text-primary transition-colors uppercase py-2">Contact</Link>
          </nav>

          <Link to="/contact" className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-red-700 transition">
            Get Free Quote
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t z-50 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col py-4 px-4 text-gray-800 font-medium">
            <Link to="/" className="py-2 border-b border-gray-100 uppercase" onClick={() => setIsMenuOpen(false)}>Home</Link>
            
            <div className="border-b border-gray-100">
              <button 
                className="w-full text-left py-2 flex justify-between items-center uppercase"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDownIcon size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="bg-gray-50 flex flex-col pl-4 py-2 border-l-2 border-primary ml-2 mb-2">
                  <Link to="/services" className="py-2 text-sm text-primary font-semibold uppercase" onClick={() => setIsMenuOpen(false)}>
                    All Services
                  </Link>
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="py-2 text-sm text-gray-600 hover:text-primary uppercase border-b border-gray-200 last:border-b-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/about" className="py-2 border-b border-gray-100 uppercase" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="py-2 border-b border-gray-100 uppercase" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="pt-4 flex flex-col gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-2"><PhoneIcon size={16} className="text-primary"/> 8272038697 / 8272038697</span>
              <span className="flex items-center gap-2"><MailIcon size={16} className="text-primary"/> info@lotuspackersandmovers.com</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;