
import React from 'react';
import { Button } from '@/components/ui/button';

const IntroductionSection = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5538988690984&text=Iniciar%20conversa%20com%20um%20de%20nossos%20especialistas&app_absent=0";
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            Empresas que utilizam Business Intelligence crescem 5x mais que as que não utilizam. 
            O Microsoft Power BI é uma ferramenta low-code e no-code que permite criar dashboards 
            automatizados e obter insights estratégicos para tomada de decisões mais assertivas.
          </p>
          
          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="mailto:santiagoguilherme066@gmail.com">Faça um orçamento conosco!</a>
              </Button>
            </div>
            <div className="text-center">
              <Button className="bg-orange-500 hover:bg-orange-600" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Entre em contato com um de nossos especialistas!
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
