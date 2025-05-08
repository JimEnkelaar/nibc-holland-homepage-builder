
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white w-full z-50">
      <div className="container mx-auto">
        {/* Top navigation */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <nav className="hidden md:flex space-x-8">
            <a href="#particulieren" className="text-black hover:text-nibc-blue transition-colors font-montserrat font-medium border-b-2 border-black">
              Particulieren
            </a>
            <a href="#zakelijk" className="text-gray-600 hover:text-nibc-blue transition-colors font-montserrat">
              Zakelijk
            </a>
            <a href="#intermediair" className="text-gray-600 hover:text-nibc-blue transition-colors font-montserrat">
              Intermediair
            </a>
            <a href="https://nibc.com" className="text-gray-600 hover:text-nibc-blue transition-colors font-montserrat">
              NIBC.com
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <span className="text-gray-700 font-montserrat mr-2">Zoeken</span>
              <Search size={18} />
            </div>
          </div>
        </div>
        
        {/* Main navigation */}
        <div className="flex justify-between items-center py-4 px-4 md:px-0">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/public/lovable-uploads/bd01706e-f9a6-4f4c-9d0c-e0c2d752a4eb.png" 
                alt="NIBC Logo" 
                className="h-8" 
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sparen" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium">
              Sparen
            </a>
            <a href="#hypotheken" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium">
              Hypotheken
            </a>
            <a href="#vastgoed" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium">
              Vastgoed
            </a>
            <a href="#over-ons" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium">
              Over ons
            </a>
            <a href="#service-contact" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium">
              Service & contact
            </a>
            <Button variant="default" className="bg-cyan-500 hover:bg-cyan-600 text-white font-montserrat font-medium rounded-full">
              Inloggen
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <nav className="flex flex-col py-4 px-6 space-y-4">
              <a href="#particulieren" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
                Particulieren
              </a>
              <a href="#zakelijk" className="text-gray-600 hover:text-nibc-blue transition-colors font-montserrat py-2">
                Zakelijk
              </a>
              <a href="#intermediair" className="text-gray-600 hover:text-nibc-blue transition-colors font-montserrat py-2">
                Intermediair
              </a>
              <a href="#nibc-com" className="text-gray-600 hover:text-nibc-blue transition-colors font-montserrat py-2">
                NIBC.com
              </a>
              <div className="border-t border-gray-200 pt-4">
                <a href="#sparen" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
                  Sparen
                </a>
                <a href="#hypotheken" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
                  Hypotheken
                </a>
                <a href="#vastgoed" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
                  Vastgoed
                </a>
                <a href="#over-ons" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
                  Over ons
                </a>
                <a href="#service-contact" className="text-gray-800 hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
                  Service & contact
                </a>
              </div>
              <Button variant="default" className="bg-cyan-500 hover:bg-cyan-600 text-white font-montserrat font-medium rounded-full w-full">
                Inloggen
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
