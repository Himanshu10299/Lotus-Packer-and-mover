import { Truck, Package, Building, Car, Warehouse, Box, ShieldCheck, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: "home-shifting",
      title: "Home Shifting Services",
      desc: "Complete household relocation services with safe packing and careful transportation.",
      icon: <Package size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "office-shifting",
      title: "Office Shifting Services",
      desc: "Minimal downtime office moving services focusing on IT equipment safety.",
      icon: <Building size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "car-transportation",
      title: "Car Transportation Services",
      desc: "Secure and scratch-free vehicle transportation across India in enclosed carriers.",
      icon: <Car size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "courier-cargo",
      title: "Courier & Cargo Services",
      desc: "Reliable and fast courier and commercial cargo delivery across the nation.",
      icon: <Box size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "luggage-delivery",
      title: "Luggage Delivery",
      desc: "Economical transport of personal baggage, extra luggage and student belongings.",
      icon: <Package size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "goods-insurance",
      title: "Goods Insurance",
      desc: "Comprehensive transit risk coverage ensuring 100% peace of mind.",
      icon: <ShieldCheck size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "loading-unloading",
      title: "Loading and Unloading",
      desc: "Expert handling of heavy items utilizing specialized moving equipment.",
      icon: <Warehouse size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1600521705794-3019625b60ee?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "packing-unpacking",
      title: "Packing and Unpacking",
      desc: "Premium quality packing materials used for optimum safety of deliverables.",
      icon: <Box size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "transportation",
      title: "Transportation",
      desc: "Large fleet of well-maintained trucks for commercial and personal logistics.",
      icon: <Truck size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "all-india",
      title: "All India Services",
      desc: "Monumental presence covering shipping needs between every state in India.",
      icon: <MapPin size={40} className="text-primary" />,
      image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=800"
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
                <Link to={`/services/${service.id}`} className="block text-primary font-bold hover:text-red-700 w-full py-2 border border-primary rounded hover:bg-primary hover:text-white transition">
                  Know More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;