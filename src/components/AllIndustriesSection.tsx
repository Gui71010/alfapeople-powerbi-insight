
import React from 'react';

const AllIndustriesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-1">
            <img 
              src="https://i.imgur.com/zDSZpGv.png" 
              alt="Globo conectado" 
              className="rounded-lg shadow-xl w-full max-w-[800px] mx-auto lg:mx-0 h-auto object-cover" 
              loading="lazy" 
            />
          </div>
          <div className="lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Power BI para todas as indústrias</h2>
            <p className="text-lg text-gray-700">
              Seja qual for seu setor - manufatura, varejo, serviços financeiros, saúde ou 
              qualquer outro - o Power BI adapta-se às necessidades específicas do seu negócio, 
              oferecendo soluções customizadas que geram valor real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllIndustriesSection;
