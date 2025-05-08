
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-montserrat font-bold text-3xl mb-6 text-nibc-darkgray">Neem contact met ons op</h2>
            <p className="text-gray-600 mb-8 font-montserrat">
              Heeft u een vraag of wilt u meer informatie over onze diensten? Vul het 
              contactformulier in of gebruik onze contactgegevens. Ons team staat voor u klaar.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-nibc-blue/10 p-3 rounded-full text-nibc-blue">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Telefonisch contact</h3>
                  <p className="text-gray-600 font-montserrat">+31 (0)70 342 5425</p>
                  <p className="text-gray-500 text-sm font-montserrat">Werkdagen: 08:30 - 17:30</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-nibc-blue/10 p-3 rounded-full text-nibc-blue">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Email</h3>
                  <p className="text-gray-600 font-montserrat">info@nibc.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-nibc-blue/10 p-3 rounded-full text-nibc-blue">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold mb-1">Adres</h3>
                  <p className="text-gray-600 font-montserrat">
                    Carnegieplein 4<br />
                    2517 KJ Den Haag<br />
                    Nederland
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="font-montserrat font-semibold text-xl mb-6 text-nibc-darkgray">Stuur ons een bericht</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700 font-montserrat">Naam</label>
                  <Input id="name" placeholder="Uw naam" className="font-montserrat" />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700 font-montserrat">E-mail</label>
                  <Input id="email" type="email" placeholder="uw-email@voorbeeld.nl" className="font-montserrat" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700 font-montserrat">Onderwerp</label>
                <Input id="subject" placeholder="Onderwerp van uw bericht" className="font-montserrat" />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700 font-montserrat">Bericht</label>
                <Textarea id="message" placeholder="Schrijf hier uw bericht..." rows={5} className="font-montserrat" />
              </div>
              
              <Button className="w-full bg-nibc-blue hover:bg-nibc-blue/90 font-montserrat">
                Versturen
              </Button>
              
              <p className="text-xs text-gray-500 font-montserrat">
                Door dit formulier in te vullen, gaat u akkoord met onze 
                <a href="#" className="text-nibc-blue hover:underline"> privacybeleid</a>.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
