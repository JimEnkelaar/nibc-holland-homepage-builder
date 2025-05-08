
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-nibc-darkgray text-white">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="font-bold text-2xl mb-4 font-montserrat">NIBC Direct</div>
            <p className="text-gray-300 font-montserrat">
              De betrouwbare bank voor hypotheken en sparen. Particuliere diensten van NIBC Bank.
            </p>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Producten</h3>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hypotheken</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Spaarrekeningen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Deposito's</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Verzekeringen</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Service</h3>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Veel gestelde vragen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Klachten</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Online Bankieren</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-montserrat font-semibold mb-4">Over NIBC Direct</h3>
            <ul className="space-y-2 font-montserrat">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Over ons</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Nieuws</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hypotheekpartners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Tarieven</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0 font-montserrat">
            © {new Date().getFullYear()} NIBC Direct. Alle rechten voorbehouden. NIBC Direct is onderdeel van NIBC Bank N.V.
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
          <a href="#" className="hover:text-white transition-colors">Rentetarieven</a>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
