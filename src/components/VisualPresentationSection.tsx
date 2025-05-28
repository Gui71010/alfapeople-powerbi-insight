
import React from 'react';

const VisualPresentationSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Power BI em Múltiplos Dispositivos</h2>
          <p className="text-lg text-gray-700 mb-12">
            Acesse seus dashboards em qualquer lugar, a qualquer momento. O Power BI funciona 
            perfeitamente em desktop, laptop, tablet e celular, garantindo mobilidade total 
            para suas análises e um melhor acompanhamento de onde você estiver.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Power BI em múltiplos dispositivos" 
            className="w-full rounded-lg shadow-xl h-auto object-cover" 
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
};

export default VisualPresentationSection;
