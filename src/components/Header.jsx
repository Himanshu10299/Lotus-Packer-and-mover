import { Phone as PhoneIcon, Mail as MailIcon, MapPin as MapPinIcon, Menu as MenuIcon, X as XIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <span className="flex items-center gap-2"><PhoneIcon size={16} /> +91 8272038697 / +91 79833 86937</span>
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
          <Link to="/" className="text-2xl font-bold text-primary flex items-center gap-2">
            <span className="bg-primary text-white p-2 rounded-lg">LPD</span>
            <div>
              <div className="leading-tight">Lotus Packers</div>
              <div className="text-sm font-normal text-gray-500">and Decker</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
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
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
          <nav className="flex flex-col py-4 px-4 text-gray-800 font-medium">
            <Link to="/" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/services" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/about" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>About Us</Link>
            <Link to="/contact" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="pt-4 flex flex-col gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-2"><PhoneIcon size={16} className="text-primary"/> 8272038697 / 7983386937</span>
              <span className="flex items-center gap-2"><MailIcon size={16} className="text-primary"/> info@lotuspackersandmovers.com</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;