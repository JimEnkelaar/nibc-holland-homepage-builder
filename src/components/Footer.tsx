
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nibc-darkgray text-white">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-bold text-2xl mb-4 font-montserrat">NIBC</div>
            <p className="text-gray-300 font-montserrat">
              De ondernemende bank voor ondernemende mensen. Denk groot, blijf klein.
            </p>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hypotheken</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Spaarrekeningen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Zakelijke financiering</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Vermogensbeheer</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Over NIBC</h3>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Onze Geschiedenis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Raad van Bestuur</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Carrière</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Investeerders</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 font-montserrat">
              <li className="text-gray-300">Carnegieplein 4</li>
              <li className="text-gray-300">2517 KJ Den Haag</li>
              <li className="text-gray-300">Nederland</li>
              <li><a href="tel:+31703425425" className="text-gray-300 hover:text-white transition-colors">+31 (0)70 342 5425</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 font-montserrat">
            © {new Date().getFullYear()} NIBC Bank N.V. Alle rechten voorbehouden.
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={18} />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={18} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={18} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={18} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 text-xs text-gray-400 font-montserrat">
          <a href="#" className="hover:text-white transition-colors">Privacybeleid</a>
          <a href="#" className="hover:text-white transition-colors">Cookiebeleid</a>
          <a href="#" className="hover:text-white transition-colors">Algemene Voorwaarden</a>
          <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
