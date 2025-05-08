
import { ArrowUpRight, Home, Building, PiggyBank, Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceCard = ({ title, description, icon, href }: { title: string; description: string; icon: React.ReactNode; href: string }) => {
  return (
    <Card className="border-2 border-nibc-lightgray hover:border-nibc-yellow transition-all duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="mb-2 text-nibc-blue">{icon}</div>
        <CardTitle className="font-montserrat text-xl text-nibc-darkgray">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 font-montserrat mb-4">{description}</CardDescription>
        <a 
          href={href} 
          className="inline-flex items-center text-nibc-blue font-montserrat font-medium group"
        >
          Meer informatie
          <ArrowUpRight size={16} className="ml-1 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </CardContent>
    </Card>
  );
};

const Services = () => {
  return (
    <section id="particulieren" className="py-20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl mb-4 text-nibc-darkgray">Onze Diensten</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-montserrat">
            Bij NIBC bieden wij verschillende financiële oplossingen voor particulieren.
            Ontdek wat wij voor u kunnen betekenen.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="Hypotheken"
            description="Ontdek onze flexibele hypotheekoplossingen die bij uw persoonlijke situatie passen."
            icon={<Home size={32} />}
            href="#hypotheken"
          />
          
          <ServiceCard
            title="Direct Online Aanvragen"
            description="Start direct online met uw hypotheekaanvraag en krijg snel duidelijkheid."
            icon={<Building size={32} />}
            href="#aanvragen"
          />
          
          <ServiceCard
            title="Spaarrekeningen"
            description="Aantrekkelijke rentes op onze verschillende spaarrekeningen voor korte en lange termijn."
            icon={<PiggyBank size={32} />}
            href="#sparen"
          />
          
          <ServiceCard
            title="Hypotheekberekening"
            description="Bereken eenvoudig wat u kunt lenen en wat uw maandlasten zullen zijn."
            icon={<Calculator size={32} />}
            href="#berekenen"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
