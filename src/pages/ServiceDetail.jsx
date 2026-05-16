import { useParams, Link } from 'react-router-dom';
import { Truck, Package, ShieldCheck, Clock, MapPin, Box, Briefcase, FileText } from 'lucide-react';

const serviceData = {
  "home-shifting": {
    title: "Home Shifting Services",
    icon: <Package size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    description: "Our comprehensive home shifting services ensure your household items are safely packed, transported, and unpacked at your new destination. We handle everything from fragile glassware to heavy furniture.",
    features: [
      "High-quality multi-layer packing materials",
      "Special care for electronics and fragiles",
      "Disassembly and reassembly of furniture",
      "Door-to-door delivery with real-time tracking"
    ]
  },
  "office-shifting": {
    title: "Office Shifting Services",
    icon: <Briefcase size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    description: "Minimize your business downtime with our expert office relocation services. We securely transport IT equipment, sensitive documents, and office furniture over the weekends to ensure zero interruption.",
    features: [
      "Customized weekend moving plans",
      "Secure IT asset packing and movement",
      "Organized file and document boxing",
      "Setup assistance at the new location"
    ]
  },
  "car-transportation": {
    title: "Car Transportation Services",
    icon: <Truck size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2000",
    description: "Transport your vehicle safely anywhere in India with our enclosed car carriers. We ensure your car remains scratch-free, protected from weather elements, and reaches its destination on time.",
    features: [
      "Enclosed and open car carriers available",
      "Door-to-door pickup and drop",
      "Transit protection and wheel locking",
      "Full moving insurance coverage"
    ]
  },
  "courier-cargo": {
    title: "Courier & Cargo Services",
    icon: <Box size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2000",
    description: "Fast, reliable, and secure courier and cargo delivery for parcels and commercial goods. Whether it's a small document or bulk commercial cargo, we ensure safe and swift delivery anywhere in India.",
    features: [
      "Express delivery options",
      "Commercial batch shipping",
      "Secure packaging",
      "Live tracking and reporting"
    ]
  },
  "luggage-delivery": {
    title: "Luggage Delivery",
    icon: <Package size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&q=80&w=2000",
    description: "Traveling light? We will deliver your heavy luggage bags, extra suitcases, and student belongings directly to your destination securely and economically.",
    features: [
      "Affordable rates for students and travelers",
      "Doorstep pickup and delivery",
      "Secure strapping to prevent tampering",
      "Timely arrivals"
    ]
  },
  "goods-insurance": {
    title: "Goods Insurance",
    icon: <ShieldCheck size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2000",
    description: "Enjoy complete peace of mind with our comprehensive transit insurance services. We value the safety of your goods, and our insurance covers you against any unforeseen damages during transportation.",
    features: [
      "Comprehensive moving risk coverage",
      "Easy documentation process",
      "Fast claim settlement",
      "Transparent policy terms"
    ]
  },
  "loading-unloading": {
    title: "Loading and Unloading",
    icon: <Package size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1600521705794-3019625b60ee?auto=format&fit=crop&q=80&w=2000",
    description: "Our strong and trained staff utilize specialized techniques and equipment for the safe loading and unloading of heavy furniture, appliances, and fragile boxes.",
    features: [
      "Physically trained hauling staff",
      "Use of sliders, trolleys, and ramps",
      "Systematic arrangement in the vehicle",
      "Careful placement at the destination"
    ]
  },
  "packing-unpacking": {
    title: "Packing and Unpacking",
    icon: <Box size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=2000",
    description: "Packing is an art. Our experts pack your items securely using high-quality bubble wraps, corrugated sheets, and sturdy cartons, and unpack them systematically at your new home.",
    features: [
      "Premium quality packing materials",
      "Detailed box labeling",
      "Dust and moisture proofing",
      "Debris removal post unpacking"
    ]
  },
  "transportation": {
    title: "Transportation",
    icon: <Truck size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    description: "Hire our modern, well-maintained transport vehicles for moving goods securely. We provide varying truck sizes suitable for shifting any volume of items locally or nationwide.",
    features: [
      "Large fleet of maintained vehicles",
      "Verified, experienced drivers",
      "Weather-proof container trucks",
      "Dedicated point-to-point transit"
    ]
  },
  "all-india": {
    title: "All India Services",
    icon: <MapPin size={40} className="text-white" />,
    image: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?auto=format&fit=crop&q=80&w=2000",
    description: "Distance is no barrier. We operate a massive branch network catering to shipments between any two states or cities in India with unmatched reliability and speed.",
    features: [
      "Pan-India branch network",
      "Knowledge of inter-state transit rules",
      "Timely long-distance delivery operations",
      "Single point of contact for tracking"
    ]
  }
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = serviceData[id];

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-secondary mb-4">Service Not Found</h2>
        <p className="mb-6">The service you are looking for does not exist.</p>
        <Link to="/services" className="bg-primary text-white px-6 py-2 rounded">Back to Services</Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <div className="relative bg-secondary text-white py-24">
        <div className="absolute inset-0">
          <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
             {service.icon}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Professional moving solutions tailored to your specific requirements.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold text-secondary mb-6">Service Overview</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-700 leading-relaxed text-lg mb-8">
              {service.description}
            </p>
            
            <h3 className="text-2xl font-bold text-secondary mb-6">Key Features</h3>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-lg text-gray-700">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Sidebar CTA */}
          <div className="md:w-1/3">
            <div className="bg-gray-50 border-t-4 border-primary rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-secondary mb-4">Need this service?</h3>
              <p className="text-gray-600 mb-6">Contact our moving experts today to discuss your requirements and get a free customized quote.</p>
              <div className="flex flex-col gap-4">
                <a href="tel:8272038697" className="bg-white border-2 border-primary text-primary px-4 py-3 rounded text-center font-bold hover:bg-primary hover:text-white transition">
                  Call +91 8272038697
                </a>
                <Link to="/contact" className="bg-secondary text-white px-4 py-3 rounded text-center font-bold hover:bg-gray-800 transition">
                  Request Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;