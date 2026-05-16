import { MapPin, Truck, ShieldCheck, Clock, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative bg-secondary text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80" 
            alt="Moving boxes" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Lotus Packers and Movers</h1>
          <p className="text-xl max-w-2xl mx-auto">Your trusted partner for safe, reliable, and swift relocation services across all of India.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
              alt="Our Team" 
              className="rounded-lg shadow-xl w-full object-cover h-[400px]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-secondary mb-6">Delivering Excellence All Over India</h2>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Lotus Packers and Movers is a premier logistics and relocation company dedicated to providing seamless moving experiences. With our headquarters in Noida, we have expanded our robust network to cover every corner of India.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Whether you are moving your home from Delhi to Bangalore, or relocating an entire corporate office, our trained professionals handle your belongings with the utmost care. We pride ourselves on our 100% damage-free delivery track record.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {/* <div className="flex flex-col gap-2">
                <Users className="text-primary" size={32} />
                <h4 className="font-bold text-xl">10,000+</h4>
                <p className="text-sm text-gray-600">Happy Families Moved</p>
              </div> */}
              <div className="flex flex-col gap-2">
                <MapPin className="text-primary" size={32} />
                <h4 className="font-bold text-xl">PAN India</h4>
                <p className="text-sm text-gray-600">Presence in all major cities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;