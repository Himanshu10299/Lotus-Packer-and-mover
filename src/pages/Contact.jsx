import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 pb-20">
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-400">Get in touch for a free moving quote across India</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-secondary mb-6">Send Us A Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="John" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="+91 XXXXXXXXXX" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="info@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea rows="5" className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Tell us about your moving requirements..."></textarea>
              </div>
              <button type="button" className="bg-primary text-white px-8 py-4 rounded font-bold text-lg hover:bg-red-700 transition w-full shadow-md">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-8">
            <div className="bg-secondary text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-6 text-primary">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Head Office</h4>
                    <p className="text-gray-300">Baba Building, Sector 5, Harola,<br/>Noida, UP - 201301</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Call Us (24/7)</h4>
                    <a href="tel:7983386937" className="text-gray-300 text-lg hover:text-primary transition block">+91 79833 86937</a>
                    <a href="tel:8272038697" className="text-gray-300 text-lg hover:text-primary transition block">+91 82720 38697</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Email Us</h4>
                    <p className="text-gray-300">info@lotuspackersandmovers.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex-grow h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112101.442657731!2d77.29177579999998!3d28.5947703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5aaaaaaab%3A0x6bbaabaaabaaaaaa!2sSector%205%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1716120000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '0.5rem' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Noida"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;