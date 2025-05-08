
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-8">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <div className="text-nibc-blue font-bold text-3xl tracking-tight">NIBC</div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#hypotheken" className="text-nibc-darkgray hover:text-nibc-blue transition-colors font-montserrat font-medium">
            Hypotheken
          </a>
          <a href="#sparen" className="text-nibc-darkgray hover:text-nibc-blue transition-colors font-montserrat font-medium">
            Sparen
          </a>
          <a href="#over-ons" className="text-nibc-darkgray hover:text-nibc-blue transition-colors font-montserrat font-medium">
            Over Ons
          </a>
          <a href="#contact" className="text-nibc-darkgray hover:text-nibc-blue transition-colors font-montserrat font-medium">
            Contact
          </a>
          <Button variant="default" className="bg-nibc-yellow hover:bg-nibc-yellow/90 text-nibc-darkgray font-montserrat font-medium">
            Online Bankieren
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 text-nibc-blue focus:outline-none"
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
            <a href="#hypotheken" className="text-nibc-darkgray hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
              Hypotheken
            </a>
            <a href="#sparen" className="text-nibc-darkgray hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
              Sparen
            </a>
            <a href="#over-ons" className="text-nibc-darkgray hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
              Over Ons
            </a>
            <a href="#contact" className="text-nibc-darkgray hover:text-nibc-blue transition-colors font-montserrat font-medium py-2">
              Contact
            </a>
            <Button variant="default" className="bg-nibc-yellow hover:bg-nibc-yellow/90 text-nibc-darkgray font-montserrat font-medium w-full">
              Online Bankieren
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
