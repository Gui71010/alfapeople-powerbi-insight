
import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">Microsoft Power BI</h1>
            <p className="text-xl mb-8 text-slate-100">
              Impulsione os negócios e obtenha vantagem competitiva, por meio da Inteligência de Dados
            </p>
            <Button className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-4">
              Fale com um de nossos especialistas!
            </Button>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551038247-3d9af20df552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Power BI Dashboards"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
