
import { ArrowRight, Banknote, Home, MessageSquare, Building2, Info } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="font-montserrat font-bold text-5xl md:text-6xl mb-8 leading-tight text-gray-900">
              Welkom bij NIBC
            </h1>
            
            <div className="mb-6">
              <h2 className="font-montserrat font-semibold text-2xl mb-6 text-gray-800">
                Meer informatie over...
              </h2>
              
              <div className="space-y-6">
                <a href="#sparen" className="flex items-center justify-between p-4 border-b border-gray-200 group">
                  <div className="flex items-center">
                    <Banknote className="mr-4 text-nibc-blue" size={24} />
                    <span className="font-montserrat font-medium">Sparen</span>
                  </div>
                  <ArrowRight className="text-nibc-blue transition-transform group-hover:translate-x-1" size={20} />
                </a>
                
                <a href="#hypotheken" className="flex items-center justify-between p-4 border-b border-gray-200 group">
                  <div className="flex items-center">
                    <Home className="mr-4 text-nibc-blue" size={24} />
                    <span className="font-montserrat font-medium">Hypotheken</span>
                  </div>
                  <ArrowRight className="text-nibc-blue transition-transform group-hover:translate-x-1" size={20} />
                </a>
                
                <a href="#vastgoed" className="flex items-center justify-between p-4 border-b border-gray-200 group">
                  <div className="flex items-center">
                    <Building2 className="mr-4 text-nibc-blue" size={24} />
                    <span className="font-montserrat font-medium">Vastgoed</span>
                  </div>
                  <ArrowRight className="text-nibc-blue transition-transform group-hover:translate-x-1" size={20} />
                </a>
                
                <a href="#service" className="flex items-center justify-between p-4 border-b border-gray-200 group">
                  <div className="flex items-center">
                    <MessageSquare className="mr-4 text-nibc-blue" size={24} />
                    <span className="font-montserrat font-medium">Service & Contact</span>
                  </div>
                  <ArrowRight className="text-nibc-blue transition-transform group-hover:translate-x-1" size={20} />
                </a>
                
                <a href="#over-nibc" className="flex items-center justify-between p-4 border-b border-gray-200 group">
                  <div className="flex items-center">
                    <Info className="mr-4 text-nibc-blue" size={24} />
                    <span className="font-montserrat font-medium">Over NIBC</span>
                  </div>
                  <ArrowRight className="text-nibc-blue transition-transform group-hover:translate-x-1" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-red-500 rounded-lg overflow-hidden">
              <img 
                src="public/lovable-uploads/02304dae-305b-4440-9982-23d33acf7487.png" 
                alt="NIBC Hero" 
                className="w-full h-full object-cover object-center" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
