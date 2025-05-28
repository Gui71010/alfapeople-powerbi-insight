import React from 'react';
import { Button } from '@/components/ui/button';

const IntroductionSection = () => {
  const whatsappLink = "https://wa.me/5538988690984?text=Tire%20suas%20d%C3%BAvidas%20com%20nossa%20equipe%20agora%20mesmo";
  const emailAddress = "santiagoguilherme066@gmail.com";
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-8">
            Empresas que utilizam Business Intelligence crescem 5x mais que as que não utilizam. 
            O Microsoft Power BI é uma ferramenta low-code e no-code que permite criar dashboards 
            automatizados e obter insights estratégicos para tomada de decisões mais assertivas.
          </p>
          
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {/* Email Button */}
            <Button 
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full shadow-md transition-all duration-300 hover:shadow-lg gap-3"
            >
              <a href={`mailto:${emailAddress}`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>Faça um orçamento conosco</span>
              </a>
            </Button>
            
            {/* WhatsApp Button */}
            <Button 
              asChild
              className="bg-[#25D366] hover:bg-[#1ebe57] text-white px-8 py-4 text-lg font-medium rounded-full shadow-md transition-all duration-300 hover:shadow-lg gap-3"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                  className="flex-shrink-0"
                >
                  <path d="M20.52 3.48A11.72 11.72 0 0012 0C5.373 0 0 5.373 0 12a11.95 11.95 0 001.98 6.4L0 24l5.81-1.89A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.21-1.252-6.22-3.48-8.52zm-8.44 16.52c-2.3 0-4.37-.78-6-2.07l-.43-.27-3.45 1.12 1.16-3.36-.28-.44A8.12 8.12 0 013.5 12c0-4.51 3.67-8.18 8.18-8.18 2.19 0 4.24.85 5.78 2.39a8.1 8.1 0 012.4 5.79c0 4.51-3.67 8.18-8.18 8.18zm4.54-6.11c-.25-.13-1.48-.73-1.71-.82-.23-.08-.4-.13-.57.13-.17.26-.66.82-.81.98-.15.16-.3.18-.55.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.87-.2-.5-.4-.43-.57-.44-.15-.01-.32-.01-.49-.01-.16 0-.42.06-.64.32-.22.26-.84.82-.84 2 0 1.18.86 2.32.98 2.48.13.16 1.7 2.59 4.12 3.63.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.48-.6 1.69-1.18.21-.58.21-1.07.15-1.18-.07-.11-.26-.18-.51-.31z"/>
                </svg>
                <span>Fale com um especialista</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
