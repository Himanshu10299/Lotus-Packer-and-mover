import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Lotus Packers <span className="text-primary">and Movers</span></h3>
            <p className="mb-4">
              Providing reliable, safe, and swift packing and moving services across all cities in India. Your trusted partner in relocation.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary transition">Home</Link></li>
              <li><a href="#services" className="hover:text-primary transition">Our Services</a></li>
              <li><a href="#about" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                <span>Baba Building, Sector 5, Harola, Noida, UP - 201301</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={20} />
                <span>+91 82720 38697 <br/> +91 82720 38697</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={20} />
                <span>info@lotuspackersandmovers.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Lotus Packers and Movers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;