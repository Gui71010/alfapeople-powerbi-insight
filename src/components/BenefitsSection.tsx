
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const BenefitsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Benefícios e Diferenciais</h2>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-semibold">
                Resultados a partir de 2 semanas
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Com nossa metodologia ágil e experiência em implementações, você começará a ver 
                  resultados concretos em suas análises de dados em apenas duas semanas. Nosso time 
                  especializado garante uma implementação rápida e eficiente.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-semibold">
                Mais visibilidade e controle
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Tenha uma visão 360° do seu negócio com dashboards interativos e relatórios 
                  em tempo real. Monitore KPIs importantes e identifique oportunidades de melhoria 
                  de forma proativa.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-semibold">
                Dados automatizados e unificados
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Integre dados de múltiplas fontes automaticamente. Elimine trabalho manual e 
                  reduza erros com pipelines de dados automatizados que mantêm suas informações 
                  sempre atualizadas e confiáveis.
                </p>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-semibold">
                Disseminação da cultura de dados em toda a organização
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-gray-700">
                  Democratize o acesso aos dados em sua empresa. Com interfaces intuitivas e 
                  treinamentos especializados, toda equipe poderá tomar decisões baseadas em dados, 
                  criando uma verdadeira cultura analítica.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
