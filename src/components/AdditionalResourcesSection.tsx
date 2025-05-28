
import React from 'react';
import { Zap, BarChart3, Users } from 'lucide-react';

const AdditionalResourcesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Recursos Avançados</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-slate-600 p-2 rounded-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Low-code/No-code</h3>
                  <p className="text-gray-600">Crie dashboards sem necessidade de programação</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-slate-600 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Inteligência Artificial</h3>
                  <p className="text-gray-600">IA integrada para insights automáticos</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-slate-600 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Dashboards Intuitivos</h3>
                  <p className="text-gray-600">Interface amigável e fácil compreensão</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Recursos Power BI" 
              className="rounded-lg shadow-xl w-full h-auto object-cover" 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalResourcesSection;
