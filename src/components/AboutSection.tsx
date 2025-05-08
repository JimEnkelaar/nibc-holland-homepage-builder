
import { Shield, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="over-ons" className="py-20 bg-nibc-lightgray">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mb-12">
          <h2 className="font-montserrat font-bold text-3xl mb-4 text-nibc-darkgray text-center">Over NIBC Direct</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center font-montserrat">
            NIBC Direct is een betrouwbare bank voor Nederlandse particulieren.
            Wij onderscheiden ons door onze persoonlijke dienstverlening en heldere producten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-nibc-blue text-white flex items-center justify-center mb-4">
              <Shield size={32} />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2">Betrouwbaar</h3>
            <p className="text-gray-600 font-montserrat">
              Sinds 1945 een stabiele financiële partner met Nederlandse bankvergunning en depositogarantiestelsel.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-nibc-blue text-white flex items-center justify-center mb-4">
              <Award size={32} />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2">Deskundig</h3>
            <p className="text-gray-600 font-montserrat">
              Onze financieel adviseurs bieden persoonlijk advies afgestemd op uw specifieke situatie.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-nibc-blue text-white flex items-center justify-center mb-4">
              <Users size={32} />
            </div>
            <h3 className="font-montserrat font-semibold text-xl mb-2">Klantvriendelijk</h3>
            <p className="text-gray-600 font-montserrat">
              Persoonlijke benadering met korte lijnen, snelle beslissingen en heldere communicatie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
