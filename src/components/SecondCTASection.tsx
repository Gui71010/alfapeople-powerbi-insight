
import React from 'react';
import { Button } from '@/components/ui/button';

const SecondCTASection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5538988690984&text=Iniciar%20conversa%20com%20um%20de%20nossos%20especialistas&app_absent=0";
  
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Invista em Business Intelligence e transforme seus dados em vantagem competitiva
        </h2>
        <p className="text-xl mb-8 text-slate-300">
          Não fique para trás. Comece sua jornada de transformação digital hoje mesmo.
        </p>
        <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4" asChild>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Fale com um de nossos especialistas!
          </a>
        </Button>
      </div>
    </section>
  );
};

export default SecondCTASection;
