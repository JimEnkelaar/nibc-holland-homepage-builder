
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-r from-nibc-blue to-nibc-blue/90 text-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-3xl">
          <h1 className="font-montserrat font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Denk groot,<br />blijf klein
          </h1>
          <p className="font-montserrat text-lg md:text-xl mb-8 max-w-xl">
            Bij NIBC combineren we de stabiliteit van een bank met de wendbaarheid van een fintech. 
            De ondernemende bank voor ondernemende mensen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-nibc-yellow hover:bg-nibc-yellow/90 text-nibc-darkgray font-montserrat font-medium px-8 py-6 text-base">
              Bekijk onze oplossingen
            </Button>
            <Button variant="outline" className="bg-transparent border-white hover:bg-white/10 text-white font-montserrat font-medium px-8 py-6 text-base">
              Neem contact op
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
