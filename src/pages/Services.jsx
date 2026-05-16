import { Truck, Package, Home, Building, Car, Warehouse } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Household Shifting",
      desc: "Complete end-to-end home relocation services across India. We pack, load, transport, unload, and unpack your household goods safely.",
      icon: <Home size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1543465077-db45d34b88a5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Office Relocation",
      desc: "Minimize your business downtime with our swift and organized corporate shifting solutions.",
      icon: <Building size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Vehicle Transportation",
      desc: "Safe and scratch-free car and bike transportation services to any city in India using specialized carriers.",
      icon: <Car size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      title: "Storage & Warehousing",
      desc: "Secure, climate-controlled storage facilities for your short-term and long-term goods storage needs.",
      icon: <Warehouse size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      title: "Professional Packing",
      desc: "We use high-quality, durable packing materials like bubble wraps, corrugated boxes, and foam to ensure 100% safety.",
      icon: <Package size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      title: "Local City Shifting",
      desc: "Quick, affordable, and hassle-free moving within your city limits.",
      icon: <Truck size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="bg-white pb-20">
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-400">Comprehensive Relocation Solutions Across India</p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col group">
              <div className="h-48 overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col relative text-center">
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-md inline-block">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary mt-6 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.desc}</p>
                <button className="text-primary font-bold hover:text-red-700 w-full py-2 border border-primary rounded hover:bg-primary hover:text-white transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;